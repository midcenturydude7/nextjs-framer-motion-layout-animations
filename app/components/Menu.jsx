"use client";
import React from "react";
import { motion } from "framer-motion";
import "../scene.css";

export default function Menu() {
  const tabs = ["Item 1", "Item 2", "Item 3"];

  const [focused, setFocused] = React.useState(null);
  const [selected, setSelected] = React.useState(tabs[0]);

  return (
    <div className="flex items-center justify-center py-10">
      <ul
        onMouseLeave={() => setFocused(null)}
        className="flex w-[fit-content] items-center gap-[32px] rounded-[8px] border-[1px] border-[#1A1D23] border-[solid] bg-[#1A1D23] px-[16px] py-[8px]"
      >
        {tabs.map((item) => (
          <li
            className="relative h-[30px] w-[50px] cursor-pointer outline-[none] [list-style:none]"
            key={item}
            onClick={() => setSelected(item)}
            onKeyDown={(event) =>
              event.key === "Enter" ? setSelected(item) : null
            }
            onFocus={() => setFocused(item)}
            onMouseEnter={() => setFocused(item)}
            tabIndex={0}
          >
            <span className="absolute bottom-[0] left-[4px] right-[0] top-[6px] z-[1] select-none text-[1rem] text-[#E8E8FD]">
              {item}
            </span>
            {focused === item ? (
              <motion.div
                className="absolute bottom-[-2px] left-[-10px] right-[0] z-[0] h-[110%] w-[140%] rounded-[8px] bg-[#23272F]"
                initial={false}
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                // style={{
                //   position: "absolute",
                //   bottom: "-2px",
                //   left: "-10px",
                //   right: 0,
                //   width: "140%",
                //   height: "110%",
                //   background: "#23272F",
                //   borderRadius: "8px",
                //   zIndex: 0,
                // }}
                layoutId="highlight"
              />
            ) : null}
            {selected === item ? (
              <motion.div
                className="absolute bottom-[-10px] left-[0px] right-[0] z-[0] h-[4px] rounded-[8px] bg-[#5686F5]"
                initial={false}
                // style={{
                //   position: "absolute",
                //   bottom: "-10px",
                //   left: "0px",
                //   right: 0,
                //   height: "4px",
                //   background: "#5686F5",
                //   borderRadius: "8px",
                //   zIndex: 0,
                // }}
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
