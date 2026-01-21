import { MapPin, Coffee, Wifi, Heart, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  { icon: MapPin, titleKey: 'why.location.title', descKey: 'why.location.desc' },
  { icon: Coffee, titleKey: 'why.breakfast.title', descKey: 'why.breakfast.desc' },
  { icon: Wifi, titleKey: 'why.comfort.title', descKey: 'why.comfort.desc' },
  { icon: Heart, titleKey: 'why.hospitality.title', descKey: 'why.hospitality.desc' },
  { icon: Clock, titleKey: 'why.flexible.title', descKey: 'why.flexible.desc' },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Comeacasatua
          </span>
          <h2 className="heading-section text-foreground mt-3">
            {t('why.title')}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-warm p-8 hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-cream transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-cream transition-colors" />
              </div>
              <h3 className="heading-card text-foreground mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
