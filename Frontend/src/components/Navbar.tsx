
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-white">Amarjeet</span>
          <span className="text-navy-glow">.dev</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                const section = document.getElementById(item.path);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`px-2 py-3 text-sm uppercase tracking-wider border-b border-white/5 ${isActive(item.path)
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass px-6 pb-6 pt-2 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen)
                  const section = document.getElementById(item.path);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-2 py-3 text-sm uppercase tracking-wider border-b border-white/5 ${isActive(item.path)
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
