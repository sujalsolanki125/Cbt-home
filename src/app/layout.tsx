import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
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
      <body className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
