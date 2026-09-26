import type { Metadata } from "next";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | 32Care Dental Clinic",
  description: "Thank you for contacting 32Care Dental Clinic.",
};

export default function ThankYouPage() {
  return <ThankYouContent conversionSendTo="AW-18061336152/xnK2CJS37eQcENi8qKRD" />;
}
