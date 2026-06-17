import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Footer from "@/components/global/footer";

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
