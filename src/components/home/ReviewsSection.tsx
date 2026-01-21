import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  {
    name: 'Marco & Giulia',
    location: 'Milano, Italia',
    rating: 5,
    textIt: 'Un posto magico! Ci siamo sentiti davvero come a casa. La colazione era deliziosa e Maria ci ha dato consigli fantastici su dove mangiare. Torneremo sicuramente!',
    textEn: 'A magical place! We truly felt at home. The breakfast was delicious and Maria gave us amazing tips on where to eat. We will definitely return!',
    date: 'Agosto 2024',
  },
  {
    name: 'Sophie & Thomas',
    location: 'Paris, France',
    rating: 5,
    textIt: 'Posizione perfetta, a due passi dalla Città Vecchia. La camera era pulita e accogliente. L\'ospitalità pugliese al suo meglio!',
    textEn: 'Perfect location, steps away from the Old Town. The room was clean and cozy. Apulian hospitality at its best!',
    date: 'Settembre 2024',
  },
  {
    name: 'Hans Schmidt',
    location: 'München, Deutschland',
    rating: 5,
    textIt: 'Eccellente B&B con un\'atmosfera familiare. La focaccia fresca a colazione era incredibile. Altamente raccomandato per visitare Bari!',
    textEn: 'Excellent B&B with a family atmosphere. The fresh focaccia at breakfast was incredible. Highly recommended for visiting Bari!',
    date: 'Luglio 2024',
  },
  {
    name: 'Elena Rossi',
    location: 'Roma, Italia',
    rating: 5,
    textIt: 'Il nome dice tutto: ti senti davvero come a casa tua. Gentilezza, pulizia e una colazione da leccarsi i baffi. Grazie di cuore!',
    textEn: 'The name says it all: you really feel at home. Kindness, cleanliness, and a breakfast to die for. Thank you from the bottom of my heart!',
    date: 'Ottobre 2024',
  },
];

export default function ReviewsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonianze
          </span>
          <h2 className="heading-section text-foreground mt-3">
            {t('reviews.title')}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-warm p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{language === 'it' ? review.textIt : review.textEn}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
