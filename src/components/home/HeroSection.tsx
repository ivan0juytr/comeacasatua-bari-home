import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-terrace.jpg';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToContent = () => {
    const nextSection = document.getElementById('intro');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Comeacasatua B&B terrace with sea view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-brown/30 via-warm-brown/20 to-warm-brown/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          <span className="inline-block text-cream/90 text-lg md:text-xl tracking-wide uppercase">
            {t('hero.welcome')}
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream tracking-tight">
            {t('hero.name')}
          </h1>
          <p className="text-cream/90 text-xl md:text-2xl max-w-2xl mx-auto font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link to="/camere">
              <Button size="lg" className="btn-hero text-lg px-10 py-6">
                {t('hero.cta')}
              </Button>
            </Link>
            <Link to="/contatti">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cream text-cream hover:bg-cream hover:text-warm-brown text-lg px-10 py-6 transition-all"
              >
                {t('hero.book')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80 hover:text-cream transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
