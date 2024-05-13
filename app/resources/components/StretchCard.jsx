"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConClickOutside } from "usehooks-ts";
import styles from "./StretchCard.module.css";

export default function StretchCard({ card, setActiveCard }) {
  return (
    <div>
      <img src={card.image} alt="image" style={{ borderRadius: 20 }} />
      <button aria-hidden tabIndex={-1} className={styles.closeButton}></button>
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
