"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatedCounter } from "./AnimatedCounter";
import Reveal from "./Reveal";
import { PlayIcon, PlusIcon } from "./Icons";

const BLOB = "rounded-[62%_38%_53%_47%/41%_54%_46%_59%]";

export default function HealthcareEasy() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="relative overflow-hidden bg-white py-9 sm:py-6 lg:py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text */}
        <div className="contents sm:block">
        <Reveal className="order-1 sm:order-none">
          <span className="text-sm font-bold uppercase tracking-wide text-[#0876b5]">About The Doctor</span>
          <h2 className="mt-3 text-2xl font-bold leading-[1.18] text-[#092b4c] sm:text-3xl lg:text-4xl">
            Meet Your Dentist
          </h2>
          <p className="mt-4 text-lg font-bold text-[#092b4c]">Dr. Shital Kawale Dharmadhikari</p>
          <p className="text-sm font-semibold text-[#0876b5]">B.D.S. Dental Surgeon | Cosmetic &amp; Aesthetic Dentistry Specialist</p>
        </Reveal>
        <Reveal className="order-3 sm:order-none sm:mt-4">
          <p className="max-w-xl text-base leading-relaxed text-[#38536b] sm:text-lg">
            Dr. Shital Kawale Dharmadhikari is an experienced dental surgeon with 17+ years of expertise in cosmetic
            dentistry, dental implants, root canal treatments, smile makeovers and full-mouth rehabilitation. At
            32Care Dental Clinic, she focuses on understanding each patient&apos;s dental concerns and providing
            personalized treatment plans using advanced dental techniques with a patient-centric approach.
          </p>
          <p className="mt-2 max-w-lg text-base leading-relaxed text-[#38536b] sm:text-lg">
            She is an active member of the Indian Dental Association (IDA) and Indian Society of Oral Implantology
            (ISOI).
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-[#0876b5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0876b5]/30 transition hover:-translate-y-0.5 hover:bg-[#073576]"
            >
              Book An Appointment
            </a>
            <button type="button" onClick={() => setOpen(true)} className="group flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0876b5] text-white shadow-lg shadow-[#0876b5]/30 transition group-hover:scale-105">
                <PlayIcon className="ml-0.5 h-4 w-4" />
              </span>
              <span className="text-sm font-bold text-[#092b4c]">Watch Video</span>
            </button>
          </div>
        </Reveal>
        </div>

        {/* Photo + blob + floating stats */}
        <Reveal delay={100} className="relative order-2 mx-auto w-full max-w-xs sm:order-none sm:max-w-sm lg:max-w-none">
          <div className="relative aspect-square">
            <div aria-hidden className={`absolute inset-0 ${BLOB} border-2 border-[#c9e6f5]`} />
            <div aria-hidden className={`absolute inset-3 ${BLOB} bg-[#0876b5]`} />
            <div className={`absolute inset-6 overflow-hidden ${BLOB}`}>
              <Image
                quality={90}
                src="https://res.cloudinary.com/xv3grzfw/image/upload/v1790847419/DSC_2673.jpg"
                alt="Dr. Shital Kawale Dharmadhikari at 32Care Dental Clinic"
                fill
                sizes="(min-width:1024px) 420px, 70vw"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute -right-2 top-8 rounded-2xl bg-white px-5 py-3 shadow-[0_14px_30px_-10px_rgba(5,43,80,0.25)] sm:right-2 sm:top-10">
              <strong className="block text-xl font-extrabold leading-none text-[#092b4c] sm:text-2xl">
                <AnimatedCounter end={7000} suffix="+" />
              </strong>
              <span className="mt-1 block text-[11px] font-medium text-[#38536b]">Happy Patients</span>
            </div>

            <div className="absolute -left-4 bottom-8 rounded-2xl bg-white px-5 py-3 shadow-[0_14px_30px_-10px_rgba(5,43,80,0.25)] sm:left-0 sm:bottom-10">
              <strong className="block text-xl font-extrabold leading-none text-[#092b4c] sm:text-2xl">
                <AnimatedCounter end={17} suffix="+" />
              </strong>
              <span className="mt-1 block text-[11px] font-medium text-[#38536b]">Years of Experience</span>
            </div>
          </div>
        </Reveal>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Doctor explaining treatment evaluation"
          className="fixed inset-0 z-[100] grid place-items-center bg-[#052b50]/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-3xl bg-black shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <video
              src="https://res.cloudinary.com/xv3grzfw/video/upload/v1790847797/20260324_205957_1__squished.mp4"
              title="Doctor explaining treatment evaluation"
              controls
              autoPlay
              playsInline
              className="h-full w-full"
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#052b50] shadow-lg transition hover:bg-[#e8f5fc]"
          >
            <PlusIcon className="h-5 w-5 rotate-45" />
          </button>
        </div>
      )}
    </section>
  );
}
