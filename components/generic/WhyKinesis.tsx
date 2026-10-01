import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowIcon, CheckIcon } from "./Icons";

const reasons = [
  "With a focus on quality care,",
  "clear guidance and personalized treatment planning,",
  "we aim to provide reliable dental solutions for patients in Kharadi, Pune",
  // "Comfortable and minimally invasive treatment options where clinically appropriate",
  // "Focus on long-term oral health",
  // "Advanced dental technology and techniques",
  // "A range of dental treatment options under one roof",
];

export default function WhyKinesis() {
  return (
    <section className="relative overflow-hidden bg-[#f3f9fd] py-9 sm:py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-0">
          {/* Mobile order: heading → photos → Why Choose list. Desktop: photos left, text right. */}
          <Reveal className="lg:col-start-2 lg:row-start-1 lg:self-end">
            <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#092b4c] sm:text-4xl lg:text-[2.75rem]">
              Your Trusted Partner For <span className="text-[#073576]">Complete Dental Care</span>
            </h2>
            <p className="mt-2 text-[15px] sm:mt-3 sm:text-base lg:text-lg leading-relaxed text-[#38536b]">
              At 32Care Dental Clinic &amp; Implant Center, we focus on creating healthy, confident smiles through
              personalized dental care. Our experienced dental team combines advanced treatment approaches with a
              comfortable and patient-friendly environment. From dental implants, braces, root canal treatments and
              teeth whitening to complete oral care solutions, we help patients understand their dental concerns and
              choose the right treatment options with confidence.
            </p>
          </Reveal>

          {/* Image collage */}
          <Reveal className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative col-span-2 aspect-3/2 overflow-hidden rounded-4xl shadow-2xl shadow-[#052b50]/20">
                <Image quality={90} src="https://res.cloudinary.com/xv3grzfw/image/upload/v1790847811/DSC_2591.jpg" alt="32Care Dental Clinic reception area" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover object-top" />
              </div>
              <div className="relative aspect-3/2 overflow-hidden rounded-3xl shadow-lg shadow-[#052b50]/15">
                <Image quality={90} src="https://res.cloudinary.com/xv3grzfw/image/upload/v1790847805/DSC01914.jpg" alt="Dental treatment room at 32Care Dental Clinic" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-3/2 overflow-hidden rounded-3xl shadow-lg shadow-[#052b50]/15">
                <Image quality={90} src="https://res.cloudinary.com/xv3grzfw/image/upload/v1790847805/DSC_2652.jpg" alt="Patient consultation at 32Care Dental Clinic" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-start-2 lg:row-start-2 lg:self-start">
            <div className="rounded-3xl bg-white p-5 lg:mt-5 shadow-xl shadow-[#052b50]/5 ring-1 ring-[#052b50]/5 sm:p-8">
              <h3 className="flex items-center gap-3 text-lg font-bold text-[#092b4c] sm:text-xl">
                <span className="h-6 w-1.5 rounded-full bg-linear-to-b from-[#54b6ec] to-[#0876b5]" />
                Why Choose 32Care Dental Clinic?
              </h3>
              <ul className="mt-5 grid gap-3.5">
                {reasons.map((r, i) => (
                  <li key={r} className={`flex items-start gap-3 ${i === reasons.length - 1 ? "sm:col-span-2" : ""}`}>
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0876b5] text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-snug text-[#092b4c]/85">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-8 flex justify-center sm:mt-10">
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
