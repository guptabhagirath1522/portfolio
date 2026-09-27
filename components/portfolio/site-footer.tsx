import { ChevronDown } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>© 2026 Bhagirath Gupta</span>
        <span>Pune, India.</span>
        <a href="#top" className="flex items-center gap-1 hover:text-[#789600]">
          Back to top <ChevronDown className="rotate-180" size={14} />
        </a>
      </div>
    </footer>
  )
}
