import { Link } from 'react-router-dom';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-amine-charrada-17a494315/' },
  { label: 'GitHub', href: 'https://github.com/charrada-amine' },
  { label: 'IEEE', href: 'https://www.ieee.org/' },
];

const navLinks = [
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-[#f7f3ee]">
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-10 border-b border-[#f7f3ee]/10">
        <div>
          <Link to="/" className="font-serif text-3xl text-[#f7f3ee] hover:text-[#e8632a] transition-colors">
            Amine Charrada<span className="text-[#e8632a]">.</span>
          </Link>
          <p className="font-sans text-sm text-[#f7f3ee]/45 mt-1">
            Ingénieur Informatique · Full-Stack & DevOps — Tunis
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#f7f3ee]/50 hover:text-[#e8632a] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
        <p className="font-sans text-xs text-[#f7f3ee]/30">
          © {new Date().getFullYear()} Mohamed Amine Charrada. All rights reserved.
        </p>
        <div className="flex gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-sans text-xs text-[#f7f3ee]/30 hover:text-[#e8632a] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
