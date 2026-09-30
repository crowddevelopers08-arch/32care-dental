import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowIcon, CalendarPlusIcon, MailIcon, PhoneIcon } from "./Icons";

export default function AppointmentBanner() {
  return (
    <section>
      <div className="relative w-full overflow-hidden bg-[#0c355e] px-6 sm:px-25">
        {/* background photo fading into the solid banner color */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/y8z11z0x/image/upload/v1789452414/DSC_2643.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0c355e_0%,#0c355e_52%,rgba(12,53,94,.55)_74%,rgba(12,53,94,.18)_100%)]" />
        </div>

        {/* decorative plant silhouette */}
        <svg aria-hidden viewBox="0 0 60 90" className="pointer-events-none absolute bottom-0 right-8 hidden h-20 w-14 text-[#0876b5]/40 sm:block lg:right-16 lg:h-28 lg:w-20">
          <path d="M30 90V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M30 55c0-14-12-20-22-20 0 14 10 22 22 20Z" fill="currentColor" />
          <path d="M30 45c0-16 14-23 24-23 0 16-11 25-24 23Z" fill="currentColor" />
          <path d="M30 65c0-11-9-16-17-16 0 11 8 17 17 16Z" fill="currentColor" />
        </svg>

        {/* decorative tooth */}
        <div aria-hidden className="pointer-events-none absolute right-20 bottom-0 top-0 hidden w-36 opacity-90 sm:block lg:w-52">
          <Image
            src="https://res.cloudinary.com/y8z11z0x/image/upload/v1789452422/tooth-mascot.png"
            alt=""
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4 sm:flex-1">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
              <CalendarPlusIcon className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold text-white sm:text-xl">Ready for a Healthier Smile?</h2>
              <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-white/70">
                Schedule your appointment today and experience dental care you can trust.
              </p>
              <a
                href="#book"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-center text-[12px] font-bold uppercase tracking-wide text-[#0c355e] transition hover:bg-[#e8f5fc] sm:w-auto sm:justify-start sm:px-5 sm:text-[13px]"
              >
                <span className="sm:hidden">Book Now</span>
                <span className="hidden sm:inline">Book Appointment Now</span>
                <ArrowIcon className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div aria-hidden className="hidden h-20 w-px shrink-0 border-l border-dashed border-white/25 sm:block" />

          <div className="flex flex-col gap-3 sm:flex-1">
            <a href={site.phones[0].href} className="flex items-center gap-3 text-white transition hover:text-[#8fe0ff]">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm font-semibold">{site.phones[0].label}</span>
            </a>
            <a href="mailto:32caredentalpune@gmail.com" className="flex items-center gap-3 text-white transition hover:text-[#8fe0ff]">
              <MailIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm font-semibold break-all">32caredentalpune@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}