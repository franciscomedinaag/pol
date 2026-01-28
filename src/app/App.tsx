import { Hero } from '@/app/components/Hero';
import { Navigation } from '@/app/components/Navigation';
import { About } from '@/app/components/About';
import { Music } from '@/app/components/Music';
import { Gallery } from '@/app/components/Gallery';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { WhatsAppFloat } from '@/app/components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WhatsAppFloat />
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
