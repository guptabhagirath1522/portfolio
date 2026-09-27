'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import { ResumePrinter } from './resume-printer'

const collapsibleClassName =
  'inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full py-3.5 text-sm font-semibold transition-[max-width,opacity,padding,margin,transform,border-color] duration-500'

export function Hero() {
  const spacerRef = useRef<HTMLDivElement>(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const hiddenClassName = resumeOpen
    ? 'pointer-events-none -mr-3 max-w-0 border-transparent px-0 opacity-0'
    : 'max-w-[220px] px-6'

  return (
    <>
      <section
        id="top"
        className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 lg:min-h-[820px] lg:px-12 lg:pb-28"
      >
        <div className="pointer-events-none absolute -right-20 top-28 h-80 w-80 rounded-full bg-[#d7f45e]/35 blur-3xl" />
        <div className="hero-copy relative max-w-5xl">
          <h1 className="max-w-5xl text-[clamp(3.7rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.08em]">
            Building things
            <br />
            <span className="text-[#8cae18]">that move</span> people.
          </h1>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              I&apos;m Bhagirath Gupta, a full-stack and mobile developer building cross-platform
              apps and high-performance web products.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                aria-hidden={resumeOpen}
                tabIndex={resumeOpen ? -1 : undefined}
                className={`${collapsibleClassName} ${hiddenClassName} bg-[#152019] text-white hover:-translate-y-1`}
              >
                View projects <MoveUpRight size={16} />
              </a>
              <a
                href="#contact"
                aria-hidden={resumeOpen}
                tabIndex={resumeOpen ? -1 : undefined}
                className={`${collapsibleClassName} ${hiddenClassName} border border-black/15 hover:border-[#8cae18]`}
              >
                Contact me <ArrowUpRight size={16} />
              </a>
              <ResumePrinter spacerRef={spacerRef} onOpenChange={setResumeOpen} />
            </div>
          </div>
        </div>
      </section>
      <div ref={spacerRef} aria-hidden="true" className="h-0" />
    </>
  )
}
