/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../StretchCard.module.css";

export default function Card({ card, setActiveCard }) {
  return (
    <motion.div
      layoutId={`card-${card.title}`}
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCard(card)}
      className={styles.card}
      style={{ borderRadius: 20 }}
    >
      <motion.img
        layoutId={`image-${card.title}`}
        src={card.image}
        alt="image"
        style={{ borderRadius: 20 }}
      />
      <motion.button
        layoutId={`close-button-${card.title}`}
        aria-hidden
        tabIndex={-1}
        className={styles.closeButton}
        style={{ opacity: 0 }}
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
        layoutId={`card-content-${card.title}`}
        className={styles.cardContent}
      >
        <div className={styles.cardText}>
          <motion.h2
            layoutId={`card-heading-${card.title}`}
            className={styles.cardHeading}
          >
            Game of the day
          </motion.h2>
        </div>
        <motion.div
          layoutId={`card-extra-info-${card.title}`}
          className={styles.extraInfo}
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <motion.img
            layoutId={`card-game-image-${card.title}`}
            src={card.logo}
            width={40}
            height={40}
            alt="play"
            className="rounded-lg"
          />
          <div className={styles.descWrapper}>
            <motion.span
              layoutId={`card-game-title-${card.title}`}
              className={styles.gameTitle}
            >
              {card.title}
            </motion.span>
            <motion.span
              layoutId={`card-game-subtitle-${card.title}`}
              className={styles.gameSubtitle}
            >
              {card.description}
            </motion.span>
          </div>
          <motion.button
            layoutId={`card-button-${card.title}`}
            className={styles.getButton}
          >
            Get
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        layoutId={`card-long-description-${card.title}`}
        className={styles.longDescription}
        style={{ position: "absolute", top: "100%", opacity: 0 }}
      >
        <div>
          <p>
            <b>Are you ready?</b> {card.longDescription}
          </p>
          <p>
            <b>The never ending adventure</b>
            In this game, set in a fairy tale world, players embark on a quest
            through mystical lands filled with enchanting forests and towering
            mountains.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
