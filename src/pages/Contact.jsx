import AnimatedSection from '../components/AnimatedSection';

const EMAIL = 'mohamedamine.charrada@esprit.tn';

const contactCards = [
  {
    number: '01',
    title: 'Internship',
    description: 'Open to internship opportunities in web, AI, data, and digital projects.',
    href: `mailto:${EMAIL}?subject=Internship Opportunity`,
  },
  {
    number: '02',
    title: 'Project',
    description: "Let's discuss a website, mobile app, AI assistant, or creative digital idea.",
    href: `mailto:${EMAIL}?subject=Project Collaboration`,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: 'LinkedIn',
    description: 'Connect with me professionally and discover my background.',
    href: 'https://www.linkedin.com/in/mohamed-amine-charrada-17a494315/',
  },
  {
    label: 'CV',
    title: 'Resume',
    description: 'Download my CV and explore my skills, projects, and experience.',
    href: '/assests/cv.pdf',
  },
];

const ContactCard = ({ card }) => (
  <a
    href={card.href}
    target={card.href.startsWith('mailto') ? undefined : '_blank'}
    rel="noopener noreferrer"
    className="group relative bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col gap-8"
  >
    {/* Decorative circle */}
    <div className="absolute top-4 right-10 w-16 h-16 rounded-full bg-[#e8632a]/10 group-hover:bg-[#e8632a]/18 transition-colors duration-300" />

    {/* Top row */}
    <div className="flex items-center justify-between relative">
      <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#f7f3ee] shrink-0">
        {card.icon ? (
          card.icon
        ) : card.label ? (
          <span className="font-sans text-xs font-bold">{card.label}</span>
        ) : (
          <span className="font-sans text-xs font-semibold">{card.number}</span>
        )}
      </div>
      <span className="font-sans text-sm text-[#1a1a1a]/30 group-hover:text-[#e8632a] transition-colors duration-200">↗</span>
    </div>

    {/* Content */}
    <div>
      <p className="font-sans font-semibold text-[#1a1a1a] text-lg mb-2">{card.title}</p>
      <p className="font-sans text-sm text-[#1a1a1a]/50 leading-relaxed">{card.description}</p>
    </div>
  </a>
);

const Contact = () => (
  <div className="min-h-screen bg-[#f7f3ee] pt-28 pb-24">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

        {/* ── Left ── */}
        <AnimatedSection className="lg:col-span-2">
          <div className="lg:sticky lg:top-28">
            <p className="font-sans text-xs text-[#1a1a1a]/38 uppercase tracking-[0.2em] mb-6">
              Contact
            </p>
            <h1 className="font-serif text-5xl text-[#1a1a1a] leading-[1.05] mb-6">
              Let's work<br />
              <em className="text-[#e8632a]">together.</em>
            </h1>
            <p className="font-sans text-[15px] text-[#1a1a1a]/55 leading-relaxed mb-8">
              A project, an internship opportunity, or just want to connect?
              I'm always open to meaningful collaborations.
            </p>

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a]/5 px-4 py-2 rounded-full mb-10">
              <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
              <span className="font-sans text-xs text-[#1a1a1a]/55">Available for opportunities</span>
            </div>

            {/* Email button */}
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 bg-[#e8632a] text-[#f7f3ee] font-sans text-sm px-6 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Send an email
            </a>
          </div>
        </AnimatedSection>

        {/* ── Right ── */}
        <AnimatedSection delay={100} className="lg:col-span-3">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-[1.08] mb-4">
            Choose the best<br />
            way to <em className="text-[#e8632a]">reach me.</em>
          </h2>
          <p className="font-sans text-[15px] text-[#1a1a1a]/50 leading-relaxed mb-10">
            No long forms. Just direct contact options depending on what you need:
            internship, collaboration, portfolio, or professional networking.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {contactCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 60}>
                <ContactCard card={card} />
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom banner */}
          <AnimatedSection delay={300}>
            <div className="bg-[#1a1a1a] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="font-sans font-semibold text-[#f7f3ee] text-base mb-1">
                  Usually replies within 24h.
                </p>
                <p className="font-sans text-sm text-[#f7f3ee]/45 leading-relaxed">
                  For faster contact, send me a direct email with your subject.
                </p>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="shrink-0 bg-[#f7f3ee] text-[#1a1a1a] font-sans text-sm px-6 py-3 rounded-full hover:bg-[#e8632a] hover:text-[#f7f3ee] transition-colors duration-200 whitespace-nowrap"
              >
                Start a conversation
              </a>
            </div>
          </AnimatedSection>
        </AnimatedSection>

      </div>
    </div>
  </div>
);

export default Contact;
