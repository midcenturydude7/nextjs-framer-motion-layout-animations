/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useOnClickOutside } from "usehooks-ts";
import { VscDebugRestart } from "react-icons/vsc";
import { GAMES } from "../../lib/gameItems";
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
