"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Reveal } from "./Reveal";
import { Underline } from "./Underline";

const Phone = () => <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2a12 12 0 0 0 3.8.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17.3 17.3 0 0 1 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.3 2.2Z" /></svg>;
const navLinks = [['About Doctor','#about-doctor'],['Treatments','#treatments'],['Results','#before-after'],['Procedure','#procedure'],['FAQs','#faqs']];

const field = "mt-0.5 h-[67px] w-full appearance-none rounded-[34px] border-2 border-[#c9e6f5] bg-[#fbfdfe] px-[22px] text-[17px] font-semibold text-[#11263c] outline-none placeholder:text-[#778493] max-[620px]:h-[56px] max-[620px]:rounded-[28px] max-[620px]:px-4 max-[620px]:text-[14px]";

export function DentalHero() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [showError, setShowError] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const concern = String(formData.get("concern") || "").trim();

    if (phone.length !== 10) { setShowError(true); return; }
    if (!name || !concern) { setFormStatus("error"); setFormError("Please fill in your name and dental concern."); return; }

    setFormStatus("submitting");
    setFormError("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Root-Canal-Form", name, phone, email, concern, pageUrl: window.location.href }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong. Please try again.");

      setFormStatus("success");
      form.reset();
      setPhone("");
      router.push("/thank-you");
    } catch (err) {
      setFormStatus("error");
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(118deg,#2d78bb_0%,#086cae_54%,#083a75_100%)] pb-[76px] font-sans text-white max-[620px]:pb-[108px] [@media(min-width:1400px)_and_(max-height:900px)]:min-h-[125vh] [@media(min-width:1400px)_and_(max-height:900px)]:[zoom:.8]">
    <div className="absolute inset-y-0 right-0 left-[59%] bg-[url('https://res.cloudinary.com/x6ec5hqm/image/upload/v1786960421/dental-treatment-hero.png')] bg-cover bg-[center_45%] max-[900px]:left-[42%] max-[900px]:h-[560px] max-[900px]:opacity-40 max-[620px]:left-0 max-[620px]:h-[470px] max-[620px]:bg-[center_top] max-[620px]:opacity-25 before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#086cae_0%,rgba(8,108,174,.82)_18%,rgba(8,82,147,.15)_50%,transparent_72%)]" />
    <div className="absolute z-[1] -top-[365px] -right-[235px] h-[820px] w-[820px] -rotate-[9deg] rounded-full border-[12px] border-[#54b6ec] opacity-90  max-[900px]:hidden" />

    <header className="relative z-[4] mx-auto flex h-[108px] max-w-[1660px] items-start justify-between px-7 py-5 max-[900px]:h-auto max-[900px]:items-center max-[620px]:px-[15px] max-[620px]:py-3">
      <a href="#" className="flex items-center text-white no-underline">
        <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786960421/logo-32.png" alt="32 Care Dental Clinic and Implant Centre" width={658} height={279} priority className="h-auto w-[230px] rounded-lg bg-white object-contain p-1.5 max-[620px]:w-[138px] max-[620px]:rounded-md max-[620px]:p-1" />
      </a>
      <nav className="flex h-[63px] items-center gap-6 whitespace-nowrap text-xl max-[620px]:gap-2">
        {/* <span className="h-px w-20 bg-white/80 max-[1200px]:hidden" /> */}
        {navLinks.map(([label,href]) => <a className="font-bold text-white no-underline transition hover:text-[#8fe0ff] max-[900px]:hidden" href={href} key={href}>{label}</a>)}
        <a className="flex h-[60px] items-center gap-3 rounded-[34px] bg-[#073576] px-[34px] text-[21px] font-bold text-white no-underline max-[900px]:h-12 max-[900px]:px-[18px] max-[900px]:text-base max-[620px]:h-11 max-[620px]:w-11 max-[620px]:justify-center max-[620px]:gap-0 max-[620px]:px-0 max-[620px]:text-[length:0px]" href="tel:+919975611589"><Phone />+91 9975611589</a>
        <button type="button" onClick={() => setMobileNavOpen(open => !open)} aria-label="Toggle navigation menu" aria-expanded={mobileNavOpen} className="hidden h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 max-[900px]:grid max-[620px]:h-11 max-[620px]:w-11">
          <span className="relative h-[18px] w-[22px]" aria-hidden="true">
            <i className={`absolute top-0 left-0 h-0.5 w-full bg-white transition duration-300 ${mobileNavOpen ? "top-2 rotate-45" : ""}`} />
            <i className={`absolute top-2 left-0 h-0.5 w-full bg-white transition duration-300 ${mobileNavOpen ? "opacity-0" : ""}`} />
            <i className={`absolute top-4 left-0 h-0.5 w-full bg-white transition duration-300 ${mobileNavOpen ? "top-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      <div className={`absolute top-full right-[15px] left-[15px] overflow-hidden rounded-[16px] bg-white text-[#092b4c]  transition-all duration-300 min-[901px]:hidden ${mobileNavOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
        <nav className="grid p-3">
          {navLinks.map(([label,href]) => <a key={href} href={href} onClick={() => setMobileNavOpen(false)} className="border-b border-[#dceaf3] px-4 py-3 text-[14px] font-bold transition hover:bg-[#e8f5fc] hover:text-[#0067ac]">{label}</a>)}
        </nav>
        <a href="tel:+919975611589" className="flex items-center justify-center gap-2 bg-[#073576] px-4 py-4 text-[15px] font-extrabold text-white"><Phone />+91 9975611589</a>
      </div>
    </header>

    <div className="relative z-[3] mx-auto mt-[35px] grid max-w-[1660px] grid-cols-[1.25fr_1fr] items-center gap-[60px] px-7 max-[1200px]:grid-cols-2 max-[1200px]:gap-6 max-[900px]:mt-6 max-[900px]:grid-cols-1 max-[620px]:mt-1 max-[620px]:gap-4 max-[620px]:px-[15px]">
      <section className="pt-6 max-[900px]:text-center max-[620px]:contents">
        <Reveal delay={0} direction="down" className="max-[620px]:order-1">
          <div className="mb-5 flex gap-2 max-[900px]:justify-center max-[620px]:mb-0">
            <TrustBadge seal="PDS" text=" Personalised Dental Solutions" />
            <TrustBadge seal="EDC" text=" Expert Dental Care" />
          </div>
        </Reveal>
        <Reveal delay={120} direction="left" className="max-[620px]:order-2">
          <h1 className="m-0 text-[54px] leading-[1.14] font-semibold tracking-[-1.5px] text-[#dceaff] max-[1200px]:text-[42px] max-[620px]:text-center max-[620px]:text-[29px] max-[620px]:leading-[1.18] max-[620px]:tracking-[-.5px]">
            <span className="sr-only">Relieve Tooth Pain and Restore Your Smile With Advanced Root Canal Care in Pune</span>
            <span aria-hidden="true">Relieve Tooth Pain &amp;<br className="max-[620px]:hidden" />Restore Your Smile With <strong className="font-extrabold text-white">Advanced Root Canal <TypeErase text="Care in Pune" /></strong></span>
          </h1>
        </Reveal>
        <Reveal delay={240} direction="right" className="max-[620px]:order-3">
          <p className="mt-[21px] max-w-[800px] text-[23px] leading-[1.56] font-medium max-[1200px]:text-[19px] max-[900px]:mx-auto max-[620px]:mt-0 max-[620px]:text-center max-[620px]:text-[15px] max-[620px]:leading-[1.5]">Experience personalised root canal care designed to preserve your natural tooth and restore confident, comfortable smiles</p>
        </Reveal>
        <Reveal delay={360} direction="left" className="max-[620px]:order-5">
          <div className="mt-6 flex items-center gap-3 text-[20px] font-bold text-white max-[900px]:justify-center max-[620px]:mt-0 max-[620px]:gap-2 max-[620px]:text-[15px]"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-sm font-extrabold text-[#0067ac] max-[620px]:h-6 max-[620px]:w-6 max-[620px]:text-[12px]">✓</span>Advanced Treatment Approach</div>
        </Reveal>
        <Reveal delay={480} direction="up" className="max-[620px]:order-6">
          <a href="#consultation-form" className="group relative mt-6 inline-flex min-h-[60px] items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-white px-8 text-[18px] font-extrabold text-white no-underline transition-all duration-300 hover:-translate-y-1 max-[620px]:mt-0 max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:gap-1.5 max-[620px]:px-3 max-[620px]:text-[12px]">
            <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 whitespace-nowrap transition-colors duration-500 group-hover:text-[#073576]">Book Your Root Canal Consultation</span>
            <span className="relative z-10 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#073576]">→</span>
          </a>
        </Reveal>
        <div className="hidden">
        <h1 className="m-0 text-[64px] leading-[1.16] font-semibold tracking-[-1.5px] text-[#e7f0ff] max-[1200px]:text-5xl max-[620px]:text-[37px]">Hyderabad’s Zero-Pain,<br />Zero-Judgement <strong className="font-extrabold text-white">Root<br className="max-[900px]:hidden" /> Canal Clinic</strong></h1>
        <p className="mt-[21px] max-w-[800px] text-[23px] leading-[1.56] font-medium max-[1200px]:text-[19px] max-[900px]:mx-auto max-[620px]:text-[17px]">Get advanced root canal treatment at <b>Kosmo, Hyderabad’s only smile clinic</b> that combines <b>European-grade technology</b> with a calmer, gentler approach for patients who have been putting off treatment for years.</p>
        </div>
      </section>

      <Reveal direction="right" delay={150} className="w-[655px] max-w-full justify-self-center max-[620px]:order-4">
        <form id="consultation-form" onSubmit={submit} noValidate className="w-full rounded-3xl bg-white px-8 pt-11 pb-[30px] text-[#0a2037]  max-[1200px]:px-6 max-[620px]:rounded-[18px] max-[620px]:px-[14px] max-[620px]:pt-6 max-[620px]:pb-5">
          <div className="mb-10 flex items-center gap-[13px] whitespace-nowrap text-[30px] text-black before:h-px before:min-w-[35px] before:flex-1 before:bg-black after:h-px after:min-w-[35px] after:flex-1 after:bg-black max-[1200px]:text-2xl max-[620px]:mb-6 max-[620px]:gap-2 max-[620px]:whitespace-normal max-[620px]:text-center max-[620px]:text-[18px] max-[620px]:leading-tight max-[620px]:before:min-w-[20px] max-[620px]:after:min-w-[20px]">Skip the Queue get 1:1 Consultation</div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label]:relative [&_label]:text-lg [&_label]:font-bold max-[620px]:grid-cols-1 max-[620px]:gap-y-4 max-[620px]:[&_label]:text-[14px]">
            <label>Full Name<input name="name" className={field} placeholder="Enter your full name" /></label>
            <label>Mobile Number<div className={`mt-0.5 flex h-[67px] items-center rounded-[34px] border-2 bg-[#fbfdfe] px-6 max-[620px]:h-[56px] max-[620px]:rounded-[28px] max-[620px]:px-4 ${showError?'border-[#d92b2e] ':'border-[#c9e6f5]'}`}><b>+91</b><input name="phone" className="min-w-0 flex-1 bg-transparent pl-[17px] text-[17px] font-semibold outline-none placeholder:text-[#778493] max-[620px]:pl-3 max-[620px]:text-[14px]" value={phone} onChange={e=>{setPhone(e.target.value.replace(/\D/g,'').slice(0,10));setShowError(false)}} inputMode="numeric" placeholder="10-digit number" /></div>{showError && <small className="absolute top-full right-0 left-0 mt-2 block text-center text-[15px] text-[#dd2929] max-[620px]:z-10 max-[620px]:mt-1 max-[620px]:text-[11px]">Please enter your mobile number.</small>}</label>
            <label>Email Address<input type="email" name="email" className={field} placeholder="Enter your email address" /></label>
            <label>Dental Concern<select name="concern" className={field} defaultValue=""><option value="" disabled>Select your concern</option><option>Root canal treatment</option><option>Tooth pain</option><option>Other</option></select></label>
          </div>
          <button type="submit" disabled={formStatus === "submitting"} className="group relative mt-6 h-[67px] w-full cursor-pointer overflow-hidden rounded-[34px] border-2 border-[#073576] text-lg font-extrabold text-[#073576] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 max-[620px]:mt-5 max-[620px]:h-[56px] max-[620px]:rounded-[28px] max-[620px]:px-3 max-[620px]:text-[13px] max-[375px]:text-[13px]">
            <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-[#073576] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">{formStatus === "submitting" ? "Sending..." : "BOOK YOUR ROOT CANAL CONSULTATION"}</span>
          </button>
          {formStatus === "success" && <p className="mt-3 text-center text-[14px] font-bold text-[#0a8a3f]">Thank you! We&apos;ll call you back shortly.</p>}
          {formStatus === "error" && formError && <p className="mt-3 text-center text-[14px] font-bold text-[#dd2929]">{formError}</p>}
          <div className="mx-auto mt-6 grid min-h-[143px] w-[540px] max-w-full grid-cols-2 gap-px overflow-hidden rounded-[20px] bg-white/70 text-[#10243a]  max-[620px]:mt-5 max-[620px]:min-h-0 max-[620px]:rounded-[14px]">
            <Stat end={18} suffix=" Years" label="of Experience" />
            <Stat end={6000} suffix="+" label="Successful Root Canal Treatments" />
            <Stat end={7000} suffix="+" label="Happy Patients" />
            <Stat end={5} suffix="⭐" label="Google Ratings" />
          </div>
        </form>
      </Reveal>
    </div>
    <DoubleTreatmentTicker />
  </main>;
}

function TypeErase({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let index = 0;
    let deleting = false;

    const animate = () => {
      setDisplayedText(text.slice(0, index));
      if (!deleting && index < text.length) {
        index += 1;
        timeout = setTimeout(animate, 95);
      } else if (!deleting) {
        deleting = true;
        timeout = setTimeout(animate, 1600);
      } else if (index > 0) {
        index -= 1;
        timeout = setTimeout(animate, 55);
      } else {
        deleting = false;
        timeout = setTimeout(animate, 450);
      }
    };

    animate();
    return () => clearTimeout(timeout);
  }, [text]);

  return <span className="relative inline-grid whitespace-nowrap align-baseline"><span className="invisible">{text}</span><span className="absolute inset-0 inline-flex"><span>{displayedText}</span><span aria-hidden="true" className="ml-0.5 inline-block h-[.95em] w-[2px] animate-pulse bg-current align-[-.08em] motion-reduce:hidden" /></span></span>;
}

function TrustBadge({seal,text,heart=false}:{seal:string;text:string;heart?:boolean}) { return <div className="flex h-[89px] w-[313px] items-center gap-2.5 rounded-[10px] bg-white px-[13px] py-2 text-lg text-[#1865b1] max-[620px]:h-[66px] max-[620px]:min-w-0 max-[620px]:flex-1 max-[620px]:gap-1.5 max-[620px]:p-1.5 max-[620px]:text-[11px] max-[620px]:leading-tight"><span className={`grid h-[68px] basis-[68px] place-items-center rounded-full border-[7px] text-[13px] font-extrabold outline-[3px] outline-dotted max-[620px]:h-[46px] max-[620px]:basis-[46px] max-[620px]:shrink-0 max-[620px]:border-[5px] max-[620px]:text-[10px] ${heart?'border-[#f02736] bg-[#e8fbff] text-[35px] text-[#53c3dc] outline-[#f02736]':'border-[#e72636] text-[#1685bb] outline-[#179ed0]'}`}>{seal}</span><b>{text}</b></div> }
function Stat({end,suffix,label}:{end:number;suffix:string;label:string}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;
    const count = (now:number) => {
      const progress = Math.min((now - startedAt) / 1800, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(count);
    };
    frame = requestAnimationFrame(count);
    return () => cancelAnimationFrame(frame);
  }, [end]);

  return <div className="flex min-h-[92px] flex-col items-center justify-center bg-[#c6e5fb] px-3 py-3 text-center max-[620px]:min-h-[78px] max-[620px]:px-1.5 max-[620px]:py-2">
    <strong className="text-[25px] leading-none font-extrabold text-[#0067ac] max-[620px]:text-xl">{value.toLocaleString("en-IN")}{suffix}</strong>
    <span className="mt-2 text-[14px] leading-tight font-semibold max-[620px]:text-[12px]">{label}</span>
  </div>;
}

const treatments = [
  "Advanced 3D Imaging & Guided Implant Placement",
  "Advanced Diagnostics",
  "Personalized Smile Design Digital Dentistry",
  "Long-Term Results",
  "Comfort-Focused Care",
];

const Check = () => <svg className="h-[13px] w-[13px] fill-[#0067ac]" viewBox="0 0 16 16"><path d="M6.2 12.2 2 8l1.4-1.4 2.8 2.8 6.4-6.4L14 4.4Z" /></svg>;

function DoubleTreatmentTicker() {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    let frame = 0;
    let offset = 0;
    const move = () => {
      const element = track.current;
      if (element && !paused.current) {
        const half = element.scrollWidth / 2;
        offset -= 0.5;
        if (offset <= -half) offset = 0;
        element.style.transform = `translate3d(${offset}px,0,0)`;
      }
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <div onMouseEnter={() => paused.current = true} onMouseLeave={() => paused.current = false} className="absolute inset-x-0 bottom-0 z-[5] flex items-stretch bg-white  max-[620px]:flex-col">
    <div className="flex shrink-0 items-center gap-2 bg-[#0067ac] px-6 py-3 text-[13px] font-extrabold tracking-[.4px] text-white max-[620px]:justify-center max-[620px]:px-4 max-[620px]:py-2">
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#8fe0ff]" />
      WHY CHOOSE 32 CARE
    </div>
    <div className="relative min-w-0 flex-1 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
      <div ref={track} className="flex w-max transform-gpu items-center will-change-transform">
        {[...treatments, ...treatments].map((item, index) => <div className="flex shrink-0 items-center" key={`${item}-${index}`}>
          <span className="mx-3.5 flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-[#0a2037] max-[620px]:text-[13px]">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#dceaf8]"><Check /></span>
            {item}
          </span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-[#b9cfe3]" />
        </div>)}
      </div>
    </div>
  </div>;
}
