import React from "react";
import { motion } from "framer-motion";
import { LiaArchwaySolid } from "react-icons/lia";
import { edTabs } from "../lib/edTabs";

export default function CardMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, type: "spring", bounce: 0.3 } }}
      onPointerEnter={() => setIsOpen(true)}
      onPointerLeave={() => setIsOpen(false)}
      onMouseLeave={() => setSelected(null)}
      className={`flex w-[fit-content] items-center justify-between gap-2 border border-slate-200/20 px-20 py-8 text-slate-200/60 ${isOpen ? "pl-5 pr-8" : ""}`}
      style={{
        borderRadius: "0.5rem",
        boxShadow: "0 10px 0.5rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        layout
        transition={{ layout: { duration: 0.2, type: "spring", bounce: 0.3 } }}
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
          className={`${isOpen ? "cursor-default" : "cursor-pointer"}`}
        >
          Education
        </motion.h2>

        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-md pl-20 text-slate-200/60"
          >
            <div>
              <ul className="flex items-center justify-between gap-6">
                {edTabs.map((tab) => {
                  return (
                    <li
                      key={tab.id}
                      onClick={() => setSelected(tab.id)}
                      className={`cursor-pointer border-r-[1px] border-slate-200/20 pr-4 hover:text-slate-300/80 ${
                        tab.tag === "React" ? "border-none" : ""
                      } ${tab.tag === "CSS" ? "pr-6" : ""}`}
                    >
                      {tab.tag}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              {edTabs.map((tab) => {
                return (
                  <div key={tab.id}>
                    {tab.id === selected && (
                      <div>
                        <h3>{tab.title1}</h3>
                        <p>{tab.description1}</p>
                        <h3>{tab.title2}</h3>
                        <p>{tab.description2}</p>
                        <h3>{tab.title3}</h3>
                        <p>{tab.description3}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
