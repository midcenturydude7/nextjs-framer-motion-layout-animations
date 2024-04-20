"use client";
import Link from "next/link";
import React from "react";
import { motion, useTransform } from "framer-motion";
import { FaGithubAlt, FaDiscord } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";

const navIcons = [
  {
    label: "github",
    icon: FaGithubAlt,
    url: "https://github.com/midcenturydude7",
  },
  {
    label: "discord",
    icon: FaDiscord,
    url: "https://github.com/midcenturydude7",
  },
  {
    label: "codesandbox",
    icon: FiCodesandbox,
    url: "https://github.com/midcenturydude7",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default function Icons({ scrollYBoundedProgressThrottled }) {
  const [focused, setFocused] = React.useState(null);

  return (
    <motion.nav
      onMouseLeave={() => setFocused(null)}
      onClick={() => setFocused(null)}
      className="flex items-center gap-4"
      style={{
        opacity: useTransform(scrollYBoundedProgressThrottled, [0, 1], [1, 0]),
      }}
    >
      {navIcons.map(({ label, icon, url, id }) => {
        const Icon = icon;
        return (
          <Link key={id} href={url} target="_noblank">
            <button
              onKeyDown={(e) => (e.key === "Enter" ? setFocused(label) : null)}
              onFocus={() => setFocused(label)}
              onMouseEnter={() => setFocused(label)}
              tabIndex={0}
              className="relative h-[50px] w-[50px] rounded-full border-[1px] border-transparent bg-[#1A1D23] text-[#E8E8FD]/50 outline-[none] transition-colors hover:text-[#E8E8FD]/90"
            >
              <span className="absolute bottom-[0] left-[12px] right-[0] top-[12px] z-10 select-none text-2xl">
                <Icon />
              </span>
              {focused === label ? (
                <motion.div
                  className="absolute bottom-[0] left-[0] right-[0] z-0 h-[100%] w-[100%] rounded-full bg-[#23272F]"
                  initial={false}
                  transition={{ layout: { duration: 0.2, ease: "easeOut" } }}
                  layoutId="highlight"
                />
              ) : null}
            </button>
          </Link>
        );
      })}
    </motion.nav>
  );
}
