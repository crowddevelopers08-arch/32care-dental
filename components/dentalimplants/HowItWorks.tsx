import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Underline } from "./Underline";

const directions = ["left", "up", "down", "right"] as const;

const steps = [
  { number: "01", title: "Meet The Dentist", description: "Consult with experienced dental specialists for personalised guidance and comfortable care.", icon: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040384/dental-implants.png", background: "/Pics for website1/DSC_2522.JPG" },
  { number: "02", title: "Dental Consultation", description: "Receive a detailed assessment and customised treatment plan based on your dental needs.", icon: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040385/dental-implants-1.png", background: "/Pics for website1/DSC_2539.JPG" },
  { number: "03", title: "Implant Treatment Procedure", description: "Advanced implant procedures performed with precision, expertise, and patient-focused care.", icon: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040385/dental-implants-2.png", background: "/Pics for website1/DSC02101.JPG" },
  { number: "04", title: "Smile Restoration & Care", description: "Complete your smile transformation with quality restoration and ongoing dental support.", icon: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040385/dental-implants-3.png", background: "/Pics for website1/DSC_2537.JPG" },
];


export function HowItWorks() {
  return <section id="procedure" className="relative mt-8 min-h-[550px] scroll-mt-5 overflow-hidden bg-white font-['Onest',sans-serif] text-[#0a2037]">
    <div className="relative mx-auto max-w-[1500px] px-5 pt-4 sm:px-8 py-10">
      <Reveal className="text-center" direction="left">
        <SectionLabel>Procedure</SectionLabel>
        <h2 className="mx-auto max-w-[950px] text-[30px] font-medium tracking-[.2px] text-[#092b4c] max-[620px]:text-[23px]">
          Your Journey To A{" "}
          <span className="font-bold text-[#0876b5]">Confident Smile Starts Here</span>
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-[72px] max-w-[1190px] max-[900px]:mt-14">
        <svg className="pointer-events-none absolute top-[114px] left-[9%] h-[85px] w-[82%] text-[#54b6ec] max-[900px]:hidden" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M0 55 C95 5 150 100 250 48 S405 10 500 55 S655 95 750 48 S910 8 1000 55" stroke="currentColor" strokeWidth="4" /></svg>
        <div className="relative grid grid-cols-4 gap-[82px] max-[1100px]:gap-8 max-[900px]:grid-cols-2 max-[900px]:gap-x-8 max-[900px]:gap-y-16 max-[560px]:grid-cols-1">
          {steps.map((step,index) => <Reveal as="article" key={step.number} delay={index * 130} direction={directions[index % directions.length]} className="group relative min-h-[236px] rounded-[11px] bg-white px-7 pt-8 pb-6 text-center text-[#0a2037] shadow-[0_12px_24px_rgba(0,28,70,.2)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#e8f5fc] hover:shadow-[0_22px_42px_rgba(0,28,70,.28)]">
            <i aria-hidden="true" className="absolute -top-9 -left-9 z-[5] h-[74px] w-[74px] animate-pulse rounded-full bg-[#0067ac]/65 shadow-[0_0_20px_8px_rgba(84,182,236,.3)] ring-8 ring-[#54b6ec]/15 motion-reduce:animate-none max-[560px]:-left-4" style={{animationDuration:"3.2s",animationDelay:`${index * .8}s`}} />
            <span className="absolute -top-8 -left-8 z-10 grid h-[66px] w-[66px] place-items-center rounded-full border-2 border-[#75c9ee] bg-[#0067ac] text-[34px] font-extrabold text-white shadow-[0_0_0_12px_rgba(84,182,236,.1)] max-[560px]:-left-3">{step.number}</span>
            <Image src={step.background} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[11px] object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[11px] bg-gradient-to-b from-[#052b50]/55 via-[#052b50]/65 to-[#031c36]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-[1] mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8f5fc] ring-1 ring-[#c9e6f5] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0067ac] group-hover:ring-[#54b6ec] group-hover:shadow-[0_8px_20px_rgba(8,118,181,.28)]">
              <span
                aria-hidden="true"
                className="block h-11 w-11 bg-[#0876b5] transition-all duration-[1200ms] ease-in-out group-hover:rotate-[1080deg] group-hover:bg-white"
                style={{
                  WebkitMaskImage: `url(${step.icon})`,
                  maskImage: `url(${step.icon})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </span>
            <h3 className="relative z-[1] mx-auto mt-3 max-w-[210px] text-[17px] leading-tight font-bold transition-colors duration-500 group-hover:text-white">{step.title}</h3>
            <p className="relative z-[1] mx-auto mt-2 max-w-[210px] text-[13px] leading-[1.55] text-[#2b201b] transition-colors duration-500 group-hover:text-white">{step.description}</p>
          </Reveal>)}
        </div>
        <Reveal delay={150} className="mt-10 flex justify-center">
          <a href="#consultation-form" data-open-consultation-modal className="group relative inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#073576] px-9 text-[16px] font-extrabold text-[#073576] transition-all duration-300 hover:-translate-y-1 max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:px-3 max-[620px]:text-[12px]">
            <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-[#073576] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 max-[620px]:hidden transition-colors duration-500 group-hover:text-white">Start Your Implant Journey Today</span>
            <span className="relative z-10 hidden max-[620px]:inline transition-colors duration-500 group-hover:text-white">Start Your Journey</span>
            <span className="relative z-10 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
          </a>
        </Reveal>
      </div>
    </div>
  </section>;
}
