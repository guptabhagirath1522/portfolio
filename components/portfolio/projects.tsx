'use client'

import { type TouchEvent, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { ProjectCard } from './project-card'
import { SectionLabel } from './section-label'

export function Projects() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(2)
  const projectTrackRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const maxProjectIndex = projects.length - visibleCount

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const update = () => setVisibleCount(desktop.matches ? 2 : 1)
    update()
    desktop.addEventListener('change', update)
    return () => desktop.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    setProjectIndex((index) => Math.min(index, projects.length - visibleCount))
  }, [visibleCount])

  useLayoutEffect(() => {
    const track = projectTrackRef.current
    if (!track) return
    const offset = () => {
      const cards = track.children as HTMLCollectionOf<HTMLElement>
      if (!cards[projectIndex]) return 0
      return -(cards[projectIndex].offsetLeft - cards[0].offsetLeft)
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tween = gsap.to(track, {
      x: offset(),
      duration: reduceMotion ? 0 : 0.6,
      ease: 'power3.out',
    })
    const onResize = () => gsap.set(track, { x: offset() })
    window.addEventListener('resize', onResize)
    return () => {
      tween.kill()
      window.removeEventListener('resize', onResize)
    }
  }, [projectIndex, visibleCount])

  const goToProject = (next: number) =>
    setProjectIndex(Math.max(0, Math.min(next, maxProjectIndex)))

  const onProjectTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const onProjectTouchEnd = (event: TouchEvent) => {
    if (!touchStart.current) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
    goToProject(projectIndex + (dx < 0 ? 1 : -1))
  }

  return (
    <section id="projects" data-reveal className="bg-[#152019] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              A few things
              <br />
              <span className="text-muted-foreground">I&apos;ve shipped.</span>
            </h2>
          </div>
          <p className="max-w-xs leading-relaxed text-white/55">
            A small selection of products where engineering, clarity, and craft meet.
          </p>
        </div>
        <div
          className="mt-14 overflow-hidden pt-2"
          onTouchStart={onProjectTouchStart}
          onTouchEnd={onProjectTouchEnd}
        >
          <div ref={projectTrackRef} className="flex touch-pan-y gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-sm text-white/50">
            0{projectIndex + 1}
            {visibleCount > 1 && `–0${projectIndex + visibleCount}`} / 0{projects.length}
          </p>
          <div className="flex gap-2">
            <button
              disabled={projectIndex === 0}
              onClick={() => goToProject(projectIndex - 1)}
              className="rounded-full border border-white/15 px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Previous projects"
            >
              Previous
            </button>
            <button
              disabled={projectIndex >= maxProjectIndex}
              onClick={() => goToProject(projectIndex + 1)}
              className="rounded-full border border-white/15 px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Next projects"
            >
              Next <ArrowUpRight size={14} className="ml-1 inline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
