"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export function LoginForm({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Could not reach the server.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="w-full max-w-sm rounded-3xl border border-gold-lt/30 bg-oxblood-dker/60 p-10">
        <div className="font-display text-center text-[1.1rem] italic text-oyster">
          Veekee James
        </div>
        <div className="mb-8 text-center text-[0.62rem] uppercase tracking-[0.34em] text-gold-lt">
          Content Dashboard
        </div>

        {!configured ? (
          <p className="rounded-xl border border-gold-lt/30 bg-black/20 p-4 text-center text-[0.82rem] text-oyster/80">
            Set a <code className="text-gold-lt">DASHBOARD_PASSWORD</code> environment variable
            to enable sign-in.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label className="mb-2 block text-[0.66rem] uppercase tracking-[0.2em] text-gold-lt">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
                className="w-full rounded-xl border border-oyster/25 bg-transparent px-4 py-3.5 text-[0.95rem] text-oyster focus:border-gold-lt focus:outline-none"
              />
            </div>
            {error ? <p className="text-[0.8rem] text-blush">{error}</p> : null}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-xl border border-oyster bg-oyster px-7 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-oxblood transition-all hover:bg-transparent hover:text-oyster disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
