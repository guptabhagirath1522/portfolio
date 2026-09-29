import { skills } from '@/lib/portfolio-data'
import { SectionLabel } from './section-label'

export function About() {
  return (
    <section
      id="about"
      data-reveal
      className="border-y border-black/8 bg-white/55 dark:bg-white/[0.03]"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-32">
        <div>
          <SectionLabel>About me</SectionLabel>
          <h2 className="max-w-sm text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Curious by default. <span className="text-muted-foreground">Precise by choice.</span>
          </h2>
          <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
            Full-stack, mobile, and AI engineer with experience across web, cross-platform apps,
            and intelligent systems powered by LLMs, RAG, and vector databases. I care about the
            details that make products feel inevitable.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="border-t border-black/15 pt-4">
              <h3 className="mb-4 text-sm font-semibold">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-[#f7f8f4] px-3 py-1.5 text-xs text-muted-foreground dark:bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
