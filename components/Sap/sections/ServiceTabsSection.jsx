"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import Tabs from "../Tabs/Tabs";
import styles from "./ServiceTabsSection.module.css";

/**
 * Full-bleed "pick a service, see its method" panel used by SAP Services.
 * Reuses Tabs for the switcher and Container/Button for content, so the only
 * new surface is the full-bleed image + numbered method list layout itself.
 */
export default function ServiceTabsSection({ tabs, panels }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const panel = panels[activeId];

  if (!panel) return null;

  return (
    <section className={styles.section}>
      <Tabs tabs={tabs} activeId={activeId} onChange={setActiveId} stretch />

      <div className={styles.panel}>
        <Image
          key={panel.image}
          src={panel.image}
          alt={panel.imageAlt || ""}
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} />

        <Container className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>{panel.title}</h2>
            {panel.titleAccent && <p className={styles.titleAccent}>{panel.titleAccent}</p>}

            {(Array.isArray(panel.description) ? panel.description : [panel.description])
              .filter(Boolean)
              .map((paragraph) => (
                <p className={styles.description} key={paragraph}>
                  {paragraph}
                </p>
              ))}

            {panel.steps && panel.steps.length > 0 && (
              <div className={styles.method}>
                <h3 className={styles.methodTitle}>Here&apos;s Our Method</h3>
                <ol className={styles.steps}>
                  {panel.steps.map((step, index) => (
                    <li className={styles.step} key={step.label}>
                      <span className={styles.stepNumber}>{index + 1}.</span>
                      <span>
                        <strong className={styles.stepLabel}>{step.label}</strong>: {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {panel.buttons && panel.buttons.length > 0 && (
              <div className={styles.buttons}>
                {panel.buttons.map((btn) => (
                  <Button key={btn.label} href={btn.href} variant={btn.variant || "primary"} className={styles.button}>
                    {btn.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
