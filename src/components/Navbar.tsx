import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/camere', label: t('nav.rooms') },
    { href: '/servizi', label: t('nav.services') },
    { href: '/posizione', label: t('nav.location') },
    { href: '/contatti', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className={`font-heading text-2xl md:text-3xl font-semibold transition-colors ${
              isScrolled ? 'text-primary' : 'text-cream'
            }`}>
              Comeacasatua
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors link-underline ${
                  isScrolled
                    ? location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                    : location.pathname === link.href
                    ? 'text-cream'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 font-medium transition-colors ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-cream/80 hover:text-cream'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
            <Link to="/contatti">
              <Button variant="default" size="sm" className="btn-primary text-sm px-6 py-2">
                {t('nav.book')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 font-medium transition-colors ${
                isScrolled ? 'text-foreground' : 'text-cream'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-sm">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-foreground' : 'text-cream'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-cream/98 backdrop-blur-md rounded-b-xl shadow-medium animate-fade-in">
            <div className="py-4 px-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contatti"
                onClick={() => setIsOpen(false)}
                className="block mt-4"
              >
                <Button className="w-full btn-primary">
                  {t('nav.book')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
