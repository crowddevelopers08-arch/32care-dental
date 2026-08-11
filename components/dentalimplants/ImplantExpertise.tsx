import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const tileDirections = ["left", "up", "down", "right"] as const;

export function ImplantExpertise() {
  return (
    <section id="doctor" className="scroll-mt-[78px] overflow-hidden px-5 py-14 font-['Onest',sans-serif] sm:px-10 lg:px-10 lg:py-10">
      <div className="mx-auto grid max-w-[1540px] items-center gap-10 max-lg:gap-0 lg:grid-cols-[.94fr_1.06fr] lg:gap-14">
        <div className="relative mx-auto grid w-full max-w-[570px] grid-cols-2 grid-rows-2 gap-x-5 gap-y-5 max-lg:order-4 max-lg:mt-8 max-[620px]:gap-x-3 max-[620px]:gap-y-4">
          <ImageTile src="/Pics for website1/DSC_2566.JPG" alt="A confident patient showing her healthy smile" shape="rounded-full" delay={0} direction={tileDirections[0]} />
          <ImageTile src="/Pics for website1/DSC_2586.JPG" alt="Dentist providing advanced dental care" shape="rounded-br-full rounded-bl-full" delay={100} direction={tileDirections[1]} />
          <ImageTile src="/Pics for website1/DSC_2591.JPG" alt="Modern precision dental treatment" shape="rounded-br-[60%]" delay={200} direction={tileDirections[2]} />
          <ImageTile src="/Pics for website1/DSC_2612.JPG" alt="Comfort-focused family dental consultation" shape="rounded-full" delay={300} direction={tileDirections[3]} />

          <div className="absolute top-1/2 left-1/2 z-10 grid h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 place-items-center max-[620px]:h-[100px] max-[620px]:w-[100px]">
            <div className="animate-spin-slow absolute inset-0 bg-[#c6e5fb] [clip-path:polygon(50%_0%,60%_13%,74%_5%,79%_21%,95%_20%,89%_36%,100%_50%,87%_59%,95%_74%,79%_79%,74%_95%,59%_87%,50%_100%,40%_87%,26%_95%,21%_79%,5%_74%,13%_59%,0%_50%,13%_40%,5%_26%,21%_21%,26%_5%,41%_13%)]" />
            <div className="relative text-center text-[#073576]"><strong className="block text-[21px] leading-none font-extrabold max-[620px]:text-[18px]">5</strong><span className="mt-1.5 block text-[11px] font-semibold tracking-[.06em] text-[#0876b5] max-[620px]:mt-1 max-[620px]:text-[10px]">Ratings</span></div>
          </div>
        </div>

        <div className="max-lg:contents">
          <Reveal direction="down" className="mb-4 max-lg:order-1">
            <SectionLabel align="start">About the Doctor</SectionLabel>
          </Reveal>

          <Reveal delay={100} direction="left" className="mt-1 lg:mt-2 max-lg:order-2">
            <h2 className="max-w-[690px] text-[30px] font-medium tracking-[.2px] text-[#073576] max-[620px]:text-[23px]">Meet The Expert Behind <span className="text-[#0876b5]">Your Confident Smile</span></h2>
          </Reveal>

          <Reveal delay={200} direction="right" className="max-lg:order-3">
            <h3 className="mt-5 text-[21px] leading-tight font-extrabold text-[#092b4c]">Dr. Shital Kawale Dharmadhikari</h3>
            <p className="mt-2 text-[16px] font-bold text-[#0876b5]">B.D.S. Dental Surgeon | Implant &amp; Aesthetic Dentistry Specialist</p>
          </Reveal>

          <Reveal delay={300} direction="left" className="mt-4 max-lg:order-5">
            <div className="grid gap-2">
              <p className="max-w-[740px] text-[15px] leading-[1.55] text-[#38536b]">With over <strong className="font-bold text-[#0876b5]">18 years of experience</strong> in dentistry, <strong className="font-bold text-[#073576]">Dr. Shital Kawale Dharmadhikari</strong> specialises in <strong className="font-bold text-[#0876b5]">Dental Implants, Full Mouth Rehabilitation, Smile Designing, Root Canal Treatments, and Cosmetic Dentistry.</strong></p>
              <p className="max-w-[740px] text-[15px] leading-[1.55] text-[#38536b]">At <strong className="font-bold text-[#073576]">32Care Dental Clinic</strong>, she combines <strong className="font-bold text-[#0876b5]">advanced dental technology</strong> with a personalised approach to provide precise treatment planning and comfortable dental care.</p>
              <p className="max-w-[740px] text-[15px] leading-[1.55] text-[#38536b]">As an active member of the <strong className="font-bold text-[#073576]">Indian Dental Association (IDA)</strong> and <strong className="font-bold text-[#073576]">Indian Society of Oral Implantology (ISOI)</strong>, she is committed to delivering modern dental solutions focused on <strong className="font-bold text-[#0876b5]">healthy, confident smiles.</strong></p>
            </div>
          </Reveal>

          <Reveal delay={400} direction="up" className="mt-6 max-lg:order-6 max-lg:mt-8">
            <a href="#implant-consultation" data-open-consultation-modal className="group relative inline-flex min-h-[60px] items-center overflow-hidden rounded-full border-2 border-[#073576] pl-8 text-[14px] font-bold text-[#073576] transition-colors duration-500 hover:text-white max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:justify-between max-[620px]:pl-4 max-[620px]:text-[11px]">
              <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-[#073576] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 max-[620px]:hidden">BOOK A CONSULTATION WITH DR. SHITAL</span>
              <span className="relative z-10 hidden max-[620px]:inline">Book Your Consultation</span>
              <span className="relative z-10 ml-7 grid h-[58px] w-[58px] place-items-center rounded-full bg-[#073576] text-[27px] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#073576] max-[620px]:ml-2 max-[620px]:h-[52px] max-[620px]:w-[52px] max-[620px]:shrink-0 max-[620px]:text-xl">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ImageTile({ src, alt, shape, delay, direction }: { src: string; alt: string; shape: string; delay: number; direction: "left" | "up" | "down" | "right" }) {
  return (
    <Reveal delay={delay} direction={direction} className={`relative h-[330px] min-w-0 overflow-hidden bg-[#e8f5fc] max-[620px]:h-[220px] ${shape}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 620px) 46vw, 285px" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[#073576]/5" />
    </Reveal>
  );
}
