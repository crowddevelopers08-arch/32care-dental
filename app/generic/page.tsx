import AppointmentBanner from "@/components/generic/AppointmentBanner";
import CareApproach from "@/components/generic/CareApproach";
import Faq from "@/components/generic/Faq";
import FloatingActions from "@/components/generic/FloatingActions";
import GreatSmile from "@/components/generic/GreatSmile";
import HealthcareEasy from "@/components/generic/HealthcareEasy";
import Header from "@/components/generic/Header";
import Hero from "@/components/generic/Hero";
import PatientStories from "@/components/generic/PatientStories";
import PatientReviews from "@/components/generic/PatientReviews";
import Treatments from "@/components/generic/Treatments";
import WhyKinesis from "@/components/generic/WhyKinesis";
import { SiteFooter } from "@/components/generic/SiteFooter";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GreatSmile />
        <PatientReviews />
        <PatientStories />
        <Treatments />
        <CareApproach />
        <HealthcareEasy />
        <WhyKinesis />
        <AppointmentBanner />
        <Faq />
        <SiteFooter />
      </main>
      <FloatingActions />
      {/* <MobileBar /> */}
    </>
  );
}
