"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiOutlinePlayCircle,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineShare,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Tabs from "../Tabs/Tabs";
import Slider from "../Slider/Slider";
import styles from "./TestimonialsSection.module.css";

const TABS = [
  { id: "video", label: "Video", icon: <HiOutlinePlayCircle /> },
  { id: "text", label: "Text", icon: <HiOutlineChatBubbleLeftRight /> },
];

// The four corner "avatar" slots are decorative on every page that uses this
// section - every data/*.js file passes the exact same four filenames
// (s-1..s-4.webp, low-quality clip-art glyphs) alongside one real headshot
// at topCenter. Rather than touching a dozen data files, the component
// itself now renders a fixed premium icon (ignoring `avatar.src`) for each
// corner position, so every page picks up the upgrade automatically; the
// topCenter entry keeps rendering its real photo exactly as before.
const CORNER_ICONS = {
  topLeft: HiOutlineCube,
  topRight: HiOutlineShieldCheck,
  bottomLeft: HiOutlineShare,
  bottomRight: HiOutlineUserGroup,
};

// Small context badge above the heading that names whichever tab is active
// ("Video Testimonials" / "Text Testimonials") - reinforces which single
// view is currently showing, on top of the tabs themselves.
const EYEBROW_LABEL = {
  video: "Video Testimonials",
  text: "Text Testimonials",
};

export default function TestimonialsSection({
  title,
  description,
  action,
  avatars = [],
  videos = [],
  texts = [],
}) {
  const [activeTab, setActiveTab] = useState("video");
  // Only the active tab's items are ever handed to the slider below, so the
  // inactive testimonial type never mounts - video and text can't render
  // simultaneously.
  const items = activeTab === "video" ? videos : texts;
  const EyebrowIcon = activeTab === "video" ? HiOutlinePlayCircle : HiOutlineChatBubbleLeftRight;

  return (
    <section className={styles.section} data-sap-reveal>
      {avatars.map((avatar) => {
        const CornerIcon = CORNER_ICONS[avatar.position];
        return (
          <span
            key={avatar.src ?? avatar.position}
            className={`${styles.avatar} ${styles[avatar.position]} ${CornerIcon ? styles.iconBadge : ""}`}
          >
            {CornerIcon ? (
              <CornerIcon aria-hidden="true" />
            ) : (
              <Image src={avatar.src} alt="" width={56} height={56} />
            )}
          </span>
        );
      })}

      <Container>
        <span className={styles.eyebrow}>
          <EyebrowIcon aria-hidden="true" />
          {EYEBROW_LABEL[activeTab]}
        </span>

        <SectionHeading title={title} description={description} action={action} />

        <div className={styles.tabsRow}>
          <Tabs tabs={TABS} activeId={activeTab} onChange={setActiveTab} pill />
        </div>

        {/* Keyed on the active tab so React fully unmounts the previous
            tab's slider/cards on switch (not just visually hides them) and
            the fade/rise animation replays on every switch. */}
        <div
          className={styles.panel}
          key={activeTab}
          role="tabpanel"
          aria-label={EYEBROW_LABEL[activeTab]}
        >
          <Slider
            items={items}
            cardType="testimonial"
            cardProps={{ variant: activeTab }}
            slidesPerView={{ base: 1, sm: 2, lg: 2 }}
            gap={24}
            showArrows={false}
            dotVariant="pill"
            ariaLabel="Client testimonials"
          />
        </div>
      </Container>
    </section>
  );
}
