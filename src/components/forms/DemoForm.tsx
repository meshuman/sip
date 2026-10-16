'use client';

import { useState, type ReactNode } from 'react';
import { Icon } from '@/components/ui/Icon';

interface Props {
  heading?: string;
  lead?: string;
  button: string;
  success: string;
  children: ReactNode;
  id?: string;
}

/**
 * A form that confirms on submit but sends nothing (prototype).
 * Wire to a server action or API route (e.g. src/app/api/contact/route.ts) when the backend exists.
 */
export function DemoForm({ heading, lead, button, success, children, id }: Props) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="sent" id={id}>
        <Icon name="seal" />
        <div>
          <b>{success}</b>
          <p>This is a demo form; nothing was sent.</p>
        </div>
      </div>
    );
  return (
    <form
      className="demo-form"
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {heading && <h2 className="group-h">{heading}</h2>}
      {lead && <p className="muted form-lead">{lead}</p>}
      <div className="fields">{children}</div>
      <div className="sp-row">
        <button className="sp-btn" type="submit">
          {button}
        </button>
        <span className="muted small">Demo form: nothing is sent from this prototype.</span>
      </div>
    </form>
  );
}

export function Field({ id, label, wide, children }: { id: string; label: string; wide?: boolean; children: ReactNode }) {
  return (
    <label className={wide ? 'w2' : ''} htmlFor={id}>
      {label}
      {children}
    </label>
  );
}
