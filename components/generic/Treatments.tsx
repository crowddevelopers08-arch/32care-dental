"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";
import { treatments } from "@/lib/treatments";

/* Each panel gets its own shade so the stack reads as separate layers */
const shades = [
  "from-[#0f3d75] to-[#052b50]",
  "from-[#0c4a86] to-[#08305f]",
  "from-[#125693] to-[#0a3768]",
  "from-[#0c4a86] to-[#052b50]",
  "from-[#0f3d75] to-[#08305f]",
  "from-[#125693] to-[#052b50]",
];

const STICKY_TOP = 96; // px — clears the fixed header
const STEP = 18; // px — how much of each earlier panel stays visible above the next

export default function Treatments() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // As a later panel slides over an earlier one, shrink and dim the earlier one.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = cardRefs.current;
      cards.forEach((card, i) => {
        if (!card) return;
        const inner = card.firstElementChild as HTMLElement;
        const next = cards[i + 1];
        if (!next) return;
        const h = card.offsetHeight;
        const stuckAt = STICKY_TOP + i * STEP;
        // 0 → next panel is a full panel-height away, 1 → next panel has fully covered this one
        const p = Math.min(1, Math.max(0, 1 - (next.getBoundingClientRect().top - stuckAt) / h));
        inner.style.transform = `scale(${1 - p * 0.06})`;
        inner.style.filter = `brightness(${1 - p * 0.35})`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative isolate overflow-clip bg-[#052b50] py-9 sm:py-6 lg:py-10">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#0876b5]/50 blur-[140px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          title="What Brings You To Our Dental Clinic?"
          intro="Every patient's dental needs are different. The appropriate treatment depends on your oral health, symptoms, dental history and clinical assessment."
        />

        <Reveal delay={80} className="mt-6 text-center sm:mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fe0ff]">Dental Concerns We Help With</p>
        </Reveal>

        {/* Stacking panels */}
        <div className="mt-6 sm:mt-10">
          {treatments.map((t, i) => (
            <div
              key={t.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="sticky mb-4 sm:mb-10"
              style={{ top: STICKY_TOP + i * STEP, zIndex: i + 1 }}
            >
              <article
                className={`relative origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br ${shades[i]} shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.6)] will-change-transform sm:rounded-[2.5rem]`}
              >
                {/* decorative rings */}
                <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 sm:h-[26rem] sm:w-[26rem]" />
                <div aria-hidden className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />
                <div aria-hidden className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#54b6ec]/15 blur-3xl" />

                <div className="relative grid items-center gap-5 p-5 sm:gap-8 sm:p-10 lg:grid-cols-[1fr_27rem] lg:gap-12 lg:p-12">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-extrabold leading-none tabular-nums text-transparent [-webkit-text-stroke:1.5px_rgba(143,224,255,0.6)] sm:text-7xl">
                        0{i + 1}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fe0ff]">
                        Treatment {i + 1} of {treatments.length}
                      </p>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl">{t.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/75 sm:mt-4 sm:text-lg">{t.text}</p>
                  </div>

                  <div>
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#052b50] ring-1 ring-white/10 sm:rounded-3xl">
                      <Image src={t.img} alt={t.alt} fill quality={90} sizes="(min-width:1024px) 432px, 100vw" className="object-cover" />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative z-10 mx-auto mt-2 flex max-w-4xl flex-col items-center gap-5 rounded-3xl border border-[#54b6ec]/25 bg-linear-to-r from-[#0876b5]/60 to-[#073576]/30 p-6 text-center sm:mt-6 sm:p-8 md:flex-row md:text-left">
            <p className="flex-1 text-base leading-relaxed text-white/85 sm:text-lg">
              The right treatment depends on your dental condition. Our dentist will assess your teeth and explain
              the options that may be appropriate for you.
            </p>
            <a
              href="#book"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#052b50] transition hover:bg-[#e8f5fc]"
            >
              Book Your Consultation
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
