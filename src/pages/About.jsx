const stack = [
  ['React 19', 'Component-based UI and hooks'],
  ['React Router', 'Multi-page navigation and the dynamic /courses/:id route'],
  ['Bootstrap 5', 'Responsive grid, navbar and base components'],
  ['Context API', 'Theme (dark mode) and mock authentication state'],
  ['localStorage', 'Keeps login, theme and enrolled courses between visits'],
  ['Vite', 'Fast development server and production build'],
]

// TODO: replace with the real team members before submitting
const team = [
  { name: 'Team member 1', role: 'UI/UX and pages' },
  { name: 'Team member 2', role: 'Components, data and deployment' },
]

export default function About() {
  return (
    <div className="container section">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <span className="eyebrow">About CampusLink</span>
          <h1 className="mt-3">Student life is easier when everything is in one place.</h1>
          <p className="text-muted">
            Students usually jump between several systems to find their courses, schedule and grades.
            CampusLink is a frontend prototype that shows how those tasks could live together in one
            clean, responsive portal.
          </p>
          <p className="text-muted">
            This is a course project for CSCI426 (Advanced Web Programming). There is no server: the
            data is fictional and the login is a demo.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="cl-card p-4">
            <h2 className="h5 mb-3">Our goals</h2>
            <ul className="goal-list">
              <li>Make the course catalog easy to search</li>
              <li>Show academic progress at a glance</li>
              <li>Work equally well on phones and desktops</li>
              <li>Offer a comfortable dark mode for late-night studying</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="section-title mt-5">Technologies used</h2>
      <div className="row g-3">
        {stack.map(([name, text]) => (
          <div className="col-md-6 col-lg-4" key={name}>
            <div className="cl-card p-3 h-100">
              <strong>{name}</strong>
              <div className="text-muted small">{text}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title mt-5">The team</h2>
      <div className="row g-3">
        {team.map((m) => (
          <div className="col-md-6" key={m.name}>
            <div className="cl-card p-4 d-flex gap-3 align-items-center">
              <div className="avatar">{m.name.charAt(0)}</div>
              <div>
                <strong>{m.name}</strong>
                <div className="text-muted small">{m.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
