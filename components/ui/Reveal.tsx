"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

export function Reveal({
  children,
  className = "",
  delay,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2;
  as?: "div" | "span";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay === 1 ? "rv-delay-1" : delay === 2 ? "rv-delay-2" : "";

  return (
    <Tag ref={ref as RefObject<HTMLDivElement>} className={`rv ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
