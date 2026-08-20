import Image from "next/image";
import { Reveal } from "./Reveal";

const quickLinks = ["About Us", "Root Canal Treatments", "Before & After", "Patient Stories", "FAQ's"];

const posts = [
  { image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040482/03.jpg", title: "Understanding when root canal treatment may be needed", date: "Dental Care Guide" },
  { image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787040484/06.jpg", title: "Caring for your tooth after root canal treatment", date: "Patient Advice" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-[#102532] px-5 pt-12 font-['Onest',sans-serif] text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1315px]">
        <div className="grid items-center max-sm:gap-4 gap-8 pb-6 md:grid-cols-[1fr_1.6fr_1fr]">
          <a href="#" aria-label="32Care Dental Clinic home" className="relative block h-[76px] w-[230px] max-w-full">
            <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786960421/logo-32.png" alt="32Care Dental Clinic" fill sizes="230px" className="object-contain object-left" />
          </a>

          <form className="flex items-center gap-5 max-[620px]:block" action="#">
            <label htmlFor="footer-email" className="shrink-0 text-[16px] font-bold max-[620px]:mb-3 max-[620px]:block">Subscribe:</label>
            <div className="flex h-14 min-w-0 flex-1 overflow-hidden rounded-[5px] bg-white">
              <input id="footer-email" type="email" placeholder="Enter Your Email" aria-label="Email address" className="min-w-0 flex-1 bg-white px-5 text-[14px] text-[#38536b] outline-none placeholder:text-[#647b8d]" />
              <button type="submit" aria-label="Subscribe" className="grid w-[72px] shrink-0 place-items-center bg-[#0067ac] text-white transition hover:bg-[#54b6ec]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="m21.6 2.4-19 8.1c-.9.4-.8 1.7.1 2l7.1 2.3 2.3 7.1c.3.9 1.6 1 2 .1l8.1-19c.3-.8-.5-1.4-1.2-1.1L9.9 13.1l-4.3-1.4 16-9.3Z" /></svg>
              </button>
            </div>
          </form>

          <div className="text-right md:justify-self-end max-[767px]:text-left"><strong className="text-[30px] items-center font-extrabold italic text-[#54b6ec]">7,000+</strong> <span className="text-[14px] font-bold">Happy Patients</span></div>
        </div>

        <div className="h-px bg-white/10" />

        <div className="grid gap-12 max-sm:gap-6 py-6 md:grid-cols-2 lg:grid-cols-[1.15fr_.8fr_1fr_1fr] lg:gap-16">
          <Reveal delay={0}>
            <h2 className="text-[19px] font-extrabold">Find Us</h2>
            <div className="mt-8 max-sm:mt-3 overflow-hidden rounded-[8px] border border-white/10 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13376.657616850724!2d73.956941!3d18.551433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e822bb13d7%3A0x114534f0c1dcb152!2s32Care%20Dental%20Clinic%20In%20Kharadi%20%7C%20Dentist%20in%20Kharadi%2C%20Pune%20%7C%20Dental%20Implants%20%7C%20Braces!5e1!3m2!1sen!2sin!4v1785937628463!5m2!1sen!2sin"
                title="32Care Dental Clinic location in Kharadi, Pune"
                className="h-[230px] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[19px] font-extrabold">Quick Links</h2>
            <nav className="mt-8 max-sm:mt-3 grid max-sm:gap-2 gap-4 text-[13px] text-[#d5e0e7]">
              {quickLinks.map((link) => <a key={link} href={link === "FAQ's" ? "#faqs" : "#"} className="flex items-center gap-3 transition hover:translate-x-1 hover:text-[#54b6ec]"><span className="h-px w-3 bg-[#8fa2ae]" />{link}</a>)}
            </nav>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-[19px] font-extrabold">Dental Updates</h2>
            <div className="mt-8 max-sm:mt-3 grid gap-5">
              {posts.map((post) => <article key={post.title} className="grid grid-cols-[80px_1fr] gap-4">
                <div className="relative h-[74px] overflow-hidden rounded-[5px]"><Image src={post.image} alt="" fill sizes="80px" className="object-cover" /></div>
                <div><h3 className="line-clamp-2 text-[13px] leading-5 font-bold">{post.title}</h3><p className="mt-2 text-[11px] font-bold text-[#54b6ec]">▣ {post.date}</p></div>
              </article>)}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <h2 className="text-[19px] font-extrabold">Contact Us</h2>
            <div className="mt-8 max-sm:mt-3 grid max-sm:gap-1 gap-5 text-[13px] leading-6 text-[#d5e0e7]">
              <ContactRow icon="pin">Zen Square, Office No. 311, 3rd Floor, Sr.No.69/4, Plot B, Panchshil Towers Rd, opp. EON Free Zone Phase 2, Kharadi, Pune, Maharashtra 411014</ContactRow>
              <ContactRow icon="mail">32caredentalpune@gmail.com</ContactRow>
              <ContactRow icon="phone">+91 9975611589</ContactRow>
            </div>
          </Reveal>
        </div>

        <div className="flex min-h-[58px] items-center justify-between max-sm:gap-2 gap-5 border-t border-white/10 text-[12px] text-[#d5e0e7] max-[620px]:flex-col max-[620px]:justify-center max-[620px]:py-5 max-[620px]:text-center">
          <p>32Care Dental Clinic | Caring for healthier smiles</p>
          <a href="/privacy-policy" className="transition hover:text-[#54b6ec]">Privacy Policy</a>
          <p>© {new Date().getFullYear()} 32Care Dental Clinic | <a href="/privacy-policy" className="transition hover:text-[#54b6ec]">Privacy Policy</a> | All Rights Reserved</p>
        </div>
      </div>

    </footer>
  );
}

function ContactRow({ icon, children }: { icon: "pin" | "mail" | "phone"; children: React.ReactNode }) {
  const paths = {
    pin: <><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="9" r="2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></>,
    phone: <><path d="M7 3h4l1 5-3 2c2 4 3 5 7 7l2-3 4 1v4c0 2-2 3-4 2C9 19 5 15 3 7 2 5 4 3 7 3Z"/></>,
  };
  return <div className="flex items-start gap-4"><svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-[#54b6ec]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[icon]}</svg><span>{children}</span></div>;
}
