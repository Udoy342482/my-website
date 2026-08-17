"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function TypewriterHeading({
  text,
  className,
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, prefersReducedMotion]);

  const done = prefersReducedMotion || count >= text.length;
  const typed = prefersReducedMotion ? text : text.slice(0, count);

  return (
    <h1 className={className} aria-label={text}>
      <span aria-hidden="true">
        {typed}
        <motion.span
          className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-current align-middle"
          animate={done ? { opacity: [1, 1, 0, 0] } : { opacity: 1 }}
          transition={
            done
              ? { duration: 1, repeat: Infinity, ease: "linear" }
              : { duration: 0 }
          }
        />
      </span>
    </h1>
  );
}
