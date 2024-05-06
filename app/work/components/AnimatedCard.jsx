/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useOnClickOutside } from "usehooks-ts";
import { VscClose, VscDebugRestart } from "react-icons/vsc";
import styles from "../AnimatedCard.module.css";

export default function AnimatedCard() {
  const [activeGame, setActiveGame] = React.useState(null);
  // const ref = React.useRef(null);
  // useOnClickOutside(ref, () => setActiveGame(null));

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
    <div
      className="mx-auto w-[60%] border border-[#3f3c3c]/80 bg-[#1A1D23]  py-8"
      style={{ borderRadius: 12 }}
    >
      <AnimatePresence>
        {activeGame ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
          <div className={styles.active}>
            <motion.div
              layoutId={`card-${activeGame.title}`}
              className={styles.inner}
              // ref={ref}
              style={{ borderRadius: 12 }}
            >
              <div className={styles.header}>
                <motion.img
                  layoutId={`image-${activeGame.title}`}
                  height={56}
                  width={56}
                  alt="Game"
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                />
                <div className={styles.headerInner}>
                  <div className={styles.contentWrapper}>
                    <motion.h2
                      layoutId={`title-${activeGame.title}`}
                      className={styles.gameTitle}
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${activeGame.title}`}
                      className={styles.gameDescription}
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      layoutId={`button-${activeGame.title}`}
                      className={styles.button}
                    >
                      Get
                    </motion.button>
                    <motion.button
                      layoutId={`buttonX-${activeGame.title}`}
                      onClick={() => setActiveGame(null)}
                      className={styles.button}
                      style={{
                        backgroundColor: "rgba(39, 54, 84, 0.2",
                        color: "#555555c3",
                        fontSize: "1.05rem",
                        fontWeight: "bold",
                      }}
                    >
                      <VscDebugRestart />
                    </motion.button>
                  </div>
                </div>
              </div>
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className={styles.longDescription}
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className={styles.list}>
        {GAMES.map((game) => (
          <motion.li
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
          >
            <motion.img
              layoutId={`image-${game.title}`}
              width={56}
              height={56}
              alt="Game"
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className={styles.gameWrapper}>
              <div className={styles.contentWrapper}>
                <motion.h2
                  layoutId={`title-${game.title}`}
                  className={styles.gameTitle}
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`description-${game.title}`}
                  className={styles.gameDescription}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${game.title}`}
                className={styles.button}
              >
                Get
              </motion.button>
            </div>
          </motion.li>
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
