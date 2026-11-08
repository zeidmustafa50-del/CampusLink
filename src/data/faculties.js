// Faculties and their departments (fictional university structure).
// A student's "major" is one of the departments below.
export const faculties = [
  {
    id: 'engineering',
    name: 'Engineering & Architecture',
    icon: '🏗️',
    blurb: 'Design, build and power the physical world.',
    departments: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Architecture'],
  },
  {
    id: 'computing',
    name: 'Computing & IT',
    icon: '💻',
    blurb: 'Software, networks, data and intelligent systems.',
    departments: ['Computer Science', 'Information Technology', 'Data Science'],
  },
  {
    id: 'business',
    name: 'Business & Economics',
    icon: '📊',
    blurb: 'Management, finance, marketing and markets.',
    departments: ['Business Administration', 'Accounting & Finance', 'Marketing', 'Economics'],
  },
  {
    id: 'health',
    name: 'Health Sciences',
    icon: '🩺',
    blurb: 'Medicine, pharmacy, nursing and public health.',
    departments: ['Medicine', 'Pharmacy', 'Nursing', 'Public Health'],
  },
  {
    id: 'sciences',
    name: 'Natural Sciences',
    icon: '🔬',
    blurb: 'Mathematics and the study of nature.',
    departments: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
  },
  {
    id: 'arts',
    name: 'Arts & Design',
    icon: '🎨',
    blurb: 'Visual communication, space and creative practice.',
    departments: ['Graphic Design', 'Interior Design', 'Fine Arts'],
  },
  {
    id: 'humanities',
    name: 'Humanities & Languages',
    icon: '📖',
    blurb: 'Language, literature, history and ideas.',
    departments: ['Languages', 'History', 'Philosophy'],
  },
  {
    id: 'social',
    name: 'Law & Social Sciences',
    icon: '⚖️',
    blurb: 'Law, society, behaviour and media.',
    departments: ['Law', 'Psychology', 'Political Science', 'Media & Communication'],
  },
  {
    id: 'education',
    name: 'Education',
    icon: '🎓',
    blurb: 'Preparing the next generation of teachers.',
    departments: ['Teacher Education', 'Special Education'],
  },
]

export const getFaculty = (id) => faculties.find((f) => f.id === id)
export const facultyOfDepartment = (dept) => faculties.find((f) => f.departments.includes(dept))
