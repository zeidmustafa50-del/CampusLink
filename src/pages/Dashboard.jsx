import { useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { courses, getCourse } from '../data/courses.js'
import { student, scoreToPoints } from '../data/student.js'
import GpaChart from '../components/GpaChart.jsx'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export default function Dashboard() {
  const { user, enrolled, toggleEnroll } = useAuth()
  const [scores, setScores] = useState({})

  const myCourses = useMemo(() => enrolled.map(getCourse).filter(Boolean), [enrolled])
  const credits = myCourses.reduce((sum, c) => sum + c.credits, 0)

  // Projected GPA from the expected scores typed into the calculator.
  const projection = useMemo(() => {
    const graded = myCourses.filter((c) => scores[c.id] !== undefined && scores[c.id] !== '')
    if (graded.length === 0) return null
    const gradedCredits = graded.reduce((s, c) => s + c.credits, 0)
    const points = graded.reduce((s, c) => s + scoreToPoints(Number(scores[c.id])) * c.credits, 0)
    const semester = points / gradedCredits
    const total = student.completedCredits
    const overall = (student.cumulativeGpa * total + points) / (total + gradedCredits)
    return { semester, overall }
  }, [scores, myCourses])

  if (!user) return <Navigate to="/login" state={{ from: '/dashboard' }} replace />

  const setScore = (id, raw) => {
    if (raw === '') return setScores({ ...scores, [id]: '' })
    const n = Math.max(0, Math.min(100, Number(raw)))
    setScores({ ...scores, [id]: Number.isNaN(n) ? '' : n })
  }

  return (
    <div className="container section">
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
        <div>
          <span className="eyebrow">Student dashboard</span>
          <h1 className="mt-2 mb-0">Welcome back, {user.name}</h1>
          <p className="text-muted mb-0">
            {user.major} · {user.year} · ID {user.studentId}
          </p>
        </div>
        <Link to="/courses" className="btn btn-outline-accent">Browse courses</Link>
      </div>

      <div className="row g-3 mb-4">
        {[
          ['Cumulative GPA', student.cumulativeGpa.toFixed(1)],
          ['Credits completed', student.completedCredits],
          ['Enrolled courses', myCourses.length],
          ['Credits this term', credits],
        ].map(([label, value]) => (
          <div className="col-6 col-lg-3" key={label}>
            <div className="cl-card p-3 stat-tile">
              <div className="stat-value">{value}</div>
              <div className="text-muted small">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 mb-4">
        <div className="col-lg-7">
          <div className="cl-card p-4 h-100">
            <h2 className="h5">GPA by semester</h2>
            <p className="text-muted small">Your GPA has risen in most semesters.</p>
            <GpaChart data={student.history} />
          </div>
        </div>

        <div className="col-lg-5">
          <div className="cl-card p-4 h-100">
            <h2 className="h5">GPA calculator</h2>
            <p className="text-muted small">Enter expected scores (0–100) to project your GPA.</p>
            {myCourses.length === 0 ? (
              <p className="text-muted">Enroll in a course to use the calculator.</p>
            ) : (
              <div className="d-grid gap-2 mb-3">
                {myCourses.map((c) => (
                  <div className="d-flex align-items-center gap-2" key={c.id}>
                    <label htmlFor={`s-${c.id}`} className="flex-grow-1 small">
                      <b>{c.code}</b> {c.title}
                    </label>
                    <input
                      id={`s-${c.id}`}
                      type="number"
                      min="0"
                      max="100"
                      className="form-control form-control-sm score-input"
                      value={scores[c.id] ?? ''}
                      onChange={(e) => setScore(c.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
            {projection && (
              <div className="projection">
                <div>Semester GPA: <b>{projection.semester.toFixed(2)}</b></div>
                <div>Projected overall: <b>{projection.overall.toFixed(2)}</b></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="cl-card p-4 mb-4">
        <h2 className="h5 mb-3">Weekly timetable</h2>
        {myCourses.length === 0 ? (
          <p className="text-muted mb-0">No courses yet. Enroll in a course to build your timetable.</p>
        ) : (
          <div className="row g-3">
            {DAYS.map((day) => {
              const todays = myCourses
                .filter((c) => c.days.includes(day))
                .sort((a, b) => a.start.localeCompare(b.start))
              return (
                <div className="col-6 col-md-4 col-xl" key={day}>
                  <div className="day-col">
                    <div className="day-name">{day}</div>
                    {todays.length === 0 && <div className="text-muted small">Free day</div>}
                    {todays.map((c) => (
                      <Link to={`/courses/${c.id}`} className="slot" key={c.id}>
                        <b>{c.code}</b>
                        <span>{c.start}–{c.end}</span>
                        <span>{c.room}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className="cl-card p-4">
        <h2 className="h5 mb-3">My courses</h2>
        {myCourses.length === 0 ? (
          <p className="text-muted mb-0">You are not enrolled in any course.</p>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr><th>Course</th><th>Instructor</th><th>Credits</th><th /></tr>
              </thead>
              <tbody>
                {myCourses.map((c) => (
                  <tr key={c.id}>
                    <td><Link to={`/courses/${c.id}`}><b>{c.code}</b> {c.title}</Link></td>
                    <td>{c.instructor}</td>
                    <td>{c.credits}</td>
                    <td className="text-end">
                      <button className="btn btn-sm btn-outline-danger" onClick={() => toggleEnroll(c.id)}>
                        Drop
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="small text-muted mt-3 mb-0">{courses.length} courses available in the catalog.</p>
      </div>
    </div>
  )
}
