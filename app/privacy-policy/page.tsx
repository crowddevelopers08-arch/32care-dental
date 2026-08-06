import type { Metadata } from "next";
import { PageFooter } from "@/components/PageFooter";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | 32Care Dental Clinic",
  description: "Privacy policy for 32Care Dental Clinic.",
};

const sections = [
  ["Information We Collect", "When you contact us or request a consultation, we may collect your name, phone number, email address, dental concern, preferred branch, and any information you choose to share with us."],
  ["How We Use Your Information", "We use this information to respond to your enquiry, schedule consultations, provide relevant dental-care information, improve our services, and communicate important updates about your request."],
  ["Information Sharing", "We do not sell or rent your personal information. We may share it only with authorised clinic staff and service providers who help us operate our website or deliver requested services, where necessary."],
  ["Data Security", "We take reasonable administrative and technical measures to protect your information. However, no online transmission or storage method can be guaranteed to be completely secure."],
  ["Your Choices", "You may ask us to update, correct, or delete the personal information we hold about you, subject to applicable legal and medical record requirements."],
  ["Contact Us", "For questions about this policy or your personal information, contact 32Care Dental Clinic at 32caredentalpune@gmail.com or +91 9975611589."],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f3f9fd] font-['Onest',sans-serif] text-[#092b4c]">
      <PageHeader />
      <section className="px-4 py-11 sm:px-7 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[900px]">
          <header className="rounded-[24px] bg-[linear-gradient(118deg,#2d78bb_0%,#086cae_54%,#083a75_100%)] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
            <p className="text-[12px] font-extrabold tracking-[.16em] text-[#8fe0ff] uppercase">32Care Dental Clinic</p>
            <h1 className="mt-2 text-[32px] font-extrabold sm:text-[42px]">Privacy Policy</h1>
            <p className="mt-3 text-sm text-[#dceaff]">Last updated: August 2026</p>
          </header>
          <article className="mt-6 rounded-[24px] border border-[#d5e8f3] bg-white px-6 py-8 shadow-[0_16px_42px_rgba(7,53,118,.08)] sm:px-10 sm:py-11">
            <p className="text-[15px] leading-[1.75] text-[#38536b]">32Care Dental Clinic respects your privacy. This policy explains how we collect, use, and protect the personal information you share through this website.</p>
            <div className="mt-8 grid gap-8">
              {sections.map(([title, content], index) => <section key={title} className="border-b border-[#e2edf4] pb-8 last:border-0 last:pb-0">
                <div className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e8f5fc] text-[13px] font-extrabold text-[#0067ac]">{String(index + 1).padStart(2, "0")}</span>
                  <div><h2 className="text-[19px] font-extrabold text-[#092b4c]">{title}</h2><p className="mt-2 text-[15px] leading-[1.75] text-[#38536b]">{content}</p></div>
                </div>
              </section>)}
            </div>
          </article>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
