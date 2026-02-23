import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { getEnv } from "@/lib/env";
import "./globals.css";

const siteUrl = "https://www.runaid.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Runaid | AI Running Companion for Strava Users",
  description:
    "Runaid is launching soon. A data companion on top of Strava for serious amateur runners.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.png", rel: "shortcut icon", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Runaid is launching soon",
    description:
      "A chat-first running companion that helps you interpret Strava data and train consistently.",
    type: "website",
    url: siteUrl,
    siteName: "Runaid",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Runaid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Runaid is launching soon",
    description:
      "Built to complement Strava workflows with practical day-to-day coaching guidance.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const env = getEnv();

  return (
    <html lang="en">
      <body>
        {children}
        <footer className="global-footer">
          <p>Contact: {env.CONTACT_EMAIL}</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
