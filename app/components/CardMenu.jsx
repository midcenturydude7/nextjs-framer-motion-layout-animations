import React from "react";
import { motion } from "framer-motion";
import { LiaArchwaySolid } from "react-icons/lia";

export default function CardMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 1, type: "spring", bounce: 0.3 } }}
      onPointerEnter={() => setIsOpen(true)}
      onPointerLeave={() => setIsOpen(false)}
      className={`flex w-[fit-content] cursor-pointer items-center gap-2 border border-slate-200/20 px-20 py-8 text-slate-200/60 ${isOpen ? "cursor-default" : ""}`}
      style={{
        borderRadius: "0.5rem",
        boxShadow: "0 10px 0.5rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div className="flex items-center gap-2">
        <span className="flex rounded-md border border-slate-200/20 bg-slate-200/10 p-2">
          <LiaArchwaySolid />
        </span>
        <motion.h2
          layout="position"
          transition={{ duration: 0, ease: "easeInOut" }}
        >
          Education
        </motion.h2>
      </motion.div>
      {isOpen && (
        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-md ml-4 flex flex-col gap-2 text-slate-200/60"
        >
          <ul className="flex cursor-pointer gap-6">
            <li className="border-r-[1px] border-slate-200/20 pr-4 hover:text-slate-300/80 ">
              Javascript
            </li>
            <li className="border-r-[1px] border-slate-200/20 pr-4 hover:text-slate-300/80">
              CSS
            </li>
            <li className="hover:text-slate-300/80">React</li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}
