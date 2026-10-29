# Spec do site — J.Created

> Fonte de verdade sobre **o que** construir. A marca e o tom ficam em `BrandKit.md`, e o visual em `specs/design.md`.
> Legenda: **[PENDENTE]** = falta definir · **[PROPOSTA]** = sugestão aguardando aprovação.

---

## 1. Objetivo do site
Apresentar a J.Created como o ecossistema de serviços para clínicas e **gerar conversas no WhatsApp** com potenciais clientes. O site também serve como vitrine para quem está conhecendo o trabalho.

Métrica principal: cliques no WhatsApp (botão principal + formulário).

## 2. Público-alvo
- Responsáveis e donos de clínicas, de qualquer especialidade.
- A decisão de contratação acontece direto entre o responsável pela clínica e o João (fundador).
- Filmmaker: clínicas de Vila Velha/ES e região. Design, sites e IA: Brasil inteiro.

## 3. Produto e proposta de valor
- **O que é:** um ecossistema de multisserviços para clínicas, como alternativa ao modelo tradicional de agência.
- **Serviços:**
  - Filmmaker (produção audiovisual, incluindo captação de eventos)
  - Design
  - Sites profissionais
  - Integração de inteligência artificial
- Os serviços podem ser contratados juntos ou separadamente.
- **Diferencial:** qualidade e velocidade.
- **Slogan:** "Presença à altura do seu cuidado."
- **Frase de apoio:** "Conectado do primeiro frame ao último clique."
- **Assinatura:** "uma agência só."
- Fora do portfólio inicial: tráfego pago.

## 4. Idiomas
- Português (PT-BR): idioma principal e padrão.
- Inglês (EN) e Espanhol (ES), com **seletor de idioma visível no cabeçalho** (PT · EN · ES).
- Os textos de EN e ES são traduções do PT aprovado e precisam ser revisados antes de publicar.
- A escolha do idioma fica salva no navegador do visitante.
- [PROPOSTA] Cada idioma terá sua própria URL (`/`, `/en/`, `/es/`), para SEO e compartilhamento.

## 5. Páginas
- **Agora:** 1 página (landing page única com âncoras).
- **Futuro (dentro do escopo de arquitetura):** a estrutura deve permitir adicionar páginas sem refazer o site (ex.: portfólio, página por serviço, blog). Essas páginas não serão construídas agora.

## 6. Seções da landing page [PROPOSTA de ordem]
1. **Cabeçalho fixo:** logo (assinatura completa), navegação por âncoras, seletor PT/EN/ES e botão "Falar no WhatsApp".
2. **Hero:** "Filmmaker. Site. Design. IA." empilhado + "uma agência só." + slogan + botão do WhatsApp.
3. **O ecossistema:** o que muda em relação a uma agência tradicional: tudo num só lugar, contratação junta ou separada, mesma compreensão do negócio.
4. **Serviços:** 4 cards (Filmmaker, Design, Sites, IA). O de Filmmaker indica atuação em Vila Velha/ES.
5. **Diferencial:** qualidade + velocidade, com a frase de apoio.
6. **Portfólio / trabalhos:** [PENDENTE] material real. Sem material, a seção não entra.
7. **Quem somos:** João e Júlia, origem do nome J.Created. [PENDENTE] fotos e texto final aprovado.
8. **Formulário de contato:** ver item 7.
9. **Rodapé:** logo, slogan, WhatsApp, redes sociais [PENDENTE], seletor de idioma e direitos.

Seções que **não entram** sem dados reais: depoimentos, números/resultados, logos de clientes.

Os textos de cada seção estão em `specs/textos.md`.

## 7. Funcionalidades
- **Botão WhatsApp** (cabeçalho, hero e botão flutuante no celular): abre `https://wa.me/5527996212695` com mensagem pré-preenchida no idioma ativo.
- **Formulário final → WhatsApp:**
  - Campos: **Nome** (obrigatório) e **Serviço de interesse** (obrigatório; Filmmaker, Design, Site, Inteligência Artificial, "Mais de um / ainda não sei").
  - Ao clicar em **Enviar**, abre o WhatsApp do João com a mensagem montada.
    Exemplo PT: "Olá! Meu nome é {nome} e tenho interesse em {serviço}. Vim pelo site da J.Created."
  - Não há backend nem banco de dados. Nenhum dado é armazenado pelo site.
  - Validação com mensagens de erro claras e acessíveis.
- **Seletor de idioma** PT/EN/ES.
- **Navegação por âncoras** com rolagem suave.
- [PENDENTE] Analytics (ex.: Google Analytics / Meta Pixel), para medir cliques no WhatsApp. Se entrar, precisa de aviso de cookies.

## 8. Chamadas para ação
- **Principal:** "Falar no WhatsApp" → +55 27 99621-2695.
- **Secundária:** formulário final ("Enviar" → WhatsApp).
- Os textos dos botões seguem o idioma ativo.

## 9. Informações que ainda precisam ser definidas
- [ ] Material de portfólio (vídeos, peças, sites) e permissão das clínicas para exibir.
- [ ] Fotos de João e Júlia e texto da seção "Quem somos".
- [ ] Redes sociais (Instagram etc.).
- [ ] E-mail de contato (se houver).
- [ ] Domínio e hospedagem.
- [ ] Analytics: sim ou não.
- [ ] Revisão das traduções EN e ES.
- [ ] Arquivos SVG da logo (símbolo e assinatura completa).
- [ ] Site de referência (print e link) mencionado no início do projeto: a pasta `REFERÊNCIAS` está vazia.
- [ ] Política de privacidade (recomendada se houver analytics).

## 10. Stack técnica
**Aprovada em 2026-10-29.** Versão atual: Astro 7.4.4 (atualização autorizada em 2026-10-29).
- **Astro** (site estático), com HTML semântico, CSS próprio (variáveis/tokens) e JavaScript mínimo.
  - Por quê: suporta i18n nativo (PT/EN/ES com URLs próprias), facilita criar novas páginas no futuro, gera HTML puro e rápido e não depende de servidor.
  - Alternativa mais simples: HTML + CSS + JS puro, mas com mais trabalho manual para idiomas e páginas futuras.
- Fontes self-hosted (Archivo / Instrument Serif), via Fontsource ou arquivos locais.
- Hospedagem: [PENDENTE] Vercel ou Netlify (plano gratuito atende).
- Depois de aprovada, a stack só muda com autorização.

## 11. Responsividade
- Mobile-first.
- Breakpoints de referência: 360, 768, 1024, 1280 e 1440+.
- Sem rolagem horizontal em nenhuma largura.
- Títulos gigantes com tamanho fluido (`clamp`). No celular, o empilhamento "Filmmaker. Site. Design." continua legível, sem cortar palavras.
- Botão flutuante do WhatsApp só no celular, sem cobrir conteúdo nem o formulário.
- Áreas de toque de no mínimo 44×44 px.
- Menu compacto (hambúrguer) abaixo de 768 px, com o seletor de idioma acessível.

## 12. Acessibilidade
- Meta: WCAG 2.2 nível AA.
- Contraste mínimo de 4.5:1 para texto e 3:1 para títulos grandes e elementos de interface.
- HTML semântico (`header`, `nav`, `main`, `section`, `footer`) com hierarquia correta de títulos (um `h1`).
- Atributo `lang` correto por idioma.
- Navegação completa por teclado, com foco visível.
- Formulário com `label` em cada campo e erros anunciados (`aria-live`).
- Texto alternativo em todas as imagens. Vídeos sem autoplay com som e com controles.
- Respeitar `prefers-reduced-motion`.
- Links que abrem o WhatsApp informam isso (ex.: "abre o WhatsApp").

## 13. Desempenho
- Lighthouse ≥ 90 em Performance, Acessibilidade, Boas práticas e SEO (mobile).
- LCP < 2,5 s · CLS < 0,1 · INP < 200 ms.
- Imagens em AVIF/WebP, com `srcset` e carregamento lazy abaixo da dobra.
- Vídeos: poster leve. O carregamento só acontece por interação ou quando o vídeo fica visível.
- Fontes: no máximo 2 famílias e poucos pesos, `font-display: swap`, com pré-carregamento da fonte do hero.
- JavaScript mínimo. Nenhuma biblioteca pesada sem necessidade.
- SEO básico: título e descrição por idioma, `hreflang`, Open Graph e favicon com o símbolo.

## 14. Escopo

### Dentro
- Landing page única em PT/EN/ES.
- Botão do WhatsApp e formulário que envia para o WhatsApp.
- Layout responsivo, acessível e rápido.
- Arquitetura pronta para novas páginas no futuro.

### Fora (por enquanto)
- Páginas adicionais (portfólio completo, páginas de serviço, blog).
- Backend, banco de dados, área de login.
- Envio de formulário por e-mail ou CRM.
- Tráfego pago e landing pages de campanha.
- Chat com IA no site.
- Conteúdo inventado: depoimentos, números, clientes ou resultados sem dados reais.
