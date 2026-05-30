import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { FeaturedProject } from '../types';

interface ProjectTileProps {
  index: number;
  project: FeaturedProject & { thumb?: string };
  variants: Variants;
}

export function ProjectTile({ index, project, variants }: ProjectTileProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      className="project-row"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <span className="project-row-number">/ {number}</span>
      <h3 className="project-row-title">{project.title}</h3>
      <div className="project-row-meta">
        <span className="project-row-role">{project.role}</span>
        <p className="project-row-summary">{project.summary}</p>
      </div>
      <span className="project-row-year">
        {project.year}
        <ArrowUpRight size={14} style={{ marginLeft: 6, verticalAlign: 'middle' }} />
      </span>
      {project.thumb && (
        <div className="project-thumb" aria-hidden="true">
          <img src={project.thumb} alt="" />
          <span className="project-thumb-tag">{project.eyebrow}</span>
        </div>
      )}
    </motion.article>
  );
}
