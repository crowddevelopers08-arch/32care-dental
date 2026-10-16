"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847419/DSC_2673.jpg", alt: "Dentist consulting a patient at 32Care Dental Clinic" },
  { src: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847426/DSC_2666.jpg", alt: "Dental treatment in progress at 32Care Dental Clinic" },
  { src: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847811/DSC_2591.jpg", alt: "Dental specialist at 32Care Dental Clinic" },
  { src: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847805/DSC_2652.jpg", alt: "Modern treatment room at 32Care Dental Clinic" },
  { src: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847805/DSC01914.jpg", alt: "32Care Dental Clinic reception" },
  { src: "https://res.cloudinary.com/xv3grzfw/image/upload/v1790847425/DSC_2643.jpg", alt: "Dental care team at 32Care Dental Clinic" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((index) => (index + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, [paused, current]);

  return (
    <div
      className="relative lg:h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-3 -z-10 rounded-4xl bg-linear-to-br from-[#54b6ec]/40 via-[#0876b5]/20 to-transparent blur-2xl" />
      <div
        className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/40 ring-1 ring-white/20 sm:aspect-4/3 lg:aspect-auto lg:h-full"
        aria-roledescription="carousel"
        aria-label="32Care Dental Clinic photos"
      >
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            quality={90}
            priority={index === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
            aria-hidden={index !== current}
            className={`object-cover object-top transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#052b50]/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === current}
              className={`h-2.5 rounded-full bg-white transition-all duration-300 ${index === current ? "w-8" : "w-2.5 opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
