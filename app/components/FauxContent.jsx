"use client";
import { navItems } from "../lib/navItems";
import { usePathname } from "next/navigation";

export default function FauxContent() {
  const pathname = usePathname();
  const isActive = navItems.path === pathname;
  const pageName = navItems.label;
  console.log(navItems.label);

  return (
    <main className="px-8 pt-44">
      <h1 data-active={isActive} className="mb-8 text-slate-200/80 text-xl">
        {`This is the ${pageName} page`}
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
        <div className="h-64 rounded bg-slate-700/25"></div>
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
