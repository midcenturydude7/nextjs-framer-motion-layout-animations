/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConClickOutside } from "usehooks-ts";
import styles from "./StretchCard.module.css";

function Card({ card, setActiveCard }) {
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

function ActiveCard({ activeCard, setActiveCard }) {
  const ref = React.useRef(null);
  useConClickOutside(ref, () => setActiveCard(null));

  return (
    <div className={`${styles.card} ${styles.cardActive}`}>
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

export default function StretchCard() {
  const [activeCard, setActiveCard] = React.useState(null);

  React.useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={styles.cardsWrapper}>
      {CARDS.map((card) => (
        <Card key={card.title} card={card} setActiveCard={setActiveCard} />
      ))}
      {activeCard ? <div className={styles.overlay}></div> : null}
      {activeCard ? (
        <ActiveCard activeCard={activeCard} setActiveCard={setActiveCard} />
      ) : null}
    </div>
  );
}

const CARDS = [
  {
    title: "Vikings",
    subtitle: "Clash of the Norse Warriors",
    description: "A game about vikings",
    longDescription:
      "A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp",
    logo: "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp",
  },
];
