/**
 * Carrito de WIL Fragance. Vive en localStorage del navegador.
 * Se inicializa en cada navegación (astro:page-load) porque el sitio usa ClientRouter.
 */
export interface Linea {
  id: string;
  slug: string;
  nombre: string;
  marca: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

const CLAVE = 'wil.carrito.v1';
const MAX_CANTIDAD = 20;

function leer(): Linea[] {
  try {
    const crudo = localStorage.getItem(CLAVE);
    if (!crudo) return [];
    const datos = JSON.parse(crudo);
    if (!Array.isArray(datos)) return [];
    return datos.filter((l) => l && typeof l.id === 'string' && Number.isFinite(l.precio) && Number.isFinite(l.cantidad) && l.cantidad > 0);
  } catch {
    return [];
  }
}

function guardar(lineas: Linea[]) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(lineas));
  } catch {
    /* modo privado o almacenamiento lleno: el carrito sigue en memoria durante la página */
  }
  document.dispatchEvent(new CustomEvent('carrito:cambio', { detail: { lineas } }));
}

export const carrito = {
  lineas: leer,
  cantidadTotal: () => leer().reduce((n, l) => n + l.cantidad, 0),
  total: () => leer().reduce((n, l) => n + l.cantidad * l.precio, 0),
  anadir(p: Omit<Linea, 'cantidad'>, cantidad = 1) {
    const lineas = leer();
    const existente = lineas.find((l) => l.id === p.id);
    if (existente) existente.cantidad = Math.min(MAX_CANTIDAD, existente.cantidad + cantidad);
    else lineas.push({ ...p, cantidad: Math.min(MAX_CANTIDAD, Math.max(1, cantidad)) });
    guardar(lineas);
  },
  fijarCantidad(id: string, cantidad: number) {
    const lineas = leer();
    const l = lineas.find((x) => x.id === id);
    if (!l) return;
    l.cantidad = Math.min(MAX_CANTIDAD, Math.max(0, Math.round(cantidad)));
    guardar(lineas.filter((x) => x.cantidad > 0));
  },
  quitar(id: string) {
    guardar(leer().filter((x) => x.id !== id));
  },
  vaciar() {
    guardar([]);
  },
};

export const formatearPrecio = (n: number) => `RD$${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

/** Mensaje de pedido para WhatsApp. */
export function mensajePedido(lineas: Linea[], nombreCliente: string, tienda: string, sitio: string): string {
  const partes = [`Hola ${tienda}, quiero hacer este pedido:`, ''];
  lineas.forEach((l, i) => {
    partes.push(`${i + 1}. ${l.marca} ${l.nombre}`);
    partes.push(`   ${l.cantidad} × ${formatearPrecio(l.precio)} = ${formatearPrecio(l.cantidad * l.precio)}`);
  });
  partes.push('', `Total: ${formatearPrecio(lineas.reduce((n, l) => n + l.cantidad * l.precio, 0))}`);
  partes.push(`Nombre: ${nombreCliente.trim()}`);
  if (sitio) partes.push('', `Pedido hecho desde ${sitio}`);
  return partes.join('\n');
}

/* ---------- Interfaz ---------- */

function actualizarContadores() {
  const n = carrito.cantidadTotal();
  document.querySelectorAll<HTMLElement>('[data-carrito-cantidad]').forEach((el) => {
    el.textContent = String(n);
    el.hidden = n === 0;
  });
}

let avisoTemporizador: number | undefined;
function mostrarAviso(texto: string) {
  const aviso = document.getElementById('aviso');
  if (!aviso) return;
  const textoEl = aviso.querySelector('[data-aviso-texto]');
  if (textoEl) textoEl.textContent = texto;
  aviso.dataset.visible = 'true';
  window.clearTimeout(avisoTemporizador);
  avisoTemporizador = window.setTimeout(() => {
    aviso.dataset.visible = 'false';
  }, 3200);
}

function enlazarBotonesAnadir() {
  // Delegación: se registra una sola vez aunque el ClientRouter cambie de página.
  if ((window as any).__wilCarritoDelegado) return;
  (window as any).__wilCarritoDelegado = true;
  document.addEventListener('click', (ev) => {
    const boton = (ev.target as HTMLElement).closest<HTMLElement>('[data-anadir]');
    if (!boton) return;
    ev.preventDefault();
    try {
      const p = JSON.parse(boton.dataset.anadir || '{}');
      const cantidadEl = boton.closest('[data-producto]')?.querySelector<HTMLInputElement>('[data-cantidad]');
      const cantidad = cantidadEl ? Number(cantidadEl.value) || 1 : 1;
      carrito.anadir(p, cantidad);
      mostrarAviso(`${p.marca} ${p.nombre} añadido al carrito`);
      const texto = boton.querySelector<HTMLElement>('[data-texto-anadir]');
      if (texto && !boton.dataset.original) {
        boton.dataset.original = texto.textContent || 'Añadir';
        texto.textContent = 'Añadido ✓';
        boton.classList.add('btn-oro');
        window.setTimeout(() => {
          texto.textContent = boton.dataset.original || 'Añadir';
          boton.classList.remove('btn-oro');
          delete boton.dataset.original;
        }, 1400);
      }
    } catch {
      /* datos del botón no válidos */
    }
  });
  document.addEventListener('carrito:cambio', actualizarContadores);
  window.addEventListener('storage', (e) => {
    if (e.key === CLAVE) {
      actualizarContadores();
      document.dispatchEvent(new CustomEvent('carrito:cambio', { detail: { lineas: leer() } }));
    }
  });
}

function iniciarSelectoresCantidad() {
  document.querySelectorAll<HTMLElement>('[data-selector-cantidad]').forEach((sel) => {
    if (sel.dataset.listo) return;
    sel.dataset.listo = 'true';
    const input = sel.querySelector<HTMLInputElement>('[data-cantidad]');
    if (!input) return;
    sel.querySelector('[data-menos]')?.addEventListener('click', () => {
      input.value = String(Math.max(1, (Number(input.value) || 1) - 1));
    });
    sel.querySelector('[data-mas]')?.addEventListener('click', () => {
      input.value = String(Math.min(MAX_CANTIDAD, (Number(input.value) || 1) + 1));
    });
  });
}

function iniciarPaginaCarrito() {
  const raiz = document.getElementById('carrito-pagina');
  if (!raiz || raiz.dataset.listo) return;
  raiz.dataset.listo = 'true';

  const lista = raiz.querySelector<HTMLElement>('[data-lineas]')!;
  const plantilla = raiz.querySelector<HTMLTemplateElement>('template[data-plantilla-linea]')!;
  const vacio = raiz.querySelector<HTMLElement>('[data-vacio]')!;
  const lleno = raiz.querySelector<HTMLElement>('[data-lleno]')!;
  const totalEl = raiz.querySelector<HTMLElement>('[data-total]')!;
  const unidadesEl = raiz.querySelector<HTMLElement>('[data-unidades]')!;
  const nombreInput = raiz.querySelector<HTMLInputElement>('[data-nombre-cliente]')!;
  const botonPedir = raiz.querySelector<HTMLAnchorElement>('[data-pedir]')!;
  const botonVaciar = raiz.querySelector<HTMLButtonElement>('[data-vaciar]');
  const errorNombre = raiz.querySelector<HTMLElement>('[data-error-nombre]');
  const whatsapp = raiz.dataset.whatsapp || '';
  const tienda = raiz.dataset.tienda || 'WIL Fragance';
  const sitio = raiz.dataset.sitio || '';

  try {
    nombreInput.value = localStorage.getItem('wil.nombre') || '';
  } catch {
    /* sin almacenamiento */
  }

  function pintar() {
    const lineas = carrito.lineas();
    lista.innerHTML = '';
    const hay = lineas.length > 0;
    vacio.hidden = hay;
    lleno.hidden = !hay;
    for (const l of lineas) {
      const nodo = plantilla.content.firstElementChild!.cloneNode(true) as HTMLElement;
      nodo.dataset.id = l.id;
      const img = nodo.querySelector<HTMLImageElement>('img');
      if (img) {
        img.src = l.imagen;
        img.alt = `${l.marca} ${l.nombre}`;
      }
      nodo.querySelector('[data-nombre]')!.textContent = l.nombre;
      nodo.querySelector('[data-marca]')!.textContent = l.marca;
      nodo.querySelectorAll<HTMLAnchorElement>('[data-enlace]').forEach((a) => (a.href = `/perfume/${l.slug}/`));
      nodo.querySelector('[data-precio]')!.textContent = formatearPrecio(l.precio);
      nodo.querySelector('[data-subtotal]')!.textContent = formatearPrecio(l.precio * l.cantidad);
      const cantidad = nodo.querySelector<HTMLInputElement>('[data-cantidad]')!;
      cantidad.value = String(l.cantidad);
      nodo.querySelector('[data-menos]')!.addEventListener('click', () => carrito.fijarCantidad(l.id, l.cantidad - 1));
      nodo.querySelector('[data-mas]')!.addEventListener('click', () => carrito.fijarCantidad(l.id, l.cantidad + 1));
      cantidad.addEventListener('change', () => carrito.fijarCantidad(l.id, Number(cantidad.value) || 1));
      nodo.querySelector('[data-quitar]')!.addEventListener('click', () => carrito.quitar(l.id));
      lista.appendChild(nodo);
    }
    totalEl.textContent = formatearPrecio(carrito.total());
    unidadesEl.textContent = String(carrito.cantidadTotal());
    actualizarEnlace();
  }

  function actualizarEnlace() {
    const lineas = carrito.lineas();
    const nombre = nombreInput.value.trim();
    const listo = lineas.length > 0 && nombre.length >= 2;
    botonPedir.setAttribute('aria-disabled', listo ? 'false' : 'true');
    botonPedir.href = listo ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensajePedido(lineas, nombre, tienda, sitio))}` : '#';
  }

  nombreInput.addEventListener('input', () => {
    if (errorNombre) errorNombre.hidden = true;
    try {
      localStorage.setItem('wil.nombre', nombreInput.value);
    } catch {
      /* sin almacenamiento */
    }
    actualizarEnlace();
  });
  botonPedir.addEventListener('click', (ev) => {
    if (botonPedir.getAttribute('aria-disabled') === 'true') {
      ev.preventDefault();
      if (nombreInput.value.trim().length < 2) {
        if (errorNombre) errorNombre.hidden = false;
        nombreInput.focus();
      }
    }
  });
  botonVaciar?.addEventListener('click', () => {
    if (confirm('¿Vaciar el carrito?')) carrito.vaciar();
  });
  document.addEventListener('carrito:cambio', pintar);
  pintar();
}

function iniciar() {
  enlazarBotonesAnadir();
  actualizarContadores();
  iniciarSelectoresCantidad();
  iniciarPaginaCarrito();
}

document.addEventListener('astro:page-load', iniciar);
if (document.readyState !== 'loading') iniciar();
