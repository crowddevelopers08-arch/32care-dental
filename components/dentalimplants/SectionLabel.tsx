export function SectionLabel({ children, light = false, align = "center", className = "" }: { children: React.ReactNode; light?: boolean; align?: "center" | "start"; className?: string }) {
  return (
    <h5 className={`flex items-center gap-3 text-[12px] font-bold tracking-[.12em] uppercase max-[620px]:gap-2 ${align === "start" ? "justify-start" : "mx-auto w-full justify-center"} ${light ? "text-[#8fe0ff]" : "text-[#0067ac]"} ${className}`}>
      <span className="h-px w-8 bg-current opacity-30" />
      <span className="flex items-center gap-1.5 text-inherit">
        <span>◆</span>
        <span className="text-xs opacity-50">✦</span>
      </span>
      <span className="whitespace-nowrap font-medium">{children}</span>
      <span className="flex items-center gap-1.5 text-inherit">
        <span>✦</span>
        <span className="text-xs opacity-50">◆</span>
      </span>
      <span className="h-px w-8 bg-current opacity-30" />
    </h5>
  );
}
