"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useAutoCarousel(count: number, options?: { hold?: boolean; intervalMs?: number }) {
  const hold = options?.hold ?? false;
  const intervalMs = options?.intervalMs ?? 5000;
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const touching = useRef(false);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track || count === 0) return;
    const next = ((index % count) + count) % count;
    const slide = track.children[next] as HTMLElement | undefined;
    track.scrollTo({ left: slide?.offsetLeft ?? 0, behavior: "smooth" });
    setCurrent(next);
  }, [count]);

  const step = useCallback((direction: number) => goTo(current + direction), [current, goTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (!children.length) return;
      const nearest = children.reduce((closest, child, index) =>
        Math.abs(child.offsetLeft - track.scrollLeft) < Math.abs(children[closest].offsetLeft - track.scrollLeft) ? index : closest, 0);
      setCurrent(nearest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (hold || touching.current || count <= 1) return;
    const timer = setInterval(() => goTo(current + 1), intervalMs);
    return () => clearInterval(timer);
  }, [current, hold, count, intervalMs, goTo]);

  const touchHandlers = {
    onTouchStart: () => { touching.current = true; },
    onTouchEnd: () => { touching.current = false; },
  };

  return { trackRef, current, goTo, step, touchHandlers };
}
