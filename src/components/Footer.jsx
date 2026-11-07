import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer mt-5 py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <strong className="brand">CampusLink</strong>
          <p className="small text-muted mb-0">
            A student portal frontend built for CSCI426 (Advanced Web Programming). All data is fictional.
          </p>
        </div>
        <div className="small text-muted">
          <div className="mb-1">
            <Link to="/about">About</Link> · <Link to="/courses">Courses</Link> ·{' '}
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            Built with React, Vite and Bootstrap (MIT). Fonts: Fraunces and Inter (SIL OFL) via Google Fonts.
          </div>
        </div>
      </div>
    </footer>
  )
}
