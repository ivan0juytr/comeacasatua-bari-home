import { Users, Maximize2, Wifi, Wind, Tv, Coffee, Bath, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import roomClassic from '@/assets/room-classic.jpg';
import roomSuperior from '@/assets/room-superior.jpg';
import roomSuite from '@/assets/room-suite.jpg';

const amenities = [
  { icon: Wifi, label: 'WiFi gratuito' },
  { icon: Wind, label: 'Aria condizionata' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Coffee, label: 'Minibar' },
  { icon: Bath, label: 'Bagno privato' },
];

const rooms = [
  {
    image: roomClassic,
    nameKey: 'rooms.classic.name',
    descKey: 'rooms.classic.desc',
    price: 80,
    guests: 2,
    size: 18,
    detailsIt: 'Camera accogliente e romantica con letto matrimoniale, perfetta per coppie. Arredata in stile mediterraneo con tocchi di blu mare. Bagno privato con doccia.',
    detailsEn: 'Cozy and romantic room with double bed, perfect for couples. Furnished in Mediterranean style with touches of sea blue. Private bathroom with shower.',
  },
  {
    image: roomSuperior,
    nameKey: 'rooms.superior.name',
    descKey: 'rooms.superior.desc',
    price: 110,
    guests: 2,
    size: 25,
    detailsIt: 'Camera più ampia con zona relax, vista sulla città, letto king-size. Elegante arredamento con materiali naturali. Bagno privato con vasca.',
    detailsEn: 'Larger room with relaxation area, city view, king-size bed. Elegant furnishings with natural materials. Private bathroom with bathtub.',
  },
  {
    image: roomSuite,
    nameKey: 'rooms.suite.name',
    descKey: 'rooms.suite.desc',
    price: 150,
    guests: 4,
    size: 35,
    detailsIt: 'Suite spaziosa con camera matrimoniale e divano letto, ideale per famiglie. Zona soggiorno separata. Bagno privato con doccia e vasca.',
    detailsEn: 'Spacious suite with double bedroom and sofa bed, ideal for families. Separate living area. Private bathroom with shower and bathtub.',
  },
];

export default function Rooms() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom text-center">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Accommodation
          </span>
          <h1 className="heading-display text-foreground mt-3">
            {t('rooms.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-20">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="image-hover rounded-2xl overflow-hidden shadow-large">
                  <img
                    src={room.image}
                    alt={t(room.nameKey)}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center justify-between">
                  <h2 className="heading-section text-foreground">
                    {t(room.nameKey)}
                  </h2>
                </div>
                
                <p className="text-body-large text-muted-foreground">
                  {language === 'it' ? room.detailsIt : room.detailsEn}
                </p>

                {/* Info */}
                <div className="flex items-center space-x-6 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{room.guests} {t('rooms.guests')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize2 className="w-5 h-5 text-primary" />
                    <span>{room.size} {t('rooms.size')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-primary" />
                    <span>{language === 'it' ? 'Vista città' : 'City view'}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-3">
                  {amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full text-sm text-foreground"
                    >
                      <amenity.icon className="w-4 h-4 text-primary" />
                      <span>{amenity.label}</span>
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-sm text-muted-foreground">{t('rooms.from')}</span>
                    <span className="block text-3xl font-heading font-semibold text-primary">
                      €{room.price}
                      <span className="text-lg font-normal text-muted-foreground">
                        {t('rooms.night')}
                      </span>
                    </span>
                  </div>
                  <Link to="/contatti">
                    <Button className="btn-primary px-8">
                      {t('rooms.view')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
