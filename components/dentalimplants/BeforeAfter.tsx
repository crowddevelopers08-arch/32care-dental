"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "./SectionLabel";

const directions = ["left", "up", "right"] as const;

const results = [
  {
    src: "https://res.cloudinary.com/jfmvvhot/image/upload/v1785917604/bfaf-img3_ucjwg4.jpg",
    width: 781,
    height: 819,
    title: "Smile Transformation",
    description: "A brighter, more balanced and confident smile.",
  },
  {
    src: "https://res.cloudinary.com/jfmvvhot/image/upload/v1785917604/bfaf-img2_pxt0sx.jpg",
    width: 1280,
    height: 1280,
    title: "Advanced Dental Restoration",
    description: "Visible improvement with carefully planned dental care.",
  },
  {
    src: "https://res.cloudinary.com/jfmvvhot/image/upload/v1785918623/bfaf-imgs1_roxjpz.jpg",
    width: 720,
    height: 1280,
    title: "Complete Smile Rehabilitation",
    description: "Restoring comfort, appearance and natural confidence.",
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
      <div ref={carousel} onScroll={(event) => { const slides = Array.from(event.currentTarget.children) as HTMLElement[]; const nearest = slides.reduce((closest, slide, index) => Math.abs(slide.offsetLeft - event.currentTarget.scrollLeft) < Math.abs(slides[closest].offsetLeft - event.currentTarget.scrollLeft) ? index : closest, 0); setActiveSlide(nearest); }} className="flex snap-x snap-mandatory overflow-x-scroll scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-7 md:overflow-visible md:pb-0 xl:grid-cols-3">
        {results.map((result, index) => <Reveal as="article" key={result.src} delay={index * 120} direction={directions[index % directions.length]} className="group relative w-full min-w-full max-w-full shrink-0 grow-0 basis-full snap-center snap-always px-1.5 transition duration-500 hover:-translate-y-2 max-[620px]:!translate-x-0 max-[620px]:!translate-y-0 max-[620px]:!scale-100 max-[620px]:!opacity-100 md:min-w-0 md:max-w-none md:basis-auto md:px-0">
          <div className="relative h-[430px] w-full overflow-hidden rounded-[20px] bg-[#e8f5fc] max-[390px]:h-[370px] max-[620px]:rounded-[16px] md:h-[390px] xl:h-[430px]">
            <Image src={result.src} alt={`${result.title} before and after dental treatment result`} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 767px) calc(100vw - 44px), (max-width: 1280px) 50vw, 33vw" priority={index === 0} />
            <span className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-full bg-[#073576] text-sm font-extrabold text-white  max-[620px]:top-3 max-[620px]:left-3 max-[620px]:h-9 max-[620px]:w-9 max-[620px]:text-[12px]">0{index + 1}</span>
          </div>
        </Reveal>)}
      </div>
      <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous result" className="absolute top-1/2 left-3 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border-2 border-white/70 bg-[#073576]/95 text-[30px] leading-none text-white  backdrop-blur-sm transition hover:bg-[#0067ac] active:scale-90 md:hidden">‹</button>
      <button type="button" onClick={() => moveCarousel(1)} aria-label="Next result" className="absolute top-1/2 right-3 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border-2 border-white/70 bg-[#073576]/95 text-[30px] leading-none text-white  backdrop-blur-sm transition hover:bg-[#0067ac] active:scale-90 md:hidden">›</button>
      </div>

      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {results.map((result, index) => <button key={result.src} type="button" onClick={() => goToSlide(index)} aria-label={`Show result ${index + 1}`} className={`h-2.5 rounded-full bg-[#0067ac] transition-all duration-300 ${activeSlide === index ? "w-8" : "w-2.5 opacity-30"}`} />)}
      </div>

      <p className="mx-auto mt-6 max-w-[680px] px-2 text-center text-[16px] leading-[1.55] text-[#2b201b] sm:mt-8">Individual treatment results may vary. Images are shared for treatment-result illustration.</p>
    </div>
  </section>;
}