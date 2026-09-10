import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { PageFooter } from "@/components/PageFooter";

export const metadata: Metadata = {
  title: "Thank You | 32Care Dental Clinic",
  description: "Thank you for contacting 32Care Dental Clinic.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f3f9fd] font-['Onest',sans-serif] text-[#092b4c]">
      <header className="border-b border-[#dceaf3] bg-white px-4 py-3 sm:px-7 sm:py-4">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-3">
          <Image
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786960421/logo-32.png"
            alt="32Care Dental Clinic and Implant Centre"
            width={658}
            height={279}
            priority
            className="h-auto w-[142px] rounded-md object-contain sm:w-[190px]"
          />
          <a
            href="tel:+919975611589"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#073576] px-3 text-[12px] font-bold text-white transition hover:bg-[#0067ac] sm:h-11 sm:px-5 sm:text-sm"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2a12 12 0 0 0 3.8.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17.3 17.3 0 0 1 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.3 2.2Z" /></svg>
            <span className="hidden min-[390px]:inline">+91 9975611589</span>
            <span className="min-[390px]:hidden">Call</span>
          </a>
        </div>
      </header>

      <section className="relative isolate flex flex-1 items-center overflow-hidden px-4 py-12 sm:px-7 lg:px-12">
        <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 h-80 w-80 rounded-full bg-[#54b6ec]/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-24 -bottom-32 -z-10 h-96 w-96 rounded-full bg-[#0067ac]/15 blur-3xl" />
        <div className="mx-auto w-full max-w-[760px] rounded-[28px] border border-[#d5e8f3] bg-white px-6 py-10 text-center shadow-[0_20px_60px_rgba(7,53,118,.12)] sm:px-12 sm:py-14">
          <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#dff4ff] text-[#0067ac] ring-8 ring-[#eaf8ff]">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4.2 4.2L19 6.5" /></svg>
          </span>
          <p className="mt-7 text-[12px] font-extrabold tracking-[.16em] text-[#0067ac] uppercase">Request received</p>
          <h1 className="mt-2 text-[32px] leading-tight font-extrabold sm:text-[42px]">Thank You For Contacting Us!</h1>
          <p className="mx-auto mt-5 max-w-[570px] text-[16px] leading-[1.7] text-[#38536b] sm:text-[17px]">Your consultation request has been received. Our dental care team will contact you shortly to discuss your needs and help schedule your visit.</p>
          <div className="mx-auto mt-8 max-w-[530px] rounded-2xl bg-[#eaf7ff] px-5 py-4 text-[14px] leading-relaxed text-[#25445e]">For immediate assistance, please call us at <a href="tel:+919975611589" className="font-extrabold text-[#0067ac] underline underline-offset-2">+91 9975611589</a>.</div>
          <p className="mt-8 text-[13px] font-semibold text-[#647b8d]">Taking you back to the site automatically in a few seconds&hellip;</p>
        </div>
      </section>

      <PageFooter />

      <Script
        id="thank-you-auto-return"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `setTimeout(function(){var p=location.pathname,i=p.lastIndexOf('/thank-you');location.replace(i<1?'/':p.slice(0,i));},5000);`,
        }}
      />
    </main>
  );
}
