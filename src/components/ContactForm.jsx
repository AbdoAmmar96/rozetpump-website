import { useState } from 'react'

const RECIPIENT_EMAIL = 'sales@rozetpump.com'
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`

export default function ContactForm({ variant = 'default' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          subject: form.subject,
          message: form.message,
          _subject: `[ROZET Website] ${form.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await res.json()
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        console.error('FormSubmit error:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
    }
  }

  const isUnderline = variant === 'underline'
  const className = `contact-form ${isUnderline ? 'is-underline' : ''}`

  return (
    <form className={className} onSubmit={onSubmit}>
      <div className="form-field">
        <input
          name="name" type="text" required
          value={form.name} onChange={onChange}
          placeholder="Name"
        />
      </div>

      <div className="form-row">
        <div className="form-field">
          <input
            name="email" type="email" required
            value={form.email} onChange={onChange}
            placeholder="Email"
          />
        </div>
        <div className="form-field">
          <input
            name="phone" type="tel"
            value={form.phone} onChange={onChange}
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="form-field">
        <input
          name="subject" type="text" required
          value={form.subject} onChange={onChange}
          placeholder="Subject"
        />
      </div>

      <div className="form-field">
        <textarea
          name="message" rows={isUnderline ? 3 : 6} required
          value={form.message} onChange={onChange}
          placeholder="Message"
        />
      </div>

      <button type="submit" className="btn-submit-now" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit Now'}
      </button>

      {status === 'sent' && (
        <p className="form-success">
          <i className="bi bi-check-circle-fill"></i> Thanks — we received your message and will reply soon.
        </p>
      )}
      {status === 'error' && (
        <p className="form-error">
          <i className="bi bi-exclamation-triangle-fill"></i> Something went wrong. Please email us directly at {RECIPIENT_EMAIL}.
        </p>
      )}
    </form>
  )
}
