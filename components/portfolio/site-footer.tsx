import { ChevronDown } from 'lucide-react'
import { SocialBrandIcon } from './brand-icons'
import { socialLinks } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-7">
        <div className="flex flex-col gap-5 lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/15"
                >
                  <SocialBrandIcon label={social.label} size={15} />
                </a>
              ))}
            </div>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/15"
            >
              <ChevronDown className="rotate-180" size={16} />
            </a>
          </div>
          <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© 2026 Bhagirath Gupta</span>
            <span>Pune, India.</span>
          </div>
        </div>
        <div className="hidden items-center justify-between text-xs text-muted-foreground lg:flex">
          <span>© 2026 Bhagirath Gupta</span>
          <span>Pune, India.</span>
          <a href="#top" className="flex items-center gap-1 hover:text-[#789600]">
            Back to top <ChevronDown className="rotate-180" size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
