import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) return <Navigate to={from} replace />

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Please enter a valid email address.')
    if (password.length < 4) return setError('Password must be at least 4 characters.')
    login(email)
    navigate(from, { replace: true })
  }

  return (
    <div className="container section">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5">
          <div className="cl-card p-4 p-md-5">
            <h1 className="h3 mb-1">Student login</h1>
            <p className="text-muted small mb-4">
              Demo only: any valid email and a password of 4+ characters will work.
            </p>
            {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}
            <form onSubmit={submit} noValidate>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <button type="submit" className="btn btn-accent w-100">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
