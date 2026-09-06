export const contactEmail = "wenderson.teles@icloud.com";

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  tags: string[];
  primaryLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  visual: "erp" | "industry" | "nutrition" | "map" | "list";
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    title: "Plataforma Uber Hidráulica",
    eyebrow: "Produto real · Full Stack",
    description:
      "Ecossistema web criado para apoiar uma operação comercial real, conectando catálogo público e ferramentas internas de gestão.",
    impact:
      "Atuação end-to-end em um sistema com uso diário real: catálogo público separado das ferramentas internas de gestão, API REST centralizando as regras de negócio e deploy contínuo em produção.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST"],
    primaryLink: {
      label: "Ver estudo de caso",
      href: "https://github.com/Wendersonjose/Wendersonjose/blob/main/docs/erp-uber-hidraulica.md",
    },
    secondaryLink: {
      label: "Acessar catálogo",
      href: "https://www.uberhidraulicapecas.com.br/",
    },
    visual: "erp",
    image: { src: "/projects/uber-hidraulica.webp", alt: "Página inicial do catálogo da Uber Hidráulica Peças" },
  },
  {
    title: "MECATEC Serviços",
    eyebrow: "Cliente real · Frontend",
    description:
      "Site institucional responsivo para uma empresa de manutenção e locação de máquinas pesadas, publicado em domínio próprio.",
    impact:
      "Componentização por seção (serviços, máquinas disponíveis, contato), layout mobile-first e publicação em domínio próprio do cliente.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    primaryLink: {
      label: "Visitar projeto",
      href: "https://www.mecatecservicos.com.br/",
    },
    visual: "industry",
    image: { src: "/projects/mecatec.webp", alt: "Página inicial do site da MECATEC Serviços" },
  },
  {
    title: "Nutricionista Lívia",
    eyebrow: "Cliente real · Website",
    description:
      "Site profissional para uma nutricionista materno-infantil, com apresentação dos serviços, prova social, blog e agendamento pelo WhatsApp.",
    impact:
      "Experiência responsiva, estrutura otimizada para SEO e chamadas para ação orientadas à conversão de visitantes em consultas.",
    tags: ["Responsividade", "SEO", "CTA", "Conversão"],
    primaryLink: {
      label: "Visitar projeto",
      href: "https://www.nutricionistalivia.com.br/",
    },
    visual: "nutrition",
    image: { src: "/projects/nutricionista-livia.webp", alt: "Página inicial do site da Nutricionista Lívia Verônica" },
  },
  {
    title: "Mapa de Locais Favoritos",
    eyebrow: "Desafio técnico · Frontend",
    description:
      "Aplicação para pesquisar endereços e CEPs, navegar pelo mapa e organizar locais favoritos com persistência local.",
    impact:
      "Integração de APIs, geocodificação reversa, cache de requisições e estado global organizado por feature.",
    tags: ["React", "Leaflet", "Zustand", "TanStack Query"],
    primaryLink: {
      label: "Abrir demonstração",
      href: "https://react-map-locations.vercel.app/",
    },
    secondaryLink: {
      label: "Ver código",
      href: "https://github.com/Wendersonjose/react-map-locations",
    },
    visual: "map",
    image: { src: "/projects/mapa-locais-favoritos.webp", alt: "Interface do app Mapa de Locais Favoritos, com lista de locais salvos e mapa interativo" },
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "Zustand", "React Query"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Java 17", "Spring Boot", "Python", "FastAPI", "APIs REST"],
  },
  {
    title: "Dados & entrega",
    items: ["PostgreSQL", "MySQL", "Supabase", "Docker", "Git/GitHub", "Vercel", "Render"],
  },
];
