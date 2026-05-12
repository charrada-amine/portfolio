import { useState, useMemo } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/projects';

const CATEGORIES = ['All', 'Design', 'Dev', 'Branding'];

/* ─── List-style project row ────────────────────── */
const ProjectRow = ({ project, index }) => {
  const inner = (
    <div className="group flex flex-col md:flex-row md:items-center gap-5 md:gap-8 px-6 md:px-8 py-7 rounded-2xl border border-[#1a1a1a]/10 hover:border-[#e8632a]/30 hover:bg-[#e8632a]/4 transition-all duration-300 cursor-pointer">
      {/* Number */}
      <span className="font-sans text-xs text-[#1a1a1a]/28 tracking-[0.15em] shrink-0 w-7">
        {project.number}
      </span>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-serif text-2xl text-[#1a1a1a]">{project.name}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs px-3 py-1 rounded-full bg-[#1a1a1a]/6 text-[#1a1a1a]/55"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="font-sans text-sm text-[#1a1a1a]/48 leading-relaxed mb-2">
          {project.description}
        </p>
        {project.role && (
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#e8632a]/70">
            {project.role}
          </p>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5 shrink-0 md:ml-4">
        <span className="font-sans text-xs text-[#1a1a1a]/30">{project.year}</span>
        <span className="w-10 h-10 rounded-full border border-[#1a1a1a]/18 flex items-center justify-center font-sans text-[#1a1a1a] transition-all duration-200 group-hover:bg-[#e8632a] group-hover:border-[#e8632a] group-hover:text-white group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </div>
  );

  return (
    <AnimatedSection delay={index * 70}>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : inner}
    </AnimatedSection>
  );
};

/* ─── Projects page ─────────────────────────────── */
const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.category.includes(active)),
    [active]
  );

  return (
    <div className="min-h-screen bg-[#f7f3ee] pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page header */}
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-sans text-xs text-[#1a1a1a]/38 uppercase tracking-[0.2em] mb-5">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] leading-[1.02] mb-6">
              Selected Work
            </h1>
            <p className="font-sans text-[15px] text-[#1a1a1a]/50 leading-relaxed max-w-2xl">
              A selection of projects built to practice and demonstrate my skills in web development,
              mobile apps, backend engineering and interface design.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter buttons */}
        <AnimatedSection delay={80}>
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans text-sm px-5 py-2.5 rounded-full border transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#1a1a1a] text-[#f7f3ee] border-[#1a1a1a]'
                    : 'bg-transparent text-[#1a1a1a] border-[#1a1a1a]/20 hover:border-[#e8632a] hover:text-[#e8632a]'
                }`}
              >
                {cat}
                <span
                  className={`ml-2 text-xs ${
                    active === cat ? 'text-[#f7f3ee]/50' : 'text-[#1a1a1a]/35'
                  }`}
                >
                  {cat === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category.includes(cat)).length}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project list */}
        <div className="flex flex-col gap-3">
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))
          ) : (
            <p className="font-sans text-[#1a1a1a]/40 py-16 text-center">
              No projects in this category yet.
            </p>
          )}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div className="mt-20 pt-12 border-t border-[#1a1a1a]/10 text-center">
            <p className="font-sans text-sm text-[#1a1a1a]/45 mb-2">
              Have a project in mind?
            </p>
            <a
              href="/contact"
              className="font-serif text-2xl text-[#1a1a1a] hover:text-[#e8632a] transition-colors"
            >
              Let's work together →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;
