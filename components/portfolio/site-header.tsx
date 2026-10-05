'use client'

import { useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'
import { MenuOverlay } from './menu'

type SiteHeaderProps = {
  dark: boolean
  onToggleDark: () => void
}

export function SiteHeader({ dark, onToggleDark }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
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
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleDark}
              className="rounded-full border border-black/10 p-2.5 transition-colors hover:border-[#8cae18]"
              aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-full border border-black/10 p-2.5 transition-colors hover:border-[#8cae18]"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay isOpen={menuOpen} onClose={closeMenu} />
    </>
  )
}
