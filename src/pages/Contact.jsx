import { useState } from 'react'

const empty = { name: '', email: '', topic: 'General question', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const change = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      // No backend in this project: we only show the confirmation state.
      setSent(true)
      setValues(empty)
    }
  }

  return (
    <div className="container section">
      <div className="row g-5">
        <div className="col-lg-5">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3">We would love to hear from you</h1>
          <p className="text-muted">
            Questions about courses, your account or the portal? Send a message and we will point you in
            the right direction.
          </p>
          <ul className="list-unstyled contact-info">
            <li>📧 support@campuslink.example</li>
            <li>📞 +000 00 000 000</li>
            <li>📍 Student Services Building, Room 101</li>
            <li>🕘 Mon–Fri, 8:00–16:00</li>
          </ul>
          <small className="text-muted">Demo contact details (not real).</small>
        </div>

        <div className="col-lg-7">
          <div className="cl-card p-4">
            {sent && (
              <div className="alert alert-success" role="status">
                Thanks! Your message passed validation. This is a demo, so nothing was actually sent.
              </div>
            )}
            <form onSubmit={submit} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    className={`form-control${errors.name ? ' is-invalid' : ''}`}
                    value={values.name}
                    onChange={change}
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control${errors.email ? ' is-invalid' : ''}`}
                    value={values.email}
                    onChange={change}
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="col-12">
                  <label htmlFor="topic" className="form-label">Topic</label>
                  <select id="topic" name="topic" className="form-select" value={values.topic} onChange={change}>
                    <option>General question</option>
                    <option>Course registration</option>
                    <option>Grades and GPA</option>
                    <option>Technical problem</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={`form-control${errors.message ? ' is-invalid' : ''}`}
                    value={values.message}
                    onChange={change}
                  />
                  <div className="invalid-feedback">{errors.message}</div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-accent px-4">Send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
