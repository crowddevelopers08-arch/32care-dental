import Image from "next/image";

const statistics = [
  { value: "18", label: "Years of Experience" },
  { value: "200+", label: "Successful Implant Procedures" },
  { value: "7,000+", label: "Happy Patients" },
  { value: "5⭐", label: "Google Ratings" },
];

export function ImplantAbout() {
  return <section id="about" className="relative overflow-hidden bg-white px-6 py-16 font-['Onest',sans-serif] text-[#092b4c] sm:px-10 lg:px-16 lg:py-20">
    <div className="mx-auto grid max-w-[1650px] grid-cols-[1.02fr_1fr_1.02fr] gap-x-8 gap-y-10 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1">
      <div className="relative row-span-2 min-h-[590px] overflow-hidden rounded-t-[10px] rounded-br-[250px] max-[1050px]:row-span-1 max-[700px]:min-h-[440px] max-[700px]:rounded-br-[180px]">
        <Image src="/Pics for website1/DSC_2638.JPG" alt="Dentist providing comfortable personalised dental treatment" fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 34vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#073576]/5" />
      </div>

      <div className="flex min-h-[430px] flex-col justify-center px-1 max-[1050px]:px-5 max-[700px]:min-h-0 max-[700px]:px-0">
        <span className="inline-flex w-fit rounded-[10px] bg-[#e8f5fc] px-5 py-2 text-[17px] font-bold tracking-[.02em] text-[#073576] uppercase">About the Clinic</span>
        <h2 className="mt-7 max-w-[560px] text-[54px] leading-[1.25] font-semibold tracking-[-1.8px] text-[#092b4c] max-[1250px]:text-[44px] max-[700px]:mt-5 max-[700px]:text-[34px]">Trusted Dental Expertise For Your Smile Restoration</h2>
        <a href="#implant-consultation" className="mt-9 inline-flex min-h-[68px] w-fit items-center justify-center rounded-[10px] bg-[#0876b5] px-8 text-center text-[18px] font-extrabold text-white transition hover:bg-[#073576] max-[700px]:mt-6 max-[700px]:min-h-[54px] max-[700px]:w-full max-[700px]:text-[15px]">Schedule Your Implant Consultation</a>
      </div>

      <div className="relative min-h-[430px] overflow-hidden rounded-[10px] max-[1050px]:col-span-2 max-[1050px]:min-h-[390px] max-[700px]:col-span-1 max-[700px]:min-h-[300px]">
        <Image src="/Pics for website1/DSC_2673.JPG" alt="Experienced dental implant team at 32Care Dental Clinic" fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 100vw, 34vw" className="object-cover object-top" />
        <div className="absolute inset-0 bg-[#0876b5]/5" />
      </div>

      <div className="col-span-2 grid grid-cols-4 divide-x divide-[#c9e6f5] self-end max-[1050px]:col-span-2 max-[1050px]:grid-cols-2 max-[1050px]:divide-x-0 max-[1050px]:gap-y-6 max-[700px]:col-span-1 max-[700px]:grid-cols-1 max-[700px]:divide-y max-[700px]:divide-[#c9e6f5]">
        {statistics.map(stat => <div key={stat.label} className="px-8 py-2 text-center max-[1250px]:px-4 max-[700px]:py-5">
          <strong className="block text-[54px] leading-none font-medium tracking-[-1px] text-[#092b4c] max-[1250px]:text-[44px] max-[700px]:text-[38px]">{stat.value}</strong>
          <span className="mt-3 block text-[18px] text-[#38536b] max-[700px]:text-[15px]">{stat.label}</span>
        </div>)}
      </div>
    </div>

    {/* <svg viewBox="0 0 190 190" className="pointer-events-none absolute bottom-4 left-[5.5%] h-[190px] w-[190px] text-[#0876b5] max-[1050px]:hidden" fill="none" stroke="currentColor" strokeWidth="9" aria-hidden="true">
      <path d="M95 8v174M8 95h174M33 33l124 124M157 33 33 157" />
    </svg> */}

    <a href="#" aria-label="Back to top" className="absolute right-10 bottom-8 grid h-[70px] w-[70px] place-items-center rounded-full border-[3px] border-[#c9e6f5] bg-white text-[#0876b5] transition hover:border-[#0876b5] max-[700px]:right-5 max-[700px]:bottom-5 max-[700px]:h-12 max-[700px]:w-12">
      <svg viewBox="0 0 24 24" className="h-8 w-8 max-[700px]:h-6 max-[700px]:w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m5 15 7-7 7 7" /></svg>
    </a>
  </section>;
}
