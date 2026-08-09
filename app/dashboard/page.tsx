import type { Metadata } from "next";
import { isAuthenticated, isDashboardConfigured } from "@/lib/auth";
import { getSettings, isSettingsStoreConfigured } from "@/lib/settings";
import { LoginForm } from "@/components/dashboard/LoginForm";
import { DashboardForm } from "@/components/dashboard/DashboardForm";

export const metadata: Metadata = {
  title: "Dashboard: Veekee James Fashion Academy",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const authed = await isAuthenticated();

  if (!authed) {
    return <LoginForm configured={isDashboardConfigured()} />;
  }

  const settings = await getSettings();

  return <DashboardForm initialSettings={settings} storeConfigured={isSettingsStoreConfigured()} />;
}
