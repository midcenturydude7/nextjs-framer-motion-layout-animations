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
      className={`flex w-[fit-content] justify-between gap-2 border border-slate-200/20 px-20 py-8 text-slate-200/60 ${isOpen ? "pl-5 pr-8" : ""}`}
      style={{
        borderRadius: "0.5rem",
        boxShadow: "0 10px 0.5rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        layout
        transition={{ layout: { duration: 0.2, type: "spring", bounce: 0.3 } }}
        className="relative flex items-center justify-between gap-2"
      >
        <div
          className={`flex items-center justify-between gap-2 ${selected ? "absolute left-0 top-0" : ""}`}
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
        </div>

        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-md pl-20 text-slate-200/60"
          >
            <div className="relative">
              <motion.ul
                layout="position"
                className={`flex items-center justify-between gap-6 ${selected ? "absolute right-0 top-0" : ""}`}
              >
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
              </motion.ul>
            </div>
            <div>
              {edTabs.map((tab) => {
                return (
                  <div key={tab.id}>
                    {tab.id === selected && (
                      <motion.div
                        layout="position"
                        initial={{ opacity: 0, x: 0, y: 5 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="ml-[-40px] max-w-[75%] pt-10"
                      >
                        <h3 className="text-bold py-2 underline">
                          {tab.title1}
                        </h3>
                        <p>{tab.description1}</p>
                        <h3 className="text-bold py-4 underline">
                          {tab.title2}
                        </h3>
                        <p>{tab.description2}</p>
                        <h3 className="text-bold py-4 underline">
                          {tab.title3}
                        </h3>
                        <p>{tab.description3}</p>
                      </motion.div>
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
