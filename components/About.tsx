import { Reveal } from "./ui/Reveal";
import { Plate } from "./ui/Plate";
import { MannequinMotif } from "./motifs";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Plate
            tone="rose"
            aspect="aspect-[3/4]"
            caption="Veekee James"
            captionSub="Founder & Creative Director"
          >
            <MannequinMotif className="h-full w-full text-gold-lt/65" />
          </Plate>
        </Reveal>

        <Reveal delay={1}>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">
            The House
          </span>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.15rem)] font-medium leading-[1.08] tracking-tight">
            From a tailor&apos;s daughter to an{" "}
            <em className="text-oxblood italic">award-winning house.</em>
          </h2>
          <p className="mt-6 max-w-[33em] text-[1.04rem] text-ink-soft">
            Veekee James learned to sew as a child, at her mother&apos;s side, and built that
            beginning into one of Nigeria&apos;s most recognisable luxury fashion houses, and
            an AMVCA Best Designer of the Year.
          </p>
          <p className="mt-5 max-w-[33em] text-[1.04rem] text-ink-soft">
            The Academy exists to pass that craft on: the same techniques, the same standards
            and the same eye, taught directly to the designers coming next. You don&apos;t just
            learn to sew here, you learn to build a house of your own.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
