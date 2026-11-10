import { CircleAlert, CircleCheck, Loader2, Send } from 'lucide-react'
import { useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { contact } from '@/data/portfolio'

type Field = 'name' | 'email' | 'subject' | 'message'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>
type Status = 'idle' | 'sending' | 'success' | 'error'

const EMPTY: Values = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT?.trim()

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (v.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.'
  else if (v.message.length > 2000) e.message = 'Your message is too long (max 2000 characters).'
  return e
}

/**
 * Validated contact form.
 *  - With VITE_CONTACT_ENDPOINT set (e.g. Formspree) it posts the message to that inbox.
 *  - Without it, it opens the visitor's email app with the message pre-filled (mailto).
 */
export function ContactForm() {
  const uid = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  const id = (f: Field) => `${uid}-${f}`

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as Field
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    if (touched[field]) setErrors(validate(next))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const onBlur = (field: Field) => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, subject: true, message: true })

    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    // Honeypot: real visitors never fill this hidden field.
    const honeypot = (formRef.current?.elements.namedItem('website') as HTMLInputElement | null)?.value
    if (honeypot) return

    if (ENDPOINT) {
      setStatus('sending')
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        setStatus('success')
        setFeedback("Thanks! Your message was sent - I'll get back to you soon.")
        setValues(EMPTY)
        setTouched({})
        setErrors({})
      } catch {
        setStatus('error')
        setFeedback(`Sorry, the message could not be sent. Please email me directly at ${contact.email}.`)
      }
      return
    }

    // No backend configured: hand the message over to the visitor's email app.
    const body = `${values.message.trim()}\n\n- ${values.name.trim()} (${values.email.trim()})`
    const href = `mailto:${contact.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setStatus('success')
    setFeedback(`Your email app should open with the message ready to send. If it doesn't, write to ${contact.email}.`)
  }

  const fieldProps = (f: Field) => ({
    id: id(f),
    name: f,
    value: values[f],
    onChange,
    onBlur: () => onBlur(f),
    className: 'field',
    'aria-invalid': errors[f] ? (true as const) : undefined,
    'aria-describedby': errors[f] ? `${id(f)}-error` : undefined,
  })

  const renderError = (field: Field) =>
    errors[field] ? (
      <p id={`${id(field)}-error`} role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
        {errors[field]}
      </p>
    ) : null

  const sending = status === 'sending'

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Contact form" className="relative">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id('name')} className="field-label">
            Name<span className="text-lime-500">*</span>
          </label>
          <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
          {renderError('name')}
        </div>
        <div>
          <label htmlFor={id('email')} className="field-label">
            Email<span className="text-lime-500">*</span>
          </label>
          <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
          {renderError('email')}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={id('subject')} className="field-label">
          Subject<span className="text-lime-500">*</span>
        </label>
        <input type="text" placeholder="How can I help?" {...fieldProps('subject')} />
        {renderError('subject')}
      </div>

      <div className="mt-5">
        <label htmlFor={id('message')} className="field-label">
          Message<span className="text-lime-500">*</span>
        </label>
        <textarea rows={5} placeholder="Tell me a little about your project or opportunity..." {...fieldProps('message')} />
        {renderError('message')}
      </div>

      {/* Honeypot - hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={sending}>
          {sending ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} aria-hidden="true" />
              Send message
            </>
          )}
        </button>

        <p role="status" aria-live="polite" className="min-h-5 text-sm">
          {status === 'success' && (
            <span className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400">
              <CircleCheck size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              {feedback}
            </span>
          )}
          {status === 'error' && (
            <span className="flex items-start gap-2 text-rose-600 dark:text-rose-400">
              <CircleAlert size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              {feedback}
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
