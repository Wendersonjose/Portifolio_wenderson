# Portfólio — Wenderson José

Portfólio profissional desenvolvido com React, TypeScript e Vite para apresentar projetos reais, experiência, formação e stack técnica.

## Principais características

- Tema claro e escuro com preferência persistida.
- Layout responsivo para celular, tablet e desktop.
- Navegação acessível e suporte a `prefers-reduced-motion`.
- Projetos com contexto, impacto, tecnologias e links verificáveis.
- Conteúdo orientado a vagas Full Stack e Back-end Java Júnior.

## Executar localmente

```bash
npm install
npm run dev
```

## Lint

```bash
npm run lint
```

## Build de produção

```bash
npm run build
npm run preview
```

O conteúdo compilado será criado na pasta `dist`. A cada push/PR para `main`, o workflow em `.github/workflows/ci.yml` roda lint e build automaticamente.

## Antes de publicar

1. Confirme todos os links em `src/data.ts`.
2. Substitua o domínio placeholder `wenderson-portfolio.vercel.app` pelo domínio final em `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD), `public/robots.txt` e `public/sitemap.xml`.
3. Troque `public/og-image.svg` por uma versão em PNG/JPEG real — LinkedIn e Facebook não garantem suporte a SVG em `og:image`.
4. Faça o deploy na Vercel ou em outro serviço compatível com sites estáticos.

## Contato

- [LinkedIn](https://www.linkedin.com/in/wenderson-jose)
- [GitHub](https://github.com/Wendersonjose)
