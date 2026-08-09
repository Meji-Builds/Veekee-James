import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://veekeejamesacademy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Veekee James Fashion Academy: Learn Couture in Lagos & Online",
  description:
    "Luxury fashion education from an award-winning house: sewing, tailoring, couture and the Luxury Fashion Masterclass, in Lagos and online.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Veekee James Fashion Academy",
    description: "Learn couture from an award-winning house, in Lagos and online.",
    url: siteUrl,
    siteName: "Veekee James Fashion Academy",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veekee James Fashion Academy",
    description: "Learn couture from an award-winning house, in Lagos and online.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body className="min-h-screen antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
