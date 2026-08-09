import { type ReactNode } from "react";

type PlateTone = "oxblood" | "oxblood-deep" | "umber" | "rose" | "clay" | "bronze";

const tones: Record<PlateTone, string> = {
  oxblood: "from-[#7a2c39] via-oxblood to-oxblood-dker",
  "oxblood-deep": "from-oxblood via-oxblood-dk to-oxblood-dker",
  umber: "from-[#8a5a4a] via-[#5a3327] to-[#2c1a14]",
  rose: "from-[#8a4d55] via-[#5c2a34] to-[#2c141a]",
  clay: "from-[#9a7350] via-[#6a4a2f] to-[#33210f]",
  bronze: "from-[#734150] via-[#4a2530] to-[#231018]",
};

export function Plate({
  tone = "oxblood",
  aspect = "aspect-[4/5]",
  watermark,
  caption,
  captionSub,
  children,
  className = "",
  motifClassName = "absolute inset-0 m-auto h-[62%] w-[62%] text-gold-lt/70",
  interactive = false,
}: {
  tone?: PlateTone;
  aspect?: string;
  watermark?: string;
  caption?: string;
  captionSub?: string;
  children?: ReactNode;
  className?: string;
  motifClassName?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-gold/60 bg-gradient-to-br ${tones[tone]} ${aspect} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,.06) 0 1px, transparent 1px 10px)",
        }}
      />
      <div className="pointer-events-none absolute inset-[10px] rounded-[20px] border border-gold-lt/30" />

      {watermark ? (
        <span className="font-display absolute right-1 top-6 z-[2] text-[0.72rem] italic tracking-[0.2em] text-blush/50 [writing-mode:vertical-rl]">
          {watermark}
        </span>
      ) : null}

      <div
        className={
          interactive
            ? "absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
            : "absolute inset-0"
        }
      >
        <div className={motifClassName}>{children}</div>
      </div>

      {caption ? (
        <div className="font-display absolute bottom-5 left-5 z-[2] text-lg italic text-oyster [text-shadow:0_1px_12px_rgba(0,0,0,.45)]">
          {caption}
          {captionSub ? (
            <small className="mt-1 block font-sans text-[0.62rem] not-italic uppercase tracking-[0.24em] text-gold-lt">
              {captionSub}
            </small>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
