import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const EMAIL = 'mohamedamine.charrada@esprit.tn';

const socials = [
  {
    platform: 'LinkedIn',
    handle: 'Mohamed Amine Charrada',
    href: 'https://www.linkedin.com/in/mohamed-amine-charrada-17a494315/',
    description: 'Parcours & recommandations',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    platform: 'GitHub',
    handle: 'charrada-amine',
    href: 'https://github.com/charrada-amine',
    description: 'Projets open-source & contributions',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    platform: 'IEEE',
    handle: 'Membre actif',
    href: 'https://www.ieee.org/',
    description: 'Institute of Electrical and Electronics Engineers',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  return (
    <div className="min-h-screen bg-[#f7f3ee] pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* ── Left — contact info ── */}
          <AnimatedSection className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <p className="font-sans text-xs text-[#1a1a1a]/38 uppercase tracking-[0.2em] mb-6">
                Contact
              </p>
              <h1 className="font-serif text-5xl text-[#1a1a1a] leading-[1.05] mb-5">
                Travaillons<br />
                <em className="text-[#e8632a]">ensemble.</em>
              </h1>
              <p className="font-sans text-[15px] text-[#1a1a1a]/55 leading-relaxed mb-8">
                Un projet, une opportunité de stage, ou juste envie d'échanger ?
                Je réponds sous 24h.
              </p>

              {/* Response badge */}
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a]/5 px-4 py-2 rounded-full mb-10">
                <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <span className="font-sans text-xs text-[#1a1a1a]/55">Répond en moins de 24h</span>
              </div>

              {/* Email block */}
              <div className="bg-[#1a1a1a]/4 rounded-2xl p-5 mb-3 hover:bg-[#1a1a1a]/6 transition-colors">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">Email</p>
                <p className="font-sans text-sm text-[#1a1a1a] mb-4 break-all">{EMAIL}</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 bg-[#e8632a] text-[#f7f3ee] font-sans text-sm px-5 py-2.5 rounded-full hover:bg-[#1a1a1a] transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Envoyer un email
                </a>
              </div>

              {/* Social links */}
              <div className="flex flex-col gap-3">
                {socials.map(({ platform, handle, href, description, icon }) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-[#1a1a1a]/4 rounded-2xl p-5 hover:bg-[#1a1a1a]/6 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#1a1a1a]/8 flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#e8632a] group-hover:text-[#f7f3ee] transition-all shrink-0">
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-medium text-[#1a1a1a] group-hover:text-[#e8632a] transition-colors">
                        {platform}
                      </p>
                      <p className="font-sans text-xs text-[#1a1a1a]/40 truncate">{description}</p>
                    </div>
                    <span className="ml-auto font-sans text-xs text-[#1a1a1a]/25 group-hover:text-[#e8632a] transition-colors shrink-0">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right — form ── */}
          <AnimatedSection delay={100} className="lg:col-span-3">
            {submitted ? (
              <div className="text-center py-24">
                <div className="w-16 h-16 rounded-full bg-[#e8632a] flex items-center justify-center mx-auto mb-7 shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-[#1a1a1a] mb-3">Message envoyé !</h3>
                <p className="font-sans text-[#1a1a1a]/55 text-sm leading-relaxed">
                  Merci {form.name || ''}.<br />Je reviens vers toi très vite.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-8 font-sans text-sm text-[#1a1a1a]/40 hover:text-[#e8632a] transition-colors underline underline-offset-4"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nom" name="name" type="text" placeholder="Votre nom" value={form.name} onChange={handleChange} required />
                  <Field label="Email" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <Field label="Sujet" name="subject" type="text" placeholder="Stage, projet, collaboration..." value={form.subject} onChange={handleChange} required />
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-2.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl px-5 py-4 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:border-[#e8632a] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a1a1a] text-[#f7f3ee] font-sans py-4 rounded-full hover:bg-[#e8632a] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#f7f3ee]/30 border-t-[#f7f3ee] rounded-full animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

const Field = ({ label, name, type, placeholder, value, onChange, required }) => (
  <div>
    <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-2.5">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl px-5 py-4 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:border-[#e8632a] transition-colors"
    />
  </div>
);

export default Contact;
