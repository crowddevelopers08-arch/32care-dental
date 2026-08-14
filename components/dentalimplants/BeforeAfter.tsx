"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "./SectionLabel";

const directions = ["left", "up", "right"] as const;

const results = [
  {
    src: "/1001219256.jpg.jpeg",
    title: "Composite Filling Restoration",
    description: "Decayed molars restored with clean, natural-looking fillings.",
  },
  {
    src: "/1001343692.jpg.jpeg",
    title: "Gap Closure Smile Makeover",
    description: "A gapped smile closed for a seamless, confident look.",
  },
  {
    src: "/1001352368.jpg.jpeg",
    title: "Root Canal Treatment",
    description: "An infected tooth saved with precise root canal therapy.",
  },
  {
    src: "/1001386360.jpg.jpeg",
    title: "Broken Tooth Restoration",
    description: "A fractured front tooth restored to a natural, complete smile.",
  },
  {
    src: "/1001402847.jpg.jpeg",
    title: "Dental Implant Placement",
    description: "A missing tooth space restored with a secure implant.",
  },
  {
    src: "/1001471483.jpg.jpeg",
    title: "Full Mouth Implant Rehabilitation",
    description: "Multiple missing teeth replaced with a complete implant-supported smile.",
  },
];

export function BeforeAfter() {
  const carousel = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const goToSlide = (index: number) => {
    const next = Math.max(0, Math.min(index, results.length - 1));
    const slide = carousel.current?.children[next] as HTMLElement | undefined;
    carousel.current?.scrollTo({ left: slide?.offsetLeft ?? 0, behavior: "smooth" });
    setActiveSlide(next);
  };
  const moveCarousel = (direction: number) => goToSlide(activeSlide + direction);

  return <section id="before-after" className="relative scroll-mt-5 overflow-hidden bg-[#f3f9fd] px-4 py-12 font-['Onest',sans-serif] sm:px-8 sm:py-16 lg:px-12 lg:py-10 lg:pt-15">
    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#70c8ef]/15 blur-3xl" />
    <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#0067ac]/10 blur-3xl" />
    <div className="relative mx-auto max-w-[1500px]">
      <Reveal className="mx-auto mb-7 max-w-3xl text-center sm:mb-8" direction="right">
        <SectionLabel className="lg:mb-2">Before &amp; After</SectionLabel>
        <h2 className="mt-1 lg:mt-2 text-[30px] font-medium tracking-[.2px] text-[#092b4c] max-[620px]:text-[23px]">
          From Tooth Discomfort To{" "}
          <span className="font-bold text-[#0067ac]">Comfortable Smiling Again</span>
        </h2>
      </Reveal>

      <div className="relative">
      <div ref={carousel} onScroll={(event) => { const slides = Array.from(event.currentTarget.children) as HTMLElement[]; const nearest = slides.reduce((closest, slide, index) => Math.abs(slide.offsetLeft - event.currentTarget.scrollLeft) < Math.abs(slides[closest].offsetLeft - event.currentTarget.scrollLeft) ? index : closest, 0); setActiveSlide(nearest); }} className="flex snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth pb-2 [scrollbar-width:none] sm:gap-5 md:gap-6 [&::-webkit-scrollbar]:hidden">
        {results.map((result, index) => <Reveal as="article" key={result.src} delay={index * 120} direction={directions[index % directions.length]} className="group relative w-full shrink-0 snap-center snap-always px-1.5 transition duration-500 hover:-translate-y-2 !translate-x-0 !translate-y-0 !scale-100 !opacity-100 sm:w-[260px] sm:snap-start md:w-[280px]">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-[20px] bg-[#e8f5fc] shadow-[0_10px_30px_-15px_rgba(7,53,118,.35)] max-[620px]:rounded-[16px]">
            <Image src={result.src} alt={`${result.title} before and after dental treatment result`} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 640px) 82vw, (max-width: 767px) 260px, 280px" priority={index === 0} />
            <span className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-full bg-[#073576] text-sm font-extrabold text-white  max-[620px]:top-3 max-[620px]:left-3 max-[620px]:h-9 max-[620px]:w-9 max-[620px]:text-[12px]">0{index + 1}</span>
          </div>
          <p className="mt-3 text-center text-[14px] font-semibold text-[#092b4c]">{result.title}</p>
        </Reveal>)}
      </div>
      <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous result" className="absolute top-1/2 left-1 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border-2 border-white/70 bg-[#073576]/95 text-[30px] leading-none text-white  backdrop-blur-sm transition hover:bg-[#0067ac] active:scale-90 sm:left-2 lg:-left-5">‹</button>
      <button type="button" onClick={() => moveCarousel(1)} aria-label="Next result" className="absolute top-1/2 right-1 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border-2 border-white/70 bg-[#073576]/95 text-[30px] leading-none text-white  backdrop-blur-sm transition hover:bg-[#0067ac] active:scale-90 sm:right-2 lg:-right-5">›</button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {results.map((result, index) => <button key={result.src} type="button" onClick={() => goToSlide(index)} aria-label={`Show result ${index + 1}`} className={`h-2.5 rounded-full bg-[#0067ac] transition-all duration-300 ${activeSlide === index ? "w-8" : "w-2.5 opacity-30"}`} />)}
      </div>

      <p className="mx-auto mt-6 max-w-[680px] px-2 text-center text-[16px] leading-[1.55] text-[#2b201b] sm:mt-8">Individual treatment results may vary. Images are shared for treatment-result illustration.</p>
    </div>
  </section>;
}