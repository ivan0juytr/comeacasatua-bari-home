import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import RoomsPreview from '@/components/home/RoomsPreview';
import ReviewsSection from '@/components/home/ReviewsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <WhyChooseUs />
        <RoomsPreview />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
