/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../StretchCard.module.css";

export default function Card({ card, setActiveCard }) {
  return (
    <div
      onClick={() => setActiveCard(card)}
      className={styles.card}
      style={{ borderRadius: 20 }}
    >
      <img src={card.image} alt="image" style={{ borderRadius: 20 }} />
      <button aria-hidden tabIndex={-1} className={styles.closeButton}>
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
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h2 className={styles.cardHeading}>Game of the day</h2>
        </div>
        <div
          className={styles.extraInfo}
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <img
            src={card.logo}
            width={40}
            height={40}
            alt="play"
            className="rounded-lg"
          />
          <div className={styles.descWrapper}>
            <span className={styles.gameTitle}>{card.title}</span>
            <span className={styles.gameDescription}>{card.description}</span>
          </div>
          <button className={styles.getButton}>Get</button>
        </div>
      </div>

      <div
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
      </div>
    </div>
  );
}
