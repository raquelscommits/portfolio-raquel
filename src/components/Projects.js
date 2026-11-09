import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';
import SectionHeading from './SectionHeading';
import TechKeys from './TechKeys';

const domainOf = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export default function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="section bg-paper-deep">
      <div className="mx-auto max-w-page">
        <SectionHeading number="02" label="Proyectos" title="Webs y apps" id="proyectos-title" />

        <ol className="border-t border-ink">
          {projects.map((project, index) => (
            <li key={project.title} className="project-row group">
              <span className="font-mono text-sm text-ink-soft lg:col-span-1" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="lg:col-span-6">
                <h3 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.title}
                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                </h3>
                <p className="mt-2 font-mono text-sm text-accent-deep">{domainOf(project.link)}</p>
                {project.status && (
                  <p className="mt-1 font-mono text-sm text-ink-soft">{project.status}</p>
                )}
                {project.image && (
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                    className="mt-6 w-full rounded-md border border-line"
                  />
                )}
              </div>

              <div className="lg:col-span-4">
                <p className="text-lg leading-relaxed text-ink-soft">{project.description}</p>
                <TechKeys items={project.tech} className="mt-5" small />
                {project.note && (
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">{project.note}</p>
                )}
              </div>

              <ArrowUpRight
                size={32}
                strokeWidth={1.5}
                aria-hidden="true"
                className="project-arrow hidden text-ink lg:col-span-1 lg:block lg:justify-self-end"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
