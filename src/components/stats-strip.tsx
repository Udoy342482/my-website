"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import type { Stat } from "@/lib/site-content";

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function CountUpValue({
  value,
  play,
}: {
  value: string;
  play: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match?.[3] ?? "";

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
  }, [motionValue]);

  useEffect(() => {
    if (prefersReducedMotion || !play) return;

    const controls = animate(motionValue, target, {
      duration: 1.5,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [play, target, motionValue, prefersReducedMotion]);

  const shown = prefersReducedMotion ? target : display;

  return (
    <>
      {prefix}
      {shown.toLocaleString()}
      {suffix}
    </>
  );
}

export function StatsStrip({ stats }: { stats: Stat[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="w-full bg-muted px-5 py-10 sm:px-8 lg:px-[135px] lg:py-14">
      <motion.div
        ref={ref}
        className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-20"
        variants={groupVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="flex flex-col gap-3"
            variants={itemVariants}
          >
            <motion.p
              variants={numberVariants}
              className="font-mono text-3xl font-bold text-foreground sm:text-4xl"
            >
              <CountUpValue value={stat.value} play={isInView} />
            </motion.p>
            <motion.p
              variants={labelVariants}
              className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase sm:text-sm"
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
