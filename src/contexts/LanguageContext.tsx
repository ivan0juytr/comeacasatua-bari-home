import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Camere',
    'nav.services': 'Servizi',
    'nav.location': 'Posizione',
    'nav.contact': 'Contatti',
    'nav.book': 'Prenota Ora',
    
    // Hero
    'hero.welcome': 'Benvenuti a',
    'hero.name': 'Comeacasatua',
    'hero.subtitle': 'Il tuo rifugio nel cuore di Bari',
    'hero.cta': 'Scopri le Camere',
    'hero.book': 'Prenota Ora',
    
    // Intro
    'intro.title': 'Sentiti come a casa tua',
    'intro.text': 'Nel cuore pulsante di Bari, Comeacasatua ti accoglie con tutto il calore dell\'ospitalità pugliese. Ogni dettaglio è pensato per farti sentire a casa, tra comfort moderni e autenticità locale.',
    'intro.discover': 'Scopri di più',
    
    // Why Choose Us
    'why.title': 'Perché Sceglierci',
    'why.subtitle': 'Tutto ciò che rende unico il tuo soggiorno',
    'why.location.title': 'Posizione Strategica',
    'why.location.desc': 'A pochi passi dalla Città Vecchia, dal lungomare e dalle migliori attrazioni di Bari.',
    'why.breakfast.title': 'Colazione Pugliese',
    'why.breakfast.desc': 'Ogni mattina una colazione ricca con prodotti locali freschi e specialità tipiche.',
    'why.comfort.title': 'Comfort Moderno',
    'why.comfort.desc': 'Camere eleganti con tutti i comfort: WiFi veloce, aria condizionata, biancheria premium.',
    'why.hospitality.title': 'Ospitalità Familiare',
    'why.hospitality.desc': 'Vi accogliamo come famiglia, con consigli personalizzati e attenzione ai dettagli.',
    'why.flexible.title': 'Flessibilità',
    'why.flexible.desc': 'Check-in e check-out flessibili per adattarci alle vostre esigenze di viaggio.',
    
    // Rooms
    'rooms.title': 'Le Nostre Camere',
    'rooms.subtitle': 'Eleganza e comfort per ogni esigenza',
    'rooms.classic.name': 'Camera Classic',
    'rooms.classic.desc': 'Accogliente e luminosa, perfetta per coppie in cerca di romanticismo e tranquillità.',
    'rooms.superior.name': 'Camera Superior',
    'rooms.superior.desc': 'Più ampia e raffinata, con vista sulla città e angolo relax dedicato.',
    'rooms.suite.name': 'Suite Famiglia',
    'rooms.suite.desc': 'Spaziosa e versatile, ideale per famiglie o soggiorni prolungati.',
    'rooms.from': 'da',
    'rooms.night': '/notte',
    'rooms.guests': 'ospiti',
    'rooms.size': 'mq',
    'rooms.view': 'Verifica Disponibilità',
    'rooms.all': 'Vedi Tutte le Camere',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Per un soggiorno indimenticabile',
    'services.breakfast': 'Colazione Inclusa',
    'services.breakfast.desc': 'Ricca colazione italiana con prodotti locali freschi ogni mattina.',
    'services.wifi': 'WiFi Gratuito',
    'services.wifi.desc': 'Connessione ad alta velocità in tutte le aree del B&B.',
    'services.ac': 'Aria Condizionata',
    'services.ac.desc': 'Climatizzazione in ogni camera per il massimo comfort.',
    'services.cleaning': 'Pulizia Giornaliera',
    'services.cleaning.desc': 'Servizio di pulizia e cambio biancheria quotidiano.',
    'services.checkin': 'Check-in Flessibile',
    'services.checkin.desc': 'Orari personalizzabili per accogliervi al meglio.',
    'services.parking': 'Parcheggio Convenzionato',
    'services.parking.desc': 'Parcheggio sicuro a pochi passi dalla struttura.',
    'services.concierge': 'Servizio Concierge',
    'services.concierge.desc': 'Consigli e prenotazioni per ristoranti, tour e esperienze.',
    'services.luggage': 'Deposito Bagagli',
    'services.luggage.desc': 'Custodia gratuita dei bagagli per early check-in o late check-out.',
    
    // Location
    'location.title': 'Dove Siamo',
    'location.subtitle': 'Nel cuore di Bari',
    'location.desc': 'Situati nel centro storico di Bari, a pochi passi dalle principali attrazioni della città. La posizione ideale per esplorare la bellezza della Puglia.',
    'location.oldtown': 'Città Vecchia',
    'location.oldtown.dist': '5 minuti a piedi',
    'location.seafront': 'Lungomare',
    'location.seafront.dist': '10 minuti a piedi',
    'location.station': 'Stazione Centrale',
    'location.station.dist': '15 minuti a piedi',
    'location.airport': 'Aeroporto',
    'location.airport.dist': '25 minuti in auto',
    'location.beach': 'Spiagge',
    'location.beach.dist': '15 minuti in auto',
    'location.attractions': 'Attrazioni Vicine',
    'location.basilica': 'Basilica di San Nicola',
    'location.castello': 'Castello Svevo',
    'location.teatro': 'Teatro Petruzzelli',
    
    // Reviews
    'reviews.title': 'Cosa Dicono i Nostri Ospiti',
    'reviews.subtitle': 'Le esperienze di chi ci ha scelto',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.subtitle': 'Tutto quello che devi sapere',
    'faq.checkin.q': 'Quali sono gli orari di check-in e check-out?',
    'faq.checkin.a': 'Il check-in è dalle 14:00 alle 20:00, il check-out entro le 10:30. Per orari diversi, contattateci e cercheremo di accontentarvi.',
    'faq.breakfast.q': 'La colazione è inclusa?',
    'faq.breakfast.a': 'Sì, la colazione è sempre inclusa nel prezzo. Serviamo una ricca colazione italiana con prodotti locali freschi ogni mattina.',
    'faq.parking.q': 'C\'è un parcheggio disponibile?',
    'faq.parking.a': 'Abbiamo una convenzione con un parcheggio custodito a 100 metri dalla struttura. Il costo è di €15 al giorno.',
    'faq.pets.q': 'Sono ammessi animali domestici?',
    'faq.pets.a': 'Sì, gli animali di piccola taglia sono i benvenuti con un supplemento di €10 a notte. Vi preghiamo di comunicarcelo al momento della prenotazione.',
    'faq.cancel.q': 'Qual è la politica di cancellazione?',
    'faq.cancel.a': 'Cancellazione gratuita fino a 48 ore prima dell\'arrivo. Per cancellazioni tardive, verrà addebitata la prima notte.',
    
    // Contact
    'contact.title': 'Contattaci',
    'contact.subtitle': 'Siamo qui per aiutarti',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.phone': 'Telefono',
    'contact.message': 'Messaggio',
    'contact.dates': 'Date di interesse',
    'contact.guests': 'Numero ospiti',
    'contact.send': 'Invia Messaggio',
    'contact.success': 'Messaggio inviato con successo!',
    'contact.booking': 'Prenota su Booking.com',
    'contact.info': 'Informazioni di Contatto',
    'contact.address': 'Via Roma 123, 70121 Bari, Italia',
    
    // Footer
    'footer.desc': 'Il tuo rifugio accogliente nel cuore di Bari. Vivi l\'autentica ospitalità pugliese.',
    'footer.links': 'Link Utili',
    'footer.contact': 'Contatti',
    'footer.social': 'Seguici',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Termini e Condizioni',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.services': 'Services',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.name': 'Comeacasatua',
    'hero.subtitle': 'Your retreat in the heart of Bari',
    'hero.cta': 'Discover Rooms',
    'hero.book': 'Book Now',
    
    // Intro
    'intro.title': 'Feel at home',
    'intro.text': 'In the vibrant heart of Bari, Comeacasatua welcomes you with all the warmth of Apulian hospitality. Every detail is designed to make you feel at home, blending modern comfort with local authenticity.',
    'intro.discover': 'Discover More',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'Everything that makes your stay unique',
    'why.location.title': 'Strategic Location',
    'why.location.desc': 'Just steps from the Old Town, seafront, and the best attractions in Bari.',
    'why.breakfast.title': 'Apulian Breakfast',
    'why.breakfast.desc': 'Every morning a rich breakfast with fresh local products and typical specialties.',
    'why.comfort.title': 'Modern Comfort',
    'why.comfort.desc': 'Elegant rooms with all amenities: fast WiFi, air conditioning, premium linens.',
    'why.hospitality.title': 'Family Hospitality',
    'why.hospitality.desc': 'We welcome you like family, with personalized tips and attention to detail.',
    'why.flexible.title': 'Flexibility',
    'why.flexible.desc': 'Flexible check-in and check-out to adapt to your travel needs.',
    
    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Elegance and comfort for every need',
    'rooms.classic.name': 'Classic Room',
    'rooms.classic.desc': 'Cozy and bright, perfect for couples seeking romance and tranquility.',
    'rooms.superior.name': 'Superior Room',
    'rooms.superior.desc': 'Larger and more refined, with city views and a dedicated relaxation area.',
    'rooms.suite.name': 'Family Suite',
    'rooms.suite.desc': 'Spacious and versatile, ideal for families or extended stays.',
    'rooms.from': 'from',
    'rooms.night': '/night',
    'rooms.guests': 'guests',
    'rooms.size': 'sqm',
    'rooms.view': 'Check Availability',
    'rooms.all': 'View All Rooms',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'For an unforgettable stay',
    'services.breakfast': 'Breakfast Included',
    'services.breakfast.desc': 'Rich Italian breakfast with fresh local products every morning.',
    'services.wifi': 'Free WiFi',
    'services.wifi.desc': 'High-speed connection in all areas of the B&B.',
    'services.ac': 'Air Conditioning',
    'services.ac.desc': 'Climate control in every room for maximum comfort.',
    'services.cleaning': 'Daily Cleaning',
    'services.cleaning.desc': 'Daily cleaning service and linen change.',
    'services.checkin': 'Flexible Check-in',
    'services.checkin.desc': 'Customizable hours to welcome you at your best.',
    'services.parking': 'Partner Parking',
    'services.parking.desc': 'Secure parking just steps from the property.',
    'services.concierge': 'Concierge Service',
    'services.concierge.desc': 'Tips and reservations for restaurants, tours, and experiences.',
    'services.luggage': 'Luggage Storage',
    'services.luggage.desc': 'Free luggage storage for early check-in or late check-out.',
    
    // Location
    'location.title': 'Where We Are',
    'location.subtitle': 'In the heart of Bari',
    'location.desc': 'Located in the historic center of Bari, just steps from the main attractions of the city. The ideal location to explore the beauty of Puglia.',
    'location.oldtown': 'Old Town',
    'location.oldtown.dist': '5 minutes walk',
    'location.seafront': 'Seafront',
    'location.seafront.dist': '10 minutes walk',
    'location.station': 'Central Station',
    'location.station.dist': '15 minutes walk',
    'location.airport': 'Airport',
    'location.airport.dist': '25 minutes by car',
    'location.beach': 'Beaches',
    'location.beach.dist': '15 minutes by car',
    'location.attractions': 'Nearby Attractions',
    'location.basilica': 'Basilica of Saint Nicholas',
    'location.castello': 'Swabian Castle',
    'location.teatro': 'Petruzzelli Theatre',
    
    // Reviews
    'reviews.title': 'What Our Guests Say',
    'reviews.subtitle': 'Experiences from those who chose us',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know',
    'faq.checkin.q': 'What are the check-in and check-out times?',
    'faq.checkin.a': 'Check-in is from 2:00 PM to 8:00 PM, check-out by 10:30 AM. For different times, contact us and we will try to accommodate you.',
    'faq.breakfast.q': 'Is breakfast included?',
    'faq.breakfast.a': 'Yes, breakfast is always included in the price. We serve a rich Italian breakfast with fresh local products every morning.',
    'faq.parking.q': 'Is there parking available?',
    'faq.parking.a': 'We have an agreement with a guarded parking lot 100 meters from the property. The cost is €15 per day.',
    'faq.pets.q': 'Are pets allowed?',
    'faq.pets.a': 'Yes, small pets are welcome with a supplement of €10 per night. Please let us know when booking.',
    'faq.cancel.q': 'What is the cancellation policy?',
    'faq.cancel.a': 'Free cancellation up to 48 hours before arrival. For late cancellations, the first night will be charged.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.dates': 'Dates of interest',
    'contact.guests': 'Number of guests',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.booking': 'Book on Booking.com',
    'contact.info': 'Contact Information',
    'contact.address': 'Via Roma 123, 70121 Bari, Italy',
    
    // Footer
    'footer.desc': 'Your cozy retreat in the heart of Bari. Experience authentic Apulian hospitality.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.social': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
