import AnimatedSection from '../components/AnimatedSection';

const EMAIL = 'mohamedamine.charrada@esprit.tn';

const contactCards = [
  {
    number: '01',
    title: 'Internship',
    description:
      'Looking for an internship or work-study opportunity in full-stack development, AI/data, web apps or DevOps.',
    action: 'Send internship email',
    href: `mailto:${EMAIL}?subject=Internship / Work-study opportunity`,
    external: false,
  },
  {
    number: '02',
    title: 'Project',
    description:
      "Have a website, mobile app, AI assistant or digital product idea? Let's discuss how I can help build it.",
    action: 'Send project email',
    href: `mailto:${EMAIL}?subject=Digital project idea`,
    external: false,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: 'LinkedIn',
    description: 'Connect with me professionally and discover my background.',
    action: 'View LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-amine-charrada-17a494315/',
    external: true,
  },
  {
    label: 'CV',
    title: 'Resume',
    description: 'Download my CV and explore my skills, projects, and experience.',
    action: 'Download CV',
    href: '/assests/cv.pdf',
    external: true,
  },
];

const ContactCard = ({ card }) => (
  <a
    href={card.href}
    target={card.external ? '_blank' : undefined}
    rel={card.external ? 'noopener noreferrer' : undefined}
    aria-label={card.action}
    className="group relative bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between gap-6 cursor-pointer"
  >
    {/* Decorative circle */}
    <div className="absolute top-4 right-10 w-16 h-16 rounded-full bg-[#e8632a]/10 group-hover:bg-[#e8632a]/20 transition-colors duration-300 pointer-events-none" />

    {/* Top row — badge + arrow */}
    <div className="flex items-center justify-between relative">
      <div className="w-10 h-10 rounded-full bg-[#1a1a1a] group-hover:bg-[#e8632a] flex items-center justify-center text-[#f7f3ee] shrink-0 transition-colors duration-300">
        {card.icon ? (
          card.icon
        ) : card.label ? (
          <span className="font-sans text-xs font-bold">{card.label}</span>
        ) : (
          <span className="font-sans text-xs font-semibold">{card.number}</span>
        )}
      </div>
      <span
        className="font-sans text-base text-[#1a1a1a]/25 group-hover:text-[#e8632a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
        aria-hidden="true"
      >
        ↗
      </span>
    </div>

    {/* Body */}
    <div>
      <p className="font-sans font-semibold text-[#1a1a1a] text-lg mb-2">{card.title}</p>
      <p className="font-sans text-sm text-[#1a1a1a]/50 leading-relaxed">{card.description}</p>
    </div>

    {/* Action label */}
    <p className="font-sans text-xs text-[#1a1a1a]/35 group-hover:text-[#e8632a] transition-colors duration-200">
      {card.action} →
    </p>
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
              <span className="w-2 h-2 rounded-full bg-[#4ade80]" aria-hidden="true" />
              <span className="font-sans text-xs text-[#1a1a1a]/55">Available for opportunities</span>
            </div>

            {/* Direct contact block */}
            <div className="bg-[#1a1a1a]/4 rounded-2xl p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">
                Prefer direct contact?
              </p>
              <p className="font-sans text-sm text-[#1a1a1a]/55 leading-relaxed mb-5">
                Send me an email and I'll reply within 1–2 business days.
              </p>
              <a
                href={`mailto:${EMAIL}?subject=General contact`}
                aria-label="Send a general contact email"
                className="inline-flex items-center gap-2 bg-[#e8632a] text-[#f7f3ee] font-sans text-sm px-6 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                General contact
              </a>
            </div>
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

          {/* Book a meeting banner */}
          <AnimatedSection delay={300}>
            <div className="bg-[#1a1a1a] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="font-sans font-semibold text-[#f7f3ee] text-base mb-1">
                  Book a meeting.
                </p>
                <p className="font-sans text-sm text-[#f7f3ee]/45 leading-relaxed">
                  Schedule a 30-min call to discuss your project, internship, or idea.
                </p>
              </div>
              <a
                href="https://calendar.app.google/UrtThnqykfHXn8Uo7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a meeting on Google Calendar"
                className="shrink-0 bg-[#f7f3ee] text-[#1a1a1a] font-sans text-sm px-6 py-3 rounded-full hover:bg-[#e8632a] hover:text-[#f7f3ee] transition-colors duration-200 whitespace-nowrap"
              >
                Book a meeting
              </a>
            </div>
          </AnimatedSection>
        </AnimatedSection>

      </div>
    </div>
  </div>
);

export default Contact;
