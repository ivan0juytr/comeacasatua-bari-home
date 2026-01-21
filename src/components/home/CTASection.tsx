import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import bariView from '@/assets/bari-view.jpg';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bariView}
          alt="Bari panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-brown/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream">
            {t('intro.title')}
          </h2>
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto">
            {t('intro.text')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contatti">
              <Button size="lg" className="btn-hero text-lg px-10 py-6">
                {t('nav.book')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/camere">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cream text-cream hover:bg-cream hover:text-warm-brown text-lg px-10 py-6"
              >
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
