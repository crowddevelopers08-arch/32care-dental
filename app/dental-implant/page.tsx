import ServicesGrid from "@/components/dentalimplants/smile-card-service";
import { ImplantExpertise } from "@/components/dentalimplants/ImplantExpertise";
import { MobileActionBar } from "@/components/dentalimplants/MobileActionBar";
import VideoSection from "@/components/dentalimplants/videosection";
import { BeforeAfter } from "@/components/dentalimplants/BeforeAfter";
import { SiteFooter } from "@/components/dentalimplants/SiteFooter";
import { DentalPromo } from "@/components/dentalimplants/DentalPromo";
import { HowItWorks } from "@/components/dentalimplants/HowItWorks";
import { SeniorCareHero } from "@/components/dentalimplants/SeniorCareHero";
import { DentalNavbar } from "@/components/dentalimplants/DentalNavbar";
import { ConsultationModal } from "@/components/dentalimplants/ConsultationModal";
import { VideoPopup } from "@/components/dentalimplants/VideoPopup";

export default function DentalImplantPage() {
  return <>
    <DentalNavbar />
    <SeniorCareHero />
    <BeforeAfter />
    <VideoSection />
    <HowItWorks />
    <ServicesGrid />
    <ImplantExpertise />
    <DentalPromo />
    <SiteFooter />
    <MobileActionBar />
    <ConsultationModal />
    <VideoPopup />
  </>;
}
