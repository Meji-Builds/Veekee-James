import { Reveal } from "./ui/Reveal";
import { AdmissionsForm } from "./AdmissionsForm";

export function Admissions({ whatsappNumber }: { whatsappNumber: string }) {
  return (
    <section
      id="admissions"
      className="bg-gradient-to-br from-[#241a17] to-[#160f0d] py-24 text-oyster sm:py-28"
    >
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">
            Admissions
          </span>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1]">
            Take your seat in the <em className="italic">next cohort.</em>
          </h2>
          <p className="mt-5 max-w-[30em] text-oyster/72">
            Tell us where you are and which programme fits. We&apos;ll send dates, fees and
            everything you need to begin, and follow up on WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <AdmissionsForm whatsappNumber={whatsappNumber} />
        </Reveal>
      </div>
    </section>
  );
}
