import type { Metadata } from "next";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | 32Care Dental Clinic",
  description: "Thank you for contacting 32Care Dental Clinic.",
};

export default function RootCanalThankYouPage() {
  // Event snippet for LP RCT - Leads conversion page
  return <ThankYouContent homeHref="/root-canal" conversionSendTo="AW-18061336152/XZvICNHV7OQcENi8qKRD" />;
}
