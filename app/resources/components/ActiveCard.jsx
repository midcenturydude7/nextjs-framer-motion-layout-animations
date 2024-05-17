"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import styles from "../StretchCard.module.css";

export default function ActiveCard({ activeCard, setActiveCard }) {
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setActiveCard(null));

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${activeCard.title}`}
      className={`${styles.card} ${styles.cardActive}`}
      style={{ borderRadius: 0 }}
    >
      <div className={styles.cardInner}>
        <motion.img
          layoutId={`image-${activeCard.title}`}
          src={activeCard.image}
          alt="image"
          style={{ borderRadius: 0 }}
        />
        <motion.button
          layoutId={`close-button-${activeCard.title}`}
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
        </motion.button>
        <motion.div
          layoutId={`card-content-${activeCard.title}`}
          className={`${styles.cardContent} ${styles.activeCardContent}`}
        >
          <div className={styles.cardText}>
            <motion.h2
              layoutId={`card-heading-${activeCard.title}`}
              layout
              className={styles.cardHeading}
            >
              Game of the day
            </motion.h2>
          </div>
          <motion.div
            layoutId={`card-extra-info-${activeCard.title}`}
            className={styles.extraInfo}
            style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
            <motion.img
              layoutId={`card-game-image-${activeCard.title}`}
              src={activeCard.logo}
              alt="play"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className={styles.descWrapper}>
              <motion.span
                layoutId={`card-game-title-${activeCard.title}`}
                className={styles.gameTitle}
              >
                {activeCard.title}
              </motion.span>
              <motion.span
                layoutId={`card-game-subtitle-${activeCard.title}`}
                className={styles.gameSubtitle}
              >
                {activeCard.description}
              </motion.span>
            </div>
            <motion.button
              layoutId={`card-button-${activeCard.title}`}
              layout
              className={styles.getButton}
            >
              Get
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        layoutId={`card-long-description-${activeCard.title}`}
        className={styles.longDescription}
      >
        <p>
          <b>Are you ready?</b> {activeCard.longDescription}
        </p>
        <p>
          <b>The never ending adventure </b>
          In this game set in a fairy tale world, players embark on a quest
          through mystical lands filled with enchanting forests and towering
          mountains. Players can explore the world, build their own viking
        </p>
      </motion.div>
    </motion.div>
  );
}
