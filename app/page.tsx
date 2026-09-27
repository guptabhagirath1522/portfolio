'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Experience } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { Loader } from '@/components/portfolio/loader'
import { Projects } from '@/components/portfolio/projects'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const [dark, setDark] = useState(false)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const pageRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = window.setInterval(() => setProgress((value) => Math.min(value + 4, 100)), 28)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress < 100) return
    const timer = window.setTimeout(() => setLoading(false), 420)
    return () => window.clearTimeout(timer)
  }, [progress])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    if (loading || !pageRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', {
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) =>
        gsap.from(element, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 84%' },
        }),
      )
    }, pageRef)
    return () => ctx.revert()
  }, [loading])

  return (
    <>
      {loading && <Loader progress={progress} />}
      <main
        ref={pageRef}
        className={`portfolio-page min-h-screen overflow-hidden ${dark ? 'portfolio-dark' : ''}`}
      >
        <SiteHeader dark={dark} onToggleDark={() => setDark(!dark)} />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <SiteFooter />
      </main>
    </>
  )
}
