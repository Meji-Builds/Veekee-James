import { Reveal } from "./ui/Reveal";
import { Plate } from "./ui/Plate";
import { LookbookMotif } from "./motifs";
import { lookbook } from "@/lib/content";

const tones = ["rose", "umber", "bronze", "oxblood-deep", "clay", "oxblood"] as const;

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="bg-gradient-to-b from-oyster-2 to-oyster py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal className="max-w-[34em]">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">
            The Lookbook
          </span>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.15rem)] font-medium leading-tight tracking-tight">
            What our students <em className="text-oxblood italic">leave with.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lookbook.map((item, i) => (
            <Reveal key={item.title} delay={((i % 3) === 0 ? undefined : i % 3 === 1 ? 1 : 2)}>
              <Plate
                tone={tones[i % tones.length]}
                aspect="aspect-[3/4]"
                caption={item.title}
                captionSub={item.program}
                interactive
              >
                <LookbookMotif motif={item.motif} className="h-full w-full text-gold-lt/55" />
              </Plate>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
