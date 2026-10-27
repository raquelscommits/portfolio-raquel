// Todo el contenido del portfolio en un solo sitio.
// Para añadir un proyecto, habilidad o enlace, edita solo este archivo.

export const person = {
  name: 'Raquel Rodríguez',
  role: 'Desarrolladora web frontend',
  location: 'Valencia, España',
  email: 'raquelrodrim2000@gmail.com',
};

export const cvRequestHref = `mailto:${person.email}?subject=${encodeURIComponent(
  'Solicitud de CV – Portfolio'
)}`;

export const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contacto', label: 'Contacto' },
];

export const facts = [
  { label: 'Ubicación', value: 'Valencia, España' },
  { label: 'Formación', value: 'Grado Superior de Desarrollo Web' },
  { label: 'Promoción', value: '2024' },
  { label: 'Inglés', value: 'B2' },
];

// `image` es opcional: cuando haya capturas, añade { src, alt } y la tarjeta las mostrará.
export const projects = [
  {
    title: 'JESMAIMEDIA',
    description:
      'Plataforma de venta de productos digitales descargables (plantillas, prompts, packs de contenido y mini-cursos).',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://jesmaimedia.vercel.app/',
  },
  {
    title: 'Carda Servicios',
    description: 'Página web moderna para la empresa Carda.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://cardaservicios.es/',
  },
];

export const experience = [
  {
    kind: 'Trabajo',
    title: 'Desarrollo web',
    place: 'Miivo Mobility',
    placeNote: 'startup',
    tasks: [
      'Mejora del diseño web',
      'Implementación de responsive design',
      'Corrección de errores',
      'Creación de nuevas secciones para hacer la página más atractiva',
      'Elaboración y actualización de documentación técnica',
    ],
  },
    {
    kind: 'Trabajo',
    title: 'Técnica informática',
    place: 'Ayuntamiento de Mislata',
    placeNote: 'startup',
    tasks: [
      'Atención técnica a usuarios municipales',
      'Resolución de incidencias de hardware y software.',
      'Colaboración en guías de buenas prácticas y en la mejora de la seguridad informática.',
      'Implementación y configuración de equipos informáticos, con su inventario.',
    ],
  },
  {
    kind: 'Formación',
    title: 'Grado Superior de Desarrollo Web',
    date: '2024',
  },
    {
    kind: 'Formación',
    title: 'Grado Medio en Sistemas Microinformáticos y Redes',
    date: '2020',
  },
];

export const skillGroups = [
  { title: 'Base', items: ['HTML5', 'CSS3', 'JavaScript'] },
  { title: 'Librerías y frameworks', items: ['React', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'También en mis proyectos', items: ['Next.js', 'TypeScript', 'Vercel'] },
];

export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raquelrodrim/', handle: 'in/raquelrodrim' },
];
