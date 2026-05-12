import { GitHubCalendar } from 'react-github-calendar';
import AnimatedSection from '../components/AnimatedSection';
import SkillPill from '../components/SkillPill';

const skillGroups = [
  { label: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Flask', 'Go', 'NestJS'] },
  { label: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { label: 'Mobile', items: ['React Native', 'Flutter', 'SwiftUI', 'Kotlin'] },
  { label: 'Cloud & DevOps', items: ['Docker', 'AWS', 'Azure', 'GCP', 'Git', 'Linux'] },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { label: 'Other', items: ['Arduino / IoT'] },
];

const experience = [
  {
    year: 'Jun – Jul. 2025',
    role: 'Software Development Intern',
    company: 'ExpressDisplay',
    detail: 'Tunis, Tunisia',
    type: 'Internship',
  },
  {
    year: 'Jul. – Aug. 2023',
    role: 'Networks & Cybersecurity Intern',
    company: 'OACA',
    detail: 'Tunis, Tunisia',
    type: 'Internship',
  },
];

const formation = [
  {
    year: '2022 — Present',
    role: 'Computer Engineering Program',
    company: 'ESPRIT',
    detail: "École Supérieure Privée d'Ingénierie et de Technologies",
    type: 'Education',
  },
  {
    year: '2023 — Present',
    role: 'Active Member',
    company: 'IEEE',
    detail: 'Institute of Electrical and Electronics Engineers',
    type: 'Activity',
  },
];

const funFacts = [
  { label: 'Projects built', value: '10+' },
  { label: 'Technologies used', value: '10+' },
  { label: 'Cloud platforms', value: '3' },
  { label: 'Years learning & building', value: '3+' },
];

const typeColor = {
  Internship: 'bg-[#e8632a]/12 text-[#e8632a]',
  Education: 'bg-[#1a1a1a]/8 text-[#1a1a1a]/60',
  Activity: 'bg-[#1a1a1a]/8 text-[#1a1a1a]/60',
};

const TimelineCard = ({ item }) => (
  <div className="flex gap-4 py-5 border-b border-[#1a1a1a]/8 last:border-0">
    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#e8632a] shrink-0 mt-2" />
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <span className={`font-sans text-[10px] px-2 py-0.5 rounded-full font-medium ${typeColor[item.type]}`}>
          {item.type}
        </span>
        <span className="font-sans text-[10px] text-[#1a1a1a]/35">{item.year}</span>
      </div>
      <p className="font-sans font-medium text-[#1a1a1a] text-sm mb-0.5">{item.role}</p>
      <p className="font-sans text-sm text-[#e8632a]">
        {item.company}
        <span className="text-[#1a1a1a]/38 ml-1.5">— {item.detail}</span>
      </p>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-[#f7f3ee] pt-28 pb-24">
    <div className="max-w-6xl mx-auto px-6">

      {/* ── Hero split ── */}
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <p className="font-sans text-xs text-[#1a1a1a]/38 uppercase tracking-[0.2em] mb-6">
              About
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-[1.05] mb-8">
              The person<br />behind the code
            </h1>
            <div className="flex flex-col gap-5 font-sans text-[15px] text-[#1a1a1a]/62 leading-[1.75]">
              <p>
                I'm Mohamed Amine Charrada, a computer engineering student at ESPRIT,
                Tunis. Passionate about backend systems, microservice architectures and
                DevOps solutions, I build applications that have a real impact.
              </p>
              <p>
                My approach: understand the problem first, then choose the technology
                that fits it best — not the other way around. Whether it's a
                high-performance Go API, a cross-platform mobile app or a CI/CD
                pipeline on AWS, I bring the same rigor and attention to detail.
              </p>
              <p>
                Outside of code, I'm involved in IEEE and volunteer with the Tunisian
                Red Crescent. I believe technology should serve people, not just
                businesses.
              </p>
            </div>
            <a
              href="/assests/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-[#1a1a1a] text-[#f7f3ee] font-sans px-7 py-3.5 rounded-full hover:bg-[#e8632a] transition-colors duration-200"
            >
              View CV
              <span className="text-xs opacity-60">↗</span>
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-[300px] bg-[#f7f3ee]">
              <img
                src="/avatar.png"
                alt="Mohamed Amine Charrada"
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
              <div className="absolute bottom-4 -right-3 bg-[#e8632a] text-[#f7f3ee] rounded-xl px-4 py-2.5 shadow-lg">
                <p className="font-sans text-xs font-semibold">Based in Tunis</p>
                <p className="font-sans text-[10px] opacity-65 mt-0.5">Available remotely</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Stats strip ── */}
      <AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-24">
          {funFacts.map((f) => (
            <div key={f.label} className="bg-[#1a1a1a]/4 rounded-2xl p-6 text-center">
              <p className="font-serif text-3xl text-[#e8632a] mb-1">{f.value}</p>
              <p className="font-sans text-xs text-[#1a1a1a]/45 leading-tight">{f.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Skills by category ── */}
      <AnimatedSection>
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">My Stack</h2>
            <div className="h-px flex-1 bg-[#1a1a1a]/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map(({ label, items }) => (
              <AnimatedSection key={label}>
                <div className="bg-[#1a1a1a]/4 rounded-2xl p-6 hover:bg-[#1a1a1a]/6 transition-colors h-full">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <SkillPill key={s} skill={s} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Parcours — two columns ── */}
      <AnimatedSection>
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Background</h2>
            <div className="h-px flex-1 bg-[#1a1a1a]/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expérience */}
            <div className="bg-[#1a1a1a]/4 rounded-2xl p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">
                Experience
              </p>
              {experience.map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <TimelineCard item={item} />
                </AnimatedSection>
              ))}
            </div>
            {/* Formation */}
            <div className="bg-[#1a1a1a]/4 rounded-2xl p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">
                Education & Activities
              </p>
              {formation.map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <TimelineCard item={item} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── GitHub Activity ── */}
      <AnimatedSection>
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">GitHub Activity</h2>
            <div className="h-px flex-1 bg-[#1a1a1a]/10" />
            <a
              href="https://github.com/charrada-amine"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[#1a1a1a]/40 hover:text-[#e8632a] transition-colors shrink-0"
            >
              View profile ↗
            </a>
          </div>
          <div className="bg-[#1a1a1a]/4 rounded-2xl p-8 overflow-x-auto">
            <GitHubCalendar
              username="charrada-amine"
              colorScheme="light"
              theme={{
                light: ['#e8e3dd', '#f5cfc0', '#e8a070', '#e8632a', '#b84b1a'],
              }}
              fontSize={12}
              blockSize={13}
              blockMargin={4}
            />
          </div>
        </div>
      </AnimatedSection>

    </div>
  </div>
);

export default About;
