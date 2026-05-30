import { motion, type Variants } from 'framer-motion';
import type { SkillGroup } from '../types';

interface SkillClusterProps {
  group: SkillGroup;
  variants: Variants;
}

export function SkillCluster({ group, variants }: SkillClusterProps) {
  return (
    <motion.article
      className="skill-card"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <h3>{group.name}</h3>
      <div className="tag-row">
        {group.skills.map((skill) => (
          <span className="tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
