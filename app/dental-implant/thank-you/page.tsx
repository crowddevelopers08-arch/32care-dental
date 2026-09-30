import type { Metadata } from "next";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Dental Implant Consultation Received | 32Care Dental Clinic",
  description: "Your dental implant consultation request has been received by 32Care Dental Clinic in Pune.",
};

export default function DentalImplantThankYouPage() {
  return <ThankYouContent homeHref="/dental-implant" conversionSendTo="AW-18061336152/xnK2CJS37eQcENi8qKRD" />;
}
