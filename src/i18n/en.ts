// [REVISAR] English translation of the approved PT-BR copy (specs/textos.md). Review before publishing.
import type { Content } from './pt';

export const en: Content = {
  meta: {
    lang: 'en',
    htmlLang: 'en',
    title: 'J.Created | Filmmaking, Design, Websites and AI for clinics',
    description:
      'Video production, design, websites and artificial intelligence for clinics, all in just one agency. Presence that matches your care.',
  },

  ui: {
    skip: 'Skip to content',
    home: 'J.Created, back to top',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    nav: 'Main navigation',
    language: 'Language',
    newTab: 'opens in a new tab',
  },

  nav: [
    { href: '#ecossistema', label: 'Ecosystem' },
    { href: '#servicos', label: 'Services' },
    { href: '#diferencial', label: 'Why us' },
    { href: '#quem-somos', label: 'About' },
    { href: '#contato', label: 'Contact' },
  ],

  whatsapp: {
    cta: 'Chat on WhatsApp',
    ctaLabel: 'Chat on WhatsApp (opens in a new tab)',
    message: "Hi! I found J.Created's website and would like to talk about my clinic.",
  },

  hero: {
    words: ['Filmmaker', 'Website', 'Design', 'AI'],
    srTitle: 'Filmmaker, website, design and AI for clinics: just one agency.',
    signature: 'just one agency.',
    slogan: 'Presence that matches your care.',
    support: 'Video production, design, websites and artificial intelligence for clinics, built on one shared understanding of your business.',
    secondary: 'See our services',
  },

  ecosystem: {
    eyebrow: 'The ecosystem',
    title: 'Everything that used to take several agencies. Now,',
    titleSerif: 'just one conversation.',
    paragraphs: [
      'Your clinic used to need a filmmaker, a designer, someone for the website and someone else for the technology. Each with their own vision, their own deadlines and their own way of working.',
      'At J.Created, these solutions come from the same understanding of your business and complement each other. You get a consistent presence at every touchpoint and a more efficient routine.',
    ],
    points: [
      { title: 'All connected.', text: 'Video, design, website and AI speak the same language: your clinic’s.' },
      { title: 'Your way.', text: 'Hire our services together or separately, depending on what you need right now.' },
      { title: 'One point of contact.', text: 'You talk directly to the people taking care of your project.' },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'Four fronts.',
    titleSerif: 'one single stroke.',
    support: 'Each service works on its own, and becomes even stronger when it works together with the others.',
    items: [
      {
        id: 'filmmaker',
        title: 'Filmmaker.',
        text: 'Video production and event coverage that show your clinic, your team and your care with the quality they deserve.',
        detail: 'On-site service in Vila Velha, ES, Brazil.',
      },
      {
        id: 'design',
        title: 'Design.',
        text: 'Visual pieces designed to convey the trust and care your clinic offers, with consistency in every detail.',
        detail: 'Available throughout Brazil.',
      },
      {
        id: 'site',
        title: 'Website.',
        text: 'Professional, fast and clear websites that present your clinic and make the first contact with patients easier.',
        detail: 'Available throughout Brazil.',
      },
      {
        id: 'ia',
        title: 'AI.',
        text: 'Artificial intelligence integrated into your clinic’s routine, for more efficiency day to day.',
        detail: 'Available throughout Brazil.',
      },
    ],
  },

  differential: {
    eyebrow: 'Why us',
    title: 'Speed',
    titleSerif: 'without compromising care.',
    text: 'Agile execution, attention to detail and strategy behind every decision. We understand what your clinic needs and deliver with quality, on the agreed schedule.',
    pillars: [
      { title: 'Productivity.', text: 'Focus, organization and well-defined deadlines.' },
      { title: 'Honesty.', text: 'Clear proposals, transparent deadlines and only what we can deliver.' },
      { title: 'Excellence.', text: 'Rigor in every delivery and continuous improvement.' },
    ],
    closing: 'Connected from the first frame to the last click.',
  },

  about: {
    eyebrow: 'About us',
    title: 'Two Js.',
    titleSerif: 'one shared vision.',
    paragraphs: [
      'J.Created was born from an idea shared by João and Júlia. The "J" in the name is both of their initials and stands for the partnership behind the brand.',
      'It also lives in the stroke of our logo: one continuous line joining the J to the C, just as we bring together communication, creativity and technology so clinics can have a presence that matches the care they provide.',
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Shall we talk about',
    titleSerif: 'your clinic?',
    text: 'Tell us your name and what you are looking for. The conversation continues on WhatsApp, directly with us.',
    nameLabel: 'Your name',
    namePlaceholder: 'What should we call you?',
    serviceLabel: 'Service of interest',
    servicePlaceholder: 'Choose an option',
    services: ['Filmmaker', 'Design', 'Website', 'Artificial Intelligence'],
    serviceUnsure: 'More than one / not sure yet',
    submit: 'Send via WhatsApp',
    note: 'When you send it, WhatsApp will open with your message ready.',
    errorName: 'Please enter your name so we can continue.',
    errorService: "Choose a service or 'More than one / not sure yet'.",
    message: "Hi! My name is {nome} and I'm interested in {servico}. I found J.Created's website.",
    messageUnsure:
      "Hi! My name is {nome}. I'm still figuring out which services I need and would like to talk. I found J.Created's website.",
  },

  footer: {
    slogan: 'Presence that matches your care.',
    phone: '+55 (27) 99621-2695',
    area: 'Filmmaker in Vila Velha, ES · Design, websites and AI throughout Brazil',
    rights: '© 2026 J.Created. All rights reserved.',
  },
};
