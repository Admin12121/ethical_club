"use client"

import {
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
  type Ref,
} from "react"
import Image from "next/image"
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { TransitionRouter } from "next-transition-router"

import { cn } from "@/lib/utils"

gsap.registerPlugin(CustomEase)

CustomEase.create("route-transition-hop", "0.9, 0, 0.1, 1")

type TransitionProviderProps = {
  children: ReactNode
}

const FULL_CLIP = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
const LEFT_EDGE_CLIP = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"

const BACKDROP_Z_INDEX = 2147482999
const PAGE_Z_INDEX = 2147483001
const CHROME_Z_INDEX = 2147483002
const REVEALER_Z_INDEX = 2147483003

const BACKDROP_ROWS = [
  [
    [
      "RED//204 Payload Trace",
      "BLUE//313 Defence Drift",
      "PWN//404 Exploit Chain",
      "DFIR//512 Memory Timeline",
      "SOC//1337 Alert Pulse",
    ],
    ["Zone / Attack Surface", "0x392 IOC 008923"],
    ["Mode / Static Analysis", "Status / Defence Online"],
    "logo",
    [":::red::blue::pwn::dfir::soc:::"],
  ],
  [
    ["Threat Hunting"],
    ["// / recon / exploit / detect / contain / //"],
    ["Signal Spike > 17%"],
    ["ROP Chain Staged", "Rule Set Emerging"],
    ["Containment Pending", "Return -- SIEM View"],
    ["CVE-9"],
  ],
] as const

type TransitionRefs = {
  backdrop: HTMLDivElement
  chrome: HTMLDivElement
  content: HTMLDivElement
  labelLine: HTMLSpanElement
  outroLine: HTMLSpanElement
  page: HTMLDivElement
  progress: SVGCircleElement
  revealer: HTMLDivElement
  svg: SVGSVGElement
  track: SVGCircleElement
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function RouteLine({
  children,
  lineRef,
}: {
  children: string
  lineRef?: Ref<HTMLSpanElement>
}) {
  return (
    <span className="inline-block overflow-hidden align-top">
      <span ref={lineRef} className="block will-change-transform">
        {children}
      </span>
    </span>
  )
}

function TransitionBackdrop() {
  return (
    <>
      {BACKDROP_ROWS.map((row, rowIndex) => (
        <div
          key={`route-backdrop-row-${rowIndex}`}
          className={cn(
            "flex w-full justify-between p-6",
            rowIndex === 1 && "items-end",
          )}
        >
          {row.map((column, columnIndex) => (
            <div
              key={`route-backdrop-row-${rowIndex}-col-${columnIndex}`}
              className={cn(
                "flex flex-col gap-1",
                rowIndex === 0 &&
                  (columnIndex === 0 ||
                    columnIndex === 1 ||
                    columnIndex === 4) &&
                  "hidden md:flex",
              )}
            >
              {column === "logo" ? (
                <div className="h-10 w-10 border border-dashed border-[#7a7a7a] p-1">
                  <Image
                    src="/images/ethical.png"
                    alt="Cybersecurity Club of Softwarica"
                    width={40}
                    height={40}
                    sizes="40px"
                    className="h-full w-full object-contain rounded-md dark:rounded-none"
                  />
                </div>
              ) : (
                column.map((line, lineIndex) => (
                  <p
                    key={`route-backdrop-line-${rowIndex}-${columnIndex}-${lineIndex}`}
                  >
                    {line}
                  </p>
                ))
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

function TransitionChrome({
  labelLineRef,
  outroLineRef,
  progressRef,
  svgRef,
  trackRef,
}: {
  labelLineRef: Ref<HTMLSpanElement>
  outroLineRef: Ref<HTMLSpanElement>
  progressRef: Ref<SVGCircleElement>
  svgRef: Ref<SVGSVGElement>
  trackRef: Ref<SVGCircleElement>
}) {
  return (
    <>
      <div className="flex w-full justify-between p-6">
        <p>
          <RouteLine>Booting Cyber Range</RouteLine>
        </p>
      </div>

      <div className="flex w-full justify-between p-6">
        <div className="flex items-end gap-24">
          <div className="flex flex-col gap-1">
            <p>
              <RouteLine>Phase 01</RouteLine>
            </p>
            <p>
              <RouteLine>Target Mapping</RouteLine>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p>
              <RouteLine>Defence Sync</RouteLine>
            </p>
            <p>
              <RouteLine>12 Rules Loaded</RouteLine>
            </p>
          </div>
        </div>

        <div className="flex items-end gap-24">
          <p>
            <RouteLine>RED-24</RouteLine>
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2">
        <p className="absolute top-1/2 left-1/2 min-w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[0.9rem]">
          <RouteLine lineRef={labelLineRef}>Engage</RouteLine>
        </p>
        <p className="absolute top-1/2 left-1/2 min-w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[0.9rem]">
          <RouteLine lineRef={outroLineRef}>Cybersecurity Club of Softwarica</RouteLine>
        </p>

        <div className="absolute inset-0">
          <svg
            ref={svgRef}
            viewBox="0 0 320 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full will-change-transform"
          >
            <circle
              ref={trackRef}
              cx="160"
              cy="160"
              r="155"
              stroke="#2b2b2b"
              strokeWidth="2"
            />
            <circle
              ref={progressRef}
              cx="160"
              cy="160"
              r="155"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default function TransitionProvider({ children }: TransitionProviderProps) {
  const pageRef = useRef<HTMLDivElement | null>(null)
  const pageContentRef = useRef<HTMLDivElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const chromeRef = useRef<HTMLDivElement | null>(null)
  const revealerRef = useRef<HTMLDivElement | null>(null)
  const labelLineRef = useRef<HTMLSpanElement | null>(null)
  const outroLineRef = useRef<HTMLSpanElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const trackRef = useRef<SVGCircleElement | null>(null)
  const progressRef = useRef<SVGCircleElement | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const isTransitionActiveRef = useRef(false)
  const scrollLockRef = useRef<{
    bodyOverflow: string
    htmlOverflow: string
  } | null>(null)

  const getRefs = useCallback((): TransitionRefs | null => {
    const page = pageRef.current
    const content = pageContentRef.current
    const backdrop = backdropRef.current
    const chrome = chromeRef.current
    const revealer = revealerRef.current
    const labelLine = labelLineRef.current
    const outroLine = outroLineRef.current
    const svg = svgRef.current
    const track = trackRef.current
    const progress = progressRef.current

    if (
      !page ||
      !content ||
      !backdrop ||
      !chrome ||
      !revealer ||
      !labelLine ||
      !outroLine ||
      !svg ||
      !track ||
      !progress
    ) {
      return null
    }

    return {
      backdrop,
      chrome,
      content,
      labelLine,
      outroLine,
      page,
      progress,
      revealer,
      svg,
      track,
    }
  }, [])

  const lockScroll = useCallback(() => {
    if (scrollLockRef.current) {
      return
    }

    scrollLockRef.current = {
      bodyOverflow: document.body.style.overflow,
      htmlOverflow: document.documentElement.style.overflow,
    }
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
  }, [])

  const unlockScroll = useCallback(() => {
    const scrollLock = scrollLockRef.current

    if (!scrollLock) {
      return
    }

    document.body.style.overflow = scrollLock.bodyOverflow
    document.documentElement.style.overflow = scrollLock.htmlOverflow
    scrollLockRef.current = null
  }, [])

  const setPageShell = useCallback((page: HTMLDivElement) => {
    gsap.set(page, {
      clipPath: FULL_CLIP,
      height: "100svh",
      inset: 0,
      isolation: "isolate",
      overflow: "hidden",
      position: "fixed",
      scale: 1,
      transformOrigin: "50% 50%",
      width: "100%",
      willChange: "transform, clip-path",
      zIndex: PAGE_Z_INDEX,
    })
  }, [])

  const resetTransition = useCallback(() => {
    const refs = getRefs()

    timelineRef.current?.kill()
    timelineRef.current = null
    isTransitionActiveRef.current = false
    unlockScroll()

    if (!refs) {
      return
    }

    gsap.set(refs.page, {
      clearProps:
        "clipPath,height,inset,isolation,overflow,position,transform,width,willChange,zIndex",
    })
    gsap.set(refs.content, {
      clearProps: "transform,willChange",
    })
    gsap.set(refs.chrome, {
      autoAlpha: 0,
      clearProps: "clipPath,transform,willChange",
      display: "none",
    })
    gsap.set(refs.backdrop, {
      autoAlpha: 0,
      display: "none",
    })
    gsap.set(refs.revealer, {
      autoAlpha: 0,
      clipPath: FULL_CLIP,
      display: "none",
    })
  }, [getRefs, unlockScroll])

  const handleLeave = useCallback(
    (next: () => void) => {
      if (prefersReducedMotion()) {
        next()
        return
      }

      const refs = getRefs()

      if (!refs) {
        next()
        return
      }

      const scrollY = window.scrollY
      const pathLength = refs.track.getTotalLength()

      timelineRef.current?.kill()
      isTransitionActiveRef.current = true
      lockScroll()

      gsap.set(refs.backdrop, {
        autoAlpha: 1,
        display: "flex",
      })
      gsap.set(refs.page, {
        clipPath: FULL_CLIP,
        height: "100svh",
        inset: 0,
        isolation: "isolate",
        overflow: "hidden",
        position: "fixed",
        scale: 1,
        transformOrigin: "50% 50%",
        width: "100%",
        willChange: "transform",
        zIndex: PAGE_Z_INDEX,
      })
      gsap.set(refs.content, {
        y: -scrollY,
        willChange: "transform",
      })
      gsap.set(refs.chrome, {
        autoAlpha: 1,
        clipPath: FULL_CLIP,
        display: "flex",
        scale: 1,
        transformOrigin: "50% 50%",
        willChange: "transform, clip-path",
      })
      gsap.set(refs.revealer, {
        autoAlpha: 0,
        clipPath: FULL_CLIP,
        display: "none",
      })
      gsap.set(refs.labelLine, { y: "0%" })
      gsap.set(refs.outroLine, { y: "100%" })
      gsap.set(refs.svg, {
        rotate: 270,
        transformOrigin: "50% 50%",
      })
      gsap.set([refs.track, refs.progress], {
        strokeDasharray: pathLength,
        strokeDashoffset: 0,
      })

      const timeline = gsap.timeline({
        onComplete: () => {
          timelineRef.current = null
          next()
        },
      })

      timelineRef.current = timeline
      timeline
        .to([refs.page, refs.chrome], {
          scale: 0.75,
          duration: 1.25,
          ease: "route-transition-hop",
        })
        .to(
          [refs.track, refs.progress],
          {
            strokeDashoffset: -pathLength,
            duration: 1.25,
            ease: "route-transition-hop",
          },
          "<",
        )
        .to(
          refs.labelLine,
          {
            y: "-100%",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=1.25",
        )
        .to(
          refs.outroLine,
          {
            y: "0%",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.75",
        )

      return () => {
        timeline.kill()
      }
    },
    [getRefs, lockScroll],
  )

  const handleEnter = useCallback(
    (next: () => void) => {
      const refs = getRefs()

      if (prefersReducedMotion() || !refs || !isTransitionActiveRef.current) {
        resetTransition()
        next()
        return
      }

      timelineRef.current?.kill()
      setPageShell(refs.page)

      gsap.set(refs.page, {
        scale: 0.75,
      })
      gsap.set(refs.content, {
        y: 0,
        willChange: "transform",
      })
      gsap.set(refs.backdrop, {
        autoAlpha: 1,
        display: "flex",
      })
      gsap.set(refs.chrome, {
        autoAlpha: 1,
        clipPath: FULL_CLIP,
        display: "flex",
        scale: 0.75,
        transformOrigin: "50% 50%",
        willChange: "transform, clip-path",
      })
      gsap.set(refs.revealer, {
        autoAlpha: 1,
        clipPath: FULL_CLIP,
        display: "block",
      })

      const timeline = gsap.timeline({
        onComplete: () => {
          resetTransition()
          next()
        },
      })

      timelineRef.current = timeline
      timeline
        .to(refs.chrome, {
          clipPath: LEFT_EDGE_CLIP,
          duration: 1.5,
          ease: "route-transition-hop",
        })
        .to(
          refs.revealer,
          {
            clipPath: LEFT_EDGE_CLIP,
            duration: 1.5,
            ease: "route-transition-hop",
            onComplete: () => {
              gsap.set(refs.chrome, { display: "none" })
            },
          },
          "-=1.45",
        )
        .to(refs.page, {
          scale: 1,
          duration: 1.25,
          ease: "route-transition-hop",
        })

      return () => {
        timeline.kill()
      }
    },
    [getRefs, resetTransition, setPageShell],
  )

  useEffect(() => {
    return () => {
      resetTransition()
    }
  }, [resetTransition])

  return (
    <TransitionRouter auto enter={handleEnter} leave={handleLeave}>
      <div ref={pageRef} data-route-transition-page="">
        <div ref={pageContentRef} data-route-transition-content="">
          {children}
        </div>

        <div
          ref={revealerRef}
          data-route-transition-revealer=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-white opacity-0 will-change-[clip-path]"
          style={{
            clipPath: FULL_CLIP,
            zIndex: REVEALER_Z_INDEX,
          }}
        />
      </div>

      <div
        ref={backdropRef}
        data-route-transition-backdrop=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden h-[100svh] w-full flex-col justify-between bg-white text-[#7a7a7a] opacity-0"
        style={{ zIndex: BACKDROP_Z_INDEX }}
      >
        <div className="font-preloader-mono text-xs leading-none font-medium uppercase">
          <TransitionBackdrop />
        </div>
      </div>

      <div
        ref={chromeRef}
        data-route-transition-chrome=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden h-[100svh] w-full flex-col justify-between bg-black text-white opacity-0"
        style={{ zIndex: CHROME_Z_INDEX }}
      >
        <div className="font-preloader-mono text-xs leading-none font-medium uppercase">
          <TransitionChrome
            labelLineRef={labelLineRef}
            outroLineRef={outroLineRef}
            progressRef={progressRef}
            svgRef={svgRef}
            trackRef={trackRef}
          />
        </div>
      </div>
    </TransitionRouter>
  )
}