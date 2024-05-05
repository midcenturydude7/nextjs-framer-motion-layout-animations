"use client";
// import Image from "next/image";
import React from "react";
import { motion, AnimatedPresence } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import styles from "../AnimatedCard.module.css";

export default function AnimatedCard() {
  const [activeGame, setActiveGame] = React.useState(null);
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  React.useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {activeGame ? (
        <>
          <div className={styles.overlay} />
          <div className={styles.active}>
            <div
              className={styles.inner}
              ref={ref}
              style={{ borderRadius: 12 }}
            >
              <div className={styles.header}>
                <img
                  height={56}
                  width={56}
                  alt="Game"
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                />
                <div className={styles.headerInner}>
                  <div className={styles.contentWrapper}>
                    <h2 className={styles.gameTitle}>{activeGame.title}</h2>
                    <p className={styles.gameDescription}>
                      {activeGame.description}
                    </p>
                  </div>
                  <button className={styles.button}>Get</button>
                </div>
              </div>
              <p className={styles.longDescription}>
                {activeGame.longDescription}
              </p>
            </div>
          </div>
        </>
      ) : null}
      <ul className={styles.list}>
        {GAMES.map((game) => (
          <li
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 12 }}
          >
            <img
              width={56}
              height={56}
              alt="Game"
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className={styles.gameWrapper}>
              <div className={styles.contentWrapper}>
                <h2 className={styles.gameTitle}>{game.title}</h2>
                <p className={styles.gameDescription}>{game.description}</p>
              </div>
              <button className={styles.button}>Get</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
