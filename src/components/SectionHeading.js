import React from 'react';

/** Cabecera de sección: número y etiqueta en mono + título en serif. */
export default function SectionHeading({ number, label, title, id, tone = 'light' }) {
  const metaColor = tone === 'dark' ? 'text-accent-light' : 'text-accent-deep';
  return (
    <header className="mb-12 sm:mb-16">
      <p className={`mb-4 font-mono text-xs uppercase tracking-[0.18em] ${metaColor}`}>
        <span aria-hidden="true">{number} — </span>
        {label}
      </p>
      {title && (
        <h2 id={id} className="font-display text-section font-medium">
          {title}
        </h2>
      )}
    </header>
  );
}
