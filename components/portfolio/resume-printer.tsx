'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, FileText, X } from 'lucide-react'

// const resumeUrl = '/Bhagirath_Gupta_Resume.pdf'
const resumeUrl = '/Bhagirath_Gupta_cv.pdf'
const printerWidth = 360
const buttonHeight = 50
const actionsHeight = 50
const humStep = 0.09
const feedSteps = [
  { fraction: 0.4, duration: 0.68, pause: 0.22 },
  { fraction: 0.5, duration: 0.68, pause: 0.22 },
  { fraction: 0.6, duration: 0.68, pause: 0.22 },
  { fraction: 0.7, duration: 0.68, pause: 0.22 },
  { fraction: 0.8, duration: 0.9, pause: 0.22 },
  { fraction: 0.9, duration: 0.9, pause: 0.22 },
  { fraction: 1, duration: 0.9, pause: 0 },
]

type ResumePrinterProps = {
  onOpenChange: (open: boolean) => void
}

export function ResumePrinter({ onOpenChange }: ResumePrinterProps) {
  const [open, setOpen] = useState(false)
  const busy = useRef(false)
  const idleWidth = useRef(0)
  const timeline = useRef<gsap.core.Timeline | null>(null)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const skinRef = useRef<HTMLSpanElement>(null)
  const ledRef = useRef<HTMLSpanElement>(null)
  const mouthRef = useRef<HTMLDivElement>(null)
  const slotRef = useRef<HTMLDivElement>(null)
  const paperRef = useRef<HTMLAnchorElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => () => void timeline.current?.kill(), [])

  const run = useCallback((tl: gsap.core.Timeline) => {
    timeline.current?.kill()
    timeline.current = tl
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) tl.progress(1)
  }, [])

  const followPaper = useCallback(() => {
    const target = actionsRef.current
    if (!target) return
    const overflow = target.getBoundingClientRect().bottom - (window.innerHeight - 32)
    if (overflow > 0.5) window.scrollBy({ top: overflow, behavior: 'smooth' })
  }, [])

  const print = useCallback(() => {
    const wrapper = wrapperRef.current
    const button = buttonRef.current
    const paper = paperRef.current
    const section = wrapper?.closest('section')
    if (busy.current || open || !wrapper || !button || !paper || !section) return
    busy.current = true
    setOpen(true)
    onOpenChange(true)

    idleWidth.current = button.offsetWidth
    const paperHeight = paper.offsetHeight
    const rowWidth = wrapper.parentElement?.offsetWidth ?? printerWidth
    const targetWidth = Math.min(printerWidth, Math.max(rowWidth, idleWidth.current))

    const sectionSpace = () => {
      const roomBelow =
        section.getBoundingClientRect().bottom - wrapper.getBoundingClientRect().bottom
      return Math.max(0, paperHeight + 16 + actionsHeight + 24 - roomBelow)
    }

    const totalSpace = sectionSpace()
    gsap.set(paper, { y: -paperHeight, opacity: 0 })

    const feed = gsap.timeline()
    for (const step of feedSteps) {
      const label = `step${step.fraction}`
      feed.addLabel(label)
      feed
        .to(
          slotRef.current,
          {
            height: paperHeight * step.fraction,
            opacity: 1,
            duration: step.duration,
            ease: 'none',
            onUpdate: followPaper,
          },
          label,
        )
        .to(
          paper,
          { y: -paperHeight * (1 - step.fraction), duration: step.duration, ease: 'none' },
          label,
        )
        .to(
          section,
          { marginBottom: totalSpace * step.fraction, duration: step.duration, ease: 'none' },
          label,
        )
        .to(
          button,
          {
            x: 0.5,
            y: 0.2,
            duration: humStep,
            repeat: Math.max(0, Math.floor(step.duration / humStep) - 1),
            yoyo: true,
            ease: 'steps(2)',
          },
          label,
        )
        .set(button, { x: 0, y: 0 }, `${label}+=${step.duration}`)
      if (step.pause) feed.to({}, { duration: step.pause }, `${label}+=${step.duration}`)
    }
    feed.to(paper, { opacity: 1, duration: 0.08, ease: 'none' }, 0)

    const printTimeline = gsap
      .timeline({
        onComplete: () => {
          busy.current = false
          ScrollTrigger.refresh()
        },
      })
      .addLabel('print', 0)
      .to(labelRef.current, { opacity: 0, y: -3, duration: 0.16, ease: 'power2.in' }, 'print')
      .to(
        button,
        {
          width: targetWidth,
          borderRadius: '20px 20px 11px 11px',
          duration: 0.62,
          ease: 'power3.inOut',
        },
        'print',
      )
      .to(skinRef.current, { opacity: 1, duration: 0.4 }, 'print')
      .to(ledRef.current, { opacity: 1, duration: 0.18 }, 'print+=0.12')
      .to(mouthRef.current, { opacity: 1, duration: 0.18 }, 'print+=0.12')
      .add(feed, 'print')
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      )

    run(printTimeline)
  }, [open, onOpenChange, run, followPaper])

  const discard = useCallback(() => {
    const button = buttonRef.current
    const paper = paperRef.current
    const section = wrapperRef.current?.closest('section')
    if (busy.current || !open || !button || !paper || !section) return
    busy.current = true
    const paperHeight = paper.offsetHeight
    const currentMargin = parseFloat(getComputedStyle(section).marginBottom) || 0

    const retractFeed = gsap.timeline()
    const reversedSteps = [...feedSteps].reverse()
    for (let i = 0; i < reversedSteps.length; i++) {
      const from = i === 0 ? 1 : reversedSteps[i - 1].fraction
      const to = i === reversedSteps.length - 1 ? 0 : reversedSteps[i].fraction
      const step = reversedSteps[i]
      const label = `rstep${i}`
      retractFeed.addLabel(label)
      retractFeed
        .to(
          slotRef.current,
          {
            height: paperHeight * to,
            duration: step.duration,
            ease: 'none',
          },
          label,
        )
        .to(
          paper,
          { y: -paperHeight * (1 - to), duration: step.duration, ease: 'none' },
          label,
        )
        .to(
          section,
          { marginBottom: currentMargin * (to / 1), duration: step.duration, ease: 'none' },
          label,
        )
        .to(
          button,
          {
            x: 0.5,
            y: 0.2,
            duration: humStep,
            repeat: Math.max(0, Math.floor(step.duration / humStep) - 1),
            yoyo: true,
            ease: 'steps(2)',
          },
          label,
        )
        .set(button, { x: 0, y: 0 }, `${label}+=${step.duration}`)
      if (step.pause) retractFeed.to({}, { duration: step.pause }, `${label}+=${step.duration}`)
    }
    const retractEnd = retractFeed.duration()
    retractFeed.to(paper, { opacity: 0, duration: 0.15, ease: 'none' }, retractEnd - 0.15)
    retractFeed.to(slotRef.current, { opacity: 0, duration: 0.15, ease: 'none' }, retractEnd - 0.15)

    run(
      gsap
        .timeline({
          onComplete: () => {
            gsap.set(button, { clearProps: 'width,borderRadius' })
            gsap.set(section, { clearProps: 'marginBottom' })
            busy.current = false
            setOpen(false)
            ScrollTrigger.refresh()
          },
        })
        .to(actionsRef.current, { opacity: 0, y: -8, duration: 0.4 })
        .addLabel('retract')
        .add(retractFeed, 'retract')
        .set(button, { x: 0, y: 0 })
        .add(() => onOpenChange(false))
        .to(ledRef.current, { opacity: 0, duration: 0.18 })
        .to(mouthRef.current, { opacity: 0, duration: 0.18 }, '<')
        .to(skinRef.current, { opacity: 0, duration: 0.55 })
        .to(
          button,
          { width: idleWidth.current, borderRadius: 999, duration: 0.62, ease: 'power3.inOut' },
          '<',
        )
        .to(labelRef.current, { opacity: 1, y: 0, duration: 0.28 }),
    )
  }, [open, onOpenChange, run])

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative isolate" style={{ height: buttonHeight }}>
        <button
          ref={buttonRef}
          type="button"
          onClick={print}
          disabled={open}
          aria-label={open ? 'Resume printed' : 'Print resume'}
          className="relative z-[2] inline-flex h-full items-center justify-center overflow-hidden rounded-full border border-black/15 px-6 text-sm font-semibold transition-[colors,transform] will-change-transform backface-hidden hover:border-[#8cae18] hover:-translate-y-1 disabled:cursor-default"
        >
          <span
            ref={skinRef}
            aria-hidden="true"
            className="resume-printer-skin pointer-events-none absolute inset-0 rounded-[inherit] opacity-0"
          />
          <span
            ref={ledRef}
            aria-hidden="true"
            className="absolute right-[14px] top-[10px] z-[4] h-[7px] w-[7px] rounded-full bg-[#34c759] opacity-0 shadow-[0_0_10px_rgba(52,199,89,0.72)]"
          />
          <span ref={labelRef} className="relative z-[2] inline-flex items-center gap-2">
            Resume <FileText size={16} />
          </span>
        </button>
        <div
          ref={mouthRef}
          aria-hidden="true"
          className="resume-slot-mouth pointer-events-none absolute left-8 right-8 z-[4] h-[6px] rounded-full opacity-0"
          style={{ top: buttonHeight - 10 }}
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%-6px)] z-20 flex w-[360px] max-w-[calc(100vw-40px)] -translate-x-1/2 flex-col items-center">
        <div
          ref={slotRef}
          aria-hidden={!open}
          className={`relative h-0 w-full opacity-0 ${open ? '' : 'invisible'}`}
          style={{ clipPath: 'inset(0 -48px -48px)' }}
        >
          <a
            ref={paperRef}
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            aria-label="Open resume PDF in a new tab"
            className="resume-paper pointer-events-auto absolute bottom-0 left-1/2 block w-[230px] -translate-x-1/2 overflow-hidden rounded-b-lg border border-black/10 bg-[#fdfcf9] opacity-0"
          >
            <span aria-hidden="true" className="resume-paper-grain" />
            <Image
              // src="/resume-preview.png"
              src="/cv-preview.png"
              alt="Preview of Bhagirath Gupta's resume"
              width={1024}
              height={1325}
              sizes="230px"
              draggable={false}
              className="relative z-0 block h-auto w-full"
              style={{ filter: 'saturate(0.82) contrast(1.08) brightness(1.02)' }}
            />
          </a>
        </div>

        <div
          ref={actionsRef}
          className={`mt-4 flex flex-nowrap items-center gap-[7px] opacity-0 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <a
            href={resumeUrl}
            download="Bhagirath_Gupta_cv.pdf"
            tabIndex={open ? 0 : -1}
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-[22px] text-sm font-semibold text-[#152019] shadow-[0_6px_16px_rgba(17,17,17,0.08)] transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_10px_22px_rgba(17,17,17,0.16)]"
          >
            Download <Download size={15} />
          </a>
          <button
            type="button"
            onClick={discard}
            tabIndex={open ? 0 : -1}
            aria-label="Put the resume away"
            className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black/10 bg-white text-[#152019] shadow-[0_6px_16px_rgba(17,17,17,0.08)] transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_10px_22px_rgba(17,17,17,0.16)]"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
