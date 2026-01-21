import { Link } from 'react-router-dom';
import { Users, Maximize2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import roomClassic from '@/assets/room-classic.jpg';
import roomSuperior from '@/assets/room-superior.jpg';
import roomSuite from '@/assets/room-suite.jpg';

const rooms = [
  {
    image: roomClassic,
    nameKey: 'rooms.classic.name',
    descKey: 'rooms.classic.desc',
    price: 80,
    guests: 2,
    size: 18,
  },
  {
    image: roomSuperior,
    nameKey: 'rooms.superior.name',
    descKey: 'rooms.superior.desc',
    price: 110,
    guests: 2,
    size: 25,
  },
  {
    image: roomSuite,
    nameKey: 'rooms.suite.name',
    descKey: 'rooms.suite.desc',
    price: 150,
    guests: 4,
    size: 35,
  },
];

export default function RoomsPreview() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Accommodation
          </span>
          <h2 className="heading-section text-foreground mt-3">
            {t('rooms.title')}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {t('rooms.subtitle')}
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="card-warm overflow-hidden group"
            >
              <div className="image-hover h-64">
                <img
                  src={room.image}
                  alt={t(room.nameKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="heading-card text-foreground">
                    {t(room.nameKey)}
                  </h3>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">{t('rooms.from')}</span>
                    <span className="block text-xl font-semibold text-primary">
                      €{room.price}
                      <span className="text-sm font-normal text-muted-foreground">
                        {t('rooms.night')}
                      </span>
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {t(room.descKey)}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests} {t('rooms.guests')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Maximize2 className="w-4 h-4" />
                    <span>{room.size} {t('rooms.size')}</span>
                  </div>
                </div>
                <Link to="/contatti">
                  <Button className="w-full btn-outline mt-2">
                    {t('rooms.view')}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/camere" className="inline-flex items-center space-x-2 text-primary font-medium hover:gap-3 transition-all group">
            <span>{t('rooms.all')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
