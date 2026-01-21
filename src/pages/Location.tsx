import { MapPin, Train, Plane, Waves, Church, Castle, Theater } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import bariView from '@/assets/bari-view.jpg';

const distances = [
  { icon: Church, labelKey: 'location.oldtown', distKey: 'location.oldtown.dist' },
  { icon: Waves, labelKey: 'location.seafront', distKey: 'location.seafront.dist' },
  { icon: Train, labelKey: 'location.station', distKey: 'location.station.dist' },
  { icon: Plane, labelKey: 'location.airport', distKey: 'location.airport.dist' },
  { icon: Waves, labelKey: 'location.beach', distKey: 'location.beach.dist' },
];

const attractions = [
  { 
    nameKey: 'location.basilica',
    descIt: 'La famosa basilica che custodisce le reliquie di San Nicola, meta di pellegrini da tutto il mondo.',
    descEn: 'The famous basilica housing the relics of Saint Nicholas, a pilgrimage destination from around the world.',
  },
  { 
    nameKey: 'location.castello',
    descIt: 'Imponente fortezza medievale nel cuore di Bari, simbolo della città con vista panoramica.',
    descEn: 'Impressive medieval fortress in the heart of Bari, symbol of the city with panoramic views.',
  },
  { 
    nameKey: 'location.teatro',
    descIt: 'Uno dei teatri più grandi d\'Europa, capolavoro architettonico che ospita opera e concerti.',
    descEn: 'One of the largest theaters in Europe, an architectural masterpiece hosting opera and concerts.',
  },
];

export default function Location() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom text-center">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Bari, Puglia
          </span>
          <h1 className="heading-display text-foreground mt-3">
            {t('location.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            {t('location.subtitle')}
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-large h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.234567890123!2d16.8666!3d41.1256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzMwLjAiTiAxNsKwNTInMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Comeacasatua location"
              />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-section text-foreground mb-4">
                  {t('location.subtitle')}
                </h2>
                <p className="text-body-large text-muted-foreground">
                  {t('location.desc')}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 p-4 bg-secondary rounded-xl">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{t('contact.address')}</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    {language === 'it' ? 'Apri in Google Maps' : 'Open in Google Maps'}
                  </a>
                </div>
              </div>

              {/* Distances */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-medium text-foreground">
                  {language === 'it' ? 'Distanze' : 'Distances'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {distances.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{t(item.labelKey)}</p>
                        <p className="text-sm text-muted-foreground">{t(item.distKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bari View */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src={bariView}
            alt="Bari panorama"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-warm-brown/60" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mb-4">
            {language === 'it' ? 'Scopri Bari' : 'Discover Bari'}
          </h2>
          <p className="text-cream/90 text-lg max-w-2xl mx-auto">
            {language === 'it'
              ? 'La perla dell\'Adriatico ti aspetta con il suo centro storico affascinante, la cucina deliziosa e il mare cristallino.'
              : 'The pearl of the Adriatic awaits you with its charming old town, delicious cuisine, and crystal-clear sea.'}
          </p>
        </div>
      </section>

      {/* Attractions */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section text-foreground">
              {t('location.attractions')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="card-warm p-8">
                <h3 className="heading-card text-foreground mb-3">
                  {t(attraction.nameKey)}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'it' ? attraction.descIt : attraction.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section text-foreground">
              {language === 'it' ? 'Come Raggiungerci' : 'How to Reach Us'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {language === 'it' ? 'In Aereo' : 'By Plane'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'it'
                  ? 'Aeroporto Karol Wojtyla a 25 minuti. Collegamento diretto con bus navetta o taxi.'
                  : 'Karol Wojtyla Airport 25 minutes away. Direct connection with shuttle bus or taxi.'}
              </p>
            </div>
            <div className="text-center p-6">
              <Train className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {language === 'it' ? 'In Treno' : 'By Train'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'it'
                  ? 'Stazione Centrale a 15 minuti a piedi. Treni diretti da Roma, Milano e principali città.'
                  : 'Central Station 15 minutes walk. Direct trains from Rome, Milan and major cities.'}
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {language === 'it' ? 'In Auto' : 'By Car'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'it'
                  ? 'Autostrada A14, uscita Bari Centro. Parcheggio convenzionato disponibile nelle vicinanze.'
                  : 'A14 highway, Bari Centro exit. Partner parking available nearby.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
