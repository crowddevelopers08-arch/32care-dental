"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { PlayIcon, PlusIcon } from "./Icons";
import { CarouselArrows, CarouselDots } from "./CarouselControls";
import { useAutoCarousel } from "./useAutoCarousel";

type Video = { id: number; title: string; videoUrl: string };

const videos: Video[] = [
  { id: 1, title: "Doctor Explaining Treatment Evaluation", videoUrl: "https://res.cloudinary.com/xv3grzfw/video/upload/v1790847797/20260324_205957_1__squished.mp4" },
  { id: 2, title: "Advanced Treatment Overview", videoUrl: "https://res.cloudinary.com/xv3grzfw/video/upload/v1790847819/32Care_Dental_clinic_video_testimonial_1.mp4" },
  { id: 3, title: "In-Clinic Treatment Process", videoUrl: "https://res.cloudinary.com/xv3grzfw/video/upload/v1790847796/DSC_3963_squished.mp4" },
];

export default function PatientStories() {
  const [active, setActive] = useState<Video | null>(null);
  const { trackRef, current, goTo, step, touchHandlers } = useAutoCarousel(videos.length, { hold: active !== null });

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="bg-white py-9 sm:py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title="Real Experiences From Our Patients" align="left" />
          {/* Top arrows: hidden on mobile, unchanged on sm and up */}
          <div className="hidden sm:contents">
            <CarouselArrows onStep={step} label="patient stories" />
          </div>
        </div>

        <div {...touchHandlers} className="mt-6 sm:mt-10">
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient stories"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:gap-5 [&::-webkit-scrollbar]:hidden"
          >
            {videos.map((v) => (
              <div
                key={v.id}
                className="w-full shrink-0 snap-start sm:w-[calc((100%-2rem)/3)]"
              >
                <button
                  type="button"
                  onClick={() => setActive(v)}
                  aria-label={`Play patient story — ${v.title}`}
                  className="group relative mx-auto block h-[500px] w-full overflow-hidden rounded-3xl bg-[#052b50] shadow-lg shadow-[#052b50]/10 ring-1 ring-[#052b50]/5 transition duration-500 hover:shadow-2xl hover:shadow-[#0876b5]/25 sm:h-[580px]"
                >
                  <video src={v.videoUrl} aria-hidden="true" muted playsInline preload="metadata" className="h-full w-full object-cover" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/50 backdrop-blur-md transition group-hover:scale-110 group-hover:bg-[#54b6ec] group-hover:text-[#052b50]">
                    <PlayIcon className="ml-0.5 h-7 w-7" />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Mobile: arrows on both sides of the dots. sm and up: wrapper disappears (contents) */}
          <div className="flex max-sm:mt-5 justify-center gap-4 sm:contents">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous patient story"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#052b50] shadow-md ring-1 ring-[#052b50]/10 transition active:scale-95 active:bg-[#c9e6f5] sm:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <CarouselDots count={videos.length} current={current} onGoTo={goTo} onStep={step} labels={videos.map((v) => v.title)} />

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next patient story"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#052b50] shadow-md ring-1 ring-[#052b50]/10 transition active:scale-95 active:bg-[#c9e6f5] sm:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="#book"
            className="group relative inline-flex min-h-[58px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0876b5] px-9 text-base font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#073576]"
          >
            Book Your Consultation
          </a>
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Patient story — ${active.title}`}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#052b50]/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div className="relative h-[560px] w-full max-w-md overflow-hidden rounded-3xl bg-black shadow-2xl max-[620px]:h-[500px]" onClick={(e) => e.stopPropagation()}>
            <video src={active.videoUrl} title={`Patient story — ${active.title}`} controls autoPlay playsInline className="h-full w-full object-cover" />
          </div>
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close video"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#052b50] shadow-lg transition hover:bg-[#c9e6f5]"
          >
            <PlusIcon className="h-5 w-5 rotate-45" />
          </button>
        </div>
      )}
    </section>
  );
}