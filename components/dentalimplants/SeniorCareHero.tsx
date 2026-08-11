import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const benefits = [
  "Expert Implant Consultation",
  "Advanced Dental Technology",
  "Personalised Treatment Plans",
];

export function SeniorCareHero() {
  return (
    <section id="home" className="relative min-h-[865px] scroll-mt-[78px] overflow-hidden border-t border-[#d7e7f1] bg-[#f5fbff] font-['Onest',sans-serif] text-[#092b4c] max-[620px]:min-h-0 lg:h-[calc(100svh-78px)] lg:min-h-[690px] lg:max-h-[790px]">
      <Image
        src="/Pics for website1/DSC_2588.JPG"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center opacity-70 max-[620px]:object-[62%_center] max-[620px]:opacity-60"
        aria-hidden="true"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,251,255,.97)_0%,rgba(245,251,255,.88)_40%,rgba(232,245,252,.3)_68%,rgba(232,245,252,.12)_100%)] max-[620px]:bg-[rgba(245,251,255,.7)]" />
      <div aria-hidden="true" className="absolute -left-[225px] -top-[260px] h-[670px] w-[775px] rounded-full border-[80px] border-[#e8f5fc] max-[620px]:hidden" />
      <div aria-hidden="true" className="absolute -right-[330px] top-[6px] h-[880px] w-[680px] rounded-[50%] bg-[linear-gradient(145deg,rgba(232,245,252,.42)_0%,rgba(248,252,255,.2)_68%)] max-[620px]:hidden" />

      <div className="relative z-10 mx-auto grid min-h-[865px] max-w-[1660px] grid-cols-1 px-6 py-16 max-[620px]:min-h-0 max-[620px]:px-5 max-[620px]:py-10 sm:px-10 lg:h-full lg:min-h-0 lg:grid-cols-[47%_53%] lg:px-12 lg:py-0 xl:px-16">
        <div className="relative z-30 flex flex-col justify-center max-[620px]:contents lg:pb-5">
          <Reveal direction="down" className="mb-4 max-[620px]:order-1 max-[620px]:mb-3 lg:mb-3">
            <SectionLabel align="start">Advanced Implant Care in Pune</SectionLabel>
          </Reveal>

          <Reveal delay={100} direction="left" className="mt-1 max-[620px]:order-2 lg:mt-1">
            <h1 className="max-w-[690px] text-[50px] leading-[1.15] font-medium tracking-[.2px] text-[#073576] max-[620px]:text-[32px] max-[380px]:text-[28px] lg:text-[46px] xl:text-[50px]">
              Restore Your Smile &amp; Confidence With <span className="text-[#0876b5]">Advanced Dental Implants in Pune</span>
            </h1>
          </Reveal>

          <Reveal delay={200} direction="right" className="mt-6 max-[620px]:order-4 max-[620px]:mt-5 lg:mt-5">
            <p className="max-w-[710px] text-[16px] leading-[1.7] text-[#38536b] max-[620px]:text-[15px] max-[620px]:leading-[1.65] sm:text-[18px] lg:text-[15px] lg:leading-[1.6] xl:text-[16px]">
              Our experienced dental specialists provide personalised implant solutions using advanced technology and detailed treatment planning to help you achieve a natural-looking and functional smile.
            </p>
          </Reveal>

          <Reveal delay={300} direction="left" className="mt-6 max-[620px]:order-5 max-[620px]:mt-5 lg:mt-4">
            <div className="max-w-[710px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              <div className="animate-badge-marquee flex w-max [animation-duration:22s]">
                {[false, true].map((duplicate) => (
                  <ul key={String(duplicate)} aria-hidden={duplicate || undefined} className="flex shrink-0 items-center gap-8 pr-8 text-[16px] font-semibold whitespace-nowrap text-[#073576] max-[620px]:gap-5 max-[620px]:pr-5 max-[620px]:text-[14px] sm:text-[17px]">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0876b5] text-white" aria-hidden="true">
                          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m4 10 4 4 8-9" /></svg>
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400} direction="up" className="mt-8 max-[620px]:order-6 max-[620px]:mt-6 lg:mt-5">
            <a href="#consultation-form" data-open-consultation-modal className="group inline-flex min-h-16 w-fit items-center rounded-full bg-[#073576] py-1.5 pl-7 pr-2 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0067ac] max-[620px]:min-h-[60px] max-[620px]:w-full max-[620px]:justify-between max-[620px]:gap-2 max-[620px]:py-1.5 max-[620px]:pr-1.5 max-[620px]:pl-5 sm:text-[15px] lg:min-h-[54px] lg:pl-6 lg:text-[13px]">
              <span className="max-[620px]:hidden">BOOK YOUR DENTAL IMPLANT CONSULTATION</span>
              <span className="hidden whitespace-nowrap text-left text-[11px] leading-none font-bold max-[620px]:block max-[380px]:text-[10px]">BOOK YOUR DENTAL IMPLANT CONSULTATION</span>
              <span className="ml-3 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#54b6ec] transition-transform group-hover:rotate-45 max-[620px]:ml-0 lg:h-11 lg:w-11" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="relative mt-16 min-h-[520px] max-[620px]:order-3 max-[620px]:mt-6 max-[620px]:min-h-[420px] lg:mt-0 lg:min-h-[520px]">
          <span aria-hidden="true" className="absolute left-[66%] top-[6.5%] z-10 text-[82px] font-light leading-none text-[#c9e6f5] max-[620px]:hidden">+</span>

          <Reveal delay={0} direction="left" className="absolute bottom-[5%] left-[5%] top-[6%] w-[58%] overflow-hidden rounded-[48%_48%_48%_48%/32%_32%_32%_32%] bg-white shadow-[0_2px_12px_rgba(7,53,118,.06)] max-[620px]:inset-0 max-[620px]:h-[420px] max-[620px]:w-full max-[620px]:rounded-[30px] max-[620px]:border-4 max-[620px]:border-white">
            <Image src="/Pics for website1/1.jpg" alt="Dental implant specialist at 32Care Dental Clinic in Pune" fill preload sizes="(max-width: 1024px) 70vw, 520px" className="object-cover object-[58%_center]" />
          </Reveal>

          <Reveal delay={150} direction="down" className="absolute -right-[12%] bottom-[4%] top-[19%] w-[43%] overflow-hidden rounded-tl-[48%] bg-white max-[620px]:hidden">
            <Image src="/Pics for website1/DSC_2588.JPG" alt="Dental specialist presenting a natural-looking smile" fill sizes="(max-width: 1024px) 45vw, 390px" className="object-cover object-[50%_center]" />
          </Reveal>

          <Reveal delay={300} direction="right" className="absolute left-[50%] top-[25.5%] z-20 flex min-h-[100px] w-[292px] items-center gap-4 rounded-[13px] bg-white px-5 py-4 shadow-[0_8px_25px_rgba(7,53,118,.08)] max-[620px]:hidden lg:min-h-[88px] lg:w-[260px] lg:gap-3 lg:px-4 lg:py-3 xl:min-h-[100px] xl:w-[292px]">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#c9e6f5] bg-[#e8f5fc] lg:h-14 lg:w-14 xl:h-16 xl:w-16">
              <Image src="/Pics for website1/DSC_2588.JPG" alt="Advanced dental implant technology" fill sizes="64px" className="object-cover object-center" />
            </div>
            <div><strong className="block text-[23px] leading-tight max-[620px]:text-[17px] lg:text-[20px] xl:text-[23px]">Advanced</strong><span className="whitespace-nowrap text-[16px] text-[#858188] max-[620px]:text-[12px] lg:text-[14px] xl:text-[16px]">Dental Technology</span></div>
          </Reveal>

          <Reveal delay={450} direction="up" className="absolute bottom-[4%] left-[-2%] z-20 flex min-h-[108px] w-[315px] items-center gap-4 rounded-[13px] bg-white px-4 py-3 shadow-[0_8px_25px_rgba(7,53,118,.08)] max-[620px]:hidden lg:min-h-[90px] lg:w-[280px] lg:gap-3 lg:py-2 xl:min-h-[108px] xl:w-[315px]">
            <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-full bg-[#dfe7ea] max-[620px]:h-12 max-[620px]:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16">
              <Image src="/Pics for website1/1.jpg" alt="Dental implant specialist" fill sizes="64px" className="object-cover object-[58%_20%]" />
            </div>
            <div><strong className="block whitespace-nowrap text-[22px] leading-tight max-[620px]:text-[18px] lg:text-[20px] xl:text-[22px]">Personalised</strong><span className="whitespace-nowrap text-[16px] text-[#858188] max-[620px]:text-[13px] lg:text-[14px] xl:text-[16px]">Treatment Plans</span></div>
          </Reveal>

          <div aria-hidden="true" className="absolute bottom-[-3%] left-[49%] h-16 w-16 rotate-45 rounded-[18px] border-4 border-[#c9e6f5] opacity-80 max-[620px]:hidden">
            <span className="absolute left-1/2 top-1/2 h-7 w-2 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#c9e6f5]" />
            <span className="absolute left-1/2 top-1/2 h-2 w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#c9e6f5]" />
          </div>
        </div>
      </div>
    </section>
  );
}
