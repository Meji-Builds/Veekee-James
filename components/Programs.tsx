import { Reveal } from "./ui/Reveal";
import { programs } from "@/lib/content";
import type { ProgramOverride } from "@/lib/settings";

export function Programs({
  programOverrides,
}: {
  programOverrides: Record<string, ProgramOverride>;
}) {
  return (
    <section
      id="programs"
      className="bg-gradient-to-b from-oyster to-oyster-2 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal className="max-w-[34em]">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">
            The Curriculum
          </span>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.15rem)] font-medium leading-tight tracking-tight">
            A path from first stitch to <em className="text-oxblood italic">finished collection.</em>
          </h2>
        </Reveal>

        <Reveal
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          delay={1}
        >
          {programs.map((program) => {
            const override = programOverrides[program.title];
            return (
              <div
                key={program.numeral}
                className="group flex flex-col rounded-3xl border border-line bg-oyster/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-oxblood/40 hover:shadow-[0_18px_40px_-20px_rgba(94,31,42,0.35)]"
              >
                <div className="font-display italic text-gold">{program.numeral}</div>
                <h3 className="font-display mt-4 text-[1.4rem] font-medium leading-tight">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9rem] text-ink-soft">{program.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-[0.68rem] uppercase tracking-[0.14em]">
                  <span className="text-oxblood">{override?.level}</span>
                  <span>{override?.duration}</span>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
