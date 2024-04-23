"use client";
import React from "react";
import { motion } from "framer-motion";

function Card() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.4, type: "spring", bounce: 0.25 } }}
      onClick={() => setIsOpen(!isOpen)}
      className="flex w-[fit-content] cursor-pointer flex-col items-center justify-center bg-slate-700/25 p-10 text-xl text-slate-200/60"
      style={{
        borderRadius: "0.5rem",
        boxShadow: "0 10px 0.5rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.h2
        layout="position"
        animate
        transition={{ duration: 0, ease: "easeInOut" }}
      >
        Framer Motion 🚀
      </motion.h2>
      {isOpen && (
        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nihil
            atque nemo corrupti rem reiciendis, dolores illum hic ipsa saepe.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            officia.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Card;
