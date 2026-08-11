export function PageFooter() {
  return (
    <footer className="bg-[#102532] px-5 font-['Onest',sans-serif] sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[58px] max-w-[1315px] items-center justify-between gap-5 border-t border-white/10 text-[12px] text-[#d5e0e7] max-[620px]:flex-col max-[620px]:justify-center max-[620px]:py-5 max-[620px]:text-center">
        <p>32Care Dental Clinic | Caring for healthier smiles</p>
        <a href="/dental-implant/privacy-policy" className="transition hover:text-[#54b6ec]">Privacy Policy</a>
        <p>© {new Date().getFullYear()} 32Care Dental Clinic | <a href="/dental-implant/privacy-policy" className="transition hover:text-[#54b6ec]">Privacy Policy</a> | All Rights Reserved</p>
      </div>
    </footer>
  );
}
