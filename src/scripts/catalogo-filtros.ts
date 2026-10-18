/**
 * Filtros, buscador y orden del catálogo. Todo ocurre en el navegador sobre las
 * tarjetas ya renderizadas, y el estado se refleja en la URL (?q=&genero=&tipo=&marca=&precio=&orden=).
 */
const normalizar = (s: string) =>
  (s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

type Clave = 'q' | 'genero' | 'tipo' | 'marca' | 'precio' | 'orden';
const CLAVES: Clave[] = ['q', 'genero', 'tipo', 'marca', 'precio', 'orden'];

function iniciar() {
  const raiz = document.querySelector<HTMLElement>('[data-catalogo]');
  if (!raiz || raiz.dataset.listo) return;
  raiz.dataset.listo = 'true';

  const rejilla = raiz.querySelector<HTMLElement>('[data-rejilla]')!;
  const tarjetas = Array.from(rejilla.querySelectorAll<HTMLElement>('[data-producto]'));
  const ordenInicial = new Map(tarjetas.map((t, i) => [t, i]));
  const vacio = raiz.querySelector<HTMLElement>('[data-vacio]')!;
  const conteo = raiz.querySelector<HTMLElement>('[data-conteo]')!;
  const q = raiz.querySelector<HTMLInputElement>('[data-q]')!;
  const chips = Array.from(raiz.querySelectorAll<HTMLButtonElement>('[data-filtro]'));
  const selMarca = raiz.querySelector<HTMLSelectElement>('[data-filtro-select="marca"]')!;
  const selPrecio = raiz.querySelector<HTMLSelectElement>('[data-filtro-select="precio"]')!;
  const selOrden = raiz.querySelector<HTMLSelectElement>('[data-orden]')!;
  const resumen = raiz.querySelector<HTMLElement>('[data-resumen]');

  const estado: Record<Clave, string> = { q: '', genero: '', tipo: '', marca: '', precio: '', orden: '' };

  function leerURL() {
    const p = new URLSearchParams(location.search);
    estado.q = p.get('q') ?? '';
    estado.genero = normalizar(p.get('genero') ?? '');
    estado.tipo = normalizar(p.get('tipo') ?? '');
    estado.marca = normalizar(p.get('marca') ?? '');
    estado.precio = p.get('precio') ?? '';
    estado.orden = p.get('orden') ?? '';
  }

  function escribirURL() {
    const p = new URLSearchParams();
    for (const k of CLAVES) if (estado[k]) p.set(k, estado[k]);
    const qs = p.toString();
    history.replaceState(history.state, '', location.pathname + (qs ? `?${qs}` : ''));
  }

  function pintarControles() {
    q.value = estado.q;
    for (const c of chips) {
      const clave = c.dataset.filtro as Clave;
      c.setAttribute('aria-pressed', String(estado[clave] === (c.dataset.valor ?? '')));
    }
    selMarca.value = estado.marca;
    selPrecio.value = estado.precio;
    selOrden.value = estado.orden || 'recomendados';
  }

  function rango(valor: string): [number | null, number | null] {
    if (!valor) return [null, null];
    const [a, b] = valor.split('-');
    return [a ? Number(a) : null, b ? Number(b) : null];
  }

  const comparadores: Record<string, (a: HTMLElement, b: HTMLElement) => number> = {
    recomendados: (a, b) => (ordenInicial.get(a) ?? 0) - (ordenInicial.get(b) ?? 0),
    nombre: (a, b) => (a.dataset.marca! + a.dataset.nombre!).localeCompare(b.dataset.marca! + b.dataset.nombre!, 'es'),
    'precio-asc': (a, b) => Number(a.dataset.precio) - Number(b.dataset.precio),
    'precio-desc': (a, b) => Number(b.dataset.precio) - Number(a.dataset.precio),
  };

  function aplicar() {
    const tokens = normalizar(estado.q).split(/\s+/).filter(Boolean);
    const [min, max] = rango(estado.precio);
    const visibles = tarjetas.filter((t) => {
      if (estado.genero && t.dataset.genero !== estado.genero) return false;
      if (estado.tipo && t.dataset.tipo !== estado.tipo) return false;
      if (estado.marca && t.dataset.marca !== estado.marca) return false;
      const precio = Number(t.dataset.precio);
      if (min !== null && precio < min) return false;
      if (max !== null && precio > max) return false;
      if (tokens.length) {
        const pajar = t.dataset.busqueda ?? '';
        if (!tokens.every((tok) => pajar.includes(tok))) return false;
      }
      return true;
    });
    visibles.sort(comparadores[estado.orden] ?? comparadores.recomendados);
    for (const t of tarjetas) t.hidden = true;
    for (const t of visibles) {
      t.hidden = false;
      rejilla.appendChild(t);
    }
    conteo.textContent = String(visibles.length);
    vacio.hidden = visibles.length > 0;
    if (resumen) {
      const partes: string[] = [];
      if (estado.q) partes.push(`“${estado.q}”`);
      if (estado.genero) partes.push(estado.genero);
      if (estado.tipo) partes.push(estado.tipo === 'arabe' ? 'árabes' : 'diseñador');
      if (estado.marca) partes.push(selMarca.selectedOptions[0]?.textContent ?? estado.marca);
      if (estado.precio) partes.push(selPrecio.selectedOptions[0]?.textContent ?? '');
      resumen.textContent = partes.length ? partes.join(' · ') : '';
    }
  }

  function cambiar(clave: Clave, valor: string) {
    estado[clave] = valor;
    pintarControles();
    aplicar();
    escribirURL();
  }

  let temporizador: number | undefined;
  q.addEventListener('input', () => {
    window.clearTimeout(temporizador);
    temporizador = window.setTimeout(() => cambiar('q', q.value), 140);
  });
  q.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') e.preventDefault();
  });
  for (const c of chips) {
    c.addEventListener('click', () => {
      const clave = c.dataset.filtro as Clave;
      const valor = c.dataset.valor ?? '';
      cambiar(clave, estado[clave] === valor && valor !== '' ? '' : valor);
    });
  }
  selMarca.addEventListener('change', () => cambiar('marca', selMarca.value));
  selPrecio.addEventListener('change', () => cambiar('precio', selPrecio.value));
  selOrden.addEventListener('change', () => cambiar('orden', selOrden.value === 'recomendados' ? '' : selOrden.value));
  raiz.querySelectorAll('[data-limpiar]').forEach((b) =>
    b.addEventListener('click', () => {
      for (const k of CLAVES) estado[k] = '';
      pintarControles();
      aplicar();
      escribirURL();
      q.focus();
    }),
  );

  leerURL();
  pintarControles();
  aplicar();
  if (location.hash === '#buscar') {
    q.focus();
    history.replaceState(history.state, '', location.pathname + location.search);
  }
}

document.addEventListener('astro:page-load', iniciar);
if (document.readyState !== 'loading') iniciar();
