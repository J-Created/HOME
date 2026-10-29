// [REVISAR] Traducción al español del texto PT-BR aprobado (specs/textos.md). Revisar antes de publicar.
import type { Content } from './pt';

export const es: Content = {
  meta: {
    lang: 'es',
    htmlLang: 'es',
    title: 'J.Created | Filmmaker, Diseño, Sitios web e IA para clínicas',
    description:
      'Producción audiovisual, diseño, sitios web e inteligencia artificial para clínicas, en una sola agencia. Presencia a la altura de tu cuidado.',
  },

  ui: {
    skip: 'Saltar al contenido',
    home: 'J.Created, volver al inicio',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    nav: 'Navegación principal',
    language: 'Idioma',
    newTab: 'se abre en una nueva pestaña',
  },

  nav: [
    { href: '#ecossistema', label: 'Ecosistema' },
    { href: '#servicos', label: 'Servicios' },
    { href: '#diferencial', label: 'Diferencial' },
    { href: '#quem-somos', label: 'Quiénes somos' },
    { href: '#contato', label: 'Contacto' },
  ],

  whatsapp: {
    cta: 'Hablar por WhatsApp',
    ctaLabel: 'Hablar por WhatsApp (se abre en una nueva pestaña)',
    message: '¡Hola! Llegué por el sitio web de J.Created y me gustaría hablar sobre mi clínica.',
  },

  hero: {
    words: ['Filmmaker', 'Web', 'Diseño', 'IA'],
    srTitle: 'Filmmaker, sitio web, diseño e IA para clínicas: una sola agencia.',
    signature: 'una sola agencia.',
    slogan: 'Presencia a la altura de tu cuidado.',
    support:
      'Producción audiovisual, diseño, sitios web e inteligencia artificial para clínicas, con una misma comprensión de tu negocio.',
    secondary: 'Conoce los servicios',
  },

  ecosystem: {
    eyebrow: 'El ecosistema',
    title: 'Todo lo que antes exigía varias agencias. Ahora,',
    titleSerif: 'una sola conversación.',
    paragraphs: [
      'Antes, tu clínica necesitaba un filmmaker, un diseñador, alguien para el sitio web y otra persona para la tecnología. Cada uno con su visión, sus plazos y su forma de trabajar.',
      'En J.Created, estas soluciones nacen de la misma comprensión de tu negocio y se complementan. Ganas una presencia coherente en todos los puntos de contacto y una rutina más eficiente.',
    ],
    points: [
      { title: 'Todo conectado.', text: 'Video, diseño, sitio web e IA hablan el mismo idioma: el de tu clínica.' },
      { title: 'A tu manera.', text: 'Contrata los servicios juntos o por separado, según lo que necesites en cada momento.' },
      { title: 'Un solo contacto.', text: 'Hablas directamente con quien cuida tu proyecto.' },
    ],
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Cuatro frentes.',
    titleSerif: 'un solo trazo.',
    support: 'Cada servicio funciona por sí solo y se vuelve aún más fuerte cuando trabaja junto con los demás.',
    items: [
      {
        id: 'filmmaker',
        title: 'Filmmaker.',
        text: 'Producción audiovisual y cobertura de eventos para mostrar tu clínica, tu equipo y tu cuidado con la calidad que merecen.',
        detail: 'Atención presencial en Vila Velha, ES, Brasil.',
      },
      {
        id: 'design',
        title: 'Diseño.',
        text: 'Piezas visuales pensadas para transmitir la confianza y el cuidado que ofrece tu clínica, con coherencia en cada detalle.',
        detail: 'Atención en todo Brasil.',
      },
      {
        id: 'site',
        title: 'Web.',
        text: 'Sitios web profesionales, rápidos y claros, que presentan tu clínica y facilitan el primer contacto del paciente.',
        detail: 'Atención en todo Brasil.',
      },
      {
        id: 'ia',
        title: 'IA.',
        text: 'Integración de inteligencia artificial en la rutina de la clínica, para ganar eficiencia en el día a día.',
        detail: 'Atención en todo Brasil.',
      },
    ],
  },

  differential: {
    eyebrow: 'Diferencial',
    title: 'Rapidez',
    titleSerif: 'sin renunciar al cuidado.',
    text: 'Agilidad en la ejecución, atención a los detalles y estrategia en cada decisión. Entendemos lo que tu clínica necesita y entregamos con calidad y en el plazo acordado.',
    pillars: [
      { title: 'Productividad.', text: 'Enfoque, organización y plazos bien definidos.' },
      { title: 'Honestidad.', text: 'Propuestas claras, plazos transparentes y solo lo que podemos cumplir.' },
      { title: 'Excelencia.', text: 'Rigor en cada entrega y mejora continua.' },
    ],
    closing: 'Conectado del primer frame al último clic.',
  },

  about: {
    eyebrow: 'Quiénes somos',
    title: 'Dos J.',
    titleSerif: 'una misma visión.',
    paragraphs: [
      'J.Created nació de una idea compartida entre João y Júlia. La "J" del nombre es la inicial de ambos y representa la alianza que dio origen a la marca.',
      'También está en el trazo de nuestro logo: una línea continua que une la J con la C, así como unimos comunicación, creatividad y tecnología para que las clínicas tengan una presencia a la altura del cuidado que ofrecen.',
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: '¿Hablamos sobre',
    titleSerif: 'tu clínica?',
    text: 'Dinos tu nombre y lo que buscas. La conversación continúa por WhatsApp, directamente con nosotros.',
    nameLabel: 'Tu nombre',
    namePlaceholder: '¿Cómo te llamamos?',
    serviceLabel: 'Servicio de interés',
    servicePlaceholder: 'Elige una opción',
    services: ['Filmmaker', 'Diseño', 'Sitio web', 'Inteligencia Artificial'],
    serviceUnsure: 'Más de uno / aún no lo sé',
    submit: 'Enviar por WhatsApp',
    note: 'Al enviar, se abrirá WhatsApp con tu mensaje listo.',
    errorName: 'Escribe tu nombre para continuar.',
    errorService: "Elige un servicio o 'Más de uno / aún no lo sé'.",
    message: '¡Hola! Me llamo {nome} y me interesa {servico}. Llegué por el sitio web de J.Created.',
    messageUnsure:
      '¡Hola! Me llamo {nome}. Todavía estoy evaluando qué servicios necesito y me gustaría conversar. Llegué por el sitio web de J.Created.',
  },

  footer: {
    slogan: 'Presencia a la altura de tu cuidado.',
    phone: '+55 (27) 99621-2695',
    area: 'Filmmaker en Vila Velha, ES · Diseño, sitios web e IA en todo Brasil',
    rights: '© 2026 J.Created. Todos los derechos reservados.',
  },
};
