'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { navItems, socialLinks } from '@/lib/portfolio-data'

export function MenuOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const navLinksRef = useRef<HTMLAnchorElement[]>([])
  const connectRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const setNavRef = useCallback(
    (i: number) => (el: HTMLAnchorElement | null) => {
      if (el) navLinksRef.current[i] = el
    },
    [],
  )

  useEffect(() => {
    const overlay = overlayRef.current
    const curtain = curtainRef.current
    if (!overlay || !curtain) return

    const tl = gsap.timeline({ paused: true })

    tl.set(overlay, { visibility: 'visible' })

    tl.fromTo(
      curtain,
      { yPercent: -100 },
      { yPercent: 0, duration: 0.7, ease: 'power4.inOut' },
    )

    tl.fromTo(
      navLinksRef.current,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.07,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    tl.fromTo(
      [connectRef.current, infoRef.current],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.06,
        ease: 'power2.out',
      },
      '-=0.35',
    )

    tl.fromTo(
      closeRef.current,
      { rotate: -90, opacity: 0 },
      { rotate: 0, opacity: 1, duration: 0.35, ease: 'back.out(1.7)' },
      '-=0.3',
    )

    tlRef.current = tl

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    const tl = tlRef.current
    if (!tl) return

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      tl.play()
    } else {
      tl.reverse().then(() => {
        document.body.style.overflow = ''
      })
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const onLinkMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget
    const rect = link.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(link, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out',
    })
  }, [])

  const onLinkLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    })
  }, [])

  return (
    <div
      ref={overlayRef}
      className="menu-overlay fixed inset-0 z-[80]"
      style={{ visibility: 'hidden' }}
    >
      <div ref={curtainRef} className="menu-curtain absolute inset-0" />

      <button
        ref={closeRef}
        onClick={onClose}
        className="menu-close absolute top-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm transition-colors"
        aria-label="Close menu"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="1" y1="1" x2="17" y2="17" />
          <line x1="17" y1="1" x2="1" y2="17" />
        </svg>
      </button>

      <div className="relative z-[1] flex h-full w-full flex-col justify-between px-8 py-24 md:flex-row md:items-center md:px-16 lg:px-24">
        <nav className="flex flex-col gap-2 md:gap-3" aria-label="Menu">
          {navItems.map((label, i) => (
            <div key={label} className="overflow-hidden">
              <a
                href={`#${label.toLowerCase()}`}
                ref={setNavRef(i)}
                onClick={onClose}
                onMouseMove={onLinkMove}
                onMouseLeave={onLinkLeave}
                className="menu-link group inline-flex items-center gap-4"
              >
                <span className="menu-faint text-xs font-light tracking-widest tabular-nums transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="menu-ink relative text-5xl font-light tracking-tight md:text-6xl lg:text-[5.5vw]">
                  <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-3">
                    {label}
                  </span>
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#d7f45e] to-[#8cae18] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full" />
                </span>
                <span className="ml-1 h-2.5 w-2.5 scale-0 self-center rounded-full bg-[#d7f45e] opacity-0 shadow-[0_0_10px_2px_rgba(215,244,94,0.45)] transition-all duration-400 ease-out group-hover:scale-100 group-hover:opacity-100" />
              </a>
            </div>
          ))}
        </nav>

        <div className="mt-12 flex flex-col gap-10 md:mt-0 md:items-end md:text-right">
          <div ref={connectRef} className="flex flex-col gap-3">
            <span className="menu-faint mb-2 text-xs font-medium uppercase tracking-[0.2em]">
              Connect
            </span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-social menu-muted group flex items-center gap-2 text-base transition-colors duration-300 md:justify-end"
              >
                <span>{s.label}</span>
                <span className="inline-block text-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
          <div ref={infoRef} className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-col gap-1">
              <span className="menu-faint mb-2 text-xs font-medium uppercase tracking-[0.2em]">
                Get in touch
              </span>
              <a
                href="mailto:i.guptabhagirath@gmail.com"
                className="menu-social menu-muted text-base transition-colors duration-300"
              >
                i.guptabhagirath@gmail.com
              </a>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#d7f45e] px-5 py-3 text-sm font-semibold text-[#152019] transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="menu-glow pointer-events-none absolute -right-32 -bottom-32 h-80 w-80 rounded-full opacity-80 blur-[100px]" />
        </div>
      </div>
    </div>
  )
}
