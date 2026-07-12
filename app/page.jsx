import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import About from "../components/About/About";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
import TechStack from "../components/TechStack/TechStack";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import ImageShowcase from "../components/ImageShowcase/ImageShowcase";
import Testimonials from "../components/Testimonials/Testimonials";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";
import Blog from "../components/Blog/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Portfolio />
      <Services />
      <ImageShowcase />
      <Testimonials />
      <Team />
      <FAQ />
      <CTA />
      <Blog />
    </>
  );
}
