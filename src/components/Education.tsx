import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="section education">
      <div className="education__card" data-reveal>
        <div className="education__icon"><GraduationCap size={28} /></div>
        <div><p className="section-kicker">Formação</p><h2>Análise e Desenvolvimento de Sistemas</h2><p>Centro Universitário do Triângulo · Conclusão em 2026</p></div>
        <div className="education__courses"><span>Back-end Java · Alura</span><span>Node.js e APIs REST · FIAP</span><span>Java · Formação complementar</span><span>Docker e QA</span></div>
      </div>
    </section>
  );
}
