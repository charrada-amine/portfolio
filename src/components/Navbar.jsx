import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#f7f3ee]/92 backdrop-blur-md border-b border-[#1a1a1a]/8 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl text-[#1a1a1a] hover:text-[#e8632a] transition-colors duration-200"
        >
          Amine Charrada<span className="text-[#e8632a]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-sans text-sm transition-colors duration-200 hover:text-[#e8632a] ${
                location.pathname === to ? 'text-[#e8632a]' : 'text-[#1a1a1a]'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/assests/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-[#1a1a1a] hover:text-[#e8632a] transition-colors duration-200"
          >
            CV
          </a>
          <Link
            to="/contact"
            className="bg-[#1a1a1a] text-[#f7f3ee] font-sans text-sm px-5 py-2.5 rounded-full transition-colors duration-200 hover:bg-[#e8632a]"
          >
            Say hello
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          aria-label="Toggle menu"
        >
          <span
            className="block h-[1.5px] w-full bg-[#1a1a1a] transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : '' }}
          />
          <span
            className="block h-[1.5px] w-full bg-[#1a1a1a] transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-[1.5px] w-full bg-[#1a1a1a] transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : '' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-0 px-6 pb-6 border-t border-[#1a1a1a]/8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-sans text-lg text-[#1a1a1a] py-4 border-b border-[#1a1a1a]/8 hover:text-[#e8632a] transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="/assests/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-lg text-[#1a1a1a] py-4 border-b border-[#1a1a1a]/8 hover:text-[#e8632a] transition-colors"
          >
            CV ↗
          </a>
          <Link
            to="/contact"
            className="mt-5 bg-[#1a1a1a] text-[#f7f3ee] font-sans text-sm py-3.5 rounded-full text-center hover:bg-[#e8632a] transition-colors"
          >
            Say hello
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
