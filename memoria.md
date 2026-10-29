# Memória do projeto — J.Created

> Histórico vivo de decisões e aprendizados. Registrar só o que ajuda na continuidade. Datas no formato AAAA-MM-DD.

---

## Decisões aprovadas
- 2026-10-29 — **Foco:** clínicas (qualquer especialidade, sem prioridade definida).
- 2026-10-29 — **Serviços:** Filmmaker (inclui captação de eventos), Design, Sites e Integração de IA. Podem ser contratados juntos ou separados.
- 2026-10-29 — **Área de atuação:** Filmmaker em Vila Velha/ES. Demais serviços no Brasil inteiro.
- 2026-10-29 — **Propósito, visão e valores** (Produtividade, Honestidade, Excelência) registrados em `BrandKit.md`.
- 2026-10-29 — **Diferencial:** qualidade e velocidade.
- 2026-10-29 — **Slogan oficial:** "Presença à altura do seu cuidado."
- 2026-10-29 — **Frase de apoio:** "Conectado do primeiro frame ao último clique."
- 2026-10-29 — **Assinatura:** "uma agência só.", no sentido de tudo o que antes exigia várias agências reunido num só lugar.
- 2026-10-29 — **Paleta oficial:** `#FFFFFF`, `#E7F1FB`, `#9EC9F3`, `#2F78C8`, `#173A5E`. A logo usa sempre esses hex.
- 2026-10-29 — **Tipografia:** sans pesada (identificada como Archivo) + Instrument Serif Italic, conforme a peça "Filmmaker. Site. Design.".
- 2026-10-29 — **Diretriz formal:** respeitar as normas de publicidade dos conselhos profissionais da saúde.
- 2026-10-29 — **Contratação:** decidida direto entre o responsável pela clínica e o João.
- 2026-10-29 — **Idiomas:** PT (padrão), EN e ES, com seletor.
- 2026-10-29 — **Estrutura:** 1 landing page agora, com arquitetura pronta para novas páginas.
- 2026-10-29 — **CTA principal:** WhatsApp +55 27 99621-2695.
- 2026-10-29 — **Formulário final:** nome + serviço → ao enviar, abre o WhatsApp com a mensagem pronta.
- 2026-10-29 — **Azul noite** `#0E1A2E` aprovado como cor secundária (fundo do hero e das seções de impacto).
- 2026-10-29 — **Título do hero:** "Filmmaker. Site. Design. IA." (as quatro palavras empilhadas).
- 2026-10-29 — **Textos PT** de todas as seções aprovados (`specs/textos.md`).
- 2026-10-29 — **Stack:** Astro (site estático, i18n nativo, pronto para novas páginas). Só muda com autorização.
- 2026-10-29 — **Atualização autorizada:** Astro 5.18.2 → 7.4.4, para eliminar as vulnerabilidades do `npm audit`.

## Decisões rejeitadas
- 2026-10-29 — **Tráfego pago** fora do portfólio inicial.
- 2026-10-29 — **"Sua clínica em um só traço."** não aprovado como slogan.
- 2026-10-29 — **Propósito genérico** ("Gerar valor e impulsionar o crescimento...") substituído pela versão focada em clínicas.
- 2026-10-29 — **"Design" em Archivo Regular**: leitura incorreta. Na peça, os três títulos estão no mesmo peso forte.

## Alterações realizadas
- 2026-10-29 — Criados `BrandKit.md`, `CLAUDE.md`, `specs/site.md`, `specs/design.md` e `memoria.md`.
- 2026-10-29 — Criado `specs/textos.md` com a proposta de textos em PT para todas as seções (aguardando aprovação).
- 2026-10-29 — Plano de desenvolvimento aprovado (7 etapas, com aprovação no navegador a cada etapa).
- 2026-10-29 — Etapas 1 e 2 escritas sem execução: config do Astro com i18n PT/EN/ES, tokens CSS, estilos globais, componentes Container/Section/Button/Card/Glow, BaseLayout e a página temporária `/design-system` para aprovação.

- 2026-10-29 — Etapa 2 (design system) aprovada.
- 2026-10-29 — Etapa 3: textos PT em `src/i18n/pt.ts`, rotas `/`, `/en/` e `/es/` (EN/ES mostram PT até a tradução), cabeçalho fixo com blur ao rolar, menu mobile, seletor de idioma que salva a escolha, logo e favicon provisórios em SVG e `hreflang`.
- 2026-10-29 — Etapa 3 (cabeçalho) aprovada.
- 2026-10-29 — Etapa 4: seções Hero, Ecossistema, Serviços, Diferencial, Quem somos, Contato e Rodapé em `src/components/sections/` e `layout/Footer.astro`. Portfólio fora, como manda a spec. Também entraram a revelação ao rolar e o formulário → WhatsApp (adiantado para nunca enviar os dados pela URL do site).
- 2026-10-29 — `--fs-display` passou a ser limitado também por `15svh`, para as 4 palavras do hero e o slogan caberem na primeira tela (`design.md` atualizado).
- 2026-10-29 — "Quem somos" usa o símbolo da marca no lugar da foto, até chegarem as fotos de João e Júlia.
- 2026-10-29 — Etapa 4 (seções) aprovada.
- 2026-10-29 — Etapa 5: botão flutuante do WhatsApp (só abaixo de 1024 px). Ele aparece depois do hero e some no formulário e com o menu aberto.
- 2026-10-29 — Etapa 5 aprovada.
- 2026-10-29 — Etapa 6: traduções EN (`src/i18n/en.ts`) e ES (`src/i18n/es.ts`) ligadas às rotas `/en/` e `/es/`, com `lang` correto. Estão marcadas como [REVISAR] até a revisão de João/Júlia. Escolhas a revisar: ES usa "tú"; o hero em EN diz "Website." e em ES "Web.", no lugar de "Site."; a assinatura virou "just one agency." / "una sola agencia.".
- 2026-10-29 — Etapa 7 (qualidade): Lighthouse mobile com 100 em Desempenho, Acessibilidade, Boas práticas e SEO nas três páginas (PT, EN, ES). LCP 1,4 s, CLS 0,003, TBT 0 ms. Os rótulos acessíveis dos links de idioma foram corrigidos ("PT, Português"). Ordem de foco e hierarquia de títulos conferidas (1 h1, h2 por seção, h3 nos itens).

## Problemas encontrados
- 2026-10-29 — A pasta `REFERÊNCIAS` está vazia: o print e o link do site de referência não foram recebidos.
- 2026-10-29 — O PowerShell retorna "Acesso negado" nesta máquina, e as fontes do `J.CREATED.psd` não puderam ser lidas.
- 2026-10-29 — Node.js não estava instalado. O instalador via winget falhou porque a janela de admin foi cancelada (1602).
- 2026-10-29 — A ferramenta PowerShell do Claude retorna "Acesso negado". Os comandos rodam pelo terminal do app.
- 2026-10-29 — Com o painel do navegador do app escondido, o IntersectionObserver não dispara. Testes de rolagem precisam de um screenshot para forçar a renderização. Isso não afeta navegadores reais.
- 2026-10-29 — `npm audit`: 5 vulnerabilidades (1 crítica, 3 altas) no Astro ≤7.3.1 e em dependências (esbuild, sharp, zod). Resolvido com a migração para o Astro 7.4.4 (ver Soluções).
- 2026-10-29 — Lighthouse ainda aponta `label-content-name-mismatch` no link da logo, porque o texto "reated" da logo provisória é texto SVG. Some quando entrar o SVG oficial (em curvas).
- 2026-10-29 — O link da logo enviado aponta para a biblioteca do ChatGPT, que não é acessível.
- 2026-10-29 — O "g" de dois andares da peça não é típico da Archivo. A fonte de display pode ser outra.

## Soluções aplicadas
- 2026-10-29 — A direção visual foi construída a partir da peça própria da marca e da logo (enviadas no chat), em vez da referência externa.
- 2026-10-29 — A tipografia foi identificada visualmente e marcada como [CONFIRMAR] até a checagem no PSD.
- 2026-10-29 — Node.js v26.13.0 portátil instalado sem admin em `%LOCALAPPDATA%\Programs\nodejs`, com o hash oficial verificado e o PATH do usuário atualizado. O `.claude/launch.json` aponta direto para esse `node.exe`.
- 2026-10-29 — `npm install` e `astro build` funcionaram. A página `/design-system` renderiza com Archivo e Instrument Serif carregadas, sem erros no console e sem rolagem horizontal no celular.

- 2026-10-29 — Migração para o Astro 7.4.4: `npm audit` com 0 vulnerabilidades. Nenhuma mudança de código foi necessária. Só o caminho do executável mudou (`node_modules/astro/bin/astro.mjs`), e o `.claude/launch.json` foi ajustado. Build, visual, idiomas, menu, formulário e fontes foram conferidos. Lighthouse continua com 100 nas 4 categorias em PT, EN e ES.

## Pendências
- [ ] Confirmar o nome exato da fonte de display no PSD.
- [ ] Arquivos SVG da logo (símbolo e assinatura completa).
- [ ] Material de portfólio e autorização das clínicas.
- [ ] Fotos e texto de "Quem somos" (João e Júlia).
- [ ] Redes sociais, e-mail, domínio e hospedagem.
- [ ] Analytics: sim ou não.
- [ ] Revisão das traduções EN/ES (`src/i18n/en.ts`, `src/i18n/es.ts`).
- [ ] Missão (separada do propósito ou não).
- [ ] Principais dores do cliente.
- [ ] Site de referência externo (print + link), se ainda existir.

## Próximos passos
0. Antes de publicar: revisar EN/ES, trocar a logo provisória pelos SVGs oficiais, remover a página `/design-system`, definir o domínio (hoje `example.com` no `astro.config.mjs`) e a hospedagem.
1. Confirmar o nome exato da fonte de display no PSD.
2. Preencher os [CONFIRMAR] de `specs/textos.md` (tipos de vídeo, entregas de design, exemplos de IA, papéis de João e Júlia).
3. Apresentar o plano de desenvolvimento em Astro e, com a aprovação, iniciar.
