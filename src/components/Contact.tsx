import { ArrowRight, BriefcaseBusiness, GitFork, Mail, MapPin } from "lucide-react";
import { contactEmail } from "../data";

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="contact__card" data-reveal>
        <div>
          <p className="section-kicker">05 · Contato</p>
          <h2>Tem um problema real para resolver?</h2>
          <p>Estou disponível para oportunidades remotas em desenvolvimento Full Stack e Back-end Java Júnior.</p>
        </div>
        <div className="contact__actions">
          <a className="button button--light" href={`mailto:${contactEmail}`}><Mail size={18} /> Enviar e-mail</a>
          <a className="contact-link" href="https://www.linkedin.com/in/wenderson-jose" target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn <ArrowRight size={16} /></a>
          <a className="contact-link" href="https://github.com/Wendersonjose" target="_blank" rel="noreferrer"><GitFork size={18} /> GitHub <ArrowRight size={16} /></a>
          <span className="contact-location"><MapPin size={18} /> Uberlândia · MG</span>
        </div>
      </div>
    </section>
  );
}
