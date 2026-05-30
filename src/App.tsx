import { useEffect } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Compass,
  Download,
  Github,
  GraduationCap,
  Layers,
  Mail,
  MapPinned,
} from 'lucide-react';
import {
  compactProjects,
  contactLinks,
  experience,
  featuredProjects,
  fitNotes,
  identityCards,
  profile,
  skillGroups,
} from './content';
import { CTAButton } from './components/CTAButton';
import { ExperienceRow } from './components/ExperienceRow';
import { ProjectTile } from './components/ProjectTile';
import { SectionLabel } from './components/SectionLabel';
import { ShapeLayer } from './components/ShapeLayer';
import { SkillCluster } from './components/SkillCluster';

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const identityIcons = [
  <BrainCircuit size={26} key="brain" />,
  <Compass size={26} key="compass" />,
  <Layers size={26} key="layers" />,
];

const marqueeItems = [
  { text: 'Frontend engineering', dot: 'cobalt' },
  { text: 'AI product design', dot: 'tangerine' },
  { text: 'Systems clarity', dot: 'citron' },
  { text: 'Taste · Trust · Craft', dot: 'blush', emphasis: true },
  { text: 'React × TypeScript × Python', dot: 'cobalt' },
];

function App() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const updatePointer = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointer);
    return () => window.removeEventListener('pointermove', updatePointer);
  }, [reduceMotion]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark">HH</span>
          <span>{profile.name}</span>
        </a>
        <nav className="topnav">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="topbar-cta" href={`mailto:${profile.email}`}>
          <span className="topbar-cta-dot" aria-hidden="true" />
          Available · 2026
        </a>
      </header>

      <main>
        <section className="hero section" id="hero">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div className="hero-status" variants={reveal}>
              <span className="dot" aria-hidden="true" />
              Open to AI-product roles, Fall 2026
            </motion.div>

            <motion.h1 variants={reveal}>
              I build the layer between{' '}
              <span className="serif">complex</span>{' '}
              <span className="accent-block">AI systems</span>{' '}
              <br /> and the people using them.
            </motion.h1>

            <motion.p className="hero-intro" variants={reveal}>
              I&apos;m Hiva Hakimzadeh, a frontend engineer working across React,
              TypeScript, Python, and applied AI. My best work happens when
              something technically heavy needs to feel clear, usable, and real.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <CTAButton href="#work" variant="primary" icon={<ArrowRight size={18} />}>
                See selected work
              </CTAButton>
              <CTAButton
                href={profile.resume}
                variant="secondary"
                icon={<Download size={18} />}
                newTab
              >
                Resume
              </CTAButton>
              <CTAButton
                href={profile.github}
                variant="secondary"
                icon={<Github size={18} />}
                newTab
              >
                GitHub
              </CTAButton>
            </motion.div>

            <motion.div className="hero-meta" variants={reveal}>
              <span>
                <MapPinned size={16} />
                {profile.location}
              </span>
              <span>
                <GraduationCap size={16} />
                UTD · CS, MS Data Science 2026
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-board"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-glyph hero-glyph--asterisk" aria-hidden="true">
              ✶
            </span>
            <span className="hero-glyph hero-glyph--circle" aria-hidden="true" />
            <div className="hero-prism" aria-hidden="true">
              <ShapeLayer variant="prism" />
            </div>
            <div className="hero-portrait">
              <img src="/hiva-portrait.jpg" alt="Hiva Hakimzadeh" />
            </div>

            <div className="hero-sticker hero-sticker--1">
              <div>
                <div className="sticker-label">Now</div>
                <div className="sticker-value">Frontend @ 4Minds AI</div>
              </div>
            </div>
            <div className="hero-sticker hero-sticker--2">
              <div>
                <div className="sticker-label">Focus</div>
                <div className="sticker-value">Trustworthy AI UX</div>
              </div>
            </div>
            <div className="hero-sticker hero-sticker--3">
              <div>
                <div className="sticker-label">Stack</div>
                <div className="sticker-value">React · TS · Python</div>
              </div>
            </div>
            <div className="hero-sticker hero-sticker--4">
              <div>
                <div className="sticker-label">Base</div>
                <div className="sticker-value">Dallas, TX</div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span className="marquee-item" key={`m-${i}`}>
                {item.emphasis ? <em>{item.text}</em> : item.text}
                <span className={`marquee-dot marquee-dot--${item.dot}`} />
              </span>
            ))}
          </div>
        </div>

        <section className="identity section">
          <div className="section-heading">
            <SectionLabel>What I actually bring</SectionLabel>
            <h2>
              Not just frontend. Not just ML. The <em>bridge</em> between system depth and product feel.
            </h2>
          </div>
          <div className="identity-grid">
            {identityCards.map((card, index) => (
              <motion.article
                className="identity-card"
                key={card.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={reveal}
              >
                <span className="identity-card-number">
                  / {String(index + 1).padStart(2, '0')}
                </span>
                <div className="identity-glyph">{identityIcons[index]}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="project-archive section" id="work">
          <div className="project-archive-intro">
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <SectionLabel>Selected work · 2022 — 2026</SectionLabel>
              <h2>
                Real projects where AI behavior, interface quality, and product <em>thinking</em> meet.
              </h2>
            </div>
            <span className="project-archive-meta">
              {featuredProjects.length} projects · hover for preview
            </span>
          </div>
          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <ProjectTile
                key={project.title}
                index={index}
                project={project}
                variants={reveal}
              />
            ))}
          </div>
        </section>

        <section className="systems section" id="experience">
          <div className="systems-layout">
            <motion.div
              className="systems-side"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <div className="section-heading" style={{ marginBottom: 0 }}>
                <SectionLabel>Experience + Toolkit</SectionLabel>
                <h2>
                  I fit best on teams building ambitious products that still need <em>taste</em>.
                </h2>
              </div>
              <div className="fit-list">
                {fitNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </motion.div>

            <div className="systems-main">
              <div>
                <div className="systems-block-label">Where I&apos;ve worked</div>
                <div className="experience-list">
                  {experience.map((item) => (
                    <ExperienceRow
                      key={`${item.company}-${item.role}`}
                      item={item}
                      variants={reveal}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="systems-block-label">Toolkit</div>
                <div className="skill-clusters">
                  {skillGroups.map((group) => (
                    <SkillCluster key={group.name} group={group} variants={reveal} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lab section">
          <div className="section-heading">
            <SectionLabel>Studio lab · side builds</SectionLabel>
            <h2>
              Smaller builds that round out the <em>range</em>.
            </h2>
          </div>
          <div className="lab-grid">
            {compactProjects.map((project) => (
              <motion.article
                className="lab-card"
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
              >
                <div>
                  <div className="lab-card-glyph">
                    <ArrowUpRight size={18} />
                  </div>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="about-paper" id="about">
          <div className="about-layout">
            <motion.div
              className="about-portrait"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img className="about-portrait-img" src="/hiva-portrait.jpg" alt="Portrait of Hiva Hakimzadeh" />
              <span className="about-portrait-tag">Hiva, 2026</span>
              <div className="about-portrait-sticker">
                Frontend ✦ AI ✦ Product
              </div>
            </motion.div>

            <motion.div
              className="about-copy"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel>About</SectionLabel>
              <h2 style={{ marginTop: 18 }}>
                I care about the moment technical systems finally become <em>usable</em>.
              </h2>
              <p>
                My work spans enterprise AI platforms, LLM-powered interfaces,
                full-stack product builds, and UI/UX decisions that make complex
                workflows feel coherent. I like ambiguity when it leads to shape.
              </p>
              <p>
                That&apos;s why the throughline across my projects is consistent:
                take something technically dense, give it structure, and turn it
                into software that feels intentional.
              </p>
              <div className="about-meta">
                <span>Dallas, TX</span>
                <span>UTD · CS</span>
                <span>MS Data Science · Fall 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <motion.div
            className="contact-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <div className="contact-headline">
              <SectionLabel>Let&apos;s build something</SectionLabel>
              <h2>
                Let&apos;s build products that feel sharper than the systems <em>behind</em> them.
              </h2>
            </div>
            <div className="contact-side">
              <p>
                I&apos;m most energized by products where model behavior, product
                trust, and interface quality all matter at once.
              </p>
              <div className="contact-actions">
                <CTAButton
                  href={`mailto:${profile.email}`}
                  variant="primary"
                  icon={<Mail size={18} />}
                >
                  Email me
                </CTAButton>
                {contactLinks
                  .filter((l) => !l.href.startsWith('mailto:'))
                  .map((link) => (
                    <CTAButton
                      key={link.label}
                      href={link.href}
                      variant="secondary"
                      icon={<ArrowUpRight size={18} />}
                      newTab
                    >
                      {link.label}
                    </CTAButton>
                  ))}
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="site-footer">
          <span>
            <span className="footer-dot" />© 2026 Hiva Hakimzadeh
          </span>
          <span>Designed &amp; built in Dallas · React · TypeScript</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
