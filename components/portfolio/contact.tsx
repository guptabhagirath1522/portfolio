'use client'

import { useState } from 'react'
import { Mail, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { SocialBrandIcon } from './brand-icons'
import { socialLinks } from '@/lib/portfolio-data'
import { SectionLabel } from './section-label'

const WEB3FORMS_ACCESS_KEY = '3c912de5-4434-48a3-9c09-9f683c30d41b'

const inputClassName =
  'w-full border-b border-black/20 bg-transparent px-0 py-4 outline-none placeholder:text-muted-foreground focus:border-[#8cae18] transition-colors'

const inputErrorClassName =
  'w-full border-b border-red-400 bg-transparent px-0 py-4 outline-none placeholder:text-muted-foreground focus:border-red-500 transition-colors'

const socialClassName =
  'rounded-full border border-black/15 p-3 transition-colors hover:bg-[#152019] hover:text-white'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validateForm(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {}

  if (!name.trim()) {
    errors.name = 'Name is required'
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  if (!message.trim()) {
    errors.message = 'Message is required'
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm(name, email, message)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `New enquiry from ${name.trim()} — Portfolio`,
          from_name: 'Portfolio Contact Form',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        setErrors({})
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  const clearFieldError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                aria-label={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={socialClassName}
              >
                <SocialBrandIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              aria-invalid={!!errors.name}
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                clearFieldError('name')
              }}
              className={errors.name ? inputErrorClassName : inputClassName}
              disabled={status === 'submitting'}
            />
            {errors.name && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              aria-invalid={!!errors.email}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                clearFieldError('email')
              }}
              className={errors.email ? inputErrorClassName : inputClassName}
              disabled={status === 'submitting'}
            />
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Tell me about your project"
              aria-label="Tell me about your project"
              aria-invalid={!!errors.message}
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                clearFieldError('message')
              }}
              className={`resize-none ${errors.message ? inputErrorClassName : inputClassName}`}
              disabled={status === 'submitting'}
            />
            {errors.message && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                <AlertCircle size={12} /> {errors.message}
              </p>
            )}
          </div>

          {status === 'error' && (
            <p className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              <AlertCircle size={16} /> {errorMessage}
            </p>
          )}

          {status === 'success' && (
            <p className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
              <CheckCircle2 size={16} /> Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 rounded-full bg-[#152019] px-6 py-3.5 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
          >
            {status === 'submitting' && (
              <>
                Sending... <Loader2 size={15} className="animate-spin" />
              </>
            )}
            {status === 'success' && (
              <>
                Sent! <CheckCircle2 size={15} />
              </>
            )}
            {(status === 'idle' || status === 'error') && (
              <>
                Send enquiry <Send size={15} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
