# PsicoPlanilhas 2.0 — guia do projeto

Landing page de vendas (Next.js 16 App Router + Turbopack, React 19, TypeScript).
Página única + rotas de afiliado. **Sem framework de CSS** — CSS puro com design tokens.

## Rodar e verificar
- `npm run dev` → http://localhost:3000 — **deixe rodando ao editar** (metade da lentidão é não ver o resultado ao vivo).
- `npm run build` → valida tipos + gera as páginas estáticas.
- **Regra de ouro: meça/diagnostique antes de editar.** Veja o estilo computado no navegador (DevTools) ou rode o build e confira o HTML gerado. Não chute CSS — cada bug aqui teve uma causa concreta pequena.

## Onde as coisas moram
- `src/app/layout.tsx` — metadata (SEO/OpenGraph), fontes. Fontes: Inter (`--font-sans`), Source Serif 4 (`--font-serif`).
- `src/app/page.tsx` — home; renderiza `<Landing checkoutUrl={base}>`.
- `src/app/[affiliate]/page.tsx` — rotas de afiliado (`/lais`, `/livia`, `/jayane`); `noindex`; slug fora do mapa = 404.
- `src/app/globals.css` — **TODO o CSS + os design tokens.** Arquivo único.
- `src/app/icon.svg` — favicon (o "P" verde). O Next liga sozinho; não precisa de config no layout.
- `src/components/site/landing.tsx` — composição da página (Header → seções → Footer); recebe `checkoutUrl`.
- `src/components/site/*.tsx` — um componente por seção (header, hero, audiences, spreadsheets, how-it-works, assistants, testimonials, offer, faq, notice, footer, whatsapp-float).
- `src/content/*.ts` — só dados (textos/listas), separados da marcação: audiences, spreadsheets, assistants, testimonials, faq, affiliates, types.

## Design tokens (`:root` em globals.css) — use, não hardcode valor
- **Cores:** `--paper` #fff · `--surface` #f7f8f9 (fundo das seções alt) · `--line` (bordas) · `--ink`/`--ink-soft` (texto) · `--brand` #0e7c6b (verde da marca) · `--brand-soft` · `--petrol` #0d3340 (card de oferta) · `--action` #f0563f (botão) · `--whatsapp`.
- **Espaço:** `--s-1` (4px) … `--s-32` (128px).
- **Tipo:** `--text-xs` (13px) … `--text-5xl` (60px); `--leading-tight` / `--leading-body`.
- **Raio:** `--radius-sm` 8 · `--radius-md` 14 · `--radius-lg` 24. **Sombra:** `--shadow-sm/md`.

## Padrões
- Componentes são **Server Components** (sem `"use client"`, salvo interação real).
- **Seção:** `<section [className="section--alt"]>` › `.container` › `.section-head` (`.eyebrow` + `h2` + `p`) › grid de conteúdo.
- **Cards** (audiences, assistants, testimonials) dividem UMA regra: `.audience-card, .assistant-card, .testimonial-card`. Mantenha unificado — mexeu num, mexe nos três.
- **Checkout:** base + afiliados em `src/content/affiliates.ts`, entregue via prop `checkoutUrl` → `<Offer>`. **Afiliado novo = 1 linha** no mapa `affiliates` (a rota `/nome` nasce sozinha).

## Armadilhas já encontradas (não repita)
- `<figure>` / `<blockquote>` trazem **margem padrão do navegador** (16px 40px) — zere. (Foi o bug de alinhamento dos cards de depoimento.)
- O degradê preto do `<video controls>` é a **barra de controles nativa do navegador** — não dá pra recolorir de forma confiável. Zeramos o fundo com `::-webkit-media-controls-panel { background: none }` (só Chrome/Edge/Safari; Firefox usa os próprios controles).
- **Favicon cacheia forte** — Ctrl+Shift+R depois de publicar pra ver a mudança.
- Páginas de afiliado são `noindex` de propósito (são cópias da home; evita conteúdo duplicado no Google).

## Git
- Commits e push **direto na `main`** (sem branch/PR). Mensagens conventional em PT: `fix/feat/style/refactor`.
- **Não** commitar `.claude/` (config local de dev).
