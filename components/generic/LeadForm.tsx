"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const field = "mt-1 h-12 w-full appearance-none rounded-xl border-2 border-[#c9e6f5] bg-[#fbfdfe] px-4 text-[15px] font-semibold text-[#092b4c] outline-none placeholder:text-[#778493] focus:border-[#0876b5]";
const label = "block text-sm font-bold text-[#092b4c]";

const concernOptions = ["Root Canal Treatment", "Dental Implants", "General Checkup", "Other"];

export default function LeadForm({ id, source }: { id: string; source: string }) {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const concern = String(formData.get("concern") || "").trim();

    if (phone.length !== 10) { setShowPhoneError(true); return; }
    if (!name || !concern) { setStatus("error"); setError("Please fill in your name and concern."); return; }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Generic Consult", name, phone, email, concern, pageUrl: window.location.href }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong. Please try again.");

      setStatus("success");
      form.reset();
      setPhone("");
      router.push("/generic/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form id={id} data-source={source} onSubmit={submit} noValidate className="grid gap-4">
      <label className={label}>
        Full Name
        <input name="name" className={field} placeholder="Enter your full name" />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={label}>
          Mobile Number
          <div className={`mt-1 flex h-12 items-center rounded-xl border-2 bg-[#fbfdfe] px-4 ${showPhoneError ? "border-[#d92b2e]" : "border-[#c9e6f5]"}`}>
            <b className="text-[#092b4c]">+91</b>
            <input
              name="phone"
              className="min-w-0 flex-1 bg-transparent pl-3 text-[15px] font-semibold text-[#092b4c] outline-none placeholder:text-[#778493]"
              value={phone}
              onChange={(e) => { setPhone(e.target.value.replace(/\D/g, "").slice(0, 10)); setShowPhoneError(false); }}
              inputMode="numeric"
              placeholder="10-digit number"
            />
          </div>
          {showPhoneError && <small className="mt-1 block text-[13px] font-semibold text-[#dd2929]">Please enter a valid 10-digit number.</small>}
        </label>
        <label className={label}>
          Email Address
          <input type="email" name="email" className={field} placeholder="Enter your email address" />
        </label>
      </div>

      <div>
        <span className={label}>What are you looking for?</span>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {concernOptions.map((option) => (
            <label
              key={option}
              className="relative flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-[#c9e6f5] bg-[#fbfdfe] px-4 py-3.5 transition has-[:checked]:border-[#0876b5] has-[:checked]:bg-[#0876b5]"
            >
              <input type="radio" name="concern" value={option} required className="peer sr-only" />
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-[#9fc9e6] peer-checked:border-white">
                <span className="h-2.5 w-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
              </span>
              <span className="text-[14px] leading-tight font-semibold text-[#092b4c] peer-checked:text-white">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 h-12 w-full rounded-full bg-[#0876b5] text-[15px] font-extrabold text-white transition hover:bg-[#073576] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Book Your Consultation"}
      </button>
      {status === "success" && <p className="text-center text-[14px] font-bold text-[#0a8a3f]">Thank you! We&apos;ll call you back shortly.</p>}
      {status === "error" && error && <p className="text-center text-[14px] font-bold text-[#dd2929]">{error}</p>}
    </form>
  );
}
