import { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Send, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const faqItems = [
  { qKey: 'faq.checkin.q', aKey: 'faq.checkin.a' },
  { qKey: 'faq.breakfast.q', aKey: 'faq.breakfast.a' },
  { qKey: 'faq.parking.q', aKey: 'faq.parking.a' },
  { qKey: 'faq.pets.q', aKey: 'faq.pets.a' },
  { qKey: 'faq.cancel.q', aKey: 'faq.cancel.a' },
];

export default function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    dates: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'it' ? 'Errore' : 'Error',
        description: language === 'it' 
          ? 'Compila tutti i campi obbligatori' 
          : 'Please fill in all required fields',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: language === 'it' ? 'Messaggio inviato!' : 'Message sent!',
      description: t('contact.success'),
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        dates: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom text-center">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            {language === 'it' ? 'Prenota il tuo soggiorno' : 'Book your stay'}
          </span>
          <h1 className="heading-display text-foreground mt-3">
            {t('contact.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="heading-section text-foreground mb-8">
                {language === 'it' ? 'Inviaci un messaggio' : 'Send us a message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === 'it' ? 'Il tuo nome' : 'Your name'}
                      required
                      className="bg-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="bg-card"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.phone')}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 123 456 7890"
                      className="bg-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">{t('contact.guests')}</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="2"
                      className="bg-card"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dates">{t('contact.dates')}</Label>
                  <Input
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder={language === 'it' ? 'Es. 15-20 Giugno 2025' : 'E.g. June 15-20, 2025'}
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={language === 'it' 
                      ? 'Come possiamo aiutarti?' 
                      : 'How can we help you?'}
                    rows={5}
                    required
                    className="bg-card resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      {t('contact.success')}
                    </>
                  ) : isSubmitting ? (
                    language === 'it' ? 'Invio in corso...' : 'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.send')}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-section text-foreground mb-8">
                  {t('contact.info')}
                </h2>
                
                <div className="space-y-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                  >
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {language === 'it' ? 'Indirizzo' : 'Address'}
                      </p>
                      <p className="text-muted-foreground">{t('contact.address')}</p>
                    </div>
                  </a>

                  <a
                    href="tel:+393401234567"
                    className="flex items-center space-x-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        {language === 'it' ? 'Telefono' : 'Phone'}
                      </p>
                      <p className="text-muted-foreground">+39 340 123 4567</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@comeacasatua.it"
                    className="flex items-center space-x-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@comeacasatua.it</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Booking.com Button */}
              <div className="p-6 bg-mediterranean/10 rounded-xl border border-mediterranean/20">
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  {language === 'it' ? 'Prenota Online' : 'Book Online'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'it'
                    ? 'Prenota direttamente su Booking.com per conferma immediata.'
                    : 'Book directly on Booking.com for instant confirmation.'}
                </p>
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-accent w-full">
                    {t('contact.booking')}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="heading-section text-foreground mt-3">
              {t('faq.title')}
            </h2>
            <p className="text-muted-foreground mt-4">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left font-heading text-lg font-medium text-foreground hover:no-underline py-5">
                    {t(item.qKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {t(item.aKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
