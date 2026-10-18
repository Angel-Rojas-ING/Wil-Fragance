/**
 * Datos de la tienda. Edita este archivo cuando tengas los datos definitivos;
 * los valores entre corchetes son marcadores que se ven en la web hasta que los cambies.
 */
export const tienda = {
  nombre: 'WIL Fragance',
  lema: 'Perfumes de diseñador y árabes',
  descripcion:
    'Perfumes de diseñador y árabes en República Dominicana. Elige, arma tu carrito y pide por WhatsApp.',

  /** Número de WhatsApp con código de país y solo dígitos, p. ej. 18095551234 */
  whatsapp: '1809XXXXXXX',

  /** Cuenta de Instagram, con o sin @ */
  instagram: '@tu_cuenta',

  /** Ciudad o zona de entrega */
  ubicacion: '[Ciudad / zona]',

  /** Métodos de pago que aceptas */
  pagos: ['Transferencia', 'Efectivo'],

  /** Horario de atención (opcional) */
  horario: 'Lunes a sábado, 9:00 a. m. a 7:00 p. m.',

  /** Correo de contacto (opcional, déjalo vacío si no quieres mostrarlo) */
  correo: '',
} as const;

export const whatsappConfigurado = /^\d{10,15}$/.test(tienda.whatsapp);
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
