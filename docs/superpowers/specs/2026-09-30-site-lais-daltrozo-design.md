# Site Laís Daltrozo — Design

## Contexto

Laís Daltrozo vende Life Insurance, Estate Planning e (mais recentemente) serviços de mediação. O site foca em Life Insurance como produto principal, com Estate Planning como serviço complementar — Mediação fica fora do escopo por ora.

Objetivo de conversão principal: agendar consultoria via Calendly.

Já existe um linktree simples em `laisdaltrozo.vercel.app` com:
- Título "Consultoria Patrimonial"
- CTA "Agendar Consultoria" → `https://calendly.com/laisdaltrozo/30min`
- CTA "Entrar em Contato" → WhatsApp (`https://wa.me/13127097886`)
- Material de apoio: "Checklist Patrimonial" (Google Drive)
- NPN 21436256 (licença — aparece no rodapé)

## Ferramentas / Infra

- Deploy: Vercel, conta "Victor Ferro's projects" (projeto ainda não criado lá)
- Domínio: `laisdaltrozo.com` (já está na conta Vercel)
- Repositório: `https://github.com/euvictorferro/LaisWebsite.git`
- Identidade visual (logo, cores, fontes): fornecida pela Laís/Victor a partir do material existente — não criada do zero

## Escopo

Três páginas, apenas uma navegável publicamente como "site":

1. **Home (`/`)** — landing page principal, bilíngue (PT/EN)
2. **Serviços (`/servicos`)** — não é uma página de conteúdo; existe só como redirect fixo
3. **Linktree (`/linktree`)** — página de links para a bio do Instagram

Fora de escopo nesta fase: Mediação, CRM/captura de lead em banco de dados, blog/CMS, painel administrativo.

## Stack técnica

- **Next.js (App Router)** — recomendado por já ser o padrão da Vercel, ótimo suporte a SEO (importante pra uma landing page) e simples de manter em 3 rotas.
- **Tailwind CSS** para estilo.
- Sem CMS e sem banco de dados: conteúdo vive em arquivos do próprio repo (texto, config de links). Não há necessidade de persistência — tudo é estático/CTA externo (Calendly, WhatsApp, Drive).
- Vídeo: embutido via player simples (ex: tag `<video>` ou embed do provedor onde for hospedado — YouTube/Vimeo não escolhido ainda). Enquanto o vídeo não existe, a seção sobe com um placeholder (imagem estática + texto "em breve").

## Idioma (PT/EN)

- Duas rotas paralelas de conteúdo: `/` (PT, padrão) e `/en` (EN), ambas renderizando o mesmo layout de Home com textos diferentes.
- Sem lib de i18n (`next-intl` etc.) — sobrecarga desnecessária para 1 página com 2 idiomas. Os textos de cada idioma ficam em dois arquivos de conteúdo simples (ex: `content/home.pt.ts` e `content/home.en.ts`) importados pela página correspondente.
- Seletor de idioma simples no header (link `/` ↔ `/en`).
- `/servicos` e `/linktree` não precisam de versão EN nesta fase (uso interno/bio, não é a landing pública principal) — a menos que surja necessidade depois.

## Estrutura de rotas

```
/              → Home PT (landing page completa)
/en            → Home EN (mesmo layout, conteúdo em inglês)
/servicos      → redirect 301 para /#servicos (âncora na Home)
/linktree      → página de links (standalone, layout diferente da Home)
```

`/servicos` existe como endereço fixo e estável (para ser usado em bio, anúncio, etc.) mesmo que a seção correspondente mude de lugar dentro da Home — o redirect é o único conteúdo dessa rota.

## Seções da Home

1. **Hero** — vídeo explicativo (ou placeholder) + CTA principal "Agendar Consultoria" (Calendly)
2. **Método** (`#metodo`) — explica IUL, Whole Life, Term, benefícios em vida
3. **Estate Planning** (`#servicos`) — serviço complementar; é a âncora-alvo do redirect de `/servicos`
4. **CTA final** — repete Calendly + WhatsApp

Copy de "Método" e "Estate Planning": rascunho inicial escrito por Victor/Claude, revisado pela Laís antes de publicar (ela não é especialista em explicar os produtos em texto, mas valida o conteúdo).

## Página Linktree

Porta o conteúdo do linktree atual (`laisdaltrozo.vercel.app`) pro novo visual/stack:
- Agendar Consultoria → Calendly
- Entrar em Contato → WhatsApp
- Checklist Patrimonial → Google Drive
- Rodapé com NPN

Lista final de links pode ser ajustada depois — a estrutura de dados (array de `{label, url}`) permite adicionar/remover sem mexer em layout.

## Vídeo

Não existe ainda. Roteiro será produzido como parte deste trabalho, mas **não bloqueia** o lançamento do site — a seção Hero sobe com placeholder até o vídeo ficar pronto, e depois é só trocar o embed.

## Pendências (não bloqueiam o início da implementação)

- Roteiro definitivo do vídeo
- Copy final de Estate Planning e Método (draft primeiro, revisão da Laís depois)
- Identidade visual definitiva (logo/paleta) — usar o que já existe no Instagram/linktree atual até receber arquivos oficiais
- Confirmar se algum canal (ex: anúncio) já vai usar `/servicos` no lançamento, ou se é só uma reserva de rota

## Fora de escopo

- Mediação (produto novo, não faz parte do foco inicial)
- CRM, captura de lead em banco de dados, formulários com backend
- Blog, CMS, área administrativa
- Testes automatizados de UI (landing estática, sem lógica de negócio complexa — verificação manual em preview do Vercel é suficiente)
