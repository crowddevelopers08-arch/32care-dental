import Image from "next/image";
import LeadForm from "./LeadForm";
import { site } from "@/lib/site";
import { ArrowIcon, PhoneIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#052b50] pb-8 pt-20 sm:pt-28 lg:pb-20 lg:pt-32">
      {/* Background photo + brand */}
      <Image
        src="https://res.cloudinary.com/y8z11z0x/image/upload/v1789452410/dental-treatment-hero.png"
        quality={90}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#052b50] via-[#052b50]/95 to-[#0067ac]/80" />
      <div className="absolute -left-40 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-[#0876b5]/40 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#54b6ec]/25 blur-[120px]" />
      <svg className="absolute inset-0 -z-10 h-full w-full opacity-[0.07]" aria-hidden>
        <defs>
          <pattern id="hex" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
            <path d="M28 0 56 16v32L28 64 0 48V16Zm0 64 28 16v32" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8fe0ff] backdrop-blur sm:text-[13px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#54b6ec] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#54b6ec]" />
            </span>
            32Care Dental Clinic, Pune
          </span>

          <h1 className="mt-5 sm:mt-6 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.5em]">
            Find The Right&apos; Dental Treatment{" "}
            <span className="bg-linear-to-r from-[#8fe0ff] via-[#54b6ec] to-[#c9e6f5] bg-clip-text text-transparent">
              With Expert Guidance
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:mt-6 text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            Personalized dental care for tooth pain, implants, root canals, aligners and complete oral health in Kharadi, Pune.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#54b6ec] px-7 py-4 text-base font-semibold text-[#052b50] shadow-2xl shadow-[#0067ac]/30 transition hover:-translate-y-0.5 hover:bg-[#8fe0ff]"
            >
             Book Your Consultation 
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.phones[0].href}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5 text-[#8fe0ff]" />
              Talk to Our Care Team
            </a>
          </div>

          <div className="mt-10 hidden items-center gap-4 lg:flex">
            <div className="flex -space-x-3">
              {[
                "https://res.cloudinary.com/y8z11z0x/image/upload/v1789452417/DSC_2673.jpg",
                "https://res.cloudinary.com/y8z11z0x/image/upload/v1789452417/DSC_2666.jpg",
              ].map((src) => (
                <Image quality={90} key={src} src={src} alt="" width={96} height={96} className="h-12 w-12 rounded-full object-cover ring-2 ring-[#052b50]" />
              ))}
            </div>
            <p className="text-sm leading-snug text-white/65">
              Consult with a specialist who understands
              <br />
              <span className="font-semibold text-white">teeth, comfort and lasting care.</span>
            </p>
          </div>
        </div>

        {/* Form card */}
        <div id="book" className="relative scroll-mt-28">
          <div className="absolute -inset-3 -z-10 rounded-4xl bg-linear-to-br from-[#54b6ec]/40 via-[#0876b5]/20 to-transparent blur-2xl" />
          <div className="rounded-[1.75rem] bg-white p-6 shadow-2xl shadow-black/40 ring-1 ring-white/20 sm:p-8">
            <div className="mb-6 flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-[#0067ac] to-[#0876b5] text-white shadow-lg shadow-[#0067ac]/30">
                <Image quality={90} src="https://res.cloudinary.com/y8z11z0x/image/upload/v1789452422/tooth-mascot.png" alt="" width={40} height={40} className="h-8 w-8 rounded-md bg-white p-0.5" />
              </span>
              <div>
                <h2 className="text-xl font-bold leading-tight text-[#092b4c] sm:text-2xl">
                  Take the First Step Towards a Healthier Smile
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#38536b]">
                  Tell us about your dental concern. Our team will contact you to help arrange a consultation.
                </p>
              </div>
            </div>
            <LeadForm id="hero-form" source="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
