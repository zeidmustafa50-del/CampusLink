import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container section text-center">
      <div className="display-1 brand">404</div>
      <h1 className="h3">This page does not exist</h1>
      <p className="text-muted">The link may be broken or the page may have moved.</p>
      <Link to="/" className="btn btn-accent">Back to home</Link>
    </div>
  )
}
