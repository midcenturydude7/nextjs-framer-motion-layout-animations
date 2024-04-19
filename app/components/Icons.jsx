"use client";
import Link from "next/link";
import React from "react";
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

export default function Icons() {
  return (
    <nav className="flex items-center gap-4">
      {navIcons.map(({ icon, url, id }) => {
        const Icon = icon;
        return (
          <Link key={id} href={url}>
            <button className="rounded-full border-[1px] border-transparent bg-slate-200/20 p-3 text-slate-200/60 outline-[none] transition-colors hover:border-[1px] hover:border-lime-300/80 hover:text-slate-100/80">
              <span className="text-2xl ">
                <Icon />
              </span>
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
