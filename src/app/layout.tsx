import type { Metadata } from "next";
import { Funnel_Display, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Proctera — Coming Soon",
  description:
    "B2B white-label testing infrastructure for coaching institutes. GATE-style CBT platform with student management, live monitoring, and more.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Proctera — Coming Soon",
    description:
      "B2B white-label testing infrastructure for coaching institutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="03096162-5309-4ee7-b642-06e9fe274618"
        />
      </head>
      <body className={`${funnelDisplay.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
