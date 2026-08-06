export function SectionLabel({ children, light = false, align = "center" }: { children: React.ReactNode; light?: boolean; align?: "center" | "start" }) {
  return <div className={`flex items-center gap-5 text-[12px] font-bold tracking-[.12em] uppercase max-[620px]:gap-2.5 max-[620px]:tracking-[.09em] ${align === "start" ? "justify-start" : "justify-center"} ${light ? "text-[#8fe0ff]" : "text-[#0067ac]"}`}>
    <PulseDivider reverse light={light} />
    <span className="whitespace-nowrap text-center">{children}</span>
    <PulseDivider light={light} />
  </div>;
}

function PulseDivider({ reverse = false, light = false }: { reverse?: boolean; light?: boolean }) {
  return <span className={`flex w-14 shrink-0 items-center gap-2 max-[620px]:w-10 max-[620px]:gap-1 ${reverse ? "flex-row-reverse" : ""}`} aria-hidden="true">
    <i className={`h-px flex-1 bg-gradient-to-r ${light ? "from-[#8fe0ff]/20 to-[#8fe0ff]" : "from-[#0067ac]/15 to-[#0067ac]"}`} />
    <i className={`relative grid h-4 w-4 shrink-0 place-items-center rounded-full border ${light ? "border-[#8fe0ff]/50" : "border-[#0067ac]/35"}`}>
      <i className={`absolute h-2.5 w-2.5 animate-ping rounded-full motion-reduce:animate-none ${light ? "bg-[#8fe0ff]/45" : "bg-[#0067ac]/40"}`} />
      <i className={`relative h-1.5 w-1.5 rounded-full ${light ? "bg-[#8fe0ff]" : "bg-[#0067ac]"}`} />
    </i>
  </span>;
}
