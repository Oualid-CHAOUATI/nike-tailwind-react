import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";
import { NewsLetterSection } from "./components/NewsletterSection/NewsLetter-section";
import { PopularProducts } from "./components/Popular-products/Popular-products";
import { QualitySection } from "./components/Quality-section/Quality-section";
import { Services } from "./components/Services/Services";
import { SpecialOfferSection } from "./components/SpecialOffer-section/Special-offer-section";
import { TestemonialsSection } from "./components/Testemonials-section/Testimonials-section";
import("./App.scss");
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <PopularProducts />
      <QualitySection />
      <Services />
      <SpecialOfferSection />
      <TestemonialsSection />
      <NewsLetterSection />
      <Footer />
    </>
  );
}
