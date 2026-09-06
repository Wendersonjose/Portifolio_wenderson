import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data";
import { ProjectVisual } from "./ProjectVisual";

export function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="section-heading section-heading--split" data-reveal>
        <div><p className="section-kicker">02 · Projetos</p><h2>Projetos que mostram execução.</h2></div>
        <p>Menos exercícios soltos. Mais contexto, decisões técnicas e resultado verificável.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <article className={`project-card project-card--${index + 1}`} key={project.title} data-reveal>
            <ProjectVisual type={project.visual} />
            <div className="project-card__body">
              <p className="project-card__eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-card__impact">{project.impact}</p>
              <ul className="tag-list" aria-label={`Tecnologias e características do projeto ${project.title}`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="project-card__links">
                <a href={project.primaryLink.href} target="_blank" rel="noreferrer">
                  {project.primaryLink.label} <ExternalLink size={15} />
                </a>
                {project.secondaryLink && (
                  <a href={project.secondaryLink.href} target="_blank" rel="noreferrer">
                    {project.secondaryLink.label} <ArrowRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
