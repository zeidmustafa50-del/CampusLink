import { Link } from 'react-router-dom'
import { courses } from '../data/courses.js'
import { faculties } from '../data/faculties.js'
import CourseCard from '../components/CourseCard.jsx'

const features = [
  { icon: '📚', title: 'Course catalog', text: 'Search and filter every course by department, then open a full details page.' },
  { icon: '📈', title: 'GPA tracking', text: 'See your GPA across semesters in a clear chart that updates with your plan.' },
  { icon: '🗓️', title: 'Weekly timetable', text: 'Enrolled courses are arranged automatically into a Monday to Friday schedule.' },
  { icon: '🧮', title: 'Grade calculator', text: 'Enter expected scores and instantly see your projected semester and overall GPA.' },
]

const steps = [
  { n: '1', title: 'Log in', text: 'Use the demo login to open your student dashboard.' },
  { n: '2', title: 'Pick courses', text: 'Browse the catalog and enroll with one click.' },
  { n: '3', title: 'Plan your term', text: 'Check your timetable and test grade scenarios.' },
]

export default function Home() {
  // One course from three different faculties, to show the catalog is not just one field.
  const featured = ['cs301', 'md101', 'gd220'].map((id) => courses.find((c) => c.id === id)).filter(Boolean)

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="eyebrow">Your campus, in one place</span>
              <h1 className="display-4 mt-3">Everything a student needs, on one clean dashboard.</h1>
              <p className="lead text-muted my-4">
                CampusLink brings your courses, timetable and grades together so you spend less time
                searching and more time studying.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/courses" className="btn btn-accent btn-lg">Explore courses</Link>
                <Link to="/login" className="btn btn-outline-accent btn-lg">Student login</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cl-card p-4 hero-preview" aria-hidden="true">
                <div className="d-flex justify-content-between mb-3">
                  <strong>This semester</strong>
                  <span className="badge dept-badge">Fall 2026</span>
                </div>
                <div className="row g-3 text-center">
                  <div className="col-4"><div className="mini-stat"><b>3.4</b><span>GPA</span></div></div>
                  <div className="col-4"><div className="mini-stat"><b>12</b><span>Credits</span></div></div>
                  <div className="col-4"><div className="mini-stat"><b>4</b><span>Courses</span></div></div>
                </div>
                <div className="progress mt-4" style={{ height: 8 }}>
                  <div className="progress-bar bg-accent" style={{ width: '68%' }} />
                </div>
                <small className="text-muted">68% of degree completed</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">What you can do</h2>
        <div className="row g-4">
          {features.map((f) => (
            <div className="col-sm-6 col-lg-3" key={f.title}>
              <div className="cl-card h-100 p-4">
                <div className="icon-circle mb-3">{f.icon}</div>
                <h3 className="h5">{f.title}</h3>
                <p className="text-muted mb-0">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Explore by faculty</h2>
        <div className="row g-3">
          {faculties.map((f) => {
            const count = courses.filter((c) => c.faculty === f.id).length
            return (
              <div className="col-6 col-md-4" key={f.id}>
                <Link to={`/courses?faculty=${f.id}`} className="faculty-card cl-card h-100 p-3 p-md-4">
                  <div className="icon-circle mb-3">{f.icon}</div>
                  <h3 className="h6 mb-1">{f.name}</h3>
                  <p className="text-muted small mb-2 d-none d-md-block">{f.blurb}</p>
                  <span className="small faculty-count">
                    {f.departments.length} departments · {count} courses
                  </span>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container section">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2 className="section-title mb-0">Featured courses</h2>
          <Link to="/courses">See all courses →</Link>
        </div>
        <div className="row g-4">
          {featured.map((c) => (
            <div className="col-md-6 col-lg-4" key={c.id}>
              <CourseCard course={c} />
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">How it works</h2>
        <div className="row g-4">
          {steps.map((s) => (
            <div className="col-md-4" key={s.n}>
              <div className="d-flex gap-3">
                <div className="step-number">{s.n}</div>
                <div>
                  <h3 className="h5">{s.title}</h3>
                  <p className="text-muted mb-0">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="cta-band text-center p-5">
          <h2 className="mb-3">Ready to plan your semester?</h2>
          <p className="mb-4">Log in with the demo account and try the dashboard.</p>
          <Link to="/login" className="btn btn-light btn-lg">Open my dashboard</Link>
        </div>
      </section>
    </>
  )
}
