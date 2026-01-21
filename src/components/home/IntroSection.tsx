import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import breakfastImage from '@/assets/breakfast.jpg';

export default function IntroSection() {
  const { t } = useLanguage();

  return (
    <section id="intro" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="image-hover rounded-2xl overflow-hidden shadow-large">
                <img
                  src={breakfastImage}
                  alt="Italian breakfast"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-mediterranean/10 rounded-full -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Bed & Breakfast in Bari
            </span>
            <h2 className="heading-section text-foreground">
              {t('intro.title')}
            </h2>
            <p className="text-body-large text-muted-foreground">
              {t('intro.text')}
            </p>
            <Link
              to="/servizi"
              className="inline-flex items-center space-x-2 text-primary font-medium hover:gap-3 transition-all group"
            >
              <span>{t('intro.discover')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
