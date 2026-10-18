/**
 * Datos de la tienda. Edita este archivo cuando tengas los datos definitivos;
 * los valores entre corchetes son marcadores: se ven en la web y la página /estado/
 * los lista como pendientes hasta que los cambies.
 */
export const tienda = {
  nombre: 'WIL Fragance',
  lema: 'Perfumes de diseñador y árabes',
  descripcion:
    'Perfumes de diseñador y árabes en República Dominicana. Elige, arma tu carrito y pide por WhatsApp.',

  /** Número de WhatsApp con código de país y solo dígitos (RD = 1 + número) */
  whatsapp: '18498162401',

  /** Cuenta de Instagram, con o sin @ */
  instagram: '@tu_cuenta',

  /** Ciudad o zona de entrega */
  ubicacion: 'Santo Domingo Norte',

  /** ¿Hay tienda física? Por ahora no: se vende por pedido, con entrega. */
  tiendaFisica: false,

  /** Métodos de pago que aceptas, p. ej. ['Transferencia', 'Efectivo'] */
  pagos: ['[Métodos de pago]'],

  /** Horario de atención, p. ej. 'Lunes a sábado, 9:00 a. m. a 7:00 p. m.' (vacío si no quieres mostrarlo) */
  horario: '[Horario de atención]',

  /** Correo de contacto (opcional, déjalo vacío si no quieres mostrarlo) */
  correo: '',
} as const;

const esMarcador = (s: string) => /\[[^\]]*\]/.test(s);

export const whatsappConfigurado = /^\d{10,15}$/.test(tienda.whatsapp);
export const instagramConfigurado = !/tu_cuenta/i.test(tienda.instagram);
export const ubicacionConfigurada = !esMarcador(tienda.ubicacion) && tienda.ubicacion.trim() !== '';
export const pagosConfigurados = tienda.pagos.length > 0 && !tienda.pagos.some(esMarcador);
export const horarioConfigurado = tienda.horario.trim() !== '' && !esMarcador(tienda.horario);

/** "transferencia o efectivo" cuando está configurado; si no, una frase verdadera. */
export const textoPagos = pagosConfigurados ? tienda.pagos.join(' o ').toLowerCase() : 'el método acordado por WhatsApp';

export const instagramUsuario = tienda.instagram.replace(/^@/, '');
export const instagramUrl = `https://instagram.com/${instagramUsuario}`;

/** Enlace de WhatsApp con un mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${tienda.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const mensajes = {
  general: `Hola ${tienda.nombre}, quiero información sobre sus perfumes.`,
  avisame: (perfume: string) => `Hola ${tienda.nombre}, avísenme cuando llegue ${perfume}, por favor.`,
  consulta: (perfume: string) => `Hola ${tienda.nombre}, me interesa ${perfume}. ¿Está disponible?`,
};
