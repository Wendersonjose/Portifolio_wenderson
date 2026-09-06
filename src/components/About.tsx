import { BriefcaseBusiness, Layers3, ServerCog } from "lucide-react";

export function About() {
  return (
    <section className="section about" id="sobre">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">01 · Sobre</p>
        <h2>Experiência de negócio aplicada à tecnologia.</h2>
      </div>
      <div className="about__grid">
        <div className="about__copy" data-reveal>
          <p className="about__lead">
            Minha transição para software não começou do zero. Ela trouxe anos de experiência comercial, atendimento e pós-venda para dentro do desenvolvimento.
          </p>
          <p>
            Hoje uso essa visão para entender processos, questionar regras, antecipar falhas e construir soluções que atendem quem realmente opera o sistema. Minha principal entrega é a plataforma da Uber Hidráulica Peças, evoluída continuamente a partir de necessidades reais.
          </p>
          <p>
            Busco uma oportunidade como Desenvolvedor Full Stack Júnior ou Back-end Java Júnior, com prioridade para trabalho remoto.
          </p>
        </div>
        <div className="principles" data-reveal>
          <article><BriefcaseBusiness /><div><h3>Visão de negócio</h3><p>Antes de programar, entendo o processo, o usuário e o custo do erro.</p></div></article>
          <article><Layers3 /><div><h3>Entrega end-to-end</h3><p>Conecto interface, regras, banco de dados, integrações e deploy.</p></div></article>
          <article><ServerCog /><div><h3>Evolução contínua</h3><p>Investigo falhas, documento decisões e melhoro sistemas já em uso.</p></div></article>
        </div>
      </div>
    </section>
  );
}
