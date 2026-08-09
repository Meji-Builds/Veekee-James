"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./ui/Button";
import { programs } from "@/lib/content";

export function AdmissionsForm({ whatsappNumber }: { whatsappNumber: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [program, setProgram] = useState(programs[0].title);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim().length > 1 && contact.trim().length > 3;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    const message = [
      `Hi Veekee James Fashion Academy, I'd like to apply.`,
      `Name: ${name}`,
      `Programme: ${program}`,
      `Contact: ${contact}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-gold-lt/50 p-8 text-center">
        <div className="font-display text-[1.4rem] italic text-oyster">
          Thank you, your interest is in.
        </div>
        <p className="mt-3 text-[0.8rem] tracking-[0.06em] text-gold-lt">
          The Academy team will reach out on WhatsApp shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div>
        <label className="mb-2 block text-[0.66rem] uppercase tracking-[0.2em] text-gold-lt">
          Full name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full rounded-xl border border-oyster/25 bg-transparent px-4 py-3.5 text-[0.95rem] text-oyster placeholder:text-oyster/40 focus:border-gold-lt focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-2 block text-[0.66rem] uppercase tracking-[0.2em] text-gold-lt">
          Email or WhatsApp
        </label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="How we reach you"
          required
          className="w-full rounded-xl border border-oyster/25 bg-transparent px-4 py-3.5 text-[0.95rem] text-oyster placeholder:text-oyster/40 focus:border-gold-lt focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-2 block text-[0.66rem] uppercase tracking-[0.2em] text-gold-lt">
          Programme of interest
        </label>
        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full rounded-xl border border-oyster/25 bg-transparent px-4 py-3.5 text-[0.95rem] text-oyster focus:border-gold-lt focus:outline-none"
        >
          {programs.map((p) => (
            <option key={p.title} value={p.title} className="text-ink">
              {p.title}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" variant="light" disabled={!canSubmit} className="mt-2">
        Apply for admission
      </Button>
    </form>
  );
}
