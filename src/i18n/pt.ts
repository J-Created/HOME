// Textos PT-BR — fonte: specs/textos.md (aprovado em 2026-10-29)
export const pt = {
  meta: {
    lang: 'pt' as 'pt' | 'en' | 'es',
    htmlLang: 'pt-BR',
    title: 'J.Created | Filmmaker, Design, Sites e IA para clínicas',
    description:
      'Audiovisual, design, sites e inteligência artificial para clínicas, em uma agência só. Presença à altura do seu cuidado.',
  },

  ui: {
    skip: 'Pular para o conteúdo',
    home: 'J.Created: voltar ao início',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    nav: 'Navegação principal',
    language: 'Idioma',
    newTab: 'abre em nova aba',
  },

  nav: [
    { href: '#ecossistema', label: 'Ecossistema' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#diferencial', label: 'Diferencial' },
    { href: '#quem-somos', label: 'Quem somos' },
    { href: '#contato', label: 'Contato' },
  ],

  whatsapp: {
    cta: 'Falar no WhatsApp',
    ctaLabel: 'Falar no WhatsApp (abre em nova aba)',
    message: 'Olá! Vim pelo site da J.Created e gostaria de conversar sobre a minha clínica.',
  },

  hero: {
    words: ['Filmmaker', 'Site', 'Design', 'IA'],
    srTitle: 'Filmmaker, site, design e IA para clínicas: uma agência só.',
    signature: 'uma agência só.',
    slogan: 'Presença à altura do seu cuidado.',
    support:
      'Audiovisual, design, sites e inteligência artificial para clínicas, com uma mesma compreensão do seu negócio.',
    secondary: 'Conheça os serviços',
  },

  ecosystem: {
    eyebrow: 'O ecossistema',
    title: 'Tudo o que exigia várias agências. Agora,',
    titleSerif: 'uma conversa só.',
    paragraphs: [
      'Antes, sua clínica precisava de um filmmaker, de um designer, de alguém para o site e de outra pessoa para a tecnologia. Cada um com sua visão, seu prazo e sua forma de trabalhar.',
      'Na J.Created, essas soluções nascem da mesma compreensão do seu negócio e se complementam. Você ganha uma presença coerente em todos os pontos de contato e uma rotina mais eficiente.',
    ],
    points: [
      { title: 'Tudo conectado.', text: 'Vídeo, design, site e IA falam a mesma língua: a da sua clínica.' },
      { title: 'Do seu jeito.', text: 'Contrate os serviços juntos ou separados, conforme a necessidade do momento.' },
      { title: 'Um só contato.', text: 'Você conversa direto com quem cuida do seu projeto.' },
    ],
  },

  services: {
    eyebrow: 'Serviços',
    title: 'Quatro frentes.',
    titleSerif: 'um só traço.',
    support: 'Cada serviço funciona sozinho e fica ainda mais forte quando trabalha junto com os outros.',
    items: [
      {
        id: 'filmmaker',
        title: 'Filmmaker.',
        text: 'Produção audiovisual e captação de eventos para mostrar sua clínica, sua equipe e seu cuidado com a qualidade que eles merecem.',
        detail: 'Atendimento presencial em Vila Velha/ES.',
      },
      {
        id: 'design',
        title: 'Design.',
        text: 'Peças visuais pensadas para transmitir a confiança e o cuidado que a sua clínica oferece, com consistência em cada detalhe.',
        detail: 'Atendimento para todo o Brasil.',
      },
      {
        id: 'site',
        title: 'Site.',
        text: 'Sites profissionais, rápidos e claros, que apresentam sua clínica e facilitam o primeiro contato do paciente.',
        detail: 'Atendimento para todo o Brasil.',
      },
      {
        id: 'ia',
        title: 'IA.',
        text: 'Integração de inteligência artificial à rotina da clínica, para ganhar eficiência no dia a dia.',
        detail: 'Atendimento para todo o Brasil.',
      },
    ],
  },

  differential: {
    eyebrow: 'Diferencial',
    title: 'Rapidez',
    titleSerif: 'sem abrir mão do cuidado.',
    text: 'Agilidade na execução, atenção aos detalhes e estratégia em cada decisão. A gente entende o que a sua clínica precisa e entrega com qualidade e no prazo combinado.',
    pillars: [
      { title: 'Produtividade.', text: 'Foco, organização e prazos bem definidos.' },
      { title: 'Honestidade.', text: 'Propostas claras, prazos transparentes e só o que podemos cumprir.' },
      { title: 'Excelência.', text: 'Rigor em cada entrega e melhoria contínua.' },
    ],
    closing: 'Conectado do primeiro frame ao último clique.',
  },

  about: {
    eyebrow: 'Quem somos',
    title: 'Dois Js.',
    titleSerif: 'uma mesma visão.',
    paragraphs: [
      'A J.Created nasceu de uma ideia compartilhada entre João e Júlia. O "J" do nome é a inicial dos dois e representa a parceria que deu origem à marca.',
      'Ela também está no traço da nossa logo: uma linha contínua que une o J ao C, assim como unimos comunicação, criatividade e tecnologia para que as clínicas tenham uma presença à altura do cuidado que oferecem.',
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar sobre',
    titleSerif: 'a sua clínica?',
    text: 'Diga seu nome e o que você procura. A conversa continua no WhatsApp, direto com a gente.',
    nameLabel: 'Seu nome',
    namePlaceholder: 'Como podemos te chamar?',
    serviceLabel: 'Serviço de interesse',
    servicePlaceholder: 'Escolha uma opção',
    services: ['Filmmaker', 'Design', 'Site', 'Inteligência Artificial'],
    serviceUnsure: 'Mais de um / ainda não sei',
    submit: 'Enviar pelo WhatsApp',
    note: 'Ao enviar, o WhatsApp será aberto com sua mensagem pronta.',
    errorName: 'Digite seu nome para continuarmos.',
    errorService: "Escolha um serviço ou 'Mais de um / ainda não sei'.",
    message: 'Olá! Meu nome é {nome} e tenho interesse em {servico}. Vim pelo site da J.Created.',
    messageUnsure:
      'Olá! Meu nome é {nome}. Ainda estou avaliando quais serviços preciso e gostaria de conversar. Vim pelo site da J.Created.',
  },

  footer: {
    slogan: 'Presença à altura do seu cuidado.',
    phone: '(27) 99621-2695',
    area: 'Filmmaker em Vila Velha/ES · Design, sites e IA para todo o Brasil',
    rights: '© 2026 J.Created. Todos os direitos reservados.',
  },
};

export type Content = typeof pt;
