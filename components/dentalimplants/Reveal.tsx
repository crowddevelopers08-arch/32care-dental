"use client";

import { createElement, type ElementType, useEffect, useRef, useState } from "react";

const hiddenTransforms = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-10",
  right: "-translate-x-10",
};

export function Reveal({ children, className, delay = 0, direction = "up", as = "div", ...rest }: { children: React.ReactNode; className?: string; delay?: number; direction?: "up" | "down" | "left" | "right"; as?: "div" | "article" | "span" | "header" | "form" } & React.HTMLAttributes<HTMLElement>) {
  const elementRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Tag: ElementType = as;

  return createElement(
    Tag,
    {
      ...rest,
      ref: elementRef,
      style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
      className: `${className ?? ""} transition-all duration-700 ease-out motion-reduce:transition-none ${visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransforms[direction]}`}`,
    },
    children,
  );
}
