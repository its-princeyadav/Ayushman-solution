import Script from "next/script";
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
      {/* Swiper + the posts widget are only used by Brands/Testimonials
          (swiper) and Blog (post-pro) below, none of which render on any
          other route, so these are declared here instead of the root
          layout - /industries and /our-work no longer pay for them. */}
      <link rel="stylesheet" id="swiper-css" href="/assets/css/swiper.min.css" media="all" />
      <link rel="stylesheet" id="wcf--brand-slider-css" href="/assets/css/brand-slider.min.css" media="all" />
      <link rel="stylesheet" id="wcf--posts-css" href="/assets/css/posts.min.css" media="all" />
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
      {/* async={false} forces browsers to execute these in insertion order
          instead of network-completion order - slider.min.js/post-pro.min.js
          both call jQuery synchronously at parse time, so swiper needing to
          run first isn't actually the constraint, jQuery (loaded in
          app/layout.jsx, ahead of this whole subtree) having already
          executed is. Without this, the race is browser-dependent (found via
          real Firefox testing, not just Chromium). */}
      <Script id="swiper-js" src="/assets/js/swiper.min.js" strategy="afterInteractive" async={false} />
      <Script id="wcf--slider-js" src="/assets/js/slider.min.js" strategy="afterInteractive" async={false} />
      <Script id="wcf--posts-js" src="/assets/js/post-pro.min.js" strategy="afterInteractive" async={false} />
    </>
  );
}
