import { Reveal } from "./ui/Reveal";
import { testimonial } from "@/lib/content";

export function Testimonial() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-[960px] px-6 py-24 text-center sm:px-10 sm:py-28">
        <Reveal as="span" className="font-display mb-6 block text-[3.4rem] leading-none text-gold">
          &ldquo;
        </Reveal>
        <Reveal delay={1}>
          <blockquote className="font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-normal italic leading-[1.3]">
            {testimonial.quote}
          </blockquote>
        </Reveal>
        <Reveal delay={2} className="mt-7 text-[0.72rem] uppercase tracking-[0.22em] text-gold">
          {testimonial.who} · {testimonial.detail}
        </Reveal>
      </div>
    </section>
  );
}
