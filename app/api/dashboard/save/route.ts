import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import {
  SettingsValidationError,
  isSettingsStoreConfigured,
  saveSettings,
  sanitizeSettings,
} from "@/lib/settings";

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  if (!isSettingsStoreConfigured()) {
    return NextResponse.json(
      {
        error:
          "No settings store is configured yet (missing UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN).",
      },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    const settings = sanitizeSettings(body);
    await saveSettings(settings);
    return NextResponse.json({ ok: true, settings });
  } catch (error) {
    if (error instanceof SettingsValidationError) {
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    return NextResponse.json({ error: "Could not save settings." }, { status: 500 });
  }
}
