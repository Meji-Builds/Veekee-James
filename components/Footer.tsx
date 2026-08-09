import Link from "next/link";
import { footerLinks } from "@/lib/content";
import type { SiteSettings } from "@/lib/settings";

export function Footer({ social }: { social: SiteSettings["social"] }) {
  const contactLinks = [
    { label: "WhatsApp", href: "#admissions" },
    { label: "Email", href: `mailto:${social.email}` },
    { label: "Instagram", href: social.instagram },
    { label: "TikTok", href: social.tiktok },
  ];

  return (
    <footer className="bg-ink py-20 text-oyster/70">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-oyster/12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="#top" className="leading-none">
              <b className="font-display block text-[1.32rem] font-semibold tracking-[0.12em] text-oyster">
                VEEKEE JAMES
              </b>
              <small className="mt-1 block text-[0.58rem] uppercase tracking-[0.42em] text-oyster/55">
                Fashion Academy
              </small>
            </Link>
            <p className="mt-5 max-w-[26em] text-[0.9rem]">
              Luxury fashion education from an award-winning house. Learn the craft in Lagos
              or online, and leave with a collection of your own.
            </p>
          </div>

          <FooterColumn title="Programs" links={footerLinks.programs} />
          <FooterColumn title="Academy" links={footerLinks.academy} />
          <FooterColumn title="Contact" links={contactLinks} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-7 text-[0.72rem] tracking-[0.05em] text-oyster/50">
          <span>© 2026 Veekee James Fashion Academy · Lagos, Nigeria</span>
          <span className="text-gold-lt">Website designed by Meji Builds</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="mb-4 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-gold-lt">
        {title}
      </h5>
      <ul className="grid gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-[0.9rem] hover:text-oyster">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
