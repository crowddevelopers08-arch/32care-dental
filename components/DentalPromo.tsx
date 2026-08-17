"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Underline } from "./Underline";

const features = [
  {
    title: "Is root canal treatment painful?",
    description: "With modern dental techniques and local anaesthesia, root canal treatment is designed to provide a comfortable treatment experience.",
  },
  {
    title: "How long does root canal treatment take?",
    description: "Treatment duration depends on the tooth condition and complexity of the procedure. Your dentist can guide you after examination.",
  },
  {
    title: "How many visits are required for RCT?",
    description: "The number of visits depends on infection severity, tooth condition, and restoration requirements.",
  },
  {
    title: "What happens if an infected tooth is left untreated?",
    description: "An untreated infected tooth may lead to increased discomfort, swelling, and further dental complications.",
  },
  {
    title: "Is root canal better than tooth extraction?",
    description: "When possible, preserving your natural tooth through root canal treatment is generally preferred to maintain oral function.",
  },
  {
    title: "How long does a root canal-treated tooth last?",
    description: "The lifespan depends on oral hygiene, restoration quality, dental care habits, and regular check-ups.",
  },
  {
    title: "Is a crown required after root canal treatment?",
    description: "A crown may be recommended for certain teeth to provide additional strength and protection after RCT.",
  },
  {
    title: "What is the cost of root canal treatment in Pune?",
    description: "The cost depends on the tooth involved, complexity of treatment, and restoration requirements. Consultation helps determine the appropriate treatment plan.",
  },
  {
    title: "How should I care for my tooth after RCT?",
    description: "Maintain good oral hygiene, follow dentist instructions, and attend recommended follow-up visits.",
  },
];

export function DentalPromo() {
  const [openFaq, setOpenFaq] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  return (
    <section id="faqs" className="relative overflow-hidden border-y border-[#e4eef5] bg-[linear-gradient(118deg,#2d78bb_0%,#086cae_54%,#083a75_100%)] px-5 py-12 font-['Onest',sans-serif] text-white sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(45deg,transparent_0_24%,rgba(220,234,255,.7)_24%_30%,transparent_30%_48%,rgba(84,182,236,.55)_48%_54%,transparent_54%)]" />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-14 max-[620px]:gap-6 lg:grid-cols-[730px_1fr] lg:gap-24">
        <div className="relative order-2 mx-auto h-[610px] w-full max-w-[560px] max-[620px]:order-3 max-[620px]:h-[430px]">
          <Reveal delay={0} direction="left" className="absolute top-0 left-0 h-[535px] w-[79%] overflow-hidden bg-[#e8f5fc] max-[620px]:h-[400px] max-[620px]:w-[84%]">
            <Image src="/Pics for website1/DSC_2673.JPG" alt="Experienced dentist at 32Care Dental Clinic" fill sizes="(max-width: 620px) 84vw, 445px" className="object-cover object-top" />
          </Reveal>

          <Reveal delay={150} direction="down" className="absolute right-0 bottom-0 z-10 h-[348px] w-[63%] overflow-hidden border-[5px] border-white bg-[#e8f5fc] max-[620px]:h-[240px] max-[620px]:w-[69%]">
            <Image src="/Pics for website1/DSC_2612.JPG" alt="Doctor discussing personalised dental care" fill sizes="(max-width: 620px) 69vw, 350px" className="object-cover object-right" />
          </Reveal>

          {/* <Reveal delay={300} direction="right" className="absolute top-[33px] -right-6 z-20 h-[290px] w-[220px] overflow-hidden rounded-[6px] bg-[#0067ac] text-white max-[620px]:top-[28px] max-[620px]:right-0 max-[620px]:h-[195px] max-[620px]:w-[150px]">
            <Image src="/Pics for website1/DSC_2666.JPG" alt="Doctor discussing personalised dental care" fill sizes="(max-width: 620px) 69vw, 350px" className="object-cover object-right" />
          </Reveal> */}
        </div>

        <div className="order-1 max-[620px]:contents">
          <Reveal direction="right" className="min-w-0 max-[620px]:order-1"><SectionLabel light align="start" compact>Frequently Asked Questions</SectionLabel></Reveal>
          <Reveal delay={80} direction="left" className="min-w-0 max-[620px]:order-2"><h2 className="mt-2 lg:mt-2 lg:mb-5 max-w-[700px] text-[30px] leading-[1.22] tracking-[-.6px] text-white max-[620px]:mt-0 max-[620px]:text-[23px]">Questions Patients Commonly Ask About <Underline color="#8fe0ff" className="font-bold text-[#8fe0ff]">Root Canal Treatment</Underline></h2></Reveal>

          <div className="mt-8 grid grid-cols-2 items-start gap-3 max-[620px]:order-4 max-[620px]:mt-0 max-[620px]:grid-cols-1">
            {features.map((feature, index) => {
              const isOpen = openFaq === index;
              return <Reveal as="article" key={feature.title} delay={(index % 4) * 90} className={`overflow-hidden rounded-[12px] border transition-colors duration-300 ${index >= 4 && !showAllFaqs ? "max-[620px]:hidden" : ""} ${index === features.length - 1 && features.length % 2 !== 0 ? "col-span-2 w-[calc(50%-6px)] justify-self-center max-[620px]:col-span-1 max-[620px]:w-full" : ""} ${isOpen ? "border-[#54b6ec] bg-[#e8f5fc]" : "border-[#d7e7f1] bg-white"}`}>
                <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left">
                  <h3 className="text-[16px] leading-tight font-bold text-[#092b4c]">{feature.title}</h3>
                  <span className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0067ac] text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m4 7 6 6 6-6" /></svg>
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="px-5 pb-4 text-[14px] leading-[1.7] text-[#38536b]">{feature.description}</p></div>
                </div>
              </Reveal>;
            })}
          </div>
          <button type="button" onClick={() => { setShowAllFaqs(show => !show); if (showAllFaqs && openFaq > 3) setOpenFaq(-1); }} aria-expanded={showAllFaqs} className="mx-auto mt-5 hidden min-h-[46px] items-center justify-center gap-2 rounded-full border-2 border-[#8fe0ff] bg-white/10 px-7 text-[14px] font-bold text-white transition hover:bg-white hover:text-[#0067ac] max-[620px]:order-5 max-[620px]:mt-0 max-[620px]:flex max-[620px]:w-full">
            {showAllFaqs ? "View Less" : "View More"}
            <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="m4 7 6 6 6-6" /></svg>
          </button>
          <Reveal delay={200} className="max-[620px]:order-6 max-[620px]:mt-0">
            <a href="#consultation-form" className="group relative mt-10 inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-full border-2 border-white px-8 text-center text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 max-[620px]:mt-0 max-[620px]:w-full max-[620px]:px-3 max-[620px]:text-[12px]">
              <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 max-[620px]:hidden transition-colors duration-500 group-hover:text-[#073576]">Book Your Root Canal Consultation Today</span>
              <span className="relative z-10 hidden max-[620px]:inline transition-colors duration-500 group-hover:text-[#073576]">Book Your Consultation</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
