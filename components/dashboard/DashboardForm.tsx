"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { SiteSettings } from "@/lib/settings";

const PROGRAM_TITLES = [
  "Foundations of Sewing",
  "Ready-to-Wear & Tailoring",
  "Couture & Corsetry",
  "The Luxury Masterclass",
] as const;

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[0.66rem] uppercase tracking-[0.2em] text-gold-lt">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-oyster/25 bg-transparent px-4 py-3 text-[0.92rem] text-oyster focus:border-gold-lt focus:outline-none";

export function DashboardForm({
  initialSettings,
  storeConfigured,
}: {
  initialSettings: SiteSettings;
  storeConfigured: boolean;
}) {
  const router = useRouter();
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [status, setStatus] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  function updateProgram(title: string, field: "level" | "duration", value: string) {
    setSettings((prev) => ({
      ...prev,
      programs: {
        ...prev.programs,
        [title]: { ...prev.programs[title], [field]: value },
      },
    }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setStatus(null);

    try {
      const res = await fetch("/api/dashboard/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: "err", text: data.error || "Could not save." });
        setSaving(false);
        return;
      }
      setSettings(data.settings);
      setStatus({ type: "ok", text: "Saved. The live site is updated." });
    } catch {
      setStatus({ type: "err", text: "Could not reach the server." });
    }
    setSaving(false);
  }

  async function handleLogout() {
    await fetch("/api/dashboard/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-ink py-16 text-oyster">
      <div className="mx-auto max-w-[760px] px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="font-display text-[1.3rem] italic">Veekee James</div>
            <div className="text-[0.62rem] uppercase tracking-[0.34em] text-gold-lt">
              Content Dashboard
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-xl border border-oyster/25 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.14em] text-oyster/80 hover:border-oyster hover:text-oyster"
          >
            Log out
          </button>
        </div>

        {!storeConfigured ? (
          <p className="mb-8 rounded-xl border border-gold-lt/30 bg-black/20 p-4 text-[0.82rem] text-oyster/80">
            No settings store is connected yet, so changes here won&apos;t persist. Add{" "}
            <code className="text-gold-lt">UPSTASH_REDIS_REST_URL</code> and{" "}
            <code className="text-gold-lt">UPSTASH_REDIS_REST_TOKEN</code> as environment
            variables, then redeploy.
          </p>
        ) : null}

        <form onSubmit={handleSubmit} className="grid gap-10">
          <section className="grid gap-4 rounded-3xl border border-oyster/12 p-7">
            <h2 className="font-display text-[1.15rem] italic text-gold-lt">Contact</h2>
            <Field label="WhatsApp number (digits only, country code first)">
              <input
                type="text"
                value={settings.whatsappNumber}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, whatsappNumber: e.target.value }))
                }
                placeholder="2348012345678"
                className={inputClass}
              />
            </Field>
            <Field label="Contact email">
              <input
                type="email"
                value={settings.social.email}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    social: { ...prev.social, email: e.target.value },
                  }))
                }
                className={inputClass}
              />
            </Field>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Instagram URL">
                <input
                  type="text"
                  value={settings.social.instagram}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      social: { ...prev.social, instagram: e.target.value },
                    }))
                  }
                  className={inputClass}
                />
              </Field>
              <Field label="TikTok URL">
                <input
                  type="text"
                  value={settings.social.tiktok}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      social: { ...prev.social, tiktok: e.target.value },
                    }))
                  }
                  className={inputClass}
                />
              </Field>
            </div>
          </section>

          <section className="grid gap-4 rounded-3xl border border-oyster/12 p-7">
            <h2 className="font-display text-[1.15rem] italic text-gold-lt">
              Credibility strip
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Established year">
                <input
                  type="text"
                  value={settings.establishedYear}
                  onChange={(e) =>
                    setSettings((prev) => ({ ...prev, establishedYear: e.target.value }))
                  }
                  placeholder="2018"
                  className={inputClass}
                />
              </Field>
              <Field label="Students trained">
                <input
                  type="text"
                  value={settings.studentsTrained}
                  onChange={(e) =>
                    setSettings((prev) => ({ ...prev, studentsTrained: e.target.value }))
                  }
                  placeholder="1,000+"
                  className={inputClass}
                />
              </Field>
            </div>
          </section>

          <section className="grid gap-5 rounded-3xl border border-oyster/12 p-7">
            <h2 className="font-display text-[1.15rem] italic text-gold-lt">Programs</h2>
            {PROGRAM_TITLES.map((title) => (
              <div key={title} className="grid gap-3 border-t border-oyster/10 pt-4 first:border-none first:pt-0">
                <div className="text-[0.88rem]">{title}</div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Level">
                    <input
                      type="text"
                      value={settings.programs[title]?.level ?? ""}
                      onChange={(e) => updateProgram(title, "level", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Duration">
                    <input
                      type="text"
                      value={settings.programs[title]?.duration ?? ""}
                      onChange={(e) => updateProgram(title, "duration", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              </div>
            ))}
          </section>

          <section className="grid gap-4 rounded-3xl border border-oyster/12 p-7">
            <h2 className="font-display text-[1.15rem] italic text-gold-lt">Testimonial</h2>
            <Field label="Quote">
              <textarea
                value={settings.testimonial.quote}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    testimonial: { ...prev.testimonial, quote: e.target.value },
                  }))
                }
                rows={3}
                className={inputClass}
              />
            </Field>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  type="text"
                  value={settings.testimonial.who}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      testimonial: { ...prev.testimonial, who: e.target.value },
                    }))
                  }
                  className={inputClass}
                />
              </Field>
              <Field label="Detail">
                <input
                  type="text"
                  value={settings.testimonial.detail}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      testimonial: { ...prev.testimonial, detail: e.target.value },
                    }))
                  }
                  className={inputClass}
                />
              </Field>
            </div>
          </section>

          <div className="flex items-center gap-5">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center rounded-xl border border-oyster bg-oyster px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-oxblood transition-all hover:bg-transparent hover:text-oyster disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
            {status ? (
              <span
                className={`text-[0.82rem] ${status.type === "ok" ? "text-gold-lt" : "text-blush"}`}
              >
                {status.text}
              </span>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
