"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import "../scene.css";

const navItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/resources",
    label: "Resources",
  },
  {
    path: "/contact",
    label: "Contact",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default function Menu() {
  // const tabs = ["Item 1", "Item 2", "Item 3"];

  const pathname = usePathname();
  const [focused, setFocused] = React.useState(null);
  const [selected, setSelected] = React.useState(pathname);

  return (
    <div className="flex items-center justify-center border-b-[1px] border-[#3f3c3c]/80 bg-[#222731]/60 py-10">
      <nav
        onMouseLeave={() => setFocused(null)}
        className="flex w-[fit-content] items-center justify-center gap-8 rounded-[8px] border-[1px] border-[#1A1D23] border-[solid] bg-[#1A1D23] py-[.65rem] pl-[1.35rem] pr-[2rem]"
      >
        {navItems.map(({ path, id, label }) => {
          const isActive = path === pathname;
          return (
            <Link key={id} href={path}>
              <button
                key={id}
                data-active={isActive}
                onClick={() => setSelected(path)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? setSelected(path) : null
                }
                onFocus={() => setFocused(path)}
                onMouseEnter={() => setFocused(path)}
                className="relative h-[40px] w-[75px] cursor-pointer outline-[none]"
                tabIndex={0}
              >
                <span className="absolute bottom-[0] left-[4px] right-[0] top-[6px] z-[1] select-none text-[1rem] text-[#E8E8FD]">
                  {label}
                </span>
                {focused === path ? (
                  <motion.div
                    className="absolute bottom-[-2px] left-[-10px] right-[0] z-[0] h-[110%] w-[140%] rounded-[8px] bg-[#23272F]"
                    initial={false}
                    transition={{
                      layout: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    layoutId="highlight"
                  />
                ) : null}
                {selected === path ? (
                  <motion.div
                    className="absolute bottom-[-8px] left-[0px] right-[0] z-[0] h-[4px] w-[110%] rounded-[8px] bg-[#393f49]/50"
                    initial={false}
                    layoutId="underline"
                  />
                ) : null}
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
