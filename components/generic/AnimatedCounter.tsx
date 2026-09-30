"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ end, suffix = "", duration = 1600 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(end);
        return;
      }

      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.min(end, Math.round(end * eased)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, end]);

  return <span ref={ref}>{value.toLocaleString("en-IN")}{suffix}</span>;
}
