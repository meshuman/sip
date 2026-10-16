// Formatting helpers: money, dates, plurals.

export type Currency = 'NPR' | 'USD' | 'EUR';

/** Illustrative conversion rates. Prices are set in Nepali rupees; replace with live rates at checkout. */
export const RATES: Record<Currency, number> = { NPR: 1, USD: 1 / 140, EUR: 1 / 152 };

/** Formats a rupee amount (how prices are stored) in the chosen currency, US dollars by default. Rupees use Nepali grouping (1,40,000) and "Rs". */
export function formatMoney(rupees: number, currency: Currency = 'USD'): string {
  if (currency === 'NPR') return 'Rs ' + rupees.toLocaleString('en-IN');
  const v = Math.round(rupees * RATES[currency]);
  return (currency === 'USD' ? '$' : '€') + v.toLocaleString('en-US');
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 2026-10-03 → "3 Oct 2026" */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function addDays(iso: string, n: number): string {
  const d = new Date(iso + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function plural(n: number, word: string): string {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

/** "Days 1–19" or "Day 25" */
export function dayRange(from: number, to: number): string {
  return from === to ? `Day ${from}` : `Days ${from}–${to}`;
}
