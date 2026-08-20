"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const directions = ["left", "up", "down", "right"] as const;

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Single Tooth Implants",
    description:
      "Replace a missing tooth with a natural-looking and functional implant solution.",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040481/01.jpg",
    icon: <ToothIcon />,
  },
  {
    id: 2,
    title: "Multiple Teeth Implants / Bridges",
    description:
      "Restore multiple missing teeth with stable and aesthetic replacements.",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040482/02.jpg",
    icon: <BridgeIcon />,
  },
  {
    id: 3,
    title: "Full Mouth Rehabilitation (All-on-4 / All-on-6)",
    description:
      "Complete smile restoration with advanced full-mouth implant solutions.",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040482/03.jpg",
    icon: <SmileIcon />,
  },
  {
    id: 4,
    title: "Immediate Implants (Post-Extraction)",
    description:
      "Replace extracted teeth with a planned implant solution for faster smile restoration.",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040483/04.jpg",
    icon: <ImplantIcon />,
  },
  {
    id: 5,
    title: "Bone Grafting & Sinus Lift",
    description:
      "Enhance jawbone support to make implant treatment possible when required.",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040484/05.jpg",
    icon: <BoneIcon />,
  },
];

export default function ServicesGrid() {
  const [activeId, setActiveId] = useState<number>(services[0].id);

  return (
    <section id="services" className="relative w-full scroll-mt-[78px] overflow-hidden bg-[linear-gradient(118deg,#2d78bb_0%,#086cae_54%,#083a75_100%)] px-5 py-8 font-[Onest,sans-serif] text-white sm:px-10 md:px-16 lg:py-10">
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(45deg,transparent_0_24%,rgba(220,234,255,.7)_24%_30%,transparent_30%_48%,rgba(84,182,236,.55)_48%_54%,transparent_54%)]" />
      <div className="relative mx-auto max-w-[1450px]">
        <Reveal className="mb-6 text-center lg:mb-8" direction="left">
          <SectionLabel light className="mb-4">Type of Dental Implants</SectionLabel>
          <h2 className="mx-auto max-w-[950px] text-[30px] font-medium tracking-[.2px] text-white max-[620px]:text-[23px]">
            Type of Dental Implants offered at{" "}
            <span className="font-bold text-[#8fe0ff]">32 Care Dental Clinic &amp; Implant Center</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              active={activeId === service.id}
              onActivate={() => setActiveId(service.id)}
              onDeactivate={() => setActiveId(services[0].id)}
              delay={index * 120}
              direction={directions[index % directions.length]}
            />
          ))}
        </div>

        <Reveal delay={150} className="mt-4 flex justify-center lg:mt-10">
          <a
            href="#implant-consultation"
            data-open-consultation-modal
            className="group relative inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-white px-9 text-[16px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:px-3 max-[620px]:text-[12px]"
          >
            <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 max-[620px]:hidden transition-colors duration-500 group-hover:text-[#073576]">Explore Your Dental Implant Options</span>
            <span className="relative z-10 hidden max-[620px]:inline transition-colors duration-500 group-hover:text-[#073576]">Explore Options</span>
            <span className="relative z-10 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#073576]">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  active,
  onActivate,
  onDeactivate,
  delay,
  direction,
}: {
  service: Service;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  delay: number;
  direction: "left" | "up" | "down" | "right";
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      direction={direction}
      className="group relative min-h-[330px] cursor-pointer overflow-hidden rounded-[20px] border border-[#c9e6f5] bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-[#0876b5] focus-within:border-[#0876b5]"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      tabIndex={0}
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        className={`object-cover transition duration-700 ${active ? "scale-105 opacity-100" : "opacity-0 group-hover:scale-105 group-hover:opacity-100 group-focus:opacity-100"}`}
      />
      <div
        className={`absolute inset-0 bg-[#073576]/70 transition duration-500 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus:opacity-100"}`}
      />

      <div className="relative z-10 flex h-full min-h-[280px] flex-col">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full text-[#0876b5] transition duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-focus:rotate-[360deg] group-focus:bg-white ${active ? "bg-white" : "bg-[#e8f5fc]"}`}>
          {service.icon}
        </div>
        <div className="mt-auto pt-10">
          <h3 className={`text-[17px] leading-tight font-bold transition-colors duration-500 group-hover:text-white group-focus:text-white ${active ? "text-white" : "text-[#0a2037]"}`}>
            {service.title}
          </h3>
          <p className={`mt-2 text-[13px] leading-[1.55] transition-colors duration-500 group-hover:text-white group-focus:text-white ${active ? "text-white" : "text-[#2b201b]"}`}>
            {service.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-8 w-8" aria-hidden="true">
      {children}
    </svg>
  );
}

function ToothIcon() {
  return <IconBase><path d="M13 8c6-4 9 1 11 1s5-5 11-1c8 5 4 16 1 23-3 8-5 11-8 9-2-2-1-10-4-10s-2 8-4 10c-3 2-5-1-8-9C9 24 5 13 13 8Z" /></IconBase>;
}

function BridgeIcon() {
  return <IconBase><path d="M7 19c5-6 11-8 17-8s12 2 17 8M10 18v17m9-22v22m10-22v22m9-17v17M7 35h34" /><circle cx="10" cy="18" r="2" /><circle cx="19" cy="13" r="2" /><circle cx="29" cy="13" r="2" /><circle cx="38" cy="18" r="2" /></IconBase>;
}

function SmileIcon() {
  return <IconBase><circle cx="24" cy="24" r="18" /><path d="M15 20h.1M33 20h.1M14 28c3 5 7 7 10 7s7-2 10-7" strokeLinecap="round" /></IconBase>;
}

function ImplantIcon() {
  return <IconBase><path d="M16 8h16v7H16zM19 15h10l-2 22-3 4-3-4-2-22ZM18 21h11M18 27h10M19 33h8" strokeLinejoin="round" /></IconBase>;
}

function BoneIcon() {
  return <IconBase><path d="M13 18a6 6 0 1 1 5-9l12 12a6 6 0 1 1 9 9 6 6 0 1 1-9 5L18 23a6 6 0 1 1-5-5Z" strokeLinejoin="round" /></IconBase>;
}
