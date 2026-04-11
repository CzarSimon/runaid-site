'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  light?: boolean
}

export default function WaitlistForm({ light = false }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage("You're on the list. We'll be in touch.")
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const inputClass = light
    ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/40 focus:border-white/40'
    : 'bg-white border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:border-secondary'

  if (status === 'success') {
    return (
      <p className={`text-sm font-medium ${light ? 'text-white/90' : 'text-secondary'}`}>
        {message}
      </p>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={`flex-1 px-4 py-3 rounded-lg text-sm outline-none transition-all ${inputClass}`}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-lg text-sm font-semibold bg-secondary text-white hover:bg-secondary/90 transition-colors disabled:opacity-60 flex-shrink-0"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p className={`mt-2 text-sm ${light ? 'text-red-300' : 'text-destructive'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
