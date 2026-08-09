import { credibility } from "@/lib/content";

export function CredibilityStrip() {
  return (
    <div className="border-y border-line">
      <div className="mx-auto flex max-w-[1220px] flex-wrap justify-between gap-6 px-6 py-7 sm:px-10">
        {credibility.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 text-[0.74rem] uppercase tracking-[0.16em] text-ink-soft"
          >
            <span className="font-display text-[1.02rem] font-semibold tracking-normal text-ink">
              {item.value}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
