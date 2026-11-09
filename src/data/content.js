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
  { id: 'miivo', label: 'Caso Miivo' },
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
// `status` y `note` también son opcionales: estado del proyecto y una aclaración bajo las tecnologías.
export const projects = [
  {
    title: 'KIRA',
    description:
      'App Android de cuidados, educación y organización para perros de cualquier raza: salidas, comidas, salud y peso, tareas con avisos, fichas de adiestramiento y una guía para propietarios. Funciona sin conexión y sin cuentas. La acompaña una web propia para presentarla y buscar testers para la prueba cerrada.',
    tech: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Astro', 'Vercel'],
    link: 'https://appkira.es/',
    status: 'App en desarrollo · aún no está en Google Play',
    note: 'El código de la app y de la web está en repositorios privados. Si quieres verlo, escríbeme y te doy acceso.',
    image: {
      src: '/images/kira/kira-web.jpg',
      alt: 'Portada de la web de KIRA: titular «Tu perro, su día y todo lo que toca» junto a un móvil con la pantalla Hoy de la app.',
    },
  },
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

// Caso de estudio de las prácticas en Miivo. Las capturas están en public/images/miivo.
export const miivoCase = {
  title: 'Miivo: la web de una startup de movilidad',
  intro:
    'Miivo era una startup valenciana que reunía todo el transporte de la ciudad (metro, bus, bici, patinete…) en una sola app. Durante mis prácticas formé parte del equipo de desarrollo y me encargué de la web: nuevas páginas, nuevas secciones y que todo funcionara igual de bien en móvil que en escritorio.',
  facts: [
    { label: 'Rol', value: 'Desarrolladora frontend (prácticas)' },
    { label: 'Periodo', value: 'Septiembre – diciembre 2023' },
    { label: 'Herramientas', value: 'Linear, GitHub, Notion, Figma' },
    { label: 'Idiomas de la web', value: 'Español, valenciano e inglés' },
  ],
  tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lingui (i18n)', 'Git', 'Figma', 'Render'],
  workflow:
    'Trabajábamos con tareas en Linear, reunión de planificación cada lunes, ramas y pull requests en GitHub y despliegue automático en Render al fusionar en main. Antes de programar, bocetaba cada pantalla en Excalidraw o partía del diseño en Figma.',
  highlights: [
    {
      title: 'Página de Sostenibilidad',
      file: 'pages/about-us/sustainability.tsx',
      problem:
        'Hacía falta una página que explicara el impacto ambiental de usar Miivo frente al coche privado.',
      process:
        'Hice un boceto en Excalidraw y la maqueté con tarjetas responsive. Al verla terminada quedaba muy plana, así que propuse animar la cifra de CO₂ evitado con react-countup y la saqué a su propio componente (Counter.tsx).',
      result:
        'Una página nueva, traducida a los tres idiomas, en la que la cifra de 19.420 kg de CO₂ se anima al entrar en pantalla.',
      images: [
        {
          src: '/images/miivo/sostenibilidad.jpg',
          alt: 'Página de Sostenibilidad de Miivo: tarjeta sobre la reducción de emisiones con un gráfico y, debajo, el contador de 19.420 kg de CO₂ reducidos.',
        },
      ],
    },
    {
      title: 'Sección «Miivo en datos»',
      file: 'components/MiivoInData.tsx',
      problem:
        'La portada no mostraba el impacto real de la app. Queríamos tres cifras de un vistazo: CO₂ reducido, kilómetros recorridos y dinero ahorrado.',
      process:
        'Partí de un boceto, creé el componente y probé tres versiones de diseño. En la final cada métrica tiene su color (verde, azul y naranja) y las cifras son más grandes, porque eran lo que tenía que llamar la atención. Los números también se animan con react-countup.',
      result:
        'Una sección en la portada que en escritorio se lee en una fila y en móvil se apila sin perder jerarquía.',
      images: [
        {
          src: '/images/miivo/miivo-en-datos.jpg',
          alt: 'Sección Miivo en datos en escritorio: tres métricas en fila con iconos de hoja, persona caminando y moneda.',
        },
        {
          src: '/images/miivo/miivo-en-datos-movil.jpg',
          alt: 'La misma sección en móvil, con las tres métricas apiladas.',
          mobile: true,
        },
      ],
    },
    {
      title: 'Carrusel de medios de transporte',
      file: 'components/MobilityPartnersCarrousel.tsx',
      problem: 'En la portada había que mostrar los operadores de transporte disponibles en la app.',
      process:
        'Usé react-slick con una configuración propia: tres logos a la vez en escritorio, uno en móvil, autoplay cada 2 segundos y transiciones suaves. Los logos salen de un array, así que añadir uno nuevo es añadir una línea.',
      result: 'Un carrusel ligero y fácil de mantener que se adapta a cualquier ancho de pantalla.',
      images: [
        {
          src: '/images/miivo/carrusel.jpg',
          alt: 'Carrusel de la portada de Miivo con los logos de Cooltra, Acciona Mobility y Renfe.',
        },
      ],
    },
    {
      title: 'Página de la API',
      file: 'pages/Product/api.tsx',
      problem:
        'Miivo empezaba a ofrecer su API a empresas y ciudades y necesitaba una página que explicara qué ofrecía.',
      process:
        'Maqueté el diseño de Figma que me pasó el CTO: cabecera, ventajas con iconos, casos de éxito y casos de uso. Además propuse una sección que no estaba en el diseño, «Desbloquea el poder de la API», en la que reutilicé el componente de terminal animada de la portada junto a una lista de ventajas.',
      result: 'Tras revisarla, decidimos mantener la sección que añadí. Fue la página en la que más soltura cogí con Tailwind.',
      images: [
        {
          src: '/images/miivo/api-integra.jpg',
          alt: 'Página de la API de Miivo: móvil con un mapa de vehículos y lista de funcionalidades con iconos.',
        },
        {
          src: '/images/miivo/api-terminal.jpg',
          alt: 'Sección Desbloquea el poder de la API: terminal animada con código de ejemplo y lista de ventajas.',
        },
      ],
    },
  ],
  challenge: {
    title: 'Un error que no se veía en local',
    text: 'En mi último mes me tocó montar el entorno para trabajar en la app móvil con un emulador de Android. Pasábamos el login, pero la app no avanzaba de la pantalla de registro aunque la base de datos estaba conectada. Tras varios días de pruebas descubrimos que las versiones recientes de Android solo aceptan HTTPS, así que expusimos la API local con un túnel HTTPS de ngrok y por fin pudimos trabajar. Dejé el proceso documentado paso a paso para que la próxima vez costara minutos y no días.',
  },
  learnings: [
    'Diseño responsive con Tailwind: empecé consultando la documentación a cada paso y terminé maquetando con soltura.',
    'Proponer ideas: el contador y la sección de la API salieron de mí y se quedaron en producción.',
    'Trabajar en equipo con tareas, ramas, pull requests y despliegue continuo.',],
  reflection:
    'Miivo fue mi primera experiencia en un proyecto real: un equipo, usuarios de verdad y código en producción. Cumplí con todo lo que se me pidió y el equipo quedó satisfecho con mi trabajo. Hoy sé mucho más que entonces y, al volver a ver estas páginas, sé que podría mejorar mucho su diseño y su código. Aprendí muchísimo en esos meses y estoy orgullosa de todo lo que he crecido desde entonces.',
  note: 'Miivo cerró y el código de la web está en un repositorio privado. Si quieres verlo, escríbeme y te doy acceso.',
};

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
  { title: 'También en mis proyectos', items: ['Next.js', 'TypeScript', 'React Native', 'Expo', 'Astro', 'Vercel', 'Git', 'Figma'] },
];

export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raquelrodrim/', handle: 'in/raquelrodrim' },
];
