/**
 * Carrusel del portal (portada): las diapositivas viven en una pista con scroll-snap,
 * así que funciona con el dedo sin JavaScript; aquí se añaden autoavance, flechas,
 * puntos y la leyenda (nombre, marca y precio) de la diapositiva activa.
 */
const INTERVALO = 4500;
const temporizadores = new Set<number>();

function iniciarCarrusel(raiz: HTMLElement) {
  if (raiz.dataset.listo) return;
  raiz.dataset.listo = 'true';
  const pista = raiz.querySelector<HTMLElement>('[data-pista]');
  if (!pista) return;
  const diapositivas = Array.from(pista.children) as HTMLElement[];
  if (diapositivas.length < 2) return;

  const leyenda = {
    nombre: raiz.querySelector<HTMLElement>('[data-leyenda-nombre]'),
    marca: raiz.querySelector<HTMLElement>('[data-leyenda-marca]'),
    precio: raiz.querySelector<HTMLElement>('[data-leyenda-precio]'),
    enlaces: Array.from(raiz.querySelectorAll<HTMLAnchorElement>('[data-leyenda-enlace]')),
  };
  const puntos = Array.from(raiz.querySelectorAll<HTMLButtonElement>('[data-punto]'));
  const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let indice = 0;
  let temporizador: number | undefined;

  function pintar() {
    const d = diapositivas[indice];
    if (leyenda.nombre) leyenda.nombre.textContent = d.dataset.nombre ?? '';
    if (leyenda.marca) leyenda.marca.textContent = d.dataset.marca ?? '';
    if (leyenda.precio) leyenda.precio.textContent = d.dataset.precio ?? '';
    for (const a of leyenda.enlaces) a.href = d.dataset.url ?? '#';
    puntos.forEach((p, i) => p.setAttribute('aria-current', String(i === indice)));
  }

  function ir(n: number, suave = true) {
    indice = (n + diapositivas.length) % diapositivas.length;
    pista.scrollTo({ left: diapositivas[indice].offsetLeft - pista.offsetLeft, behavior: suave && !reducirMovimiento ? 'smooth' : 'auto' });
    pintar();
  }

  function parar() {
    if (temporizador !== undefined) {
      window.clearInterval(temporizador);
      temporizadores.delete(temporizador);
      temporizador = undefined;
    }
  }

  // Siempre avanza solo; con "reducir movimiento" el cambio es instantáneo en vez de deslizado.
  function arrancar() {
    if (document.hidden) return;
    parar();
    temporizador = window.setInterval(() => ir(indice + 1), INTERVALO);
    temporizadores.add(temporizador);
  }

  // Cuando el usuario desliza con el dedo, la diapositiva visible manda.
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting && e.intersectionRatio >= 0.6) {
          const i = diapositivas.indexOf(e.target as HTMLElement);
          if (i !== -1 && i !== indice) {
            indice = i;
            pintar();
          }
        }
      }
    },
    { root: pista, threshold: [0.6] },
  );
  diapositivas.forEach((d) => observador.observe(d));

  raiz.querySelector('[data-anterior]')?.addEventListener('click', () => { ir(indice - 1); arrancar(); });
  raiz.querySelector('[data-siguiente]')?.addEventListener('click', () => { ir(indice + 1); arrancar(); });
  puntos.forEach((p, i) => p.addEventListener('click', () => { ir(i); arrancar(); }));

  // Solo se detiene mientras el visitante lo está tocando o navegando con el teclado, y cuando la pestaña no se ve.
  pista.addEventListener('pointerdown', parar);
  pista.addEventListener('pointerup', arrancar);
  pista.addEventListener('pointercancel', arrancar);
  pista.addEventListener('touchstart', parar, { passive: true });
  pista.addEventListener('touchend', arrancar, { passive: true });
  raiz.addEventListener('focusin', parar);
  raiz.addEventListener('focusout', arrancar);
  document.addEventListener('visibilitychange', () => (document.hidden ? parar() : arrancar()));

  pintar();
  arrancar();
}

function iniciar() {
  document.querySelectorAll<HTMLElement>('[data-carrusel]').forEach(iniciarCarrusel);
}

document.addEventListener('astro:page-load', iniciar);
document.addEventListener('astro:before-swap', () => {
  for (const t of temporizadores) window.clearInterval(t);
  temporizadores.clear();
});
if (document.readyState !== 'loading') iniciar();
