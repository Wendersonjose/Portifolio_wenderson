import { Menu, Moon, Sun, X } from "lucide-react";
import type { Theme } from "../types";

const navigation = [
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Experiência", "#experiencia"],
  ["Stack", "#stack"],
  ["Contato", "#contato"],
];

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Header({ theme, onToggleTheme, menuOpen, onToggleMenu, onCloseMenu }: HeaderProps) {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        <span className="brand__mark">WJ</span>
        <span className="brand__name">Wenderson José</span>
      </a>

      <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Navegação principal">
        {navigation.map(([label, href]) => (
          <a href={href} key={href} onClick={onCloseMenu}>{label}</a>
        ))}
      </nav>

      <div className="topbar__actions">
        <button
          className="icon-button"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
