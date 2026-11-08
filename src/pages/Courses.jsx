import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { courses } from '../data/courses.js'
import { faculties, getFaculty } from '../data/faculties.js'
import CourseCard from '../components/CourseCard.jsx'

export default function Courses() {
  // The selected faculty lives in the URL (?faculty=health) so it can be linked from the home page.
  const [params, setParams] = useSearchParams()
  const facultyParam = params.get('faculty')
  const faculty = getFaculty(facultyParam) ? facultyParam : 'all'

  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All')
  const [sort, setSort] = useState('code')

  const departmentsInView = faculty === 'all' ? [] : getFaculty(faculty).departments

  const chooseFaculty = (id) => {
    setDept('All')
    if (id === 'all') setParams({})
    else setParams({ faculty: id })
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return courses
      .filter((c) => faculty === 'all' || c.faculty === faculty)
      .filter((c) => dept === 'All' || c.department === dept)
      .filter(
        (c) =>
          !q ||
          c.title.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.department.toLowerCase().includes(q)
      )
      .sort((a, b) => (sort === 'credits' ? b.credits - a.credits : a.code.localeCompare(b.code)))
  }, [query, faculty, dept, sort])

  const clearAll = () => {
    setQuery('')
    setDept('All')
    setParams({})
  }

  return (
    <div className="container section">
      <span className="eyebrow">Course catalog</span>
      <h1 className="mt-3 mb-4">Find your next course</h1>

      <div className="faculty-bar mb-3" role="group" aria-label="Filter by faculty">
        <button
          type="button"
          className={`faculty-chip${faculty === 'all' ? ' active' : ''}`}
          onClick={() => chooseFaculty('all')}
        >
          All faculties
        </button>
        {faculties.map((f) => (
          <button
            type="button"
            key={f.id}
            className={`faculty-chip${faculty === f.id ? ' active' : ''}`}
            onClick={() => chooseFaculty(f.id)}
          >
            <span aria-hidden="true">{f.icon}</span> {f.name}
          </button>
        ))}
      </div>

      <div className="cl-card p-3 mb-4">
        <div className="row g-3">
          <div className="col-md-5">
            <label htmlFor="q" className="form-label small text-muted">Search</label>
            <input
              id="q"
              type="search"
              className="form-control"
              placeholder="Title, code, instructor or department"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="col-6 col-md-4">
            <label htmlFor="dept" className="form-label small text-muted">Department</label>
            <select
              id="dept"
              className="form-select"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              disabled={faculty === 'all'}
            >
              <option value="All">{faculty === 'all' ? 'Pick a faculty first' : 'All departments'}</option>
              {departmentsInView.map((d) => (
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
        {faculty !== 'all' && <> in {getFaculty(faculty).name}</>}
      </p>

      {results.length === 0 ? (
        <div className="cl-card p-5 text-center">
          <h2 className="h5">No courses match your search</h2>
          <p className="text-muted mb-3">Try a different keyword or clear the filters.</p>
          <button className="btn btn-outline-accent" onClick={clearAll}>
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
