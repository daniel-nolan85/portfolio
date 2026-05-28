import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhoIWorkWith from '@/components/WhoIWorkWith';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhoIWorkWith />
        <Process />
        <Projects />
        <Testimonials />
        <Booking />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
