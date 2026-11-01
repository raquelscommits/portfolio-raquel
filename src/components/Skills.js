import React from 'react';
import { skillGroups } from '../data/content';
import SectionHeading from './SectionHeading';
import TechKeys from './TechKeys';

export default function Skills() {
  return (
    <section id="habilidades" aria-labelledby="habilidades-title" className="section">
      <div className="mx-auto max-w-page">
        <SectionHeading number="05" label="Habilidades" title="Con qué trabajo" id="habilidades-title" />

        <div className="grid gap-10 border-t border-ink pt-10 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">{group.title}</h3>
              <TechKeys items={group.items} label={group.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
