import Image from "next/image";
import { SectionLabel } from "./SectionLabel";

const steps = [
  { number: "01", title: "Meet The Dentist", description: "Consult experienced dental specialists for personalised care and treatment guidance.", icon: "/procedure-icons/meet-dentist.svg", background: "/Pics for website1/DSC_2522.JPG" },
  { number: "02", title: "Dental Evaluation", description: "Get accurate diagnosis and a customised treatment plan for your dental needs.", icon: "/procedure-icons/dental-evaluation.svg", background: "/Pics for website1/DSC_2539.JPG" },
  { number: "03", title: "Advanced Treatment", description: "Experience precise root canal care with modern dental techniques.", icon: "/procedure-icons/advanced-treatment.svg", background: "/Pics for website1/DSC02101.JPG" },
  { number: "04", title: "Restoration & Follow-Up", description: "Restore tooth function with expert aftercare and dental support.", icon: "/procedure-icons/restoration-follow-up.svg", background: "/Pics for website1/DSC_2537.JPG" },
];


export function HowItWorks() {
  return <section id="procedure" className="relative mt-8 min-h-[550px] scroll-mt-5 overflow-hidden bg-white font-['Onest',sans-serif] text-[#0a2037]">
    <div className="relative mx-auto max-w-[1500px] px-5 pt-4 sm:px-8 py-10">
      <div className="text-center">
        <SectionLabel>Procedure</SectionLabel>
        <h2 className="mx-auto mt-1 max-w-[900px] text-[26px] font-medium tracking-[.2px] text-[#092b4c] max-[620px]:text-[23px]">Step-by-Step Care For Restoring <span className="font-bold text-[#0876b5]">Your Natural Tooth</span></h2>
      </div>

      <div className="relative mx-auto mt-[72px] max-w-[1190px] max-[900px]:mt-14">
        <svg className="pointer-events-none absolute top-[114px] left-[9%] h-[85px] w-[82%] text-[#54b6ec] max-[900px]:hidden" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M0 55 C95 5 150 100 250 48 S405 10 500 55 S655 95 750 48 S910 8 1000 55" stroke="currentColor" strokeWidth="4" /></svg>
        <div className="relative grid grid-cols-4 gap-[82px] max-[1100px]:gap-8 max-[900px]:grid-cols-2 max-[900px]:gap-x-8 max-[900px]:gap-y-16 max-[560px]:grid-cols-1">
          {steps.map((step,index) => <article key={step.number} className="group relative min-h-[236px] rounded-[11px] bg-white px-7 pt-8 pb-6 text-center text-[#0a2037] shadow-[0_12px_24px_rgba(0,28,70,.2)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#e8f5fc] hover:shadow-[0_22px_42px_rgba(0,28,70,.28)]">
            <i aria-hidden="true" className="absolute -top-9 -left-9 z-[5] h-[74px] w-[74px] animate-pulse rounded-full bg-[#0876b5]/65 shadow-[0_0_20px_8px_rgba(84,182,236,.3)] ring-8 ring-[#54b6ec]/15 motion-reduce:animate-none max-[560px]:-left-4" style={{animationDuration:"3.2s",animationDelay:`${index * .8}s`}} />
            <span className="absolute -top-8 -left-8 z-10 grid h-[66px] w-[66px] place-items-center rounded-full border-2 border-[#75c9ee] bg-[#0876b5] text-[34px] font-extrabold text-white shadow-[0_0_0_12px_rgba(84,182,236,.1)] max-[560px]:-left-3">{step.number}</span>
            <Image src={step.background} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[11px] object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[11px] bg-gradient-to-b from-[#052b50]/55 via-[#052b50]/65 to-[#031c36]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-[1] mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8f5fc] ring-1 ring-[#c9e6f5] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0876b5] group-hover:ring-[#54b6ec] group-hover:shadow-[0_8px_20px_rgba(8,118,181,.28)]">
              <Image src={step.icon} alt="" width={48} height={48} className="h-11 w-11 object-contain transition-all duration-[1200ms] ease-in-out group-hover:rotate-[1080deg] group-hover:brightness-0 group-hover:invert" />
            </span>
            <h3 className="relative z-[1] mx-auto mt-3 max-w-[210px] text-[17px] leading-tight font-bold transition-colors duration-500 group-hover:text-white">{step.title}</h3>
            <p className="relative z-[1] mx-auto mt-2 max-w-[210px] text-[13px] leading-[1.55] text-[#2b201b] transition-colors duration-500 group-hover:text-white">{step.description}</p>
          </article>)}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#consultation-form" className="group relative inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(110deg,#073576_0%,#0876b5_40%,#54b6ec_58%,#073576_100%)] bg-[length:250%_100%] px-9 text-[16px] font-extrabold text-white shadow-[0_14px_30px_rgba(0,35,90,.35)] ring-2 ring-white/25 [animation:procedure-cta-flow_3.2s_ease-in-out_infinite] transition duration-300 before:absolute before:top-0 before:-left-1/3 before:h-full before:w-1/4 before:bg-white/30 before:blur-sm before:[animation:procedure-cta-shine_3.2s_ease-in-out_infinite] before:content-[''] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,35,90,.5)] motion-reduce:animate-none motion-reduce:before:animate-none max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:px-3 max-[620px]:text-[12px]"><span className="relative z-10 max-[620px]:hidden">Book Your Root Canal Consultation</span><span className="relative z-10 hidden max-[620px]:inline">Book Your Consultation</span><span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span></a>
        </div>
      </div>
    </div>
  </section>;
}
