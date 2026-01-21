import { 
  Coffee, Wifi, Wind, Sparkles, Clock, Car, 
  HandPlatter, Luggage, Utensils, Shield, MapPin, Tv
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import breakfastImage from '@/assets/breakfast.jpg';

const services = [
  { 
    icon: Coffee, 
    titleKey: 'services.breakfast', 
    descKey: 'services.breakfast.desc',
    featured: true
  },
  { icon: Wifi, titleKey: 'services.wifi', descKey: 'services.wifi.desc' },
  { icon: Wind, titleKey: 'services.ac', descKey: 'services.ac.desc' },
  { icon: Sparkles, titleKey: 'services.cleaning', descKey: 'services.cleaning.desc' },
  { icon: Clock, titleKey: 'services.checkin', descKey: 'services.checkin.desc' },
  { icon: Car, titleKey: 'services.parking', descKey: 'services.parking.desc' },
  { 
    icon: Utensils, 
    titleKey: 'services.concierge', 
    descKey: 'services.concierge.desc' 
  },
  { icon: Luggage, titleKey: 'services.luggage', descKey: 'services.luggage.desc' },
];

const additionalAmenities = [
  { it: 'Asciugacapelli', en: 'Hair dryer' },
  { it: 'Cassaforte', en: 'Safe' },
  { it: 'Smart TV', en: 'Smart TV' },
  { it: 'Biancheria premium', en: 'Premium linens' },
  { it: 'Prodotti da bagno', en: 'Toiletries' },
  { it: 'Ferro da stiro', en: 'Iron' },
  { it: 'Macchina del caffè', en: 'Coffee maker' },
  { it: 'Riscaldamento', en: 'Heating' },
];

export default function Services() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom text-center">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Amenities
          </span>
          <h1 className="heading-display text-foreground mt-3">
            {t('services.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Breakfast Feature */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="image-hover rounded-2xl overflow-hidden shadow-large">
              <img
                src={breakfastImage}
                alt="Italian breakfast"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {language === 'it' ? 'Ogni Mattina' : 'Every Morning'}
              </span>
              <h2 className="heading-section text-foreground">
                {t('services.breakfast')}
              </h2>
              <p className="text-body-large text-muted-foreground">
                {language === 'it' 
                  ? 'Inizia la giornata con una ricca colazione italiana servita ogni mattina. Prodotti freschi locali, focaccia barese appena sfornata, dolci tipici pugliesi, frutta di stagione, cappuccino e caffè espresso.'
                  : 'Start your day with a rich Italian breakfast served every morning. Fresh local products, freshly baked Bari focaccia, typical Apulian pastries, seasonal fruit, cappuccino and espresso coffee.'}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{language === 'it' ? 'Focaccia barese fresca' : 'Fresh Bari focaccia'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{language === 'it' ? 'Pasticciotti e dolci locali' : 'Pasticciotti and local pastries'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{language === 'it' ? 'Caffè italiano e cappuccino' : 'Italian coffee and cappuccino'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{language === 'it' ? 'Frutta fresca di stagione' : 'Fresh seasonal fruit'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{language === 'it' ? 'Marmellate fatte in casa' : 'Homemade jams'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section text-foreground">
              {language === 'it' ? 'Tutti i Servizi Inclusi' : 'All Included Services'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-warm p-6 text-center hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(service.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section text-foreground">
              {language === 'it' ? 'Comfort in Camera' : 'In-Room Amenities'}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalAmenities.map((amenity, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium"
              >
                {language === 'it' ? amenity.it : amenity.en}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
