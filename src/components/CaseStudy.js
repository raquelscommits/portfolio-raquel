import React from 'react';
import { miivoCase, person } from '../data/content';
import SectionHeading from './SectionHeading';
import TechKeys from './TechKeys';

const stepLabels = [
  ['problem', 'Reto'],
  ['process', 'Proceso'],
  ['result', 'Resultado'],
];

const codeAccessHref = `mailto:${person.email}?subject=${encodeURIComponent('Acceso al código de Miivo')}`;

/** Capturas de una pieza: las de móvil se muestran estrechas junto a las de escritorio. */
function Screenshots({ images }) {
  const hasMobile = images.some((image) => image.mobile);
  return (
    <div className={hasMobile ? 'flex items-start gap-4' : 'space-y-4'}>
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={`rounded-md border border-line bg-white ${
            image.mobile ? 'w-[28%] shrink-0' : hasMobile ? 'min-w-0 flex-1' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}

export default function CaseStudy() {
  const { title, intro, facts, tech, workflow, highlights, challenge, learnings, reflection, note } = miivoCase;

  return (
    <section id="miivo" aria-labelledby="miivo-title" className="section">
      <div className="mx-auto max-w-page">
        <div className="grid gap-x-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading number="03" label="Caso de estudio" title={title} id="miivo-title" />
          </div>

          <div className="lg:col-span-8">
            <p className="prose-body max-w-[62ch]">{intro}</p>

            <dl className="mt-10 grid border-t border-ink sm:grid-cols-2 sm:gap-x-8">
              {facts.map((fact) => (
                <div key={fact.label} className="border-b border-line py-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">{fact.label}</dt>
                  <dd className="mt-1 text-lg text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <TechKeys items={tech} className="mt-8" small />
            <p className="prose-body mt-8 max-w-[62ch]">{workflow}</p>
          </div>
        </div>

        <ol className="mt-16 border-t border-ink sm:mt-20">
          {highlights.map((item, index) => (
            <li key={item.title} className="grid gap-8 border-b border-line py-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <span className="font-mono text-sm text-ink-soft" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-2 break-all font-mono text-sm text-accent-deep">{item.file}</p>

                <dl className="mt-6 space-y-5">
                  {stepLabels.map(([key, label]) => (
                    <div key={key}>
                      <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink">{label}</dt>
                      <dd className="mt-1 text-lg leading-relaxed text-ink-soft">{item[key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-7">
                <Screenshots images={item.images} />
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-md bg-paper-deep p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">Reto técnico</p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">{challenge.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{challenge.text}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">Qué me llevo</p>
            <ul className="mt-5 space-y-3 text-lg text-ink">
              {learnings.map((learning) => (
                <li key={learning} className="flex gap-3">
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  {learning}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-2 border-accent pl-6 font-display text-xl leading-snug text-ink sm:text-2xl sm:leading-snug">
              <p>{reflection}</p>
            </blockquote>
          </div>
        </div>

        <p className="mt-12 max-w-[62ch] text-ink-soft">
          {note}{' '}
          <a href={codeAccessHref} className="text-link">
            Pedir acceso
          </a>
        </p>
      </div>
    </section>
  );
}
