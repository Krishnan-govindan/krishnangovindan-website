import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TransformationPillars from "./components/TransformationPillars";
import PainPoints from "./components/PainPoints";
import AboutKrishnan from "./components/AboutKrishnan";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div>
      {/* Skip to main content — visually hidden, visible on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-body focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <TransformationPillars />
        <PainPoints />
        <AboutKrishnan />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
