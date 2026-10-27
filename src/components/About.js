import React from 'react';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="section">
      <div className="mx-auto grid max-w-page gap-x-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading number="01" label="Sobre mí" title="Sobre mí" id="sobre-mi-title" />
        </div>

        <div className="lg:col-span-8">
          <blockquote className="mb-12 border-l-2 border-accent pl-6 font-display text-2xl leading-snug text-ink sm:text-3xl sm:leading-snug">
            <p>
              Mi pasión por la tecnología comenzó en la infancia, siempre pegada a un ordenador y sumergida en
              el mundo de la informática y los videojuegos.
            </p>
          </blockquote>

          <div className="prose-body max-w-[62ch] space-y-6">
            <p>Desarrolladora web recién graduada del Grado Superior de Desarrollo Web.</p>
            <p>
              Realicé mis prácticas en <strong>Miivo</strong>, una startup donde trabajé mejorando el diseño web,
              implementando responsive design, corrigiendo errores y creando nuevas secciones para hacer la página
              más atractiva.
            </p>
            <p>
              Joven con pasión por su profesión, excelente capacidad de organización y facilidad para el trabajo en
              equipo. Persona muy adaptable a todo tipo de entornos y clara orientación a objetivos. Desearía
              desarrollarme profesionalmente en una empresa con proyección de futuro.
              Me defino como una persona{' '}
              <mark className="marker">empática, responsable y comprometida</mark>. Mi objetivo es crecer tanto a nivel profesional como personal, aportando mis conocimientos
              en cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
