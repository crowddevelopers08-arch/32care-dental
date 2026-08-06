"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { Underline } from "./Underline";

export function AboutExperience() {
  return (
    <section id="about-doctor" className="relative scroll-mt-5 overflow-hidden bg-white px-5 py-12 font-['Onest',sans-serif] text-[#092b4c] sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 max-[620px]:gap-6 lg:grid-cols-[560px_1fr] lg:gap-20">
        <div className="relative mx-auto h-[570px] w-full max-w-[560px] max-[620px]:order-4 max-[620px]:h-[480px]">
          <span aria-hidden="true" className="absolute top-4 left-2 h-[185px] w-[185px] rounded-full border-[5px] border-[#54b6ec]/45 before:absolute before:inset-5 before:rounded-full before:border-[5px] before:border-[#0067ac]/45 after:absolute after:inset-11 after:rounded-full after:border-[5px] after:border-[#54b6ec]/45" />

          <div className="absolute top-0 right-0 h-[405px] w-[76%] overflow-hidden rounded-[12px] bg-[#e8f5fc] max-[620px]:h-[330px] max-[620px]:w-[82%]">
            <Image src="/Pics for website1/DSC_2586.JPG" alt="Dentist welcoming a patient at the dental clinic" fill sizes="(max-width: 620px) 82vw, 430px" className="object-cover" />
          </div>

          <span aria-hidden="true" className="absolute top-[210px] left-0 z-20 grid h-[54px] w-[54px] place-items-center rounded-full bg-[#54b6ec]  max-[620px]:top-[170px]"><i className="h-[14px] w-[14px] rounded-full bg-white" /></span>

          <div className="absolute bottom-0 left-0 z-10 h-[385px] w-[75%] overflow-hidden rounded-[12px] bg-[#e8f5fc] max-[620px]:h-[320px] max-[620px]:w-[80%]">
            <Image src="/Pics for website1/DSC_2566.JPG" alt="Modern dental treatment room and equipment" fill sizes="(max-width: 620px) 80vw, 420px" className="object-cover object-top" />
          </div>

          <div className="absolute right-8 bottom-[78px] z-20 grid h-[176px] w-[176px] place-items-center rounded-[12px] bg-[#0067ac] text-center text-white max-[620px]:right-0 max-[620px]:bottom-10 max-[620px]:h-[145px] max-[620px]:w-[145px]">
            <span aria-hidden="true" className="absolute inset-[13px] rounded-full border-[5px] border-white border-r-transparent" />
            <div className="relative"><CountUp end={7000} /> <span className="mt-3 block text-[13px]">Happy Patients</span></div>
          </div>
        </div>

        <div className="max-[620px]:contents">
          <SlideIn className="max-[620px]:order-1" from="left"><SectionLabel align="start">About The Doctor</SectionLabel></SlideIn>
          <WordReveal tag="h2" className="mt-1 lg:mt-2 lg:mb-5 max-w-[720px] text-[30px] font-medium tracking-[.2px] text-[#092b4c] max-[620px]:order-2 max-[620px]:mt-0 max-[620px]:text-[23px]">Your Smile Is In <Underline className="font-bold text-[#0067ac]">Experienced Hands</Underline></WordReveal>
          <WordReveal tag="p" className="mt-4 max-w-[760px] text-[15px] leading-[1.55] text-[#38536b] max-[620px]:order-3 max-[620px]:mt-0">With over <strong className="font-bold text-[#0067ac]">18 years of experience</strong> in dentistry, <strong className="font-bold text-[#092b4c]">Dr. Shital Kawale Dharmadhikari</strong> specialises in <strong className="font-bold text-[#0067ac]">Dental Implants, Full Mouth Rehabilitation, Smile Designing, Root Canal Treatments, and Cosmetic Dentistry.</strong></WordReveal>
          <WordReveal tag="p" className="mt-2 max-w-[760px] text-[15px] leading-[1.55] text-[#38536b] max-[620px]:order-5 max-[620px]:mt-0">At <strong className="font-bold text-[#092b4c]">32Care Dental Clinic</strong>, she combines <strong className="font-bold text-[#0067ac]">advanced dental technology</strong> with a personalised approach to provide precise treatment planning and comfortable dental care.</WordReveal>
          <WordReveal tag="p" className="mt-2 max-w-[760px] text-[15px] leading-[1.55] text-[#38536b] max-[620px]:order-6 max-[620px]:mt-0">As an active member of the <strong className="font-bold text-[#092b4c]">Indian Dental Association (IDA)</strong> and <strong className="font-bold text-[#092b4c]">Indian Society of Oral Implantology (ISOI)</strong>, she is committed to delivering modern dental solutions focused on <strong className="font-bold text-[#0067ac]">healthy, confident smiles.</strong></WordReveal>

          <SlideIn className="max-[620px]:order-7 max-[620px]:mt-0" from="right">
            <div className="mt-6 grid gap-8 max-sm:gap-2 sm:grid-cols-2">
              <Feature title="Dr. Shital Kawale Dharmadhikari" icon="shield">B.D.S. Dental Surgeon</Feature>
              <Feature title="Implant & Aesthetic Dentistry" icon="vision">Specialist dental care with over 18 years of experience.</Feature>
            </div>
          </SlideIn>

          <SlideIn className="max-[620px]:order-8 max-[620px]:mt-0" from="left">
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <FillSweepButton />
              {/* <a href="#patient-stories" aria-label="Watch patient stories" className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[#54b6ec] text-white  transition hover:scale-110 hover:bg-[#0067ac]"><span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" /></a> */}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

function SlideIn({ className, from, children }: { className?: string; from: "left" | "right"; children: React.ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.2 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = from === "left" ? "-translate-x-10" : "translate-x-10";

  return <div ref={elementRef} className={`${className ?? ""} transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${visible ? "opacity-100 translate-x-0" : `opacity-0 ${hiddenTransform}`}`}>{children}</div>;
}

type Word = { text: string; strongClassName?: string; underline?: boolean };

function splitToWords(node: React.ReactNode): Word[] {
  const words: Word[] = [];
  React.Children.forEach(node, child => {
    if (typeof child === "string") {
      child.split(/\s+/).filter(Boolean).forEach(text => words.push({ text }));
    } else if (React.isValidElement(child) && child.type === "strong") {
      const props = child.props as { className?: string; children?: React.ReactNode };
      splitToWords(props.children).forEach(word => words.push({ ...word, strongClassName: props.className }));
    } else if (React.isValidElement(child) && child.type === Underline) {
      const props = child.props as { className?: string; children?: React.ReactNode };
      splitToWords(props.children).forEach(word => words.push({ ...word, strongClassName: props.className, underline: true }));
    }
  });
  return words;
}

function WordReveal({ tag, className, children }: { tag: "h2" | "p"; className?: string; children: React.ReactNode }) {
  const elementRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const words = splitToWords(children);
  const Tag = tag;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.2 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const groups: { underline: boolean; words: Word[] }[] = [];
  words.forEach(word => {
    const last = groups[groups.length - 1];
    if (last && last.underline === !!word.underline) last.words.push(word);
    else groups.push({ underline: !!word.underline, words: [word] });
  });

  let globalIndex = 0;

  return (
    <Tag ref={elementRef as React.Ref<HTMLHeadingElement>} className={className}>
      {groups.map((group, groupIndex) => {
        const content = group.words.map((word, i) => {
          const index = globalIndex++;
          const wordSpan = (
            <span
              key={i}
              className={`inline-block transition-all duration-500 ease-out motion-reduce:transition-none ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: visible ? `${Math.min(index, 30) * 25}ms` : "0ms" }}
            >
              {word.text}
            </span>
          );
          return (
            <React.Fragment key={i}>
              {word.strongClassName ? <strong className={word.strongClassName}>{wordSpan}</strong> : wordSpan}
              {i < group.words.length - 1 ? " " : ""}
            </React.Fragment>
          );
        });
        return (
          <React.Fragment key={groupIndex}>
            {group.underline ? <Underline>{content}</Underline> : content}
            {groupIndex < groups.length - 1 ? " " : ""}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}

function FillSweepButton() {
  return (
    <a
      href="#consultation-form"
      className="group relative inline-flex min-h-[60px] items-center overflow-hidden rounded-full border-2 border-[#073576] pl-8 text-[14px] font-bold text-[#073576] transition-colors duration-500 hover:text-white max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:justify-between max-[620px]:pl-4 max-[620px]:text-[11px]"
    >
      <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-[#073576] transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <span className="relative z-10 max-[620px]:hidden">BOOK A CONSULTATION WITH DR. SHITAL</span>
      <span className="relative z-10 hidden max-[620px]:inline">Book Your Consultation</span>
      <span className="relative z-10 ml-7 grid h-[58px] w-[58px] place-items-center rounded-full bg-[#073576] text-[27px] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#073576] max-[620px]:ml-2 max-[620px]:h-[52px] max-[620px]:w-[52px] max-[620px]:shrink-0 max-[620px]:text-xl">→</span>
    </a>
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
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e8f5fc] text-[#0067ac]">
        {icon === "shield" ? <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 4 39 9v12c0 10-6 18-15 23C15 39 9 31 9 21V9l15-5Z"/><path d="M24 11v25M16 19h16"/></svg> : <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="21" r="12"/><circle cx="24" cy="21" r="7"/><path d="m29 16-10 10M14 38h20M24 33v5"/></svg>}
      </span>
      <h3 className="text-[16px] leading-tight font-bold text-[#092b4c]">{title}</h3>
    </div>
    <p className="mt-2 text-[12px] leading-[1.55] text-[#38536b]">{children}</p>
  </div>;
}
