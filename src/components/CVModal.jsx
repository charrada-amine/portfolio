import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cvData } from '../data/cv';

const CVModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assests/cv.pdf';
    link.download = 'Mohamed_Amine_Charrada_CV.pdf';
    link.click();
  };

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 modal-backdrop"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={handleBackdrop}
    >
      <div
        className="modal-card bg-white w-full max-w-[760px] max-h-[92vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white shrink-0">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Curriculum Vitae
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="font-sans text-sm px-5 py-2 rounded-full bg-[#1a1a1a] text-white hover:bg-[#e8632a] transition-colors"
            >
              Télécharger PDF
            </button>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-100 transition-colors font-sans text-lg leading-none"
            >
              ✕
            </button>
          </div>
        </div>

        {/* CV body */}
        <div className="overflow-y-auto flex-1">
          <div className="px-8 md:px-14 py-10">

            {/* Header */}
            <div className="mb-10 pb-8 border-b border-gray-100">
              <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-2">
                {cvData.name}
              </h1>
              <p className="font-sans text-base text-[#e8632a] font-medium mb-5">
                {cvData.title}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {Object.entries(cvData.contact).map(([key, value]) => (
                  <span key={key} className="font-sans text-sm text-gray-500 flex items-center gap-1.5">
                    {value}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile */}
            <Section label="Profil">
              <p className="font-sans text-sm leading-[1.8] text-gray-600">
                {cvData.summary}
              </p>
            </Section>

            {/* Experience */}
            <Section label="Expériences Professionnelles">
              <div className="flex flex-col gap-9">
                {cvData.experience.map((exp) => (
                  <div key={exp.id} className="flex flex-col md:flex-row gap-3 md:gap-10">
                    <div className="md:w-44 shrink-0 pt-0.5">
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">{exp.period}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-sans text-sm font-semibold text-[#1a1a1a]">{exp.role}</p>
                      <p className="font-sans text-sm text-[#e8632a] mb-3">{exp.company}</p>
                      <ul className="flex flex-col gap-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2.5 font-sans text-sm text-gray-600 leading-relaxed">
                            <span className="text-[#e8632a] shrink-0 mt-0.5">–</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section label="Formation">
              <div className="flex flex-col gap-5">
                {cvData.education.map((edu, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="md:w-44 shrink-0">
                      <p className="font-sans text-xs text-gray-400">{edu.period}</p>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#1a1a1a]">{edu.degree}</p>
                      <p className="font-sans text-sm text-gray-500">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Skills */}
            <Section label="Compétences">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(cvData.skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-[#1a1a1a] font-semibold mb-3">
                      {group}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {items.map((item, i) => (
                        <li key={i} className="font-sans text-sm text-gray-500">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Languages */}
            <Section label="Langues">
              <div className="flex flex-wrap gap-6">
                {cvData.languages.map((l, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="font-sans text-sm font-semibold text-[#1a1a1a]">{l.lang}</span>
                    <span className="font-sans text-sm text-gray-400">— {l.level}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Activities */}
            <Section label="Leadership & Activités" last>
              <div className="flex flex-col gap-3">
                {cvData.activities.map((a, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="font-sans text-sm text-gray-600">{a.role}</span>
                    <span className="font-sans text-xs text-gray-400">{a.period}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

const Section = ({ label, children, last = false }) => (
  <div className={`mb-10 pb-10 ${last ? '' : 'border-b border-gray-100'}`}>
    <h2 className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">
      {label}
    </h2>
    {children}
  </div>
);

export default CVModal;
