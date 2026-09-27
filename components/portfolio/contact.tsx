'use client'

import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './brand-icons'
import { SectionLabel } from './section-label'

const inputClassName =
  'w-full border-b border-black/20 bg-transparent px-0 py-4 outline-none placeholder:text-muted-foreground focus:border-[#8cae18]'

const socialClassName =
  'rounded-full border border-black/15 p-3 transition-colors hover:bg-[#152019] hover:text-white'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="contact"
      data-reveal
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Have a good
            <br />
            <span className="text-[#8cae18]">idea?</span> Let&apos;s talk.
          </h2>
          <div className="mt-10 space-y-4 text-sm">
            <a
              className="flex items-center gap-3 hover:text-[#789600]"
              href="mailto:i.guptabhagirath@gmail.com"
            >
              <Mail size={17} /> i.guptabhagirath@gmail.com
            </a>
            <a className="flex items-center gap-3 hover:text-[#789600]" href="tel:+919452658365">
              <Phone size={17} /> +91 9452658365
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              aria-label="GitHub"
              href="https://github.com/guptabhagirath1522"
              target="_blank"
              rel="noreferrer"
              className={socialClassName}
            >
              <GitHubIcon size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/bhagirath-gupta"
              target="_blank"
              rel="noreferrer"
              className={socialClassName}
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <input
            required
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            className={inputClassName}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            aria-label="Email address"
            className={inputClassName}
          />
          <textarea
            required
            name="message"
            placeholder="Tell me about your project"
            aria-label="Tell me about your project"
            rows={4}
            className={`resize-none ${inputClassName}`}
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-[#152019] px-6 py-3.5 text-sm font-semibold text-white"
          >
            {sent ? 'Message ready to send' : 'Send enquiry'} <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  )
}
