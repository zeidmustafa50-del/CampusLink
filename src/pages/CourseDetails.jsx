import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCourse } from '../data/courses.js'
import { useAuth } from '../context/AuthContext.jsx'

// Dynamic page: the :id in /courses/:id decides which course is shown.
export default function CourseDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, enrolled, toggleEnroll } = useAuth()
  const course = getCourse(id)

  if (!course) {
    return (
      <div className="container section text-center">
        <h1 className="h2">Course not found</h1>
        <p className="text-muted">There is no course with the id "{id}".</p>
        <Link to="/courses" className="btn btn-accent">Back to courses</Link>
      </div>
    )
  }

  const isEnrolled = enrolled.includes(course.id)

  const handleEnroll = () => {
    if (!user) {
      navigate('/login', { state: { from: `/courses/${course.id}` } })
      return
    }
    toggleEnroll(course.id)
  }

  return (
    <div className="container section">
      <nav aria-label="breadcrumb" className="small mb-3">
        <Link to="/courses">Courses</Link> / <span className="text-muted">{course.code}</span>
      </nav>

      <div className="row g-4">
        <div className="col-lg-8">
          <span className="course-code">{course.code}</span>
          <h1 className="mt-2">{course.title}</h1>
          <p className="lead text-muted">{course.description}</p>

          <h2 className="h5 mt-4">What you will learn</h2>
          <ul className="goal-list">
            {course.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>

        <div className="col-lg-4">
          <div className="cl-card p-4 sticky-lg-top" style={{ top: 90 }}>
            <dl className="detail-list mb-4">
              <dt>Instructor</dt><dd>{course.instructor}</dd>
              <dt>Department</dt><dd>{course.department}</dd>
              <dt>Schedule</dt><dd>{course.days.join(' / ')} · {course.start}–{course.end}</dd>
              <dt>Room</dt><dd>{course.room}</dd>
              <dt>Credits</dt><dd>{course.credits}</dd>
              <dt>Level</dt><dd>{course.level}</dd>
              <dt>Semester</dt><dd>{course.semester}</dd>
            </dl>
            <button
              className={`btn w-100 ${isEnrolled ? 'btn-outline-danger' : 'btn-accent'}`}
              onClick={handleEnroll}
            >
              {isEnrolled ? 'Drop this course' : user ? 'Enroll in this course' : 'Log in to enroll'}
            </button>
            {isEnrolled && (
              <p className="small text-success mt-3 mb-0">
                You are enrolled. <Link to="/dashboard">See it in your dashboard</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
