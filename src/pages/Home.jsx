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

/* ─── Services data ──────────────────────────────── */
const services = [
  {
    title: 'Web Development',
    description: 'Modern, performant web applications with React, Next.js, TypeScript and Node.js.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native, Flutter, SwiftUI and Kotlin.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Backend & APIs',
    description: 'Secure REST APIs and microservices with Java Spring Boot, Go and NestJS.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines, Docker containerization and cloud deployments on AWS and Azure.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

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
                Available for internship / work-study
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.08] tracking-tight mb-7 text-[#1a1a1a]">
              Full-Stack Engineer,<br />
              digital products that{' '}
              <em className="text-[#e8632a]">matter.</em>
            </h1>

            <p className="font-sans text-lg text-[#1a1a1a]/58 leading-relaxed mb-10 max-w-md">
              Hi, I'm <strong className="text-[#1a1a1a]/80 font-medium">Mohamed Amine Charrada</strong> — computer
              engineering student at ESPRIT, Tunis. I design and build modern web
              applications, mobile apps and DevOps solutions that solve real problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-[#1a1a1a] text-[#f7f3ee] font-sans px-7 py-3.5 rounded-full hover:bg-[#e8632a] transition-colors duration-200"
              >
                View my projects
              </Link>
              <Link
                to="/contact"
                className="border border-[#1a1a1a]/22 text-[#1a1a1a] font-sans px-7 py-3.5 rounded-full hover:border-[#e8632a] hover:text-[#e8632a] transition-colors duration-200"
              >
                Contact me
              </Link>
              <a
                href="/assests/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1a1a1a]/22 text-[#1a1a1a] font-sans px-7 py-3.5 rounded-full hover:border-[#e8632a] hover:text-[#e8632a] transition-colors duration-200 flex items-center gap-2"
              >
                Download CV
                <span className="text-xs opacity-60">↗</span>
              </a>
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
            <div className="relative w-64 md:w-[320px]">
              <img
                src="/avatar.png"
                alt="Mohamed Amine Charrada — Full-Stack Engineer & Computer Engineering Student"
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
                loading="eager"
              />
            </div>

            <div className="float-badge absolute bottom-8 -left-4 md:-left-8 bg-[#e8632a] text-[#f7f3ee] rounded-2xl px-5 py-3.5 shadow-xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider">Open to work</p>
              <p className="font-sans text-xs opacity-65 mt-0.5">Internship / Work-study</p>
            </div>

            <div className="float-badge-delayed absolute top-8 -right-4 md:-right-8 bg-white rounded-2xl px-5 py-3.5 shadow-xl">
              <p className="font-sans text-sm font-semibold text-[#1a1a1a]">ESPRIT</p>
              <p className="font-sans text-xs text-[#1a1a1a]/45 mt-0.5">Engineering Program</p>
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
            <StatItem target={5} label="Projects" />
            <StatItem target={2} label="Internships" />
            <StatItem target={10} label="Languages mastered" suffix="+" />
          </div>
        </div>
      </div>
    </AnimatedSection>

    {/* ── What I can bring ── */}
    <section className="max-w-6xl mx-auto px-6 py-20">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-6">
          <div>
            <p className="font-sans text-xs text-[#1a1a1a]/38 uppercase tracking-[0.2em] mb-4">
              Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
              What I can<br />bring to the table
            </h2>
          </div>
          <p className="font-sans text-sm text-[#1a1a1a]/50 max-w-xs leading-relaxed self-end">
            Available for internships, junior positions, freelance projects and technical collaborations in web, mobile and backend development.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 80}>
            <div className="bg-[#1a1a1a]/4 rounded-2xl p-6 hover:bg-[#1a1a1a]/6 transition-colors h-full flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#e8632a]/10 flex items-center justify-center text-[#e8632a] shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="font-sans font-medium text-[#1a1a1a] text-sm mb-1.5">{s.title}</p>
                <p className="font-sans text-xs text-[#1a1a1a]/50 leading-relaxed">{s.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* ── Featured Projects ── */}
    <section className="max-w-6xl mx-auto px-6 py-20">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-4">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
            Selected<br />Projects
          </h2>
          <Link
            to="/projects"
            className="font-sans text-sm text-[#1a1a1a] hover:text-[#e8632a] transition-colors flex items-center gap-2 group self-start sm:self-auto"
          >
            See all
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
          Ready to collaborate?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-8">
          Let's build something{' '}
          <em className="text-[#e8632a]">together.</em>
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-[#e8632a] text-[#f7f3ee] font-sans px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
        >
          Start a conversation
        </Link>
      </div>
    </AnimatedSection>
  </div>
);

export default Home;
