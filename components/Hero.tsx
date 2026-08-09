import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Plate } from "./ui/Plate";
import { GownMotif } from "./motifs";

export function Hero() {
  return (
    <header id="top" className="pb-24 pt-20 sm:pb-28 sm:pt-24">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">
            Lagos · Established 2018
          </span>
          <h1 className="font-display mt-5 text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[1.03] tracking-tight">
            The art of couture, <em className="text-oxblood italic">taught by hand.</em>
          </h1>
          <p className="mt-6 max-w-[30em] text-[1.08rem] text-ink-soft">
            Train inside the Veekee James house, from your very first stitch to a finished
            couture piece. In person in Lagos, and online wherever you are.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#masterclass">Register for the Masterclass</Button>
            <Button href="#programs" variant="ghost">
              Explore programs
            </Button>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <Plate tone="oxblood-deep" watermark="The House of Veekee James">
            <GownMotif className="h-full w-full text-gold-lt/60" />
          </Plate>
          <div className="relative -mt-16 ml-2 max-w-[80%] rounded-2xl border border-gold/50 bg-oxblood-dker/90 p-5 text-oyster backdrop-blur-sm">
            <div className="text-[0.66rem] uppercase tracking-[0.3em] text-gold-lt">
              The Academy
            </div>
            <div className="font-display mt-2 text-[1.35rem] leading-tight">
              Craft, structure & <em className="italic">a finished collection.</em>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
