"use client";
import Card from "./Card";
import { navItems } from "../lib/navItems";
import { usePathname } from "next/navigation";

export default function FauxContent() {
  const pathname = usePathname();
  const currentPage =
    navItems.find((item) => item.path === pathname)?.label || "Page Not Found";

  return (
    <main className="px-8 pt-44">
      <h1 className="mb-8 cursor-pointer text-xl">
        <span className="text-2xl text-stone-200/50">&#187;</span>{" "}
        <span className="font-bold text-lime-300/90 hover:text-lime-300">
          {currentPage} Page
        </span>
      </h1>
      <h2 className="h-10 w-4/5 rounded bg-slate-700/25 text-2xl font-bold" />
      <div className="mt-8 space-y-8">
        {[...Array(2).keys()].map((i) => (
          <div key={i} className="space-y-2 text-sm">
            <p className="h-4 w-5/6 rounded bg-slate-700/25" />
            <p className="h-4 rounded bg-slate-700/25" />
            <p className="h-4 w-4/6 rounded bg-slate-700/25" />
          </div>
        ))}
        <div className="flex gap-4 justify-center">
          <Card />
          <Card />
          <Card />
        </div>
        {[...Array(90).keys()].map((i) => (
          <div key={i} className="space-y-2 text-sm">
            <p className="h-4 w-5/6 rounded bg-slate-700/25" />
            <p className="h-4 rounded bg-slate-700/25" />
            <p className="h-4 w-4/6 rounded bg-slate-700/25" />
          </div>
        ))}
      </div>
    </main>
  );
}
