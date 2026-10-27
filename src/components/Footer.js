import React from 'react';
import { person } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 text-paper/70 sm:px-8">
      <div className="mx-auto flex max-w-page flex-col gap-2 border-t border-paper/20 pt-6 text-sm sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p>
          Hecho con <span className="text-accent-light" aria-hidden="true">♥</span><span className="sr-only">cariño</span> y React
        </p>
      </div>
    </footer>
  );
}
