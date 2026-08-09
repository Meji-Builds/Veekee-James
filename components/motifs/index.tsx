type MotifProps = {
  className?: string;
};

/** Shared stroke styling for the line-art fashion motifs. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GownMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M150 46c-14 0-24 11-24 25 0 10 5 17 5 17s-38 22-46 68c-10 55-14 118-14 168 0 28 35 46 79 46s79-18 79-46c0-50-4-113-14-168-8-46-46-68-46-68s5-7 5-17c0-14-10-25-24-25Z"
      />
      <path {...stroke} d="M126 88c8 10 16 14 24 14s16-4 24-14" opacity=".85" />
      <path
        {...stroke}
        d="M95 220c18 8 37 12 55 12s37-4 55-12"
        opacity=".55"
      />
      <path
        {...stroke}
        d="M85 280c22 10 43 15 65 15s43-5 65-15"
        opacity=".4"
      />
      <path d="M150 155v190" stroke="currentColor" strokeWidth=".6" opacity=".3" strokeDasharray="2 6" />
    </svg>
  );
}

export function MannequinMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <ellipse cx="150" cy="66" rx="30" ry="34" {...stroke} />
      <path
        {...stroke}
        d="M104 122c-10 6-16 18-16 34v96c0 14 9 22 22 22h80c13 0 22-8 22-22v-96c0-16-6-28-16-34"
      />
      <path {...stroke} d="M88 156c-20 6-28 20-28 20" opacity=".7" />
      <path {...stroke} d="M212 156c20 6 28 20 28 20" opacity=".7" />
      <path
        {...stroke}
        d="M96 96c14 40 8 96-30 128"
        opacity=".55"
        strokeDasharray="1 5"
      />
      <circle cx="66" cy="224" r="4" {...stroke} opacity=".55" />
      <path {...stroke} d="M150 178v96" opacity=".35" strokeDasharray="1 5" />
      <path {...stroke} d="M150 300v58" />
      <path {...stroke} d="M118 358h64" />
    </svg>
  );
}

export function CorsetMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M104 92c-8 34-8 58 2 78-14 20-16 46-16 78 0 30 4 60 12 84h96c8-24 12-54 12-84 0-32-2-58-16-78 10-20 10-44 2-78-16 10-32 14-46 14s-30-4-46-14Z"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${112 + i * 18} 108c-4 60-4 130 0 214`}
          stroke="currentColor"
          strokeWidth=".6"
          opacity=".4"
        />
      ))}
      <path
        {...stroke}
        d="M150 108v214"
        strokeDasharray="2 6"
        opacity=".7"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M138 ${120 + i * 32}l24 14M162 ${120 + i * 32}l-24 14`}
          stroke="currentColor"
          strokeWidth=".7"
          opacity=".8"
        />
      ))}
    </svg>
  );
}

export function BlazerMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M150 84 118 104 90 118l-20 40 16 14 8-14v168h112V158l8 14 16-14-20-40-28-14-32-20Z"
      />
      <path {...stroke} d="M118 104 138 168 150 138" opacity=".8" />
      <path {...stroke} d="M182 104 162 168 150 138" opacity=".8" />
      <path {...stroke} d="M150 138v182" opacity=".5" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx="150" cy={200 + i * 34} r="3.2" {...stroke} opacity=".9" />
      ))}
      <path {...stroke} d="M96 210h26M178 210h26" opacity=".5" />
    </svg>
  );
}

export function DrapeMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M128 60c-6 12-6 22 2 32-30 18-52 40-58 78-8 52 4 118 26 186h108c16-60 24-118 16-166-8-48-38-76-64-98 6-10 6-20 0-32Z"
      />
      <path {...stroke} d="M96 190c20-14 30-38 26-62" opacity=".6" />
      <path {...stroke} d="M118 236c26-10 40-36 38-64" opacity=".45" />
      <path {...stroke} d="M140 284c30-8 48-34 48-64" opacity=".35" />
      <path {...stroke} d="M164 330c30-6 50-30 52-58" opacity=".3" />
    </svg>
  );
}

export function AsoebiMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M150 50c-16 8-26 22-26 40 0 8 2 14 2 14s-46 20-58 66c-14 54-16 120-8 186h180c8-66 6-132-8-186-12-46-58-66-58-66s2-6 2-14c0-18-10-32-26-40Z"
      />
      <g opacity=".55">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <path
              key={`${row}-${col}`}
              d={`M${104 + col * 30} ${170 + row * 26}l10 10-10 10-10-10Z`}
              stroke="currentColor"
              strokeWidth=".6"
              fill="none"
            />
          )),
        )}
      </g>
    </svg>
  );
}

export function TwoPieceMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M112 74c-10 8-16 20-16 34 0 10 4 18 4 18l-24 12 8 24 20-8v46h92v-46l20 8 8-24-24-12s4-8 4-18c0-14-6-26-16-34"
      />
      <path {...stroke} d="M124 90c8 8 16 12 26 12s18-4 26-12" opacity=".8" />
      <path
        {...stroke}
        d="M92 210c-6 26-6 52 2 76 6 20 8 40 4 60h108c-4-20-2-40 4-60 8-24 8-50 2-76Z"
      />
      <path {...stroke} d="M92 210c20 10 38 14 58 14s38-4 58-14" opacity=".6" />
      <path {...stroke} d="M150 224v122" opacity=".3" strokeDasharray="2 6" />
    </svg>
  );
}

export function BeadingMotif({ className }: MotifProps) {
  const dots: { cx: number; cy: number }[] = [];
  for (let row = 0; row < 9; row++) {
    const y = 118 + row * 20;
    const inset = Math.abs(row - 4) * 6;
    for (let col = 0; col < 6; col++) {
      const x = 108 + inset + col * ((300 - 216 - inset * 2) / 5);
      dots.push({ cx: x, cy: y });
    }
  }
  return (
    <svg viewBox="0 0 300 400" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M150 70c-18 6-30 20-30 38 0 8 2 14 2 14-26 16-38 42-38 78v116h132V200c0-36-12-62-38-78 0 0 2-6 2-14 0-18-12-32-30-38Z"
      />
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="2.4" fill="currentColor" opacity=".75" />
      ))}
    </svg>
  );
}

export function ThreadNeedleMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M28 92 84 36c4-4 10-4 14 0s4 10 0 14l-9 9"
      />
      <circle cx="90" cy="30" r="6" {...stroke} />
      <path
        {...stroke}
        d="M20 100c6-2 10-6 12-12M14 94c8 2 16-2 20-10"
        opacity=".7"
      />
    </svg>
  );
}

const lookbookMotifs = {
  corset: CorsetMotif,
  tailoring: BlazerMotif,
  drape: DrapeMotif,
  asoebi: AsoebiMotif,
  rtw: TwoPieceMotif,
  beading: BeadingMotif,
};

export type LookbookMotifKey = keyof typeof lookbookMotifs;

export function LookbookMotif({
  motif,
  className,
}: {
  motif: LookbookMotifKey;
  className?: string;
}) {
  const Cmp = lookbookMotifs[motif];
  return <Cmp className={className} />;
}
