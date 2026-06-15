"use client"

import DitheredLogo from "@/components/global/dithered-logo"

export default function Page() {
  return (
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
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(191, 255, 0, 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(191, 255, 0, 0.04) 0%, transparent 50%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "182px",
            opacity: 0.25,
            mixBlendMode: "soft-light",
          }}
        ></div>
      </div>
      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 lg:pr-[440px]">
        <div className="lg:min-h-[600px]">
          <div className="flex max-w-xl flex-col justify-center gap-6 pt-12 pb-16 lg:gap-8 lg:pt-24">
            <div className="space-y-4 text-pretty">
              <h1
                className="text-4xl leading-[1.1] font-bold tracking-tight text-pretty sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--font-geist-pixel-circle)",
                  color: "var(--page-fg)",
                }}
              >
                Cybersecurity Club{" "}
                <span style={{ color: "var(--page-accent)" }}>
                  of Softwarica
                </span>
              </h1>
            </div>
            <p
              className="text-sm leading-relaxed text-pretty sm:text-base lg:text-lg"
              style={{ color: "var(--page-fg-muted)" }}
            >
              Hack to Learn, Learn to Defend — a student-driven community
              mastering ethical hacking, CTF competitions, and defensive
              security at Softwarica College of IT &amp; E-Commerce.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span
                  className="hidden text-sm font-medium sm:inline"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  Defense
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                <span
                  className="hidden text-sm font-medium sm:inline"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  Ethical Hacking
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
                <span
                  className="hidden text-sm font-medium sm:inline"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  CTF
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span
                  className="hidden text-sm font-medium sm:inline"
                  style={{ color: "var(--page-fg-muted)" }}
                >
                  Cryptography
                </span>
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--page-fg-muted)" }}
              >
                &amp; more
              </span>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:brightness-110"
                style={{
                  backgroundColor: "var(--page-accent)",
                  color: "#000",
                }}
              >
                Join the Club
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors hover:brightness-125"
                style={{
                  border: "1px solid var(--btn-secondary-border)",
                  backgroundColor: "var(--btn-secondary-bg)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  color: "var(--page-fg)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Explore Resources
              </a>
            </div>
            <div>
              <span
                className="rounded px-2 py-1 font-mono text-xs"
                style={{
                  color: "var(--page-fg-muted)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                Ethical · Community · Softwarica College
              </span>
            </div>
          </div>
        </div>
        <DitheredLogo
          imageSrc="/images/logo.webp"
          gridSize={200}
          scale={0.5}
          dotScale={1}
          invert={true}
          cornerRadius={0.2}
          gamma={1.0}
          blur={3.75}
          diffusionStrength={1.0}
          className={"invert absolute -right-1/2 top-1/2 -translate-y-1/2 opacity-20"}
        />
      </section>
    </div>
  )
}
