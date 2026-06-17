import { Geist_Mono, Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Footer from "@/components/global/footer";
import localFont from "next/font/local";

const ataero = localFont({
  src: "./assets/AtAero-Medium.woff2",
  variable: "--font-ataero-medium",
  weight: "500",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ethical-club.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cybersecurity Club of Softwarica",
    template: "%s | Cybersecurity Club of Softwarica",
  },
  description:
    "Hack to Learn, Learn to Defend — a student-driven community mastering ethical hacking, CTF competitions, and defensive security at Softwarica College of IT & E-Commerce.",
  keywords: [
    "cybersecurity",
    "ethical hacking",
    "CTF",
    "Softwarica College",
    "capture the flag",
    "defensive security",
    "cryptography",
    "student club",
    "Nepal",
    "information security",
  ],
  authors: [{ name: "Cybersecurity Club of Softwarica" }],
  creator: "Cybersecurity Club of Softwarica",
  publisher: "Softwarica College of IT & E-Commerce",
  category: "education",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cybersecurity Club of Softwarica",
    title: "Cybersecurity Club of Softwarica",
    description:
      "Hack to Learn, Learn to Defend — a student-driven community mastering ethical hacking, CTF competitions, and defensive security at Softwarica College of IT & E-Commerce.",
    images: [
      {
        url: "/images/og.webp",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Club of Softwarica — triangular all-seeing eye logo with the tagline Hack to Learn, Learn to Defend on a dark background",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Club of Softwarica",
    description:
      "Hack to Learn, Learn to Defend — ethical hacking, CTF competitions, and defensive security at Softwarica College.",
    images: ["/images/og.webp"],
    creator: "@softwarica_cyb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#2a64e3",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-mono",
        inter.variable,
        interHeading.variable,
        geistMono.variable,
        ataero.variable,
      )}
    >
      <body>
        <ThemeProvider>
          <div className="relative min-h-screen" style={{ background: "#000" }}>
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              style={{ zIndex: 0 }}
              aria-hidden="true"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgb(42 100 227 / 10%) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgb(42 100 227 / 4%) 0%, transparent 50%)",
                }}
              ></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "182px",
                  opacity: 0.15,
                  mixBlendMode: "soft-light",
                }}
              ></div>
            </div>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
