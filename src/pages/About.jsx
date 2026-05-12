import AnimatedSection from '../components/AnimatedSection';
import SkillPill from '../components/SkillPill';

const stack = [
  'Java', 'Spring Boot', 'Python', 'FastAPI', 'Flask',
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'NestJS',
  'React Native', 'Flutter', 'SwiftUI', 'Kotlin',
  'Go', 'Docker', 'AWS', 'Azure', 'GCP',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase',
  'Git', 'Linux', 'Arduino / IoT',
];

const timeline = [
  {
    year: 'Juin – Juil. 2025',
    role: 'Stagiaire Développement Logiciel',
    company: 'ExpressDisplay',
    detail: 'Tunis, Tunisie',
  },
  {
    year: 'Juil. – Août 2023',
    role: 'Stagiaire Réseaux & Cybersécurité',
    company: 'OACA',
    detail: 'Tunis, Tunisie',
  },
  {
    year: '2022 — Présent',
    role: 'Cycle Ingénieur Informatique',
    company: 'ESPRIT',
    detail: 'École Supérieure Privée d\'Ingénierie et de Technologies',
  },
  {
    year: '2023 — Présent',
    role: 'Membre',
    company: 'IEEE',
    detail: 'Institute of Electrical and Electronics Engineers',
  },
];

const funFacts = [
  { icon: '🏗️', label: 'Projets livrés', value: '5+' },
  { icon: '🌍', label: 'Langages maîtrisés', value: '10+' },
  { icon: '☁️', label: 'Clouds utilisés', value: '3' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ee] pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Hero split ── */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            {/* Text */}
            <div>
              <p className="font-sans text-xs text-[#1a1a1a]/38 uppercase tracking-[0.2em] mb-6">
                À propos
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-[1.05] mb-8">
                La personne<br />derrière le code
              </h1>

              <div className="flex flex-col gap-5 font-sans text-[15px] text-[#1a1a1a]/62 leading-[1.75]">
                <p>
                  Je suis Mohamed Amine Charrada, étudiant en cycle ingénieur informatique
                  à ESPRIT, Tunis. Passionné par les systèmes backend, les architectures
                  microservices et les solutions DevOps, je construis des applications qui
                  ont un vrai impact.
                </p>
                <p>
                  Mon approche : comprendre d'abord le problème, puis choisir la technologie
                  qui s'y adapte le mieux — pas l'inverse. Que ce soit une API Go hautes
                  performances, une app mobile cross-platform ou un pipeline CI/CD sur AWS,
                  j'apporte la même rigueur et attention aux détails.
                </p>
                <p>
                  En dehors du code, je m'implique dans IEEE et dans le bénévolat au
                  Croissant Rouge Tunisien. Je crois que la tech doit servir les gens,
                  pas seulement les entreprises.
                </p>
              </div>

              <a
                href="/assests/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-[#1a1a1a] text-[#f7f3ee] font-sans px-7 py-3.5 rounded-full hover:bg-[#e8632a] transition-colors duration-200"
              >
                Voir le CV
                <span className="text-xs opacity-60">↗</span>
              </a>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 md:w-[300px] bg-[#f7f3ee]">
                <img
                  src="/avatar.png"
                  alt="Mohamed Amine Charrada"
                  className="w-full h-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <div className="absolute bottom-4 -right-3 bg-[#e8632a] text-[#f7f3ee] rounded-xl px-4 py-2.5 shadow-lg">
                  <p className="font-sans text-xs font-semibold">Basé à Tunis</p>
                  <p className="font-sans text-[10px] opacity-65 mt-0.5">Disponible à distance</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Stack ── */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Mon Stack</h2>
              <div className="h-px flex-1 bg-[#1a1a1a]/10" />
            </div>
            <div className="flex flex-wrap gap-3">
              {stack.map((s) => (
                <SkillPill key={s} skill={s} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Timeline ── */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Parcours</h2>
              <div className="h-px flex-1 bg-[#1a1a1a]/10" />
            </div>
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-10 py-6 border-t border-[#1a1a1a]/8 last:border-b last:border-[#1a1a1a]/8">
                    <span className="font-sans text-xs text-[#1a1a1a]/38 md:w-40 shrink-0 pt-0.5">
                      {item.year}
                    </span>
                    <div className="flex-1">
                      <p className="font-sans font-medium text-[#1a1a1a] text-sm mb-0.5">
                        {item.role}
                      </p>
                      <p className="font-sans text-sm text-[#e8632a]">
                        {item.company}
                        <span className="text-[#1a1a1a]/38 ml-2">— {item.detail}</span>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Fun Facts ── */}
        <AnimatedSection>
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Quelques chiffres</h2>
              <div className="h-px flex-1 bg-[#1a1a1a]/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {funFacts.map((fact, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="bg-[#1a1a1a]/5 rounded-2xl p-8 text-center hover:bg-[#1a1a1a]/8 transition-colors">
                    <span className="text-4xl block mb-5">{fact.icon}</span>
                    <p className="font-serif text-4xl text-[#e8632a] mb-2">{fact.value}</p>
                    <p className="font-sans text-sm text-[#1a1a1a]/55">{fact.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
};

export default About;
