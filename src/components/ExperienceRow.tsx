import { motion, type Variants } from 'framer-motion';
import type { ExperienceItem } from '../types';

interface ExperienceRowProps {
  item: ExperienceItem;
  variants: Variants;
}

export function ExperienceRow({ item, variants }: ExperienceRowProps) {
  return (
    <motion.article
      className="timeline-card"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants}
    >
      <span className="timeline-year">{item.timeframe}</span>
      <div className="timeline-content">
        <h3>{item.company}</h3>
        <span className="timeline-role">{item.role}</span>
        <p>{item.description}</p>
      </div>
    </motion.article>
  );
}
