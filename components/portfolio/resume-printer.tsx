'use client'

import { type RefObject, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, FileText, X } from 'lucide-react'

const resumeUrl = '/Bhagirath_Gupta_Resume.pdf'
const printerWidth = 260

type ResumePrinterProps = {
  spacerRef: RefObject<HTMLDivElement | null>
  onOpenChange: (open: boolean) => void
}

export function ResumePrinter({ spacerRef, onOpenChange }: ResumePrinterProps) {
  const [open, setOpen] = useState(false)
  const busy = useRef(false)
  const idleWidth = useRef(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const skinRef = useRef<HTMLSpanElement>(null)
  const slotRef = useRef<HTMLDivElement>(null)
  const paperRef = useRef<HTMLAnchorElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)

  const finish = (timeline: gsap.core.Timeline) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) timeline.progress(1)
  }

  const print = () => {
    const wrapper = wrapperRef.current
    const button = buttonRef.current
    const paper = paperRef.current
    const spacer = spacerRef.current
    if (busy.current || open || !wrapper || !button || !paper || !spacer) return
    busy.current = true
    setOpen(true)
    onOpenChange(true)

    idleWidth.current = button.offsetWidth
    const paperHeight = paper.offsetHeight
    const spacerHeight = () => {
      const section = wrapper.closest('section')
      const roomBelow = section
        ? section.getBoundingClientRect().bottom - wrapper.getBoundingClientRect().bottom
        : 0
      return Math.max(0, paperHeight + 96 - roomBelow + 24)
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        busy.current = false
        ScrollTrigger.refresh()
        actionsRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      },
    })
    timeline
      .to(labelRef.current, { opacity: 0, y: -4, duration: 0.18 })
      .to(button, {
        width: printerWidth,
        borderRadius: '20px 20px 11px 11px',
        duration: 0.55,
        ease: 'power3.inOut',
      })
      .to(skinRef.current, { opacity: 1, duration: 0.4 }, '<')
      .addLabel('print')
      .to(spacer, { height: spacerHeight, duration: 1.5, ease: 'power2.inOut' }, 'print')
      .fromTo(slotRef.current, { height: 0 }, { height: paperHeight, duration: 1.5, ease: 'power1.inOut' }, 'print')
      .to(button, { y: 0.8, duration: 0.05, repeat: 29, yoyo: true, ease: 'none' }, 'print')
      .set(button, { y: 0 })
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
      )
    finish(timeline)
  }

  const discard = () => {
    const button = buttonRef.current
    if (busy.current || !open || !button) return
    busy.current = true

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(button, { clearProps: 'width,borderRadius' })
        busy.current = false
        setOpen(false)
        onOpenChange(false)
        ScrollTrigger.refresh()
      },
    })
    timeline
      .to(actionsRef.current, { opacity: 0, y: -8, duration: 0.2 })
      .addLabel('retract')
      .to(slotRef.current, { height: 0, duration: 0.7, ease: 'power2.in' }, 'retract')
      .to(spacerRef.current, { height: 0, duration: 0.7, ease: 'power2.in' }, 'retract')
      .to(skinRef.current, { opacity: 0, duration: 0.35 })
      .to(
        button,
        { width: idleWidth.current, borderRadius: 999, duration: 0.5, ease: 'power3.inOut' },
        '<',
      )
      .to(labelRef.current, { opacity: 1, y: 0, duration: 0.2 })
    finish(timeline)
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={print}
        disabled={open}
        aria-label={open ? 'Resume printed' : 'Print resume'}
        className="relative inline-flex h-[50px] items-center justify-center overflow-hidden rounded-full border border-black/15 px-6 text-sm font-semibold transition-colors hover:border-[#8cae18] disabled:cursor-default"
      >
        <span ref={skinRef} className="resume-printer-skin pointer-events-none absolute inset-0 opacity-0">
          <span className="absolute right-4 top-2.5 h-[7px] w-[7px] rounded-full bg-[#34c759] shadow-[0_0_10px_rgba(52,199,89,0.72)]" />
          <span className="absolute inset-x-6 bottom-1 h-[5px] rounded-full bg-black/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]" />
        </span>
        <span ref={labelRef} className="relative inline-flex items-center gap-2">
          Resume <FileText size={16} />
        </span>
      </button>

      <div
        className="absolute left-1/2 top-[calc(100%-4px)] z-20 flex -translate-x-1/2 flex-col items-center"
        style={{ width: printerWidth }}
        aria-hidden={!open}
      >
        <div
          ref={slotRef}
          className={`relative h-0 w-full ${open ? '' : 'invisible'}`}
          style={{ clipPath: 'inset(0 -48px -48px)' }}
        >
          <a
            ref={paperRef}
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            aria-label="Open resume PDF in a new tab"
            className="resume-paper absolute bottom-0 left-1/2 block w-[230px] -translate-x-1/2 overflow-hidden rounded-b-lg border border-black/10 bg-[#fdfcf9]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/resume-preview.png"
              alt="Preview of Bhagirath Gupta's resume"
              draggable={false}
              className="block aspect-[1024/1325] w-full"
            />
          </a>
        </div>
        <div
          ref={actionsRef}
          className={`mt-4 flex items-center gap-2 opacity-0 ${open ? '' : 'pointer-events-none'}`}
        >
          <a
            href={resumeUrl}
            download
            tabIndex={open ? 0 : -1}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-[#152019] shadow-[0_6px_16px_rgba(17,17,17,0.08)] transition-transform hover:-translate-y-0.5"
          >
            Download <Download size={15} />
          </a>
          <button
            type="button"
            onClick={discard}
            tabIndex={open ? 0 : -1}
            aria-label="Put the resume away"
            className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white text-[#152019] shadow-[0_6px_16px_rgba(17,17,17,0.08)] transition-transform hover:-translate-y-0.5"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
