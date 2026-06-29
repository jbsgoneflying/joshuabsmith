import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
});

const siteUrl = "https://joshuabsmith.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Joshua b. Smith | Founder, Operator, Systems Builder",
  description:
    "Joshua b. Smith is a founder, operator, DTC growth strategist, and systems builder working across ecommerce growth, RavenOS, NRGX Labs, InjuryOS, Versefold, AI-assisted operating systems, and founder-led execution.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Joshua b. Smith",
    description:
      "Founder. Operator. Systems Builder. Ecommerce growth, AI-assisted operating systems, product strategy, and founder-led execution.",
    siteName: "Joshua b. Smith",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joshua b. Smith — Founder. Operator. Systems Builder.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua b. Smith",
    description:
      "Founder. Operator. Systems Builder. Ecommerce growth, AI-assisted operating systems, product strategy, and founder-led execution.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
