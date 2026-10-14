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
import Store from "./components/Store";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import VisitorPrefs from "./components/VisitorPrefs";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "");

  if (path === "/Terms") {
    return (
      <>
        <Terms />
        <VisitorPrefs />
      </>
    );
  }

  if (path === "/Privacy") {
    return (
      <>
        <Privacy />
        <VisitorPrefs />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <WhyChooseUs />

        <Services />

        <Store />

        <Portfolio />

        <Testimonials />

        <Contact />

      </main>

      <Footer />

      <WhatsAppButton />

      <ScrollTop />

      <VisitorPrefs />

    </>
  );
}

export default App;