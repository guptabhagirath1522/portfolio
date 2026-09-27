'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { navItems } from '@/lib/portfolio-data'

type SiteHeaderProps = {
  dark: boolean
  onToggleDark: () => void
}

export function SiteHeader({ dark, onToggleDark }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#f7f8f4]/85 backdrop-blur-xl dark:bg-[#101611]/85">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center gap-2.5 text-sm font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#152019] text-xs text-[#d7f45e]">
            BG
          </span>
          <span>Bhagirath Gupta</span>
        </a>
        <nav
          className="hidden items-center gap-8 text-sm font-medium md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-[#789600]"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleDark}
            className="rounded-full border border-black/10 p-2.5 transition-colors hover:border-[#8cae18]"
            aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#152019] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="rounded-full p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="border-t border-black/5 bg-[#f7f8f4] px-5 py-5 md:hidden dark:bg-[#101611]"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="block py-3 text-lg font-semibold"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
