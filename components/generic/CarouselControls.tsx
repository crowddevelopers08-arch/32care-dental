export function CarouselArrows({ onStep, label }: { onStep: (direction: number) => void; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={() => onStep(-1)} aria-label={`Previous ${label}`} className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#c9e6f5] text-[#0876b5] transition hover:bg-[#e8f5fc]">‹</button>
      <button type="button" onClick={() => onStep(1)} aria-label={`Next ${label}`} className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#c9e6f5] text-[#0876b5] transition hover:bg-[#e8f5fc]">›</button>
    </div>
  );
}

export function CarouselDots({
  count,
  current,
  onGoTo,
  onStep,
  labels,
}: {
  count: number;
  current: number;
  onGoTo: (index: number) => void;
  onStep: (direction: number) => void;
  labels: string[];
}) {
  return (
    <div role="tablist" aria-label="Carousel pagination" className="mt-4 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={current === index}
          aria-label={labels[index] ? `Show ${labels[index]}` : `Show slide ${index + 1}`}
          onClick={() => onGoTo(index)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") onStep(1);
            if (e.key === "ArrowLeft") onStep(-1);
          }}
          className={`h-2.5 rounded-full bg-[#0876b5] transition-all duration-300 ${current === index ? "w-8" : "w-2.5 opacity-30"}`}
        />
      ))}
    </div>
  );
}
