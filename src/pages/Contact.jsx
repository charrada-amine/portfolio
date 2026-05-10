import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const LINKS = [
  {
    label: 'mohamedamine.charrada@esprit.tn',
    href: 'mailto:mohamedamine.charrada@esprit.tn',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-amine-charrada-17a494315/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/charrada-amine',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#f7f3ee] pt-28 pb-24">
      <div className="max-w-xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="font-sans text-xs text-[#1a1a1a]/38 uppercase tracking-[0.2em] mb-6">
              Contact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-[1.05] mb-5">
              Travaillons<br />
              <em className="text-[#e8632a]">ensemble.</em>
            </h1>
            <p className="font-sans text-base text-[#1a1a1a]/55 leading-relaxed">
              Un projet, une opportunité de stage, ou juste envie d'échanger ?
              Envoyez-moi un message et je réponds sous 24h.
            </p>
          </div>
        </AnimatedSection>

        {/* Form / Success */}
        <AnimatedSection delay={80}>
          {submitted ? (
            <div className="text-center py-16">
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
                  rows={6}
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

        {/* Social links */}
        <AnimatedSection delay={160}>
          <div className="mt-16 pt-12 border-t border-[#1a1a1a]/10">
            <p className="font-sans text-xs text-[#1a1a1a]/35 uppercase tracking-[0.2em] mb-8 text-center">
              Ou retrouvez-moi ici
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              {LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-sm text-[#1a1a1a] hover:text-[#e8632a] transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full border border-[#1a1a1a]/18 flex items-center justify-center transition-all duration-200 group-hover:bg-[#e8632a] group-hover:border-[#e8632a] group-hover:text-white text-[#1a1a1a]">
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
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
