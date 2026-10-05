import { ArrowUpRight, Check } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title}`}
      className="project-card group w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] transition-transform hover:-translate-y-2 lg:w-[calc(50%-10px)]"
    >
      <div
        className={`relative flex h-56 items-end justify-between overflow-hidden p-6 ${project.accent}`}
      >
        <img
          src={project.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover ${project.imageTreatment === 'cover' ? 'object-[center_72%]' : 'object-center'}`}
        />
        {project.imageTreatment === 'banner' ? (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#152019]/55 via-transparent to-[#152019]/25" />
        ) : null}
        {project.logo ? (
          <img
            src={project.logo}
            alt=""
            className={
              project.logoPlate === 'dark'
                ? 'absolute left-5 top-5 z-10 h-16 w-16 rounded-[1.15rem] bg-[#111] object-contain p-3 shadow-[0_10px_24px_rgba(0,0,0,0.35)] ring-2 ring-white/75'
                : project.logoPlate === 'icon'
                  ? 'absolute left-5 top-5 z-10 h-16 w-16 rounded-[1.15rem] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.35)] ring-2 ring-white/80'
                  : 'absolute left-5 top-5 z-10 h-16 w-16 rounded-[1.15rem] bg-white object-contain p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.35)] ring-2 ring-white/80'
            }
          />
        ) : null}
        <span
          className={`relative z-10 text-6xl font-semibold tracking-[-0.08em] ${project.imageTreatment === 'cover' ? 'text-[#152019]/20' : 'text-white/55'}`}
        >
          {project.number}
        </span>
        <div
          className={`absolute right-6 top-6 z-10 grid h-12 w-12 place-items-center rounded-full transition-transform group-hover:rotate-45 ${project.imageTreatment === 'cover' ? 'bg-[#152019]/10 text-[#152019]' : 'bg-white/85 text-[#152019]'}`}
        >
          <ArrowUpRight />
        </div>
        {project.imageTreatment === 'cover' ? (
          <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full border-[18px] border-[#152019]/10" />
        ) : null}
      </div>
      <div className="p-6">
        <p className="project-type text-xs uppercase tracking-[0.18em] text-[#d7f45e]">
          {project.type}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-4 min-h-20 leading-relaxed text-white/55">{project.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/10 py-4">
          {project.metrics.map((metric) => (
            <p key={metric} className="text-xs text-white/70">
              <Check size={13} className="mb-1 text-[#d7f45e]" />
              {metric}
            </p>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}