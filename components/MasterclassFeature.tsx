import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { masterclassIncludes } from "@/lib/content";

export function MasterclassFeature() {
  return (
    <section
      id="masterclass"
      className="relative overflow-hidden bg-gradient-to-br from-oxblood to-oxblood-dker py-24 text-oyster sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 1px, transparent 1px 12px)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold-lt">
            The Signature Programme
          </span>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4vw,3.3rem)] font-medium leading-tight">
            The Veekee James <em className="italic">Luxury Fashion Masterclass</em>
          </h2>
          <p className="mt-6 max-w-[34em] text-[1.05rem] text-oyster/85">
            A hands-on intensive where you design, drape and finish a couture piece alongside
            the house behind some of the country&apos;s most talked-about looks. Seats are
            limited each cohort.
          </p>
          <ul className="mt-9 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {masterclassIncludes.map((item) => (
              <li key={item} className="relative pl-6 text-[0.92rem] text-oyster/90">
                <span className="absolute left-0 top-[0.7em] h-px w-3 bg-gold-lt" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-[0.72rem] uppercase tracking-[0.18em] text-gold-lt">
            Next cohort forming now · In-person, Lagos
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="rounded-3xl border border-gold-lt/50 bg-black/15 p-10 text-center">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-gold-lt">
              Applications
            </div>
            <div className="font-display mt-4 text-[3.2rem] leading-none">Open</div>
            <div className="mb-8 mt-2 text-[0.82rem] uppercase tracking-[0.14em] text-oyster/70">
              Limited seats
            </div>
            <Button href="#admissions" variant="light" className="w-full">
              Register your interest
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
