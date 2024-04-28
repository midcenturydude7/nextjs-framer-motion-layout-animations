import React from "react";
import { motion } from "framer-motion";
import { LiaArchwaySolid } from "react-icons/lia";

export default function CardMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="flex w-[fit-content] cursor-pointer items-center gap-2 rounded-lg border border-slate-200/20 px-20 py-8 text-slate-200/60"
    >
      <span className="flex rounded-md border border-slate-200/20 bg-slate-200/10 p-2">
        <LiaArchwaySolid />
      </span>
      <span>
        <h2>Education</h2>
      </span>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-md ml-4 flex flex-col gap-2 text-slate-200/60"
        >
          <ul className="flex gap-6">
            <li className="border-r-[1px] border-slate-200/20 pr-4">
              Javascript
            </li>
            <li className="border-r-[1px] border-slate-200/20 pr-4">CSS</li>
            <li>React</li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}
