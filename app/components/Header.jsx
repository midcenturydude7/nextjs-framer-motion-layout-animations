"use client";
import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import {
  motion,
  useScroll,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

function useBoundedScroll(bounds) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1],
  );

  React.useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [scrollY, scrollYBounded, bounds]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  let { scrollYBoundedProgress } = useBoundedScroll(150);
  let scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  );

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">
      <div className="z-0 flex-1">
        <motion.header
          className="fixed inset-x-0 flex items-center justify-between border-b-[1px] border-[#3f3c3c]/80 bg-[#222731]/80 px-10 py-10 shadow backdrop-blur-md"
          style={{
            height: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [150, 75],
            ),
            backgroundColor: useMotionTemplate`rgb(34 39 49 / ${useTransform(scrollYBoundedProgressThrottled, [0, 1], [1, 0.1])}`,
          }}
          animate={{ ease: "easeInOut", duration: 1.5 }}
        >
          <Logo
            scrollYBoundedProgressThrottled={scrollYBoundedProgressThrottled}
          />
          <Menu
            scrollYBoundedProgressThrottled={scrollYBoundedProgressThrottled}
          />
          <div>ICONS</div>
        </motion.header>
      </div>
    </div>
  );
}
