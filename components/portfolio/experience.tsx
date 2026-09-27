import { experiences } from '@/lib/portfolio-data'
import { SectionLabel } from './section-label'

export function Experience() {
  return (
    <section
      id="experience"
      data-reveal
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <SectionLabel>Experience</SectionLabel>
      <div className="max-w-4xl">
        {experiences.map((item) => (
          <article
            key={item.company}
            className="grid gap-5 border-t border-black/15 py-8 md:grid-cols-[170px_1fr_1fr] md:gap-10"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {item.period}
            </p>
            <div>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-[#789600]">{item.company}</p>
            </div>
            <p className="leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
