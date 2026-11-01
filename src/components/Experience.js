import React from 'react';
import { experience } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="trayectoria" aria-labelledby="trayectoria-title" className="section bg-paper-deep">
      <div className="mx-auto grid max-w-page gap-x-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading number="04" label="Trayectoria" title="Experiencia y formación" id="trayectoria-title" />
        </div>

        <ol className="border-t border-ink lg:col-span-8">
          {experience.map((item) => (
            <li key={item.title + item.kind} className="grid gap-3 border-b border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep sm:pt-2">{item.kind}</p>
              <div>
                <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {item.place ? (
                    <>
                      {item.place}
                      {item.placeNote && (
                        <span className="ml-3 align-middle font-sans text-base font-normal text-ink-soft">
                          {item.placeNote}
                        </span>
                      )}
                    </>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.place && <p className="mt-1 text-ink-soft">{item.title}</p>}
                {item.date && <p className="mt-1 font-mono text-sm text-ink-soft">{item.date}</p>}
                {item.tasks && (
                  <ul className="mt-5 space-y-2 text-lg text-ink">
                    {item.tasks.map((task) => (
                      <li key={task} className="flex gap-3">
                        <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
