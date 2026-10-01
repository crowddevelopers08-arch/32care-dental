"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";

type Pillar = { title: string; icon: string };

const pillars: Pillar[] = [
  {
    title: "General Dentistry",
    icon: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847414/icons-1.png",
  },
  {
    title: "Root Canal Treatment",
    icon: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847415/icons-2.png",
  },
  {
    title: "Dental Implants",
    icon: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847416/icons-3.png",
  },
  {
    title: "Orthodontics & Aligners",
    icon: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847416/icons-4.png",
  },
  {
    title: "Cosmetic Dentistry",
    icon: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847416/icons-5.png",
  },
  {
    title: "Specialized Dental Care",
    icon: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847417/icons-6.png",
  },
];

const LINE_MS = 1800;
const STEP_MS = LINE_MS / (pillars.length - 1);

export default function CareApproach() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => setActive(true));
      return () => window.cancelAnimationFrame(frame);
    }
    let timer: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        timer = setTimeout(() => setSettled(true), LINE_MS + 400);
        io.disconnect();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f3f9fd] py-9 sm:py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Dental Services Include"
          intro=""
        />

        <Reveal className="mt-6 sm:mt-10 lg:mt-12">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white px-5 py-6 shadow-xl sm:py-10 shadow-[#052b50]/5 ring-1 ring-[#052b50]/5 sm:px-10 lg:px-12 lg:py-14">
            <div aria-hidden className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#c9e6f5]/60 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#c9e6f5]/50 blur-3xl" />

            <ol ref={listRef} className="relative grid gap-6 sm:gap-8 lg:grid-cols-6 lg:gap-6">
              {/* Connector track + animated fill: vertical on mobile, horizontal on desktop */}
              <span aria-hidden className="absolute bottom-8 left-8 top-8 w-px bg-[#c9e6f5] lg:hidden">
                <span
                  className="absolute inset-0 origin-top bg-linear-to-b from-[#54b6ec] via-[#0876b5] to-[#54b6ec] transition-transform ease-out motion-reduce:transition-none"
                  style={{ transform: `scaleY(${active ? 1 : 0})`, transitionDuration: `${LINE_MS}ms` }}
                />
              </span>
              <span aria-hidden className="absolute left-[10%] right-[10%] top-8 hidden h-0.5 rounded-full bg-[#c9e6f5] lg:block">
                <span
                  className="absolute inset-0 origin-left rounded-full bg-linear-to-r from-[#54b6ec] via-[#0876b5] to-[#54b6ec] transition-transform ease-out motion-reduce:transition-none"
                  style={{ transform: `scaleX(${active ? 1 : 0})`, transitionDuration: `${LINE_MS}ms` }}
                />
              </span>

              {/* Glowing pulse that keeps travelling along the line once it is drawn */}
              {settled && (
                <>
                  <span aria-hidden className="absolute top-8 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-[care-travel-x_6s_linear_infinite] rounded-full bg-[#0876b5] shadow-[0_0_12px_4px_rgba(84,182,236,0.55)] motion-reduce:animate-none motion-reduce:opacity-0 lg:block" />
                  <span aria-hidden className="absolute left-8 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-[care-travel-y_6s_linear_infinite] rounded-full bg-[#0876b5] shadow-[0_0_12px_4px_rgba(84,182,236,0.55)] motion-reduce:animate-none motion-reduce:opacity-0 lg:hidden" />
                </>
              )}

              {pillars.map((p, i) => {
                const at = i * STEP_MS;
                return (
                  <li key={p.title} className="relative">
                    <div className="group flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                      <span
                        className={`relative block shrink-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${
                          active ? "scale-100 opacity-100" : "scale-50 opacity-0"
                        }`}
                        style={{ transitionDelay: `${at}ms` }}
                      >
                        {settled && (
                          <span
                            aria-hidden
                            className="absolute inset-0 animate-ping rounded-full bg-[#54b6ec]/25 [animation-duration:3s] motion-reduce:animate-none motion-reduce:opacity-0"
                            style={{ animationDelay: `${i * 440}ms` }}
                          />
                        )}
                        <span
                          className={`relative grid h-16 w-16 place-items-center rounded-full bg-white text-[#0876b5] shadow-lg shadow-[#0876b5]/15 ring-4 ring-[#e8f5fc] transition-colors duration-300 group-hover:bg-[#0876b5] group-hover:text-white ${
                            settled ? "animate-[care-bob_4s_ease-in-out_infinite] motion-reduce:animate-none" : ""
                          }`}
                          style={{ animationDelay: `${i * 300}ms` }}
                        >
                          <span
                            aria-hidden="true"
                            className="block h-9 w-9 bg-current mask-contain mask-center mask-no-repeat transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transition-none"
                            style={{ maskImage: `url(${p.icon})`, WebkitMaskImage: `url(${p.icon})` }}
                          />
                        </span>
                        <span
                          className={`absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-[#54b6ec] text-[11px] font-bold text-[#052b50] ring-2 ring-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${
                            active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                          }`}
                          style={{ transitionDelay: `${at + 280}ms` }}
                        >
                          {i + 1}
                        </span>
                      </span>
                      <div
                        className={`pt-1 transition-all duration-700 ease-out motion-reduce:transition-none lg:mt-6 lg:pt-0 ${
                          active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                        }`}
                        style={{ transitionDelay: `${at + 150}ms` }}
                      >
                        <h3 className="text-lg font-bold leading-snug text-[#092b4c]">{p.title}</h3>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="relative mt-6 flex justify-center sm:mt-8 lg:mt-12">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0876b5] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0876b5]/25 transition hover:-translate-y-0.5 hover:bg-[#073576]"
              >
                Book Your Consultation
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
