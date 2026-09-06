import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { contactEmail } from "../data";

function canUseTilt() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function useTiltEnabled() {
  const [enabled, setEnabled] = useState(canUseTilt);

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(canUseTilt());

    hoverQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      hoverQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

export function Hero() {
  const tiltEnabled = useTiltEnabled();

  const codeCard = (
    <div className="code-card">
      <div className="code-card__header">
        <span><i /><i /><i /></span>
        <small>wenderson.profile.ts</small>
      </div>
      <pre><code><span className="code-muted">01</span> <span className="code-key">const</span> developer = {'{'}
<span className="code-muted">02</span>   name: <span className="code-value">"Wenderson José"</span>,
<span className="code-muted">03</span>   role: <span className="code-value">"Full Stack Developer"</span>,
<span className="code-muted">04</span>   focus: [
<span className="code-muted">05</span>     <span className="code-value">"React + TypeScript"</span>,
<span className="code-muted">06</span>     <span className="code-value">"Node.js + PostgreSQL"</span>,
<span className="code-muted">07</span>     <span className="code-value">"Java + Spring Boot"</span>,
<span className="code-muted">08</span>   ],
<span className="code-muted">09</span>   mindset: <span className="code-value">"resolver problemas reais"</span>
<span className="code-muted">10</span> {'}'};</code></pre>
      <div className="code-card__status"><span /> sistemas reais em produção</div>
    </div>
  );

  return (
    <section className="hero section" id="inicio">
      <div className="hero__content">
        <p className="eyebrow"><span /> Disponível para oportunidades remotas</p>
        <h1>Transformo regras de negócio em <em>software que funciona.</em></h1>
        <p className="hero__lead">
          Desenvolvedor Full Stack com experiência prática em aplicações reais, do frontend e da API até o banco de dados e o deploy.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projetos">Ver projetos <ArrowDown size={17} /></a>
          <a className="button button--ghost" href={`mailto:${contactEmail}`}>Entrar em contato <ArrowRight size={17} /></a>
        </div>
        <div className="hero__facts" aria-label="Resumo profissional">
          <div><strong>3+</strong><span>projetos para negócios reais</span></div>
          <div><strong>Full Stack</strong><span>interface, API, dados e deploy</span></div>
          <div><strong>ADS</strong><span>formação concluída em 2026</span></div>
        </div>
      </div>

      <div className="hero__panel">
        <div className="hero-code-floating">
          {tiltEnabled ? (
            <Tilt
              className="hero-code-tilt"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.02}
              transitionSpeed={1000}
              glareEnable
              glareMaxOpacity={0.1}
              glarePosition="all"
              glareBorderRadius="26px"
            >
              {codeCard}
            </Tilt>
          ) : (
            codeCard
          )}
        </div>
        <a className="scroll-cue" href="#sobre"><span>Conheça minha trajetória</span><ArrowDown size={17} /></a>
      </div>
    </section>
  );
}
