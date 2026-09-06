import { Check } from "lucide-react";
import type { Project } from "../data";

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "erp") {
    return (
      <div className="project-art project-art--erp" aria-hidden="true">
        <div className="mini-window">
          <div className="mini-window__bar"><i /><i /><i /></div>
          <div className="erp-grid">
            <span className="erp-sidebar" />
            <span className="erp-kpi erp-kpi--one" />
            <span className="erp-kpi erp-kpi--two" />
            <span className="erp-chart" />
            <span className="erp-table" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "industry") {
    return (
      <div className="project-art project-art--industry" aria-hidden="true">
        <div className="industry-mark"><span>M</span></div>
        <div className="industry-lines"><i /><i /><i /></div>
        <div className="industry-machine"><span /><span /><span /></div>
      </div>
    );
  }

  if (type === "nutrition") {
    return (
      <div className="project-art project-art--nutrition" aria-hidden="true">
        <span className="nutrition-leaf nutrition-leaf--one" />
        <span className="nutrition-leaf nutrition-leaf--two" />
        <div className="nutrition-card">
          <span className="nutrition-card__photo"><i /></span>
          <span className="nutrition-card__copy"><i /><i /><i /></span>
          <span className="nutrition-card__button" />
        </div>
        <span className="nutrition-badge">L</span>
      </div>
    );
  }

  if (type === "map") {
    return (
      <div className="project-art project-art--map" aria-hidden="true">
        <span className="road road--one" /><span className="road road--two" />
        <span className="map-pin map-pin--one" /><span className="map-pin map-pin--two" />
        <span className="map-panel"><i /><i /><i /></span>
      </div>
    );
  }

  return (
    <div className="project-art project-art--list" aria-hidden="true">
      {["Arroz", "Feijão", "Café"].map((item) => (
        <span className="list-row" key={item}><i><Check size={12} /></i><b>{item}</b><em /></span>
      ))}
    </div>
  );
}
