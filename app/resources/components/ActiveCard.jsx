"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import styles from "../StretchCard.module.css";

export default function ActiveCard({ activeCard, setActiveCard }) {
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setActiveCard(null));

  return (
    <div ref={ref} className={`${styles.card} ${styles.cardActive}`}>
      <div className={styles.cardInner}>
        <img src={activeCard.image} alt="image" style={{ borderRadius: 0 }} />
        <button
          onClick={() => setActiveCard(null)}
          className={styles.closeButton}
          aria-label="Close button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            height="20"
            width="20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className={`${styles.cardContent} ${styles.activeCardContent}`}>
          <div className={styles.cardText}>
            <h2 className={styles.cardHeading}>Game of the day</h2>
          </div>
          <div
            className={styles.extraInfo}
            style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
            <img
              src={activeCard.logo}
              alt="play"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className={styles.descWrapper}>
              <span className={styles.gameTitle}>{activeCard.title}</span>
              <span className={styles.gameSubtitle}>
                {activeCard.description}
              </span>
            </div>
            <button className={styles.getButton}>Get</button>
          </div>
        </div>
      </div>

      <div className={styles.longDescription}>
        <p>
          <b>Are you ready?</b> {activeCard.longDescription}
        </p>
        <p>
          <b>The never ending adventure </b>
          In this game set in a fairy tale world, players embark on a quest
          through mystical lands filled with enchanting forests and towering
          mountains. Players can explore the world, build their own viking
        </p>
      </div>
    </div>
  );
}
