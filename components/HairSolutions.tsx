"use client";

import { useRef, useState } from "react";
import { SectionLabel } from "./SectionLabel";

const solutions = [
  { title: "Single Sitting Root Canal Treatment", description: "For suitable cases, advanced techniques allow root canal treatment to be completed efficiently with proper diagnosis and planning.", image: "/root-canal-solutions/01.jpg" },
  { title: "Comfortable Root Canal Therapy", description: "Modern dental techniques and advanced equipment help provide a more comfortable treatment experience for patients.", image: "/root-canal-solutions/02.jpg" },
  { title: "Microscopic Root Canal Treatment", description: "Using magnification technology, dentists can achieve better visibility and precision during complex root canal procedures.", image: "/root-canal-solutions/03.jpg" },
  { title: "Re-Root Canal Treatment (Retreatment)", description: "A specialised procedure for teeth that require additional treatment after a previous root canal.", image: "/root-canal-solutions/04.jpg" },
  { title: "Root Canal Treatment For Infected Teeth", description: "Helps treat infection inside the tooth and preserve the natural tooth structure whenever possible.", image: "/root-canal-solutions/05.jpg" },
  { title: "Root Canal With Dental Crown", description: "A dental crown may be recommended after root canal treatment to restore tooth strength, protection, and function.", image: "/root-canal-solutions/06.jpg" },
  { title: "Emergency Root Canal Treatment", description: "Provides timely dental care for sudden tooth pain, infection, or dental discomfort requiring immediate attention.", image: "/root-canal-solutions/07.jpg" },
  { title: "Pediatric Root Canal Treatment", description: "Specialised root canal care designed for children's teeth with a focus on comfort and gentle treatment.", image: "/root-canal-solutions/08.jpg" },
  { title: "Post & Core Restoration", description: "A restorative procedure used to strengthen and support teeth that require additional reinforcement after root canal treatment.", image: "/root-canal-solutions/09.jpg" },
  { title: "Endodontic Consultation & Diagnosis", description: "Detailed examination and diagnosis to understand tooth condition and recommend the most suitable treatment approach.", image: "/root-canal-solutions/10.jpg" },
];

export function HairSolutions() {
  const carousel = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    const next = Math.max(0, Math.min(index, solutions.length - 1));
    const element = carousel.current;
    if (element) element.scrollTo({ left: next * element.clientWidth, behavior: "smooth" });
    setActiveSlide(next);
  };

  return <section id="treatments" className="scroll-mt-5 bg-white px-5 py-5 font-['Onest',sans-serif] text-[#092b4c] sm:px-8 sm:py-8 lg:px-12">
    <div className="mx-auto max-w-[1350px]">
      <div className="text-center">
        <SectionLabel>Type of Root Canals</SectionLabel>
        <h2 className="mt-1 text-center text-[26px] font-medium tracking-[.2px] max-[620px]:text-[23px]">Advanced Root Canal Solutions For Every Dental Need</h2>
      </div>

      <div ref={carousel} onScroll={(event) => setActiveSlide(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))} className="mt-6 grid grid-cols-5 gap-x-5 gap-y-8 max-[1100px]:grid-cols-3 max-[700px]:grid-cols-2 max-[620px]:flex max-[620px]:snap-x max-[620px]:snap-mandatory max-[620px]:gap-0 max-[620px]:overflow-x-auto max-[620px]:pb-2 max-[620px]:[scrollbar-width:none] max-[620px]:[&::-webkit-scrollbar]:hidden">
        {solutions.map((solution) => <article key={solution.title} className="text-center max-[620px]:min-w-full max-[620px]:snap-center max-[620px]:px-3">
          <div className="mx-auto h-[112px] w-[112px] rounded-full border-[5px] border-[#c9e6f5] bg-cover bg-center bg-no-repeat " style={{backgroundImage:`url(${solution.image})`}} role="img" aria-label={solution.title} />
          <h3 className="mx-auto mt-3 max-w-[210px] text-[17px] leading-tight font-bold">{solution.title}</h3>
          <p className="mx-auto mt-2 max-w-[210px] text-[14px] leading-[1.55] text-[#38536b]">{solution.description}</p>
        </article>)}
      </div>

      <div className="mt-5 hidden items-center justify-center gap-4 max-[620px]:flex">
        <button type="button" onClick={() => goToSlide(activeSlide - 1)} aria-label="Previous treatment" disabled={activeSlide === 0} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#073576] text-white  transition active:scale-90 disabled:cursor-not-allowed disabled:opacity-35">
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12.5 4.5-5 5.5 5 5.5" /></svg>
        </button>
        <div className="flex max-w-[170px] flex-wrap items-center justify-center gap-1.5">
          {solutions.map((solution, index) => <button type="button" key={solution.title} onClick={() => goToSlide(index)} aria-label={`Show treatment ${index + 1}`} className={`h-2.5 rounded-full bg-[#0876b5] transition-all duration-300 ${activeSlide === index ? "w-6" : "w-2.5 opacity-30"}`} />)}
        </div>
        <button type="button" onClick={() => goToSlide(activeSlide + 1)} aria-label="Next treatment" disabled={activeSlide === solutions.length - 1} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#073576] text-white  transition active:scale-90 disabled:cursor-not-allowed disabled:opacity-35">
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7.5 4.5 5 5.5-5 5.5" /></svg>
        </button>
      </div>

      <div className="mt-8 flex justify-center">
        <a href="#consultation-form" className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-[#0876b5] bg-[#0876b5] px-7 text-center text-[15px] font-bold text-white  transition duration-300 hover:-translate-y-1 hover:border-[#073576] hover:bg-[#073576] max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:px-3 max-[620px]:text-[12px] max-[620px]:leading-tight"><span className="max-[620px]:hidden">Find The Right Root Canal Solution For Your Tooth</span><span className="hidden max-[620px]:inline">Book Your Consultation</span></a>
      </div>
    </div>
  </section>;
}
