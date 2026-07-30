"use client";

import { useState } from "react";
import Container from "../Sap/common/Container";
import SectionHeading from "../Sap/common/SectionHeading";
import Tabs from "../Sap/Tabs/Tabs";
import CheckList from "../Sap/common/CheckList";
import styles from "./JourneyTabs.module.css";

/**
 * "Discover / Decide / Transform" process stepper. Built from the same
 * generic Tabs + CheckList primitives TestimonialsSection/ImageTextSection
 * already use elsewhere, rather than repurposing TimelineTabs (which is
 * shaped specifically around an awards-by-year list, not a capability
 * journey) or introducing a new slider/carousel dependency.
 */
export default function JourneyTabs({ title, description, stages }) {
  const [activeId, setActiveId] = useState(stages[0].id);
  const active = stages.find((stage) => stage.id === activeId) || stages[0];
  const activeIndex = stages.findIndex((stage) => stage.id === activeId);

  return (
    <section className={styles.section} data-sap-reveal>
      <Container>
        <SectionHeading title={title} description={description} align="center" />

        <Tabs
          tabs={stages.map((stage) => ({ id: stage.id, label: stage.label }))}
          activeId={activeId}
          onChange={setActiveId}
          stretch
        />

        <div className={styles.panel}>
          <span className={styles.panelIndex}>{String(activeIndex + 1).padStart(2, "0")}</span>
          <h3 className={styles.panelTitle}>{active.title}</h3>
          <p className={styles.panelDescription}>{active.description}</p>
          <CheckList items={active.items} />
        </div>
      </Container>
    </section>
  );
}
