import type { Metadata } from "next";
import Script from "next/script";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | 32Care Dental Clinic",
  description: "Thank you for contacting 32Care Dental Clinic.",
};

export default function GenericThankYouPage() {
  return (
    <>
      <ThankYouContent homeHref="/generic" conversionSendTo="AW-18061336152/xnK2CJS37eQcENi8qKRD" />
      {/* Event snippet for Generic_Thank_GM conversion page */}
      <Script id="google-ads-conversion-generic-thank-gm">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-18061336152/Oi0ECPfRuowdENi8qKRD'});
        `}
      </Script>
    </>
  );
}
