import { ArrowUpRight, MoveUpRight } from 'lucide-react'

export function Hero() {
  return (
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
              className="inline-flex items-center gap-2 rounded-full bg-[#152019] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
            >
              View projects <MoveUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[#8cae18]"
            >
              Contact me <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
