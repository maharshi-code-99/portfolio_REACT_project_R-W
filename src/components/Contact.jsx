import { useState } from 'react'

// A simple email check: something@something.something
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY_FORM = { name: '', email: '', message: '' }

// Returns an object of error messages. An empty object means the form is valid.
function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) {
    errors.name = 'Enter your name (at least 2 characters).'
  }
  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, like name@example.com.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Write a message of at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'valid'

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear the error for a field as soon as the visitor edits it
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      setStatus('idle')
      return
    }

    // IMPORTANT: no backend or email service is connected yet, so nothing is
    // sent here. See the README ("Connect a real email service") for how to
    // replace this block with a real request, for example to Formspree or EmailJS.
    setStatus('valid')
    setValues(EMPTY_FORM)
  }

  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="section-head">
          <h2 id="contact-title" className="section-title">Let&rsquo;s work together</h2>
          <p className="section-lead">
            Have a project, a role or a question? Fill in the form and I&rsquo;ll
            get back to you.
          </p>
          <p className="contact-direct">
            Prefer email? Write to{' '}
            <a href="mailto:hello@example.com">hello@example.com</a>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary">Send message</button>

          {/* aria-live makes screen readers announce the result */}
          <div aria-live="polite">
            {Object.keys(errors).some((k) => errors[k]) && (
              <p className="form-note form-note-error">
                Fix the highlighted fields and try again.
              </p>
            )}
            {status === 'valid' && (
              <p className="form-note form-note-info">
                Your message passed validation, but this demo site has no email
                service connected, so it was not sent. Use the email address
                above to reach me.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
