import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { person, sections } from '../data/content';
import useActiveSection from '../hooks/useActiveSection';

const sectionIds = sections.map((s) => s.id);
const navSections = sections.filter((s) => s.id !== 'inicio');

export default function Header() {
  const active = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú móvil con Escape y devuelve el foco al botón
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper px-5 sm:px-8 transition-[border-color] duration-300 border-b ${
        scrolled || isMenuOpen ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-page items-center justify-between">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {person.name}
          <span className="text-accent" aria-hidden="true">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`nav-link ${active === id ? 'is-active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-movil"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="menu-movil" className="-mx-5 border-t border-line bg-paper px-5 sm:-mx-8 sm:px-8 md:hidden">
          <ul className="mx-auto max-w-page py-2">
            {navSections.map(({ id, label }, index) => (
              <li key={id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  aria-current={active === id ? 'true' : undefined}
                  className={`flex items-baseline gap-4 py-4 font-display text-2xl ${
                    active === id ? 'text-accent-deep' : 'text-ink'
                  }`}
                >
                  <span className="font-mono text-xs text-ink-soft">{String(index + 1).padStart(2, '0')}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
