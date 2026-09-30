export default function SectionHeading({
  title,
  align = "center",
  dark = false,
  intro,
}: {
  title: string;
  align?: "left" | "center";
  dark?: boolean;
  intro?: string;
}) {
  const alignClass = align === "left" ? "text-center sm:text-left" : "text-center";
  const heading = (
    <h2 className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${dark ? "text-white" : "text-[#092b4c]"} ${alignClass}`}>
      {title}
    </h2>
  );

  if (!intro) return heading;

  return (
    <div className={alignClass}>
      {heading}
      <p className={`mx-auto mt-3 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-[#38536b]"} ${align === "left" ? "sm:mx-0" : ""}`}>
        {intro}
      </p>
    </div>
  );
}
