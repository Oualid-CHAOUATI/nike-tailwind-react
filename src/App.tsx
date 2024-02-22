import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Nav, SECTIONS_ANCHORS } from "./components/Nav/Nav";
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
      <PopularProducts id={SECTIONS_ANCHORS.popular.link.replace("#", "")} />
      <QualitySection id={SECTIONS_ANCHORS.quality.link.replace("#", "")} />
      <Services id={SECTIONS_ANCHORS.services.link.replace("#", "")} />
      <SpecialOfferSection
        id={SECTIONS_ANCHORS.specialOffer.link.replace("#", "")}
      />
      <TestemonialsSection
        id={SECTIONS_ANCHORS.testemonials.link.replace("#", "")}
      />
      <NewsLetterSection
        id={SECTIONS_ANCHORS.newsletter.link.replace("#", "")}
      />
      <Footer />
    </>
  );
}
