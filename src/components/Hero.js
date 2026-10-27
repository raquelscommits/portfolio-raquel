import React from 'react';
import { ArrowRight } from 'lucide-react';
import { facts, person } from '../data/content';

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft sm:mb-8">
          {person.role} <span aria-hidden="true">·</span> {person.location}
        </p>

        <h1 id="hero-title" className="font-display text-hero font-medium text-ink">
          Raquel
          <br />
          <span className="italic text-accent">Rodríguez</span>
        </h1>

        <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="max-w-[34ch] text-xl leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
              Me formé en el Grado Superior de Desarrollo Web, hice mis prácticas en{' '}
              <mark className="marker">Miivo Mobility</mark> y hoy tengo{' '}
              <mark className="marker">dos webs en producción</mark>.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a href="#proyectos" className="btn-primary">
                Ver proyectos
                <ArrowRight size={18} aria-hidden="true" className="btn-arrow" />
              </a>
              <a href="#contacto" className="text-link text-lg">
                Escríbeme
              </a>
            </div>
          </div>

          <dl className="self-end border-t border-ink lg:col-span-4 lg:col-start-9">
            {facts.map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">{label}</dt>
                <dd className="text-right text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
