import Reveal from "./Reveal";
import { ArrowIcon, ToothIcon } from "./Icons";

const highlights = [
  "17+ Years of Experience",
  "10,000+ Successful Treatments",
  "7,000+ Happy Patients",
  "5⭐ Google Reviews",
  "Advanced Digital Dental Care",
  "Personalized Care for All Ages",
];

export default function GreatSmile() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbfe] py-9 sm:py-6 lg:py-10">
      {/* hexagon grid background */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-[#0876b5]/10">
        <defs>
          <pattern id="hexgrid-greatsmile" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(1.1)">
            <path d="M28 0 56 16v32L28 64 0 48V16Zm0 64 28 16v32" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexgrid-greatsmile)" />
      </svg>
      {/* scattered plus accents */}
      <span aria-hidden className="pointer-events-none absolute left-[38%] top-10 text-2xl font-light text-[#54b6ec]/40 sm:left-[42%]">+</span>
      <span aria-hidden className="pointer-events-none absolute bottom-16 left-[46%] text-xl font-light text-[#54b6ec]/30">+</span>
      <span aria-hidden className="pointer-events-none absolute bottom-8 right-[6%] text-2xl font-light text-[#54b6ec]/30">+</span>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold leading-tight text-[#092b4c] sm:text-3xl lg:text-4xl">
            Why Choose Us?
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="group/marquee mt-9 overflow-hidden py-2 motion-reduce:overflow-x-auto sm:mt-12 sm:overflow-visible sm:py-0">
          <ul className="flex w-max animate-[badge-marquee_50s_linear_infinite] items-stretch gap-3 pr-3 group-hover/marquee:[animation-play-state:paused] group-active/marquee:[animation-play-state:paused] motion-reduce:animate-none sm:w-auto sm:animate-none sm:flex-wrap sm:justify-center sm:gap-4 sm:pr-0">
            {[...highlights, ...highlights].map((h, index) => (
              <li
                key={`${h}-${index}`}
                aria-hidden={index >= highlights.length ? true : undefined}
                className={`${index >= highlights.length ? "motion-reduce:hidden sm:hidden" : ""} group flex h-full shrink-0 items-center gap-2.5 rounded-full border border-[#c9e6f5] bg-white py-2.5 pl-2.5 pr-5 shadow-[0_6px_16px_-10px_rgba(5,43,80,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#54b6ec] hover:shadow-[0_10px_22px_-10px_rgba(5,43,80,0.35)]`}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e8f5fc] text-[#0876b5] transition-colors duration-300 group-hover:bg-[#0876b5] group-hover:text-white">
                  <ToothIcon className="h-3.5 w-3.5" />
                </span>
                <span className="whitespace-nowrap text-lg font-semibold leading-tight text-[#092b4c] sm:whitespace-normal">{h}</span>
              </li>
            ))}
          </ul>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-9 flex justify-center sm:mt-12">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0876b5] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0876b5]/25 transition hover:-translate-y-0.5 hover:bg-[#073576]"
          >
            Book Your Consultation
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
