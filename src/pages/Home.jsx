import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import MarqueeBanner from '../components/MarqueeBanner';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

/* ─── Count-up hook ─────────────────────────────── */
const useCountUp = (target, duration = 1800, enabled = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, enabled]);
  return count;
};

const StatItem = ({ target, label, suffix = '+' }) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(target, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.unobserve(el); } },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-5xl md:text-6xl text-[#1a1a1a]">
        {count}
        <span className="text-[#e8632a]">{suffix}</span>
      </p>
      <p className="font-sans text-xs text-[#1a1a1a]/50 uppercase tracking-[0.18em] mt-2">
        {label}
      </p>
    </div>
  );
};

/* ─── Home page ─────────────────────────────────── */
const Home = () => (
  <div className="bg-[#f7f3ee] min-h-screen">

    {/* ── Hero ── */}
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-[#1a1a1a]/6 border border-[#1a1a1a]/10 px-4 py-2 rounded-full mb-10">
              <span className="w-2 h-2 rounded-full bg-[#e8632a] pulse-dot" />
              <span className="font-sans text-sm text-[#1a1a1a]/65">
                Disponible pour un stage / alternance
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.08] tracking-tight mb-7 text-[#1a1a1a]">
              Ingénieur en devenir,<br />
              code qui{' '}
              <em className="text-[#e8632a]">impacte.</em>
            </h1>

            <p className="font-sans text-lg text-[#1a1a1a]/58 leading-relaxed mb-10 max-w-md">
              Salut, je suis Amine — étudiant ingénieur à ESPRIT, Tunis. Je construis
              des applications full-stack, des plateformes DevOps et des solutions
              mobiles qui résolvent de vrais problèmes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-[#1a1a1a] text-[#f7f3ee] font-sans px-7 py-3.5 rounded-full hover:bg-[#e8632a] transition-colors duration-200"
              >
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="border border-[#1a1a1a]/22 text-[#1a1a1a] font-sans px-7 py-3.5 rounded-full hover:border-[#e8632a] hover:text-[#e8632a] transition-colors duration-200"
              >
                Me contacter
              </Link>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <a href="https://github.com/charrada-amine" target="_blank" rel="noopener noreferrer"
                 className="font-sans text-xs text-[#1a1a1a]/45 hover:text-[#e8632a] transition-colors flex items-center gap-1.5">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/mohamed-amine-charrada-17a494315/" target="_blank" rel="noopener noreferrer"
                 className="font-sans text-xs text-[#1a1a1a]/45 hover:text-[#e8632a] transition-colors flex items-center gap-1.5">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right — photo + floating badges */}
          <div className="flex justify-center relative mt-8 lg:mt-0">
            {/* Real photo — blend sur fond crème */}
            <div className="relative w-64 md:w-[320px]">
              <img
                src="/avatar.png"
                alt="Mohamed Amine Charrada"
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Floating badge — open to work */}
            <div className="float-badge absolute bottom-8 -left-4 md:-left-8 bg-[#e8632a] text-[#f7f3ee] rounded-2xl px-5 py-3.5 shadow-xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider">Open to work</p>
              <p className="font-sans text-xs opacity-65 mt-0.5">Stage / Alternance</p>
            </div>

            {/* Floating badge — ESPRIT */}
            <div className="float-badge-delayed absolute top-8 -right-4 md:-right-8 bg-white rounded-2xl px-5 py-3.5 shadow-xl">
              <p className="font-sans text-sm font-semibold text-[#1a1a1a]">ESPRIT</p>
              <p className="font-sans text-xs text-[#1a1a1a]/45 mt-0.5">Cycle Ingénieur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-32 right-12 w-3 h-3 rounded-full bg-[#e8632a] opacity-30 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-2 h-2 rounded-full bg-[#1a1a1a] opacity-15 hidden lg:block" />
    </section>

    {/* ── Stats bar ── */}
    <AnimatedSection>
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-b border-[#1a1a1a]/10 py-14 my-4">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            <StatItem target={5} label="Projets" />
            <StatItem target={2} label="Stages" />
            <StatItem target={10} label="Langages maîtrisés" suffix="+" />
          </div>
        </div>
      </div>
    </AnimatedSection>

    {/* ── Featured Projects ── */}
    <section className="max-w-6xl mx-auto px-6 py-20">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-4">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
            Projets<br />Sélectionnés
          </h2>
          <Link
            to="/projects"
            className="font-sans text-sm text-[#1a1a1a] hover:text-[#e8632a] transition-colors flex items-center gap-2 group self-start sm:self-auto"
          >
            Voir tous
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProjects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 100}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* ── Marquee ── */}
    <AnimatedSection>
      <MarqueeBanner />
    </AnimatedSection>

    {/* ── CTA ── */}
    <AnimatedSection>
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="font-sans text-sm text-[#1a1a1a]/40 uppercase tracking-[0.2em] mb-6">
          Prêt à collaborer ?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-8">
          Construisons quelque chose{' '}
          <em className="text-[#e8632a]">ensemble.</em>
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-[#e8632a] text-[#f7f3ee] font-sans px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
        >
          Démarrer une conversation
        </Link>
      </div>
    </AnimatedSection>
  </div>
);

export default Home;
