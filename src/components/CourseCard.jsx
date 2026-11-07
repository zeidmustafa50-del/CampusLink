import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <div className="cl-card h-100 p-4 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <span className="course-code">{course.code}</span>
        <span className="badge dept-badge">{course.department}</span>
      </div>
      <h3 className="h5 mb-1">{course.title}</h3>
      <p className="text-muted small mb-3">{course.instructor}</p>
      <ul className="list-unstyled small mb-4 course-meta">
        <li>🗓️ {course.days.join(' / ')} · {course.start}–{course.end}</li>
        <li>📍 {course.room}</li>
        <li>🎓 {course.credits} credits · {course.level}</li>
      </ul>
      <Link to={`/courses/${course.id}`} className="btn btn-outline-accent mt-auto">
        View details
      </Link>
    </div>
  )
}
