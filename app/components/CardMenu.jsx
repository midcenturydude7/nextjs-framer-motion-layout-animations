import React from "react";
import { motion } from "framer-motion";
import { LiaArchwaySolid } from "react-icons/lia";

export default function CardMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, type: "spring", bounce: 0.3 } }}
      onPointerEnter={() => setIsOpen(true)}
      onPointerLeave={() => setIsOpen(false)}
      className={`flex w-[fit-content] cursor-pointer items-center justify-between gap-2 border border-slate-200/20 px-20 py-8 text-slate-200/60 ${isOpen ? "relative cursor-default pl-5 pr-8" : ""}`}
      style={{
        borderRadius: "0.5rem",
        boxShadow: "0 10px 0.5rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring", bounce: 0.3 } }}
        className={`flex items-center justify-between gap-2`}
      >
        <span
          className="flex border border-slate-200/20 bg-slate-200/10 p-2"
          style={{ borderRadius: "0.3rem" }}
        >
          <LiaArchwaySolid />
        </span>
        <motion.h2
          layout="position"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          Education
        </motion.h2>

        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-md flex pl-20 text-slate-200/60"
          >
            <ul className="flex cursor-pointer items-center justify-between gap-6">
              <li className="border-r-[1px] border-slate-200/20 pr-4 hover:text-slate-300/80 ">
                Javascript
              </li>
              <li className="border-r-[1px] border-slate-200/20 pr-6 hover:text-slate-300/80">
                CSS
              </li>
              <li className="hover:text-slate-300/80">React</li>
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
