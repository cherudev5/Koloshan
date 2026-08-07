import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <WhyChooseUs />

        <Services />

        <Portfolio />

        <Testimonials />

        <Contact />

      </main>

      <Footer />

      <WhatsAppButton />

      <ScrollTop />

    </>
  );
}

export default App;