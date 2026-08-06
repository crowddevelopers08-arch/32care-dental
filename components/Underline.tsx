export function Underline({ children, color = "#0067ac", offset = "-bottom-2", className = "" }: { children: React.ReactNode; color?: string; offset?: "-bottom-1" | "-bottom-2" | "-bottom-3"; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg className={`pointer-events-none absolute ${offset} left-0 w-full`} height="10" viewBox="0 0 260 10" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 7 C 70 2, 190 2, 258 7" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}
