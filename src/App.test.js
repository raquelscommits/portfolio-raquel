import { render, screen, within } from '@testing-library/react';
import App from './App';

test('muestra el nombre como encabezado principal', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /raquel\s*rodríguez/i })).toBeInTheDocument();
});

test('la navegación usa enlaces a cada sección', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: /principal/i });
  ['Sobre mí', 'Proyectos', 'Trayectoria', 'Habilidades', 'Contacto'].forEach((label) => {
    expect(within(nav).getByRole('link', { name: label })).toHaveAttribute(
      'href',
      `#${label === 'Sobre mí' ? 'sobre-mi' : label.toLowerCase()}`
    );
  });
});

test('los proyectos enlazan a las webs publicadas', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /jesmaimedia/i })).toHaveAttribute('href', 'https://jesmaimedia.vercel.app/');
  expect(screen.getByRole('link', { name: /carda servicios/i })).toHaveAttribute('href', 'https://cardaservicios.es/');
});

test('el enlace de CV abre un email de solicitud', () => {
  render(<App />);
  const cv = screen.getByRole('link', { name: /pedir cv/i });
  expect(cv.getAttribute('href')).toMatch(/^mailto:raquelrodrim2000@gmail\.com\?subject=/);
});
