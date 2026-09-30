import Link from "next/link";
import Script from "next/script";
import { PageFooter } from "@/components/PageFooter";
import { PageHeader } from "@/components/PageHeader";

export function ThankYouContent({ conversionSendTo, homeHref = "/" }: { conversionSendTo: string; homeHref?: string }) {
  return (
    <main className="flex min-h-screen flex-col bg-[#f3f9fd] font-['Onest',sans-serif] text-[#092b4c]">
      {/* Google Ads Conversion Tracking */}
      <Script id={`google-ads-conversion-${conversionSendTo}`}>
        {`
          gtag('event', 'conversion', {'send_to': '${conversionSendTo}'});
        `}
      </Script>

      <PageHeader homeHref={homeHref} />

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
          <Link
            href={homeHref}
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 border-[#0067ac] px-6 text-sm font-bold text-[#0067ac] transition hover:bg-[#0067ac] hover:text-white"
          >
            <span aria-hidden="true">&larr;</span> Back to Home
          </Link>
        </div>
      </section>

      <PageFooter />

    </main>
  );
}
