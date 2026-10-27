import React from 'react';

/** Tecnologías mostradas como teclas de teclado. */
export default function TechKeys({ items, small = false, className = '', label = 'Tecnologías' }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <kbd className={`key ${small ? 'key-sm' : ''}`}>{item}</kbd>
        </li>
      ))}
    </ul>
  );
}
