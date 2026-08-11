"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SectionLabel } from "./SectionLabel";

const field = "mt-1.5 h-[54px] w-full appearance-none rounded-[14px] border-2 border-[#c9e6f5] bg-[#fbfdfe] px-5 text-[15px] font-semibold text-[#11263c] outline-none placeholder:font-medium placeholder:text-[#778493]";

export const OPEN_CONSULTATION_MODAL_EVENT = "open-consultation-modal";

export function openConsultationModal() {
  window.dispatchEvent(new Event(OPEN_CONSULTATION_MODAL_EVENT));
}

export function ConsultationModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const onOpenEvent = () => setOpen(true);
    const onTriggerClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement)?.closest("[data-open-consultation-modal]");
      if (!trigger) return;
      e.preventDefault();
      setOpen(true);
    };
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };

    window.addEventListener(OPEN_CONSULTATION_MODAL_EVENT, onOpenEvent);
    document.addEventListener("click", onTriggerClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener(OPEN_CONSULTATION_MODAL_EVENT, onOpenEvent);
      document.removeEventListener("click", onTriggerClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  const close = () => { setOpen(false); setStatus("idle"); setError(""); };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const concern = String(formData.get("concern") || "").trim();

    if (phone.length !== 10) { setShowPhoneError(true); return; }
    if (!name || !concern) { setStatus("error"); setError("Please fill in your name and dental concern."); return; }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Dental Implant Consultation", name, phone, email: "", concern, pageUrl: window.location.href }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong. Please try again.");

      form.reset();
      setPhone("");
      router.push("/dental-implant/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#092b4c]/60 p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="relative grid max-h-[92vh] w-full max-w-[860px] grid-cols-1 overflow-y-auto rounded-[24px] bg-white shadow-[0_30px_80px_rgba(7,53,118,.35)] lg:grid-cols-2 lg:overflow-hidden">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#073576] shadow transition hover:bg-[#e8f5fc] lg:bg-white/20 lg:text-white lg:hover:bg-white/30"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="m5 5 10 10M15 5 5 15" /></svg>
        </button>

        <div className="px-6 py-8 sm:px-9 sm:py-10">
          <SectionLabel align="start" className="mb-3">Get In Touch</SectionLabel>
          <h2 id="consultation-modal-title" className="text-[24px] leading-tight font-medium tracking-[.2px] text-[#073576] sm:text-[26px]">Book Your Dental Implant <span className="font-bold text-[#0876b5]">Consultation</span></h2>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#38536b]">Share your details and our team will call you back to schedule your visit.</p>

          <form onSubmit={submit} noValidate className="mt-6 grid gap-4">
            <label className="block text-[13px] font-bold text-[#092b4c]">Full Name
              <input name="name" className={field} placeholder="Enter your full name" />
            </label>

            <label className="relative block text-[13px] font-bold text-[#092b4c]">Mobile Number
              <div className={`mt-1.5 flex h-[54px] items-center rounded-[14px] border-2 bg-[#fbfdfe] px-5 ${showPhoneError ? "border-[#d92b2e]" : "border-[#c9e6f5]"}`}>
                <b className="text-[15px] text-[#11263c]">+91</b>
                <input
                  name="phone"
                  className="min-w-0 flex-1 bg-transparent pl-3 text-[15px] font-semibold text-[#11263c] outline-none placeholder:font-medium placeholder:text-[#778493]"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value.replace(/\D/g, "").slice(0, 10)); setShowPhoneError(false); }}
                  inputMode="numeric"
                  placeholder="10-digit number"
                />
              </div>
              {showPhoneError && <small className="mt-1 block text-[12px] font-semibold text-[#dd2929]">Please enter a valid mobile number.</small>}
            </label>

            <label className="block text-[13px] font-bold text-[#092b4c]">Dental Concern
              <select name="concern" className={field} defaultValue="">
                <option value="" disabled>Select your concern</option>
                <option>Single Tooth Implant</option>
                <option>Multiple Missing Teeth</option>
                <option>Full Mouth Rehabilitation</option>
                <option>Loose or Failing Implant</option>
                <option>General Consultation</option>
                <option>Other</option>
              </select>
            </label>

            <button type="submit" disabled={status === "submitting"} className="group relative mt-2 inline-flex h-[54px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#0876b5] text-[15px] font-bold text-white transition hover:bg-[#073576] disabled:cursor-not-allowed disabled:opacity-60">
              {status === "submitting" ? "Sending..." : "Book Your Consultation"}
            </button>
            {status === "error" && error && <p className="text-center text-[13px] font-bold text-[#dd2929]">{error}</p>}
          </form>
        </div>

        <div className="relative hidden min-h-[260px] lg:block">
          <Image src="/Pics for website1/DSC_2673.JPG" alt="Dental specialist at 32Care Dental Clinic" fill sizes="380px" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,53,118,0)_40%,rgba(7,53,118,.65)_100%)]" />
          <div className="absolute inset-x-6 bottom-6 text-white">
            <p className="text-[18px] leading-snug font-bold">18+ Years of Trusted Dental Implant Expertise</p>
            <p className="mt-1 text-[13px] text-[#dceaff]">7,000+ happy patients across Pune</p>
          </div>
        </div>
      </div>
    </div>
  );
}
