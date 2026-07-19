"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Tabs from "../Tabs/Tabs";
import Slider from "../Slider/Slider";
import styles from "./TestimonialsSection.module.css";

const TABS = [
  { id: "video", label: "Video" },
  { id: "text", label: "Text" },
];

export default function TestimonialsSection({
  title,
  description,
  action,
  avatars = [],
  videos = [],
  texts = [],
}) {
  const [activeTab, setActiveTab] = useState("video");
  const items = activeTab === "video" ? videos : texts;

  return (
    <section className={styles.section}>
      {avatars.map((avatar) => (
        <span key={avatar.src} className={`${styles.avatar} ${styles[avatar.position]}`}>
          <Image src={avatar.src} alt="" width={56} height={56} />
        </span>
      ))}

      <Container>
        <SectionHeading
          title={title}
          description={description}
          action={action}
        />

        <Tabs tabs={TABS} activeId={activeTab} onChange={setActiveTab} />

        <div className={styles.divider} />

        <Slider
          items={items}
          cardType="testimonial"
          cardProps={{ variant: activeTab }}
          slidesPerView={{ base: 1, sm: 2, lg: 2 }}
          gap={24}
          showArrows={false}
          ariaLabel="Client testimonials"
        />
      </Container>
    </section>
  );
}
