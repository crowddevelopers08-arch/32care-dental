"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = ["Home", "Services", "Dentists", "Pages", "Blog", "Contact"];
const avatars = ["/Pics for website1/DSC_2586.JPG", "/Pics for website1/DSC_2612.JPG", "/Pics for website1/DSC_2673.JPG"];
const badges = ["Expert Implant Consultation", "Advanced Dental Technology", "Personalised Treatment Plans"];
const heroStats = [
  { value: "18", suffix: "", label: "Years of Experience" },
  { value: "200", suffix: "+", label: "Successful Implant Procedures" },
  { value: "7,000", suffix: "+", label: "Happy Patients" },
  { value: "5", suffix: "⭐", label: "Google Ratings" },
];

export function DentalImplantHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <main className="bg-white font-['Onest',sans-serif] text-[#092b4c]">
    <header className="relative z-30 h-[82px] border-y border-[#c9e6f5] bg-white">
      <div className="mx-auto flex h-full max-w-[1470px] items-center justify-between px-6 lg:px-9">
        <a href="#" aria-label="32Care Dental Clinic home" className="relative block h-[62px] w-[180px] shrink-0 max-[620px]:h-[52px] max-[620px]:w-[145px]">
          <Image src="/logo-32.png" alt="32Care Dental Clinic" fill priority sizes="180px" className="object-contain object-left" />
        </a>

        <nav className="ml-auto hidden items-center gap-10 text-[16px] font-semibold lg:flex">
          {navigation.map((item, index) => <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="flex items-center gap-2 transition hover:text-[#0876b5]">{item}{[0,1,3].includes(index) && <span className="text-[13px] text-[#38536b]">⌄</span>}</a>)}
        </nav>

        <div className="ml-8 flex items-center gap-5 max-[620px]:ml-3 max-[620px]:gap-2">
          <a href="#implant-consultation" className="inline-flex h-[49px] items-center justify-center rounded-[8px] bg-[#0876b5] px-7 text-[15px] font-bold text-white transition hover:bg-[#073576] max-[700px]:hidden">Book Appointment</a>
          <button type="button" onClick={() => setMenuOpen(open => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation menu" className="grid h-12 w-12 place-items-center">
            <span className="relative h-[20px] w-[28px]" aria-hidden="true">
              <i className={`absolute top-[3px] left-0 h-[2px] w-full bg-[#092b4c] transition duration-300 ${menuOpen ? "top-[9px] rotate-45" : ""}`} />
              <i className={`absolute top-[15px] left-0 h-[2px] w-full bg-[#092b4c] transition duration-300 ${menuOpen ? "top-[9px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div className={`absolute top-full right-4 left-4 overflow-hidden rounded-b-[16px] border border-[#c9e6f5] bg-white transition-all duration-300 lg:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
        <nav className="grid p-3">{navigation.map(item => <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-[#c9e6f5] px-4 py-3 text-[15px] font-semibold last:border-0 hover:bg-[#e8f5fc]">{item}</a>)}</nav>
        <a href="#implant-consultation" onClick={() => setMenuOpen(false)} className="flex min-h-[52px] items-center justify-center bg-[#0876b5] text-[15px] font-bold text-white">Book Appointment</a>
      </div>
    </header>

    <section className="relative isolate z-10 min-h-[calc(100vh-82px)] bg-[linear-gradient(105deg,#e8f5fc_0%,#f5fbff_42%,#f5fbff_60%,#dceaff_100%)] max-[900px]:min-h-0 max-[900px]:pb-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-44 -left-24 h-[610px] w-[610px] rounded-full bg-[#54b6ec]/35 blur-[110px]" />
        <div className="absolute top-0 right-0 h-full w-[48%] bg-[radial-gradient(circle_at_70%_42%,rgba(84,182,236,.32),transparent_58%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-[1470px] grid-cols-[1.12fr_.88fr] items-center px-6 py-0 lg:px-9 max-[900px]:grid-cols-1 max-[900px]:min-h-0 max-[900px]:gap-0 max-[900px]:pt-10">
        <div className="relative z-10 self-stretch pt-7 max-[900px]:contents">
          <p className="text-[18px] font-semibold text-[#0876b5] max-[900px]:order-1 max-[620px]:text-[14px]">Advanced Dental Implants in Pune</p>
          <h1 className="mt-8 max-w-[940px] text-[clamp(58px,4.9vw,104px)] leading-[.96] font-medium tracking-[-5px] text-[#092b4c] max-[900px]:order-2 max-[900px]:mt-6 max-[620px]:text-[42px] max-[620px]:leading-[1.02] max-[620px]:tracking-[-2px]">
            Restore Your <span className="text-[#0876b5]">Smile &amp; Confidence</span> With Advanced Dental Implants in Pune
          </h1>

          <div className="relative mt-8 max-[900px]:order-3 max-[620px]:mt-6">
            <span className="absolute top-0 left-0 h-[92px] w-[92px] overflow-hidden rounded-full border-4 border-white shadow-[0_10px_24px_rgba(7,53,118,.18)] max-[1100px]:h-[70px] max-[1100px]:w-[70px] max-[900px]:hidden">
              <Image src="/Pics for website1/DSC_2586.JPG" alt="32Care dental implant specialist" fill sizes="92px" className="object-cover" />
            </span>
            <p className="ml-[120px] max-w-[590px] text-[18px] leading-[1.75] font-medium text-[#38536b] max-[1100px]:ml-10 max-[900px]:ml-0 max-[620px]:text-[15px] max-[620px]:leading-[1.7]">Our experienced dental specialists provide personalised implant solutions using advanced technology and detailed treatment planning to help you achieve a natural-looking and functional smile.</p>
          </div>

          <div className="mt-7 ml-[120px] max-w-[720px] overflow-hidden text-[14px] font-bold text-[#092b4c] [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] max-[1100px]:ml-10 max-[900px]:order-5 max-[900px]:mt-8 max-[900px]:ml-0">
            <div className="animate-badge-marquee flex w-max items-center gap-x-7">
              {[...badges, ...badges].map((item, index) => <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-2 whitespace-nowrap"><i className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0876b5] text-[12px] not-italic text-white">✓</i>{item}</span>)}
            </div>
          </div>

          <div className="mt-9 flex items-center gap-11 max-[900px]:order-6 max-[900px]:mt-8 max-[620px]:flex-wrap max-[620px]:gap-6">
            <a id="implant-consultation" href="tel:+919975611589" className="inline-flex min-h-[50px] items-center justify-center rounded-[8px] bg-[#0876b5] px-7 text-center text-[16px] font-bold text-white transition hover:bg-[#073576] max-[620px]:w-full">Book Your Dental Implant Consultation</a>
            <div className="flex items-center gap-7">
              <div className="flex -space-x-3">{avatars.map((src,index) => <span key={src} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-[#dceaf8]"><Image src={src} alt={`Happy dental patient ${index + 1}`} fill sizes="48px" className="object-cover" /></span>)}</div>
              <p className="text-[16px] leading-tight font-semibold text-[#38536b]"><strong className="block text-[20px] font-bold">7k+</strong>happy patients</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-full min-h-[680px] items-center justify-center max-[900px]:order-4 max-[900px]:mt-8 max-[900px]:min-h-[470px] max-[620px]:min-h-[350px]">
          <span className="absolute h-[560px] w-[560px] rounded-full bg-white/45 blur-[35px] max-[620px]:h-[320px] max-[620px]:w-[320px]" />
          <Image src="/dental-implants/tooth-mascot.png" alt="Friendly 3D tooth brushing with a toothbrush" width={1254} height={1254} priority sizes="(max-width: 900px) 92vw, 48vw" className="relative z-10 h-auto w-[720px] max-w-[116%] object-contain drop-shadow-[0_28px_28px_rgba(7,53,118,.16)] max-[900px]:w-[560px] max-[620px]:w-[390px]" />
        </div>
      </div>

      <div className="absolute inset-x-6 -bottom-[90px] z-30 lg:inset-x-9 max-[900px]:static max-[900px]:mx-6 max-[900px]:mt-8">
        <div className="mx-auto max-w-[1470px] overflow-hidden rounded-[20px] border border-[#c9e6f5] bg-white/95 backdrop-blur-sm">
          <h2 className="border-b border-[#e8f5fc] px-6 py-5 text-center text-[20px] font-semibold text-[#092b4c] max-[620px]:px-4 max-[620px]:py-4 max-[620px]:text-[16px]">
            Trusted Dental Expertise For <span className="text-[#0876b5]">Your Smile Restoration</span>
          </h2>
          <div className="grid grid-cols-4 divide-x divide-[#c9e6f5] max-[900px]:grid-cols-2 max-[900px]:divide-x-0">
            {heroStats.map(stat => <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-6 text-center max-[900px]:border-b max-[900px]:border-[#e8f5fc] max-[900px]:py-5 max-[900px]:[&:nth-child(2n)]:border-l max-[900px]:[&:nth-last-child(-n+2)]:border-b-0">
              <p className="text-[28px] leading-none font-extrabold text-[#092b4c] max-[620px]:text-[22px]">{stat.value}<span className="text-[#0876b5]">{stat.suffix}</span></p>
              <p className="text-[13px] font-semibold text-[#38536b]">{stat.label}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  </main>;
}
