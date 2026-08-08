"use client";

import { useState } from "react";
import Image from "next/image";
import { LuTarget, LuAward, LuBuilding2, LuShieldCheck } from "react-icons/lu";
import "./WhyBusinessesChooseUs.css";

/**
 * Standalone "Why Businesses Choose Us" section for Home2 - an interactive
 * vertical timeline on the left that swaps the image on the right. Built
 * with its own data, icons and CSS (all classes prefixed "home2WhyChoose-")
 * so it has zero dependency on any other component and can be dropped into
 * any page as-is.
 */
const FEATURES = [
  {
    icon: LuTarget,
    title: "Business-Centric Solutions",
    description: "Every implementation is aligned with your operational goals and growth strategy.",
    image: "/assets/image2/city-05.webp",
  },
  {
    icon: LuAward,
    title: "Certified SAP Experts",
    description:
      "Experienced consultants with deep expertise across SAP Business One, SAP S/4HANA, SAP BTP, and SAP Analytics.",
    image: "/assets/image2/fujikura-thumb-1.jpg",
  },
  {
    icon: LuBuilding2,
    title: "Industry Experience",
    description:
      "Proven success across Manufacturing, Pharmaceuticals, Retail, Distribution, Engineering, FMCG, Healthcare, and Services.",
    image: "/assets/image2/clearpack-thumb-1.jpg",
  },
  {
    icon: LuShieldCheck,
    title: "Cost-Effective Delivery",
    description: "Enterprise-grade solutions optimized for maximum ROI and long-term value.",
    image: "/assets/image2/city-06.webp",
  },
];

export default function WhyBusinessesChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = FEATURES[activeIndex];

  return (
    <section className="home2WhyChoose-section">
      <div className="home2WhyChoose-inner">
        <div className="home2WhyChoose-label">
          <span className="home2WhyChoose-labelBar" aria-hidden="true" />
          <span className="home2WhyChoose-labelText">Why Businesses Choose Us</span>
          <span className="home2WhyChoose-labelBar" aria-hidden="true" />
        </div>

        <div className="home2WhyChoose-grid">
          <div className="home2WhyChoose-list">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  key={feature.title}
                  className={`home2WhyChoose-item${isActive ? " home2WhyChoose-item--active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                >
                  <span className="home2WhyChoose-itemIcon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="home2WhyChoose-itemContent">
                    <span className="home2WhyChoose-itemTitle">{feature.title}</span>
                    <span className="home2WhyChoose-itemDesc">{feature.description}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="home2WhyChoose-media">
            <div className="home2WhyChoose-imageWrap" key={activeIndex}>
              <Image
                src={activeFeature.image}
                alt={activeFeature.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="home2WhyChoose-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
