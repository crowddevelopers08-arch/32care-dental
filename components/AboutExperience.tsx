"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./SectionLabel";

export function AboutExperience() {
  return (
    <section id="about-doctor" className="relative scroll-mt-5 overflow-hidden bg-white px-5 py-12 font-['Onest',sans-serif] text-[#092b4c] sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 max-[620px]:gap-6 lg:grid-cols-[560px_1fr] lg:gap-20">
        <div className="relative mx-auto h-[570px] w-full max-w-[560px] max-[620px]:order-4 max-[620px]:h-[480px]">
          <span aria-hidden="true" className="absolute top-4 left-2 h-[185px] w-[185px] rounded-full border-[5px] border-[#54b6ec]/45 before:absolute before:inset-5 before:rounded-full before:border-[5px] before:border-[#0876b5]/45 after:absolute after:inset-11 after:rounded-full after:border-[5px] after:border-[#54b6ec]/45" />

          <div className="absolute top-0 right-0 h-[405px] w-[76%] overflow-hidden rounded-[12px] bg-[#e8f5fc] max-[620px]:h-[330px] max-[620px]:w-[82%]">
            <Image src="/Pics for website1/DSC_2586.JPG" alt="Dentist welcoming a patient at the dental clinic" fill sizes="(max-width: 620px) 82vw, 430px" className="object-cover" />
          </div>

          <span aria-hidden="true" className="absolute top-[210px] left-0 z-20 grid h-[54px] w-[54px] place-items-center rounded-full bg-[#54b6ec]  max-[620px]:top-[170px]"><i className="h-[14px] w-[14px] rounded-full bg-white" /></span>

          <div className="absolute bottom-0 left-0 z-10 h-[385px] w-[75%] overflow-hidden rounded-[12px] bg-[#e8f5fc] max-[620px]:h-[320px] max-[620px]:w-[80%]">
            <Image src="/Pics for website1/DSC_2566.JPG" alt="Modern dental treatment room and equipment" fill sizes="(max-width: 620px) 80vw, 420px" className="object-cover object-top" />
          </div>

          <div className="absolute right-8 bottom-[78px] z-20 grid h-[176px] w-[176px] place-items-center rounded-[12px] bg-[#0876b5] text-center text-white max-[620px]:right-0 max-[620px]:bottom-10 max-[620px]:h-[145px] max-[620px]:w-[145px]">
            <span aria-hidden="true" className="absolute inset-[13px] rounded-full border-[5px] border-white border-r-transparent" />
            <div className="relative"><CountUp end={7000} /> <span className="mt-3 block text-[13px]">Happy Patients</span></div>
          </div>
        </div>

        <div className="max-[620px]:contents">
          <div className="max-[620px]:order-1"><SectionLabel align="start">About The Doctor</SectionLabel></div>
          <h2 className="mt-1 max-w-[720px] text-[26px] font-medium tracking-[.2px] text-[#092b4c] max-[620px]:order-2 max-[620px]:mt-0 max-[620px]:text-[23px]">Your Smile Is In Experienced Hands</h2>
          <p className="mt-4 max-w-[760px] text-[15px] leading-[1.55] text-[#38536b] max-[620px]:order-3 max-[620px]:mt-0">With over <strong className="font-bold text-[#0876b5]">18 years of experience</strong> in dentistry, <strong className="font-bold text-[#092b4c]">Dr. Shital Kawale Dharmadhikari</strong> specialises in <strong className="font-bold text-[#0876b5]">Dental Implants, Full Mouth Rehabilitation, Smile Designing, Root Canal Treatments, and Cosmetic Dentistry.</strong></p>
          <p className="mt-2 max-w-[760px] text-[15px] leading-[1.55] text-[#38536b] max-[620px]:order-5 max-[620px]:mt-0">At <strong className="font-bold text-[#092b4c]">32Care Dental Clinic</strong>, she combines <strong className="font-bold text-[#0876b5]">advanced dental technology</strong> with a personalised approach to provide precise treatment planning and comfortable dental care.</p>
          <p className="mt-2 max-w-[760px] text-[15px] leading-[1.55] text-[#38536b] max-[620px]:order-6 max-[620px]:mt-0">As an active member of the <strong className="font-bold text-[#092b4c]">Indian Dental Association (IDA)</strong> and <strong className="font-bold text-[#092b4c]">Indian Society of Oral Implantology (ISOI)</strong>, she is committed to delivering modern dental solutions focused on <strong className="font-bold text-[#0876b5]">healthy, confident smiles.</strong></p>

          <div className="mt-6 grid gap-8 max-sm:gap-2 max-[620px]:order-7 max-[620px]:mt-0 sm:grid-cols-2">
            <Feature title="Dr. Shital Kawale Dharmadhikari" icon="shield">B.D.S. Dental Surgeon</Feature>
            <Feature title="Implant & Aesthetic Dentistry" icon="vision">Specialist dental care with over 18 years of experience.</Feature>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 max-[620px]:order-8 max-[620px]:mt-0">
            <a href="#consultation-form" className="group inline-flex min-h-[60px] items-center overflow-hidden rounded-full border border-[#c9e6f5] bg-white pl-8 text-[14px] font-bold text-[#092b4c]  transition hover:-translate-y-1  max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:justify-between max-[620px]:pl-4 max-[620px]:text-[11px]"><span className="max-[620px]:hidden">BOOK A CONSULTATION WITH DR. SHITAL</span><span className="hidden max-[620px]:inline">Book Your Consultation</span><span className="ml-7 grid h-[58px] w-[58px] place-items-center rounded-full bg-[#073576] text-[27px] text-white transition group-hover:bg-[#0876b5] max-[620px]:ml-2 max-[620px]:h-[52px] max-[620px]:w-[52px] max-[620px]:shrink-0 max-[620px]:text-xl">→</span></a>
            {/* <a href="#patient-stories" aria-label="Watch patient stories" className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[#54b6ec] text-white  transition hover:scale-110 hover:bg-[#0876b5]"><span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" /></a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ end }: { end: number }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const startedAt = performance.now();
      const duration = 2200;

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(end * eased));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [end]);

  return <strong ref={elementRef} className="block text-[36px] leading-none font-extrabold tabular-nums max-[620px]:text-[29px]">{value.toLocaleString()}+</strong>;
}

function Feature({ title, icon, children }: { title: string; icon: "shield" | "vision"; children: React.ReactNode }) {
  return <div>
    <div className="flex items-center gap-4">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e8f5fc] text-[#0876b5]">
        {icon === "shield" ? <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 4 39 9v12c0 10-6 18-15 23C15 39 9 31 9 21V9l15-5Z"/><path d="M24 11v25M16 19h16"/></svg> : <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="21" r="12"/><circle cx="24" cy="21" r="7"/><path d="m29 16-10 10M14 38h20M24 33v5"/></svg>}
      </span>
      <h3 className="text-[16px] leading-tight font-bold text-[#092b4c]">{title}</h3>
    </div>
    <p className="mt-2 text-[12px] leading-[1.55] text-[#38536b]">{children}</p>
  </div>;
}
