import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-warm-brown text-cream py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-3xl font-semibold">Comeacasatua</h3>
            <p className="text-cream/80 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-medium">{t('footer.links')}</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-cream/80 hover:text-cream transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/camere" className="text-cream/80 hover:text-cream transition-colors">
                {t('nav.rooms')}
              </Link>
              <Link to="/servizi" className="text-cream/80 hover:text-cream transition-colors">
                {t('nav.services')}
              </Link>
              <Link to="/posizione" className="text-cream/80 hover:text-cream transition-colors">
                {t('nav.location')}
              </Link>
              <Link to="/contatti" className="text-cream/80 hover:text-cream transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-medium">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-cream/80 hover:text-cream transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{t('contact.address')}</span>
              </a>
              <a
                href="tel:+393401234567"
                className="flex items-center space-x-3 text-cream/80 hover:text-cream transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+39 340 123 4567</span>
              </a>
              <a
                href="mailto:info@comeacasatua.it"
                className="flex items-center space-x-3 text-cream/80 hover:text-cream transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@comeacasatua.it</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-medium">{t('footer.social')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-primary hover:text-cream transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-primary hover:text-cream transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Comeacasatua. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-cream/60 hover:text-cream transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
