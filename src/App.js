import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Sparkles, Palette } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Dashboard Analytics",
      description: "Panel interactivo con visualización de datos en tiempo real y gráficos dinámicos.",
      tech: ["React", "Tailwind CSS", "Chart.js"],
      color: "from-pink-300 to-rose-300"
    },
    {
      title: "E-commerce Landing",
      description: "Página de aterrizaje moderna para tienda online con animaciones suaves y diseño responsivo.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-200 to-indigo-200"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con filtros, categorías y persistencia de datos.",
      tech: ["React", "Bootstrap", "LocalStorage"],
      color: "from-purple-200 to-pink-200"
    }
  ];

  const skills = [
    { name: "HTML5", level: 90, color: "bg-gradient-to-r from-pink-300 to-rose-300" },
    { name: "CSS3", level: 90, color: "bg-gradient-to-r from-blue-200 to-indigo-200" },
    { name: "JavaScript", level: 80, color: "bg-gradient-to-r from-amber-200 to-orange-200" },
    { name: "React", level: 75, color: "bg-gradient-to-r from-cyan-200 to-blue-200" },
    { name: "Tailwind CSS", level: 70, color: "bg-gradient-to-r from-teal-200 to-emerald-200" },
    { name: "Bootstrap", level: 75, color: "bg-gradient-to-r from-purple-200 to-pink-200" }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 text-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
          style={{
            left: `${mousePosition.x / 50}px`,
            top: `${mousePosition.y / 50}px`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">RR</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all ${
                  activeSection === section 
                    ? 'text-pink-500 font-medium' 
                    : 'text-gray-600 hover:text-pink-400'
                }`}
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-pink-200 mt-4">
            <div className="flex flex-col gap-4 p-6">
              {['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-left text-gray-600 hover:text-pink-400 transition-colors"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Info Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-pink-100 border border-pink-200 rounded-full backdrop-blur-sm">
            <Sparkles size={16} className="text-pink-500" />
            <span className="text-sm uppercase tracking-widest text-pink-600">Desarrolladora Web</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            Raquel Rodríguez
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Creando experiencias web <span className="text-pink-500 font-semibold">modernas</span> y <span className="text-rose-500 font-semibold">funcionales</span> con código limpio y diseño impactante
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-lg hover:shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 text-lg font-medium overflow-hidden"
            >
              <span className="relative z-10">Ver proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 border-2 border-pink-400 text-pink-600 rounded-lg hover:bg-pink-50 transition-all duration-300 text-lg font-medium"
            >
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Code className="text-pink-500" size={32} />
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800">Sobre mí</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Desarrolladora web recién graduada del Grado Superior de Desarrollo Web. Mi pasión por la tecnología comenzó en la infancia, siempre pegada a un ordenador y sumergida en el mundo de la informática y los videojuegos 💻🎮
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Realicé mis prácticas en <span className="text-pink-500 font-semibold">Miivo</span>, una startup donde trabajé mejorando el diseño web, implementando responsive design, corrigiendo errores y creando nuevas secciones para hacer la página más atractiva.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Me encanta asumir desafíos y disfrutar del proceso de programación. Me defino como una persona <span className="text-rose-500 font-semibold">empática, responsable y comprometida</span>, con habilidades para el trabajo en equipo. Mi objetivo es crecer tanto a nivel profesional como personal, aportando mis conocimientos en cada proyecto.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-pink-500">2024</div>
                  <div className="text-sm text-gray-600">Graduada</div>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-500">100%</div>
                  <div className="text-sm text-gray-600">Motivación</div>
                </div>
              </div>
            </div>
            <div className="bg-white/70 p-8 rounded-2xl border border-pink-200 backdrop-blur-sm hover:border-pink-300 transition-all duration-300 shadow-lg">
              <h4 className="text-2xl font-semibold mb-6 text-pink-500">Información</h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b border-pink-100">
                  <span className="text-gray-500">Nombre</span>
                  <span className="font-medium">Raquel Rodríguez</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-pink-100">
                  <span className="text-gray-500">Ubicación</span>
                  <span className="font-medium">Valencia, España</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-pink-100">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">raquelrodrim2000@gmail.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Especialidad</span>
                  <span className="font-medium text-pink-500">Frontend Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <Palette className="text-rose-500" size={32} />
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800">Proyectos</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-200 hover:border-pink-300 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-200/50"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={64} className="text-white/90 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-pink-500 transition-colors">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-pink-100 text-pink-600 rounded-full border border-pink-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-pink-500 hover:text-rose-500 transition-colors group">
                    Ver proyecto <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">Habilidades</h3>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-lg text-gray-800 group-hover:text-pink-500 transition-colors">{skill.name}</span>
                  <span className="text-pink-500 font-medium">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/70 rounded-full overflow-hidden backdrop-blur-sm border border-pink-100">
                  <div
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">¿Trabajamos juntos?</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Siempre estoy abierta a nuevos proyectos y colaboraciones. ¡Hablemos sobre tu próxima idea!
          </p>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <a href="mailto:raquelrodrim2000@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white/70 hover:bg-white border border-pink-200 hover:border-pink-300 rounded-lg transition-all backdrop-blur-sm group">
              <Mail size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700">Email</span>
            </a>
            <a href="https://github.com/raquelscommits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/70 hover:bg-white border border-pink-200 hover:border-pink-300 rounded-lg transition-all backdrop-blur-sm group">
              <Github size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/raquel-r-1a7545292/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/70 hover:bg-white border border-pink-200 hover:border-pink-300 rounded-lg transition-all backdrop-blur-sm group">
              <Linkedin size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700">LinkedIn</span>
            </a>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-lg hover:shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 text-lg font-medium">
            Descargar CV
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-pink-200 relative">
        <div className="max-w-7xl mx-auto text-center text-gray-500 relative z-10">
          <p>© 2026 Raquel Rodríguez. Hecho con 💗 y React</p>
        </div>
      </footer>
    </div>
  );
}