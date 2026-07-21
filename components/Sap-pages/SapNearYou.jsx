import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import Container from "../Sap/common/Container";
import SectionHeading from "../Sap/common/SectionHeading";
import BlogCard from "../Sap/Cards/BlogCard";
import CTASection from "../Sap/CTA/CTASection";
import CenteredSection from "../Sap/common/CenteredSection";
import { sapNearYou } from "../../data/sapNearYouData";
import styles from "./SapNearYou.module.css";

export default function SapNearYou() {
  const { hero, cityListing, cities, ctaBanner, contactTeaser } = sapNearYou;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <section className={styles.section}>
          <Container>
            <SectionHeading title={cityListing.title} description={cityListing.description} align="center" />
            <div className={styles.cityGrid}>
              {cities.map((city) => (
                <BlogCard key={city.route} title={city.title} description={city.description} image={city.image} href={city.route} />
              ))}
            </div>
          </Container>
        </section>
      </div>

      <CTASection {...ctaBanner} />

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
