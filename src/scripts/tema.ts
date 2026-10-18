/**
 * Tema claro / oscuro.
 * El script en línea de Base.astro aplica el tema antes de pintar (sin parpadeo);
 * aquí se gestiona el botón, la memoria en localStorage y las navegaciones del ClientRouter.
 */
type Tema = 'claro' | 'oscuro';
const CLAVE = 'wil.tema';
const medio = window.matchMedia('(prefers-color-scheme: dark)');

function guardado(): Tema | null {
  try {
    const t = localStorage.getItem(CLAVE);
    return t === 'claro' || t === 'oscuro' ? t : null;
  } catch {
    return null;
  }
}

function actual(): Tema {
  return guardado() ?? (medio.matches ? 'oscuro' : 'claro');
}

function aplicar(tema: Tema) {
  document.documentElement.dataset.tema = tema;
  document.querySelectorAll<HTMLElement>('[data-tema-toggle]').forEach((b) => {
    b.setAttribute('aria-label', tema === 'oscuro' ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro');
    b.setAttribute('aria-pressed', String(tema === 'oscuro'));
  });
}

function iniciar() {
  aplicar(actual());
  if ((window as any).__wilTemaListo) return;
  (window as any).__wilTemaListo = true;
  document.addEventListener('click', (ev) => {
    const boton = (ev.target as HTMLElement).closest('[data-tema-toggle]');
    if (!boton) return;
    const nuevo: Tema = actual() === 'oscuro' ? 'claro' : 'oscuro';
    try {
      localStorage.setItem(CLAVE, nuevo);
    } catch {
      /* sin almacenamiento: el cambio dura hasta recargar */
    }
    aplicar(nuevo);
  });
  medio.addEventListener('change', () => {
    if (!guardado()) aplicar(actual());
  });
  // El ClientRouter sustituye los atributos de <html> en cada navegación: se vuelve a aplicar.
  document.addEventListener('astro:after-swap', () => aplicar(actual()));
}

document.addEventListener('astro:page-load', iniciar);
if (document.readyState !== 'loading') iniciar();
