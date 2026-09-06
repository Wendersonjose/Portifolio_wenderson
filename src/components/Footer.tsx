import { Code2, GitFork } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <a className="brand" href="#inicio"><span className="brand__mark">WJ</span><span className="brand__name">Wenderson José</span></a>
      <p>Desenvolvido com React, TypeScript e atenção aos detalhes.</p>
      <div><a href="https://github.com/Wendersonjose" aria-label="GitHub"><GitFork size={19} /></a><a href="https://www.linkedin.com/in/wenderson-jose" aria-label="LinkedIn"><Code2 size={19} /></a></div>
    </footer>
  );
}
