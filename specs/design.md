# Spec de design — J.Created

> Fonte de verdade **visual**. A base é o `BrandKit.md`, a logo e a peça própria "Filmmaker. Site. Design. *uma agência só.*".
> Observação: o site de referência externo (print + link) não foi entregue, porque a pasta `REFERÊNCIAS` está vazia. Quando chegar, ele serve apenas como direção de estrutura e atmosfera. Não copiar textos, imagens, logos nem layouts.
> Legenda: **[PENDENTE]** = falta definir · **[PROPOSTA]** = sugestão aguardando aprovação.

---

## 1. Direção visual
**"Escuro editorial com luz azul."**
- Tipografia como protagonista: palavras enormes, curtas, terminadas em ponto.
- Contraste entre **força** (sans pesada e compacta) e **delicadeza** (serifada itálica leve).
- Fundo azul-marinho profundo nas seções de impacto. Seções claras (branco / azul muito claro) para respiro e leitura.
- Luz como elemento: brilho radial azul saindo do escuro, com círculos concêntricos finos.
- Minimalista e sofisticado: poucos elementos, muito espaço, nada decorativo sem função.
- O sentimento final é premium, seguro, preciso e humano, adequado ao universo das clínicas sem cair no clichê "médico".

## 2. Paleta

### Principal (oficial)
| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--c-white` | Branco | `#FFFFFF` | Fundo claro, texto sobre escuro |
| `--c-blue-50` | Azul muito claro | `#E7F1FB` | Fundo de seções claras, cards claros |
| `--c-blue-300` | Azul claro | `#9EC9F3` | Assinatura em serifada, detalhes e ícones sobre escuro |
| `--c-blue-500` | Azul principal | `#2F78C8` | Botões, links, ponto da logo, foco |
| `--c-blue-900` | Azul escuro | `#173A5E` | Títulos e textos sobre claro, fundos escuros |

### Secundária
| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--c-night` | Azul noite | `#0E1A2E` | Fundo do hero e seções de impacto (visto na peça de referência) |
| `--c-ink-70` | Texto secundário claro | `#173A5E` a 70% | Parágrafos de apoio sobre fundo claro |
| `--c-white-70` | Texto secundário escuro | `#FFFFFF` a 70% | Parágrafos de apoio sobre fundo escuro |
| `--c-line` | Linhas | `#9EC9F3` a 15–25% | Divisores, círculos concêntricos, bordas sobre escuro |


### Aplicação
- **Fundo:** escuro (`--c-night` / `--c-blue-900`) no hero, nos diferenciais e no CTA final. Claro (`--c-white` / `--c-blue-50`) em serviços, ecossistema e quem somos.
- **Texto:** `--c-blue-900` sobre claro e `--c-white` sobre escuro. A serifada itálica sobre escuro usa `--c-blue-300`.
- **Botões:** o primário usa `--c-blue-500` com texto branco. Sobre escuro, usa-se a variante branca com texto `--c-blue-900`.
- **Detalhes:** ponto final das palavras em `--c-blue-500` **[PROPOSTA]**, ecoando o ponto da logo.
- Contraste conferido: branco sobre `#2F78C8` ≈ 4.5:1 (AA). `#9EC9F3` sobre `#173A5E` ≈ 6.7:1.
- **Proibido:** cores fora da paleta (verde-água "hospitalar", gradientes arco-íris, neon).

## 3. Tipografia
| Papel | Fonte | Pesos |
|---|---|---|
| Display / títulos | **Archivo** **[CONFIRMAR nome exato no PSD]** | 800 (ExtraBold) e 700 (Bold) |
| Texto, botões, menus | **Archivo** | 400 e 500 **[PROPOSTA]** |
| Assinatura / contraste | **Instrument Serif** | 400 Italic |
| Logo | Montserrat Italic (provável) | Só dentro do arquivo da logo, nunca como fonte do site |

Regras:
- Títulos de impacto com `letter-spacing` de -0.03em a -0.04em e `line-height` de 0.9 a 0.95.
- A serifada itálica é sempre em caixa baixa, curta (até ~6 palavras) e é a "voz" delicada da marca, como em "uma agência só." e no slogan.
- Nunca usar a serifada em parágrafos longos, nem a sans pesada em textos corridos.
- Ponto final como recurso: títulos-palavra terminam em "." (ex.: "Filmmaker.").

## 4. Escala tipográfica (fluida)
| Token | Uso | Tamanho (mobile → desktop) |
|---|---|---|
| `--fs-display` | Palavras do hero | `clamp(3.5rem, min(13vw, 15svh), 11rem)`. O limite de altura garante que as 4 palavras e o slogan caibam na primeira tela |
| `--fs-h1` | Títulos de seção | `clamp(2.5rem, 6vw, 5rem)` |
| `--fs-h2` | Subtítulos | `clamp(1.75rem, 3.5vw, 3rem)` |
| `--fs-h3` | Título de card | `clamp(1.25rem, 2vw, 1.75rem)` |
| `--fs-serif` | Assinatura itálica | `clamp(1.75rem, 4vw, 3.5rem)` |
| `--fs-lead` | Texto de destaque | `clamp(1.125rem, 1.6vw, 1.375rem)` |
| `--fs-body` | Texto | `1rem` a `1.125rem` (16–18 px) |
| `--fs-small` | Legendas, rótulos | `0.875rem` |

Line-height do texto: 1.5 a 1.6. Largura máxima de parágrafo: cerca de 65 caracteres.

## 5. Espaçamentos
Escala baseada em 8 px:
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

- Padding vertical de seção: 96–160 px no desktop e 64–96 px no celular.
- Margem lateral: 16 px (celular), 32 px (tablet) e 64 px+ (desktop).
- Container máximo: 1280 px. O hero pode ir até a largura total.
- Ritmo: alternar seções densas e seções de respiro. Grandes vazios são intencionais.

## 6. Bordas e raios
| Token | Valor | Uso |
|---|---|---|
| `--r-sm` | 8 px | Inputs, tags |
| `--r-md` | 16 px | Cards |
| `--r-lg` | 28 px | Blocos grandes, mídia (eco do ícone arredondado da logo) |
| `--r-pill` | 999 px | Botões, seletor de idioma |

- Bordas de 1 px. Sobre escuro, usar `--c-line`. Sobre claro, `--c-blue-900` a 10%.
- Sombras quase inexistentes. A profundidade vem de luz (glow) e contraste, não de sombra pesada.

## 7. Botões
- **Primário:** fundo `--c-blue-500`, texto branco, raio pill, altura mínima 48 px, padding horizontal 24–32 px, Archivo 500/600.
- **Primário sobre escuro:** fundo branco e texto `--c-blue-900`.
- **Secundário:** contorno de 1 px e fundo transparente.
- **WhatsApp:** usa o estilo primário com ícone do WhatsApp à esquerda. Não usar o verde do WhatsApp.
- **Hover:** leve escurecimento/clareamento e seta ou ícone deslizando 2–4 px. **Foco:** anel de 2 px `--c-blue-300` com offset.
- Texto dos botões curto e com verbo ("Falar no WhatsApp", "Enviar").

## 8. Cards
- **Serviços:** fundo `--c-white` sobre `--c-blue-50` (ou translúcido sobre escuro), raio `--r-md`, padding 32 px, borda de 1 px sutil.
- Estrutura: número ou ícone linear → título (Archivo Bold) → 1 a 2 frases → detalhe opcional (ex.: "Vila Velha/ES").
- Ícones lineares, monolineares, com espessura parecida com a do traço da logo.
- **Hover (desktop):** elevação leve (translate -4 px) e borda em `--c-blue-500`.
- Todos os cards de um mesmo grupo têm a mesma altura e a mesma estrutura.

## 9. Direção das fotografias e vídeos
- Material **real**, produzido pela J.Created (Filmmaker). Sem banco de imagens genérico de "médico sorrindo".
- Luz natural ou suave, ambientes de clínica limpos, foco em pessoas, mãos, detalhes e cuidado.
- Tratamento: tons frios e neutros, leve dessaturação, pretos profundos, com harmonia com a paleta azul.
- Enquadramentos cinematográficos (proporção 16:9 ou 2.39:1 nos vídeos, recortes amplos).
- Mídia com raio `--r-lg`. Sobreposições escuras sutis quando houver texto por cima.
- Respeitar as normas dos conselhos: nada de "antes e depois", pacientes identificáveis sem autorização ou promessas de resultado.
- [PENDENTE] Fotos de João e Júlia e o material de portfólio.

## 10. Tratamento do produto (serviços)
Como os serviços são intangíveis, eles aparecem por meio de:
- **Filmmaker:** frames e trechos de vídeo reais (poster + play).
- **Sites:** mockups de navegador ou celular com sites reais entregues.
- **Design:** peças reais em composição limpa, sobre fundo `--c-blue-50`.
- **IA:** representação abstrata e discreta (linhas, fluxo, traço contínuo). Nada de robôs ou clichês de "cérebro digital".
- Enquanto não houver material real, a seção de portfólio não entra no site. Nada de placeholders falsos.

## 11. Movimento e animações
- **Princípio:** movimento lento, preciso e com propósito. Nada chamativo.
- **Entrada do hero:** palavras sobem e aparecem em sequência ("Filmmaker." → "Site." → "Design." → "IA."), com 80–120 ms entre elas. A serifada aparece por último, com fade.
- **Glow:** o brilho radial pulsa ou se desloca muito lentamente (ciclo de 8 s ou mais).
- **Traço da logo [PROPOSTA]:** animação de "desenho" do traço contínuo (stroke) no carregamento ou como divisor de seção.
- **Scroll:** revelação suave (fade + translate de 16–24 px), duração de 400–700 ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Microinterações:** hover de botões e cards entre 150 e 250 ms.
- `prefers-reduced-motion`: todas as animações viram transições instantâneas ou somem.
- Proibido: parallax pesado, scroll sequestrado, carrossel automático, cursor customizado que atrapalhe.

## 12. Desktop × celular

### Desktop
- Hero em tela cheia, com as palavras em escada (recuos escalonados) e o glow no canto superior direito.
- Grade de 12 colunas. Serviços em 2×2 ou 4 colunas.
- Cabeçalho fixo e discreto, que ganha fundo translúcido com blur ao rolar.

### Celular
- O hero mantém as palavras empilhadas, com a escada reduzida (recuos menores) e o tamanho em `clamp`. Nenhuma palavra pode ser cortada.
- O glow fica menor e reposicionado para não competir com o texto.
- Cards em coluna única. O formulário ocupa a largura total.
- Botão flutuante do WhatsApp no canto inferior direito, escondido quando o formulário estiver visível.
- Menu hambúrguer com o seletor PT/EN/ES dentro.

## 13. Elementos a evitar
- Estética "hospitalar" genérica: verde-água, cruzes, estetoscópios, ícones médicos clichê.
- Fotos de banco de imagem e ilustrações 3D genéricas.
- Gradientes coloridos, neon, glassmorphism exagerado.
- Excesso de sombras, bordas grossas, muitos raios diferentes.
- Mais de 2 famílias tipográficas no site.
- Serifada itálica em textos longos ou em botões.
- Texto centralizado em blocos longos.
- Selos, números e depoimentos inventados.
- Copiar layout, textos ou identidade de qualquer referência externa.
- Animações em excesso ou que atrasem a leitura do conteúdo.
