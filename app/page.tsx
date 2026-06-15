"use client";

import DitheredLogo from "@/components/global/dithered-logo";
import ShinyText from "@/components/global/shiny-text";

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
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgb(42 100 227 / 10%) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgb(42 100 227 / 4%) 0%, transparent 50%)",
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
      <section className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex justify-center pt-10 pb-6 lg:absolute lg:right-12 lg:top-1/2 lg:w-[400px] lg:-translate-y-1/4 lg:justify-center lg:p-0">
          <DitheredLogo
            imageSrc="/images/logo.webp"
            gridSize={400}
            scale={1}
            dotScale={1}
            invert={true}
            cornerRadius={0.2}
            gamma={1.0}
            blur={0}
            diffusionStrength={1.0}
            className="opacity-80 invert scale-60 lg:scale-100"
          />
        </div>

        <div className="lg:pr-[440px]">
          <div className="lg:min-h-[600px]">
            <div className="mx-auto flex max-w-xl flex-col items-center gap-6 pb-16 pt-6 text-center lg:mx-0 lg:items-start lg:gap-8 lg:pt-50 lg:text-left">
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
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:justify-start">
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
              <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
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
        </div>
      </section>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-4 max-w-175">
          <svg
            height="24px"
            width="24px"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#737373">
              <path
                d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
                fill="#737373"
                fillOpacity="0.3"
                stroke="none"
              ></path>
              <path
                d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
                fill="none"
                stroke="#737373"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.5"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col gap-2 text-xs">
            <span>
              <ShinyText
                text="Designed &amp; Made with"
                duration={2}
                delay={1}
              />
              <span className="bg-muted-foreground bg-clip-text text-transparent">
                {" "}❤️
              </span>
            </span>
            <span className="text-muted-foreground">
              © 2026 Cybersecurity Club of Softwarica Nepal..
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
