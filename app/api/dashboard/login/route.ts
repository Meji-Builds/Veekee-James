import { NextResponse } from "next/server";
import { checkPassword, createSession, isDashboardConfigured } from "@/lib/auth";

export async function POST(request: Request) {
  if (!isDashboardConfigured()) {
    return NextResponse.json(
      { error: "The dashboard has not been configured yet (missing DASHBOARD_PASSWORD)." },
      { status: 500 },
    );
  }

  let password: unknown;
  try {
    const body = await request.json();
    password = body.password;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof password !== "string" || !checkPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  await createSession();
  return NextResponse.json({ ok: true });
}
