"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import Image from "next/image"

export default function Canva() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({ autoRaf: false })

    lenis.on("scroll", ScrollTrigger.update)
    const ticker = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    const dissolveCellSize = 16
    const dissolveColumns = Math.ceil(window.innerWidth / dissolveCellSize)
    const dissolveRows = Math.ceil(window.innerHeight / dissolveCellSize)
    const dissolveSpreadAbove = 0.25
    const dissolveSpreadBelow = 0.25
    const dissolveScatterIntensity = 0.15
    const dissolveSolidCoreRadius = 0.025
    const dissolveMinScatterAtCenter = 0.3
    const dissolveVisibilityThreshold = 0.65
    const dissolveColor = "#ff5101"
    const dissolveCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%*+=?!~<>[]{}|"
    const dissolveFontSize = Math.round(dissolveCellSize * 0.7)

    const stackedImages =
      document.querySelectorAll<HTMLElement>(".spotlight-img")
    const totalImages = stackedImages.length
    const totalTransitions = totalImages - 1

    const canvas = document.querySelector<HTMLCanvasElement>(".dissolve-canvas")
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    const ctx = canvas.getContext("2d")!
    ctx.scale(dpr, dpr)
    ctx.font = `500 ${dissolveFontSize}px "DM Mono", monospace`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    stackedImages.forEach((img, i) => {
      img.style.zIndex = String(totalImages - i)
    })

    function getRandomCharacter() {
      return dissolveCharacters[
        Math.floor(Math.random() * dissolveCharacters.length)
      ]
    }

    const dissolveCells: {
      row: number
      col: number
      normalizedY: number
      char: string
    }[] = []

    for (let row = 0; row < dissolveRows; row++) {
      for (let col = 0; col < dissolveColumns; col++) {
        dissolveCells.push({
          row,
          col,
          normalizedY: (row + 0.5) / dissolveRows,
          char: getRandomCharacter(),
        })
      }
    }

    function hashFromPosition(row: number, col: number, seed: number) {
      const raw = Math.sin(row * seed + col * (seed * 2.45)) * 43758.5453
      return raw - Math.floor(raw)
    }

    const cellVisibilityRandom = dissolveCells.map((cell) =>
      hashFromPosition(cell.row, cell.col, 127.1)
    )

    const cellScatterOffset = dissolveCells.map(
      (cell) =>
        (hashFromPosition(cell.row, cell.col, 269.3) - 0.5) *
        dissolveScatterIntensity
    )

    let activeTransitionIndex = -1

    function updateImageClipPaths(scrollProgress: number, travelRange: number) {
      for (let i = 0; i < totalTransitions; i++) {
        const segmentStart = i / totalTransitions
        const segmentEnd = (i + 1) / totalTransitions

        let segmentProgress =
          (scrollProgress - segmentStart) / (segmentEnd - segmentStart)
        segmentProgress = gsap.utils.clamp(0, 1, segmentProgress)

        const remappedPosition =
          -dissolveSpreadAbove + segmentProgress * travelRange
        const clipPercent = gsap.utils.clamp(0, 100, remappedPosition * 100)

        stackedImages[i].style.clipPath =
          `polygon(0% ${clipPercent}%, 100% ${clipPercent}%, 100% 100%, 0% 100%)`
      }
    }

    function renderDissolveBand(bandCenterY: number) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = 0; i < dissolveCells.length; i++) {
        const cell = dissolveCells[i]

        const rawDistance = Math.abs(cell.normalizedY - bandCenterY)
        const scatterStrength = gsap.utils.clamp(
          dissolveMinScatterAtCenter,
          1,
          rawDistance / dissolveSolidCoreRadius
        )
        const scatteredDistance =
          cell.normalizedY -
          bandCenterY +
          cellScatterOffset[i] * scatterStrength
        const normalizedDistance =
          scatteredDistance >= 0
            ? scatteredDistance / dissolveSpreadBelow
            : Math.abs(scatteredDistance) / dissolveSpreadAbove

        if (normalizedDistance >= 1) continue

        const density = (1 - normalizedDistance) * (1 - normalizedDistance)
        if (density <= cellVisibilityRandom[i] * dissolveVisibilityThreshold)
          continue

        const x = cell.col * dissolveCellSize
        const y = cell.row * dissolveCellSize
        ctx.fillStyle = dissolveColor
        ctx.fillRect(x, y, dissolveCellSize, dissolveCellSize)
        ctx.fillStyle = "#000"
        ctx.fillText(
          cell.char,
          x + dissolveCellSize / 2,
          y + dissolveCellSize / 2
        )
      }
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    }

    const totalTravelRange = 1 + dissolveSpreadAbove + dissolveSpreadBelow

    const st = ScrollTrigger.create({
      trigger: ".spotlight",
      start: "top top",
      end: `+=${totalTransitions * window.innerHeight}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const scrollProgress = self.progress
        const rawPosition = scrollProgress * totalTransitions
        const currentTransition = Math.min(
          Math.floor(rawPosition),
          totalTransitions - 1
        )
        const transitionProgress = gsap.utils.clamp(
          0,
          1,
          rawPosition - currentTransition
        )

        if (currentTransition !== activeTransitionIndex) {
          activeTransitionIndex = currentTransition
        }

        const bandCenterY =
          -dissolveSpreadAbove + transitionProgress * totalTravelRange

        updateImageClipPaths(scrollProgress, totalTravelRange)

        if (transitionProgress <= 0 || transitionProgress >= 1) {
          clearCanvas()
          return
        }

        renderDissolveBand(bandCenterY)
      },
    })

    return () => {
      st.kill()
      lenis.destroy()
      gsap.ticker.remove(ticker)
    }
  }, [])

  return (
    <section className="spotlight">
      <div className="spotlight-img">
        <Image
          fill
          className="object-cover"
          src="/images/image-1.jpg"
          alt=""
          quality={100}
        />
      </div>
      <div className="spotlight-img">
        <Image
          fill
          className="object-cover"
          src="/images/image-2.jpg"
          alt=""
          quality={100}
        />
      </div>
      <canvas className="dissolve-canvas" />
    </section>
  )
}
