import { stackGroups } from "../data";

export function Skills() {
  return (
    <section className="section skills" id="stack">
      <div className="section-heading section-heading--split" data-reveal>
        <div><p className="section-kicker">04 · Stack</p><h2>Ferramentas para entregar o produto completo.</h2></div>
        <p>Java e Spring Boot estão em consolidação; React, TypeScript, Node.js e PostgreSQL concentram minha experiência prática atual.</p>
      </div>
      <div className="skills__grid">
        {stackGroups.map((group, index) => (
          <article key={group.title} data-reveal>
            <span className="skills__number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <div className="skills__items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
