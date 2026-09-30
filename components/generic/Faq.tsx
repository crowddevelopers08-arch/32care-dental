"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";
import { PlusIcon, PinIcon, PhoneIcon, ClockIcon, ArrowIcon } from "./Icons";

type FaqEntry = { q: string; a: ReactNode };

const faqs: FaqEntry[] = [
  {
    q: "Do I need an appointment before visiting?",
    a: "Appointments are recommended so our team can allocate dedicated consultation time and understand your dental concern properly.",
  },
  {
    q: "Do you provide dental implants?",
    a: "Yes, 32Care Dental provides dental implant treatment with personalized planning based on your dental condition.",
  },
  {
    q: "Do you provide root canal treatment?",
    a: "Yes, root canal treatment is available for infected or damaged teeth.",
  },
  {
    q: "Do you provide invisible aligners?",
    a: "Yes, orthodontic solutions including aligners are available based on your dental requirements.",
  },
  {
    q: "Do you treat children's dental problems?",
    a: "Yes, pediatric dental care is available to support children's oral health needs.",
  },
  {
    q: "Where is 32Care Dental located?",
    a: (
      <>
        32Care Dental Clinic &amp; Implant Center is located at:
        <br />
        <span className="font-medium text-[#092b4c]">{site.address}</span>
        <br />
        Call:{" "}
        {site.phones.map((p, i) => (
          <span key={p.href}>
            {i > 0 && " / "}
            <a href={p.href} className="font-medium text-[#0876b5] underline-offset-2 hover:underline">{p.label}</a>
          </span>
        ))}
        <br />
        Opening Hours: {site.hours[0].day}, {site.hours[0].time}
        <br />
        {site.hours[1].day}: {site.hours[1].time}
      </>
    ),
  },
];

type ItemProps = { f: FaqEntry; open: boolean; onToggle: () => void; i: number };

function Item({ f, open, onToggle, i }: ItemProps) {
  return (
    <div className={`rounded-2xl border transition-colors duration-300 ${open ? "border-[#54b6ec] bg-white shadow-xl shadow-[#0876b5]/10" : "border-[#092b4c]/[0.07] bg-white/60 hover:bg-white"}`}>
      <h3>
        <button
          type="button"
          id={`faq-q-${i}`}
          aria-expanded={open}
          aria-controls={`faq-a-${i}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="text-base font-semibold leading-snug text-[#092b4c] sm:text-[17px]">{f.q}</span>
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ${open ? "rotate-45 bg-[#0876b5] text-white" : "bg-[#e8f5fc] text-[#0876b5]"}`}>
            <PlusIcon className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-a-${i}`}
        role="region"
        aria-labelledby={`faq-q-${i}`}
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 text-[15px] leading-relaxed text-[#38536b] sm:px-6">{f.a}</div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-white py-9 sm:py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions About Dental Care" />

        <div className="mt-6 sm:mt-10 lg:mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <Item f={f} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
              </Reveal>
            ))}
          </div>

          {/* Location card */}
          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#052b50] text-white shadow-2xl shadow-[#052b50]/25">
              <div className="relative h-60 sm:h-72">
                <iframe
                  src={site.mapEmbed}
                  title="32Care Dental Clinic location in Kharadi, Pune"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full grayscale-[35%]"
                />
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                <div>
                  <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">Looking For A Trusted Dentist Near Kharadi?</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                    Get expert dental care for tooth pain, implants, root canals, smile concerns and more at 32Care
                    Dental Clinic.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#8fe0ff]"><PinIcon className="h-5 w-5" /></span>
                  <p className="text-[15px] leading-relaxed text-white/85">
                    Visit 32Care Dental Clinic &amp; Implant Center
                    <br />
                    {site.address}
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#8fe0ff]"><PhoneIcon className="h-5 w-5" /></span>
                  <div className="flex flex-col text-[15px] font-semibold">
                    {site.phones.map((p) => (
                      <a key={p.href} href={p.href} className="hover:text-[#8fe0ff]">{p.label}</a>
                    ))}
                  </div>
                </div>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-[#54b6ec] px-5 py-3.5 text-sm font-semibold text-[#052b50] transition hover:bg-[#8fe0ff]"
                >
                  Get Directions
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
