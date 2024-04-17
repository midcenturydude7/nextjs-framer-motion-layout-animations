"use client";
import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">
      <div className="z-0 flex-1">
        <header className="fixed inset-x-0 flex items-center justify-between border-b-[1px] border-[#3f3c3c]/80 bg-[#222731]/60 py-10 shadow backdrop-blur-md px-10">
          <div>LOGO</div>
          <Menu />
          <div>ICONS</div>
        </header>
      </div>
    </div>
  );
}
