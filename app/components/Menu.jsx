"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tab } from "./Components";
import "../scene.css";

export default function Menu() {
  const [focused, setFocused] = React.useState(null);
  const [selected, setSelected] = React.useState("Item 1");

  const tabs = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="flex items-center justify-center py-10">
      <ul
        onMouseLeave={() => setFocused(null)}
        className="flex w-[fit-content] items-center gap-[32px] rounded-[8px] border-[1px] border-[#1A1D23] border-[solid] bg-[#1A1D23] px-[16px] py-[8px]"
      >
        {tabs.map((item) => (
          <Tab
            key={item}
            onClick={() => setSelected(item)}
            onKeyDown={(event) =>
              event.key === "Enter" ? setSelected(item) : null
            }
            onFocus={() => setFocused(item)}
            onMouseEnter={() => setFocused(item)}
            tabIndex={0}
          >
            <span>{item}</span>
            {focused === item ? (
              <motion.div
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "-10px",
                  right: 0,
                  width: "140%",
                  height: "110%",
                  background: "#23272F",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
                layoutId="highlight"
              />
            ) : null}
            {selected === item ? (
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "0px",
                  right: 0,
                  height: "4px",
                  background: "#5686F5",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
                layoutId="underline"
              />
            ) : null}
          </Tab>
        ))}
      </ul>
    </div>
  );
}
