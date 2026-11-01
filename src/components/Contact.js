import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { cvRequestHref, links, person } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="section bg-ink text-paper">
      <div className="mx-auto max-w-page">
        <SectionHeading number="06" label="Contacto" tone="dark" />

        <h2 id="contacto-title" className="font-display text-closing font-medium text-paper">
          ¿Trabajamos
          <br />
          <span className="italic text-accent-light">juntos?</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="max-w-[40ch] text-xl leading-relaxed text-paper/80">
              Siempre estoy abierta a nuevos proyectos y colaboraciones. ¡Hablemos sobre tu próxima idea!
            </p>
            <a href={`mailto:${person.email}`} className="contact-email mt-8">
              {person.email}
            </a>
          </div>

          <ul className="self-end border-t border-paper/30 lg:col-span-4 lg:col-start-9">
            {links.map(({ label, href, handle }) => (
              <li key={label} className="border-b border-paper/20">
                <a href={href} target="_blank" rel="noopener noreferrer" className="contact-row group">
                  <span className="text-lg">{label}</span>
                  <span className="flex items-center gap-2 font-mono text-sm text-paper/70">
                    {handle}
                    <ArrowUpRight size={18} aria-hidden="true" className="contact-row-arrow" />
                  </span>
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
            <li className="border-b border-paper/20">
              <a href={cvRequestHref} className="contact-row group">
                <span className="text-lg">Pedir CV</span>
                <span className="flex items-center gap-2 font-mono text-sm text-paper/70">
                  te lo envío por email
                  <FileText size={18} aria-hidden="true" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
