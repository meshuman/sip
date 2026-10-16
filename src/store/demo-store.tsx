'use client';

// Demo state for the prototype: currency, bag, pieces recorded to the visitor, their notes to makers,
// orders, and small UI state (toast, share card, demo tour). Persisted to localStorage in this browser only.
// In production this is replaced by the cart, auth and registry services.

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { Note } from '@/data/types';
import { formatMoney, today, type Currency } from '@/lib/format';

export interface Owned {
  date: string;
  public: boolean;
  order: string;
}
export interface Order {
  id: string;
  pieces: string[];
  email: string;
}
export interface Buyer {
  first: string;
  last: string;
  city: string;
}

interface DemoState {
  cur: Currency;
  bag: string[];
  owned: Record<string, Owned>;
  notes: Note[];
  orders: Order[];
  buyer: Buyer;
  tourOpen: boolean;
  tourSeen: boolean;
  added: boolean;
  bought: boolean;
}

const STORAGE_KEY = 'sipa-demo-v2';
const DEFAULT_STATE: DemoState = {
  cur: 'USD',
  bag: [],
  owned: {},
  notes: [],
  orders: [],
  buyer: { first: 'Alex', last: 'Morgan', city: 'London' },
  tourOpen: false,
  tourSeen: false,
  added: false,
  bought: false,
};

export interface CheckoutDetails {
  first: string;
  last: string;
  city: string;
  email: string;
  showOnRecord: boolean;
}

interface DemoStore extends DemoState {
  /** False until the saved state has been read from localStorage (avoids hydration mismatches). */
  ready: boolean;
  money: (rupees: number) => string;
  setCurrency: (c: Currency) => void;
  addToBag: (id: string) => void;
  removeFromBag: (id: string) => void;
  checkout: (d: CheckoutDetails) => string;
  addNote: (n: Note) => void;
  updateNote: (index: number, patch: Partial<Note>) => void;
  setTourOpen: (open: boolean) => void;
  reset: () => void;
  toast: string | null;
  showToast: (msg: string) => void;
  shareCardFor: string | null;
  openShareCard: (pieceId: string | null) => void;
}

const Ctx = createContext<DemoStore | null>(null);

export function DemoStoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [shareCardFor, setShareCardFor] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load once, after hydration.
  useEffect(() => {
    let saved: Partial<DemoState> | null = null;
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
    } catch {
      saved = null;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading browser storage after hydration
    setState((s) => ({ ...s, ...(saved ?? {}), tourSeen: true }));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable: keep state in memory */
    }
  }, [state, ready]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, []);

  const value = useMemo<DemoStore>(
    () => ({
      ...state,
      ready,
      toast,
      shareCardFor,
      money: (n) => formatMoney(n, state.cur),
      setCurrency: (cur) => setState((s) => ({ ...s, cur })),
      addToBag: (id) => setState((s) => ({ ...s, added: true, bag: s.bag.includes(id) ? s.bag : [...s.bag, id] })),
      removeFromBag: (id) => setState((s) => ({ ...s, bag: s.bag.filter((x) => x !== id) })),
      checkout: (d) => {
        const id = 'SP-2610-' + String(1000 + Math.floor(Math.random() * 9000));
        setState((s) => {
          const owned = { ...s.owned };
          s.bag.forEach((pid) => (owned[pid] = { date: today(), public: d.showOnRecord, order: id }));
          return {
            ...s,
            owned,
            bag: [],
            bought: true,
            buyer: { first: d.first || 'Alex', last: d.last, city: d.city || 'London' },
            orders: [...s.orders, { id, pieces: s.bag, email: d.email }],
          };
        });
        return id;
      },
      addNote: (n) => setState((s) => ({ ...s, notes: [...s.notes, n] })),
      updateNote: (i, patch) => setState((s) => ({ ...s, notes: s.notes.map((n, j) => (j === i ? { ...n, ...patch } : n)) })),
      setTourOpen: (tourOpen) => setState((s) => ({ ...s, tourOpen })),
      reset: () => {
        setState({ ...DEFAULT_STATE, tourSeen: true });
        showToast('Demo reset.');
      },
      showToast,
      openShareCard: setShareCardFor,
    }),
    [state, ready, toast, shareCardFor, showToast],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDemo(): DemoStore {
  const v = useContext(Ctx);
  if (!v) throw new Error('useDemo must be used inside <DemoStoreProvider>');
  return v;
}
