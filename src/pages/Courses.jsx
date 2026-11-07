import { useMemo, useState } from 'react'
import { courses, departments } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'

export default function Courses() {
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All')
  const [sort, setSort] = useState('code')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return courses
      .filter((c) => dept === 'All' || c.department === dept)
      .filter(
        (c) =>
          !q ||
          c.title.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q)
      )
      .sort((a, b) => (sort === 'credits' ? b.credits - a.credits : a.code.localeCompare(b.code)))
  }, [query, dept, sort])

  return (
    <div className="container section">
      <span className="eyebrow">Course catalog</span>
      <h1 className="mt-3 mb-4">Find your next course</h1>

      <div className="cl-card p-3 mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="q" className="form-label small text-muted">Search</label>
            <input
              id="q"
              type="search"
              className="form-control"
              placeholder="Title, code or instructor"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="dept" className="form-label small text-muted">Department</label>
            <select id="dept" className="form-select" value={dept} onChange={(e) => setDept(e.target.value)}>
              <option>All</option>
              {departments.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="sort" className="form-label small text-muted">Sort by</label>
            <select id="sort" className="form-select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="code">Course code</option>
              <option value="credits">Credits (high to low)</option>
            </select>
          </div>
        </div>
      </div>

      <p className="text-muted small">
        {results.length} {results.length === 1 ? 'course' : 'courses'} found
      </p>

      {results.length === 0 ? (
        <div className="cl-card p-5 text-center">
          <h2 className="h5">No courses match your search</h2>
          <p className="text-muted mb-3">Try a different keyword or clear the filters.</p>
          <button
            className="btn btn-outline-accent"
            onClick={() => {
              setQuery('')
              setDept('All')
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {results.map((c) => (
            <div className="col-md-6 col-lg-4" key={c.id}>
              <CourseCard course={c} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
