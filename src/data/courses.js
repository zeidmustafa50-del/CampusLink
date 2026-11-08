// Fictional course catalog covering every faculty (no backend: the data lives in the frontend).
import { facultyOfDepartment } from './faculties.js'

const raw = [
  {
    id: 'ce210', code: 'CIVL210', title: 'Structural Analysis',
    department: 'Civil Engineering', credits: 3, instructor: 'Dr. Karim Saad',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '08:30', end: '09:45', room: 'E-110', level: 'Intermediate',
    description: 'How beams, frames and trusses carry loads, and how to check that a structure is safe.',
    outcomes: ['Draw shear and moment diagrams', 'Analyze statically determinate structures', 'Use basic structural software'],
  },
  {
    id: 'ce330', code: 'CIVL330', title: 'Geotechnical Engineering',
    department: 'Civil Engineering', credits: 3, instructor: 'Dr. Rana Farah',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '11:00', end: '12:15', room: 'E-205', level: 'Advanced',
    description: 'Soil behavior, foundations and slope stability for real construction sites.',
    outcomes: ['Classify soils from lab tests', 'Estimate bearing capacity', 'Design simple shallow foundations'],
  },
  {
    id: 'ee230', code: 'ELEC230', title: 'Circuit Analysis',
    department: 'Electrical Engineering', credits: 3, instructor: 'Dr. Hadi Mansour',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '10:00', end: '11:15', room: 'Lab 2', level: 'Intermediate',
    description: 'Voltage, current and the laws that describe every electric circuit.',
    outcomes: ['Apply Kirchhoff and Ohm laws', 'Solve RC and RL circuits', 'Measure circuits with lab instruments'],
  },
  {
    id: 'ee340', code: 'ELEC340', title: 'Power Systems',
    department: 'Electrical Engineering', credits: 3, instructor: 'Dr. Nadine Khoury',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '13:00', end: '14:15', room: 'E-302', level: 'Advanced',
    description: 'Generation, transmission and distribution of electrical energy.',
    outcomes: ['Model transmission lines', 'Compute power flow in small networks', 'Explain renewable energy integration'],
  },
  {
    id: 'me220', code: 'MECH220', title: 'Thermodynamics',
    department: 'Mechanical Engineering', credits: 3, instructor: 'Dr. Fadi Yazbek',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '09:00', end: '10:15', room: 'E-118', level: 'Intermediate',
    description: 'Energy, heat and work, from engines to refrigerators.',
    outcomes: ['State the laws of thermodynamics', 'Analyze power and refrigeration cycles', 'Compute efficiency of real systems'],
  },
  {
    id: 'ar201', code: 'ARCH201', title: 'Architectural Design Studio',
    department: 'Architecture', credits: 4, instructor: 'Arch. Maya Sleiman',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '14:00', end: '16:30', room: 'Studio 1', level: 'Intermediate',
    description: 'Project-based studio on form, space and context, with weekly critiques.',
    outcomes: ['Develop a design concept', 'Draw plans, sections and elevations', 'Present and defend a project'],
  },
  {
    id: 'cs301', code: 'CS301', title: 'Software Engineering',
    department: 'Computer Science', credits: 3, instructor: 'Dr. Layla Haddad',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '10:00', end: '11:15', room: 'B-204', level: 'Intermediate',
    description: 'Teamwork, requirements, design patterns, testing and version control. Students build a small product in agile sprints.',
    outcomes: ['Write and review user stories', 'Apply common design patterns', 'Collaborate with Git branches and pull requests'],
  },
  {
    id: 'cs340', code: 'CS340', title: 'Computer Networks',
    department: 'Computer Science', credits: 3, instructor: 'Dr. Omar Nasser',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '09:00', end: '10:15', room: 'Lab 3', level: 'Intermediate',
    description: 'How data moves across the internet: layers, addressing, routing, transport and basic network security.',
    outcomes: ['Explain the TCP/IP and OSI layers', 'Configure IP addressing and routing', 'Capture and read network traffic'],
  },
  {
    id: 'it250', code: 'INFT250', title: 'Web Development',
    department: 'Information Technology', credits: 3, instructor: 'Ms. Dina Rahal',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '11:30', end: '12:45', room: 'Lab 1', level: 'Intermediate',
    description: 'Build responsive websites with HTML, CSS, JavaScript and a modern framework.',
    outcomes: ['Structure pages with semantic HTML', 'Style responsive layouts', 'Build interactive pages with JavaScript'],
  },
  {
    id: 'ds310', code: 'DATA310', title: 'Machine Learning Foundations',
    department: 'Data Science', credits: 3, instructor: 'Dr. Tarek Aoun',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '13:00', end: '14:15', room: 'B-310', level: 'Advanced',
    description: 'From data cleaning to models: regression, classification and evaluation.',
    outcomes: ['Prepare datasets for modeling', 'Train and evaluate basic models', 'Explain overfitting and validation'],
  },
  {
    id: 'ba200', code: 'BUSN200', title: 'Principles of Management',
    department: 'Business Administration', credits: 3, instructor: 'Dr. Samar Jaber',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '10:00', end: '11:15', room: 'C-101', level: 'Intermediate',
    description: 'How organizations plan, organize, lead and control, with real company cases.',
    outcomes: ['Describe core management functions', 'Analyze a company case study', 'Lead a small team project'],
  },
  {
    id: 'af210', code: 'ACCT210', title: 'Financial Accounting',
    department: 'Accounting & Finance', credits: 3, instructor: 'Dr. Ziad Chahine',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '08:30', end: '09:45', room: 'C-204', level: 'Intermediate',
    description: 'Record transactions and prepare the three main financial statements.',
    outcomes: ['Prepare a balance sheet and income statement', 'Apply double-entry bookkeeping', 'Read the statements of a listed company'],
  },
  {
    id: 'mk230', code: 'MKTG230', title: 'Digital Marketing',
    department: 'Marketing', credits: 3, instructor: 'Ms. Joelle Karam',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '14:00', end: '15:15', room: 'C-110', level: 'Intermediate',
    description: 'Brand strategy, social media, search and analytics for modern campaigns.',
    outcomes: ['Define a target audience', 'Plan a multi-channel campaign', 'Read basic campaign analytics'],
  },
  {
    id: 'ec220', code: 'ECON220', title: 'Microeconomics',
    department: 'Economics', credits: 3, instructor: 'Dr. Elias Bou Saab',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '10:00', end: '11:15', room: 'C-205', level: 'Intermediate',
    description: 'How consumers and firms make choices and how markets set prices.',
    outcomes: ['Model supply and demand', 'Explain market structures', 'Evaluate simple policy changes'],
  },
  {
    id: 'md101', code: 'MED101', title: 'Human Anatomy',
    department: 'Medicine', credits: 5, instructor: 'Dr. Hala Daher',
    semester: 'Fall 2026', days: ['Mon', 'Tue', 'Thu'], start: '08:00', end: '09:30', room: 'H-Amphi A', level: 'Introductory',
    description: 'Structure of the human body, region by region, with dissection and imaging.',
    outcomes: ['Name major bones, muscles and organs', 'Relate structure to function', 'Read basic medical images'],
  },
  {
    id: 'ph210', code: 'PHAR210', title: 'Pharmacology I',
    department: 'Pharmacy', credits: 4, instructor: 'Dr. Wissam Tabet',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '09:00', end: '10:30', room: 'H-212', level: 'Intermediate',
    description: 'How drugs act in the body: absorption, distribution, metabolism and excretion.',
    outcomes: ['Explain drug mechanisms', 'Describe pharmacokinetics', 'Identify common drug interactions'],
  },
  {
    id: 'nu150', code: 'NURS150', title: 'Fundamentals of Nursing',
    department: 'Nursing', credits: 4, instructor: 'Ms. Carla Nehme',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '08:00', end: '09:30', room: 'H-Sim 1', level: 'Introductory',
    description: 'Core patient care skills practiced in the simulation lab.',
    outcomes: ['Take and record vital signs', 'Apply infection-control rules', 'Communicate with patients and families'],
  },
  {
    id: 'phe200', code: 'PUBH200', title: 'Introduction to Public Health',
    department: 'Public Health', credits: 3, instructor: 'Dr. Rima Hakim',
    semester: 'Fall 2026', days: ['Wed', 'Fri'], start: '11:00', end: '12:15', room: 'H-120', level: 'Introductory',
    description: 'Health of populations: epidemiology, prevention and health policy.',
    outcomes: ['Interpret basic health statistics', 'Describe how outbreaks are investigated', 'Discuss prevention programs'],
  },
  {
    id: 'ma220', code: 'MATH220', title: 'Linear Algebra',
    department: 'Mathematics', credits: 3, instructor: 'Dr. Walid Salameh',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '12:00', end: '13:15', room: 'S-105', level: 'Intermediate',
    description: 'Vectors, matrices and linear transformations, the language behind graphics, data and physics.',
    outcomes: ['Solve systems of linear equations', 'Compute eigenvalues and eigenvectors', 'Apply matrices to real problems'],
  },
  {
    id: 'ma150', code: 'MATH150', title: 'Calculus I',
    department: 'Mathematics', credits: 4, instructor: 'Dr. Nour Itani',
    semester: 'Fall 2026', days: ['Mon', 'Tue', 'Thu'], start: '09:00', end: '10:00', room: 'S-101', level: 'Introductory',
    description: 'Limits, derivatives and integrals, with applications in science and engineering.',
    outcomes: ['Compute limits and derivatives', 'Apply the chain and product rules', 'Evaluate basic integrals'],
  },
  {
    id: 'py210', code: 'PHYS210', title: 'Classical Mechanics',
    department: 'Physics', credits: 3, instructor: 'Dr. Bassam Rizk',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '12:00', end: '13:15', room: 'S-210', level: 'Intermediate',
    description: 'Motion, forces, energy and momentum from Newton to Lagrange.',
    outcomes: ['Solve motion problems with Newton laws', 'Use energy and momentum conservation', 'Model oscillating systems'],
  },
  {
    id: 'ch220', code: 'CHEM220', title: 'Organic Chemistry',
    department: 'Chemistry', credits: 4, instructor: 'Dr. Lina Maalouf',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '08:00', end: '09:30', room: 'S-Lab 4', level: 'Intermediate',
    description: 'Structure and reactions of carbon compounds, with weekly lab work.',
    outcomes: ['Name organic compounds', 'Predict reaction products', 'Run and report a lab synthesis'],
  },
  {
    id: 'bi210', code: 'BIOL210', title: 'Cell Biology',
    department: 'Biology', credits: 3, instructor: 'Dr. Hiba Zein',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '09:30', end: '10:45', room: 'S-Lab 2', level: 'Intermediate',
    description: 'Cell structure, membranes, energy and division.',
    outcomes: ['Describe organelle functions', 'Explain cell signaling and division', 'Use a microscope to identify cell types'],
  },
  {
    id: 'gd220', code: 'DSGN220', title: 'Typography and Layout',
    department: 'Graphic Design', credits: 3, instructor: 'Ms. Tala Najjar',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '13:30', end: '16:00', room: 'Studio 2', level: 'Intermediate',
    description: 'Type, grids and hierarchy for posters, books and screens.',
    outcomes: ['Choose and pair typefaces', 'Build grid-based layouts', 'Prepare files for print and screen'],
  },
  {
    id: 'id240', code: 'INTD240', title: 'Space Planning',
    department: 'Interior Design', credits: 3, instructor: 'Ms. Yara Gemayel',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '13:30', end: '16:00', room: 'Studio 3', level: 'Intermediate',
    description: 'Plan functional and comfortable interior spaces for homes and offices.',
    outcomes: ['Draw furniture and circulation plans', 'Select materials and lighting', 'Present a client-ready concept board'],
  },
  {
    id: 'fa110', code: 'FINE110', title: 'Drawing Fundamentals',
    department: 'Fine Arts', credits: 3, instructor: 'Mr. Ghassan Dib',
    semester: 'Fall 2026', days: ['Wed', 'Fri'], start: '09:00', end: '11:30', room: 'Studio 4', level: 'Introductory',
    description: 'Observation, line, light and composition in charcoal and ink.',
    outcomes: ['Draw from observation', 'Control light and shadow', 'Build a small portfolio'],
  },
  {
    id: 'en210', code: 'ENGL210', title: 'Academic Writing',
    department: 'Languages', credits: 3, instructor: 'Ms. Rita Fakhoury',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '11:00', end: '12:15', room: 'L-104', level: 'Intermediate',
    description: 'Write clear, well-argued essays and reports with proper citation.',
    outcomes: ['Structure an argument', 'Cite sources correctly', 'Revise and edit your own writing'],
  },
  {
    id: 'ar220', code: 'ARAB220', title: 'Modern Arabic Literature',
    department: 'Languages', credits: 3, instructor: 'Dr. Souad Hammoud',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '11:00', end: '12:15', room: 'L-210', level: 'Intermediate',
    description: 'Novels, poetry and essays from the Nahda to today.',
    outcomes: ['Analyze literary texts', 'Place authors in their historical context', 'Write a critical essay'],
  },
  {
    id: 'hi201', code: 'HIST201', title: 'History of the Modern Middle East',
    department: 'History', credits: 3, instructor: 'Dr. Marwan Karam',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '14:00', end: '15:15', room: 'L-301', level: 'Intermediate',
    description: 'Empires, states and social change from 1800 to the present.',
    outcomes: ['Read and compare primary sources', 'Explain causes of major events', 'Build a historical argument'],
  },
  {
    id: 'ph101', code: 'PHIL101', title: 'Critical Thinking and Ethics',
    department: 'Philosophy', credits: 3, instructor: 'Dr. Sandra Kassab',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '14:00', end: '15:15', room: 'L-105', level: 'Introductory',
    description: 'Reason well and debate hard moral questions.',
    outcomes: ['Spot common fallacies', 'Apply ethical theories to cases', 'Argue both sides of an issue'],
  },
  {
    id: 'lw210', code: 'LAW210', title: 'Constitutional Law',
    department: 'Law', credits: 3, instructor: 'Dr. Jad Moussa',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '09:00', end: '10:15', room: 'J-201', level: 'Intermediate',
    description: 'Powers of the state, separation of powers and fundamental rights.',
    outcomes: ['Explain the structure of a constitution', 'Analyze landmark cases', 'Write a short legal memo'],
  },
  {
    id: 'ps201', code: 'PSYC201', title: 'Developmental Psychology',
    department: 'Psychology', credits: 3, instructor: 'Dr. Maha Atallah',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '12:30', end: '13:45', room: 'J-110', level: 'Intermediate',
    description: 'How people grow and change from infancy to old age.',
    outcomes: ['Compare major developmental theories', 'Describe milestones across life stages', 'Design a simple observation study'],
  },
  {
    id: 'pl210', code: 'POLS210', title: 'Comparative Politics',
    department: 'Political Science', credits: 3, instructor: 'Dr. Fouad Najm',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '15:30', end: '16:45', room: 'J-205', level: 'Intermediate',
    description: 'Compare political systems, parties and elections across countries.',
    outcomes: ['Classify political systems', 'Compare electoral rules', 'Write a country comparison'],
  },
  {
    id: 'mc230', code: 'MEDC230', title: 'Media Production',
    department: 'Media & Communication', credits: 3, instructor: 'Mr. Sami Awad',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '15:00', end: '17:30', room: 'Studio TV', level: 'Intermediate',
    description: 'Shoot, edit and publish short video stories.',
    outcomes: ['Plan a shoot with a shot list', 'Edit video and audio', 'Publish for web and social platforms'],
  },
  {
    id: 'te210', code: 'EDUC210', title: 'Classroom Management',
    department: 'Teacher Education', credits: 3, instructor: 'Dr. Ghada Sabbagh',
    semester: 'Fall 2026', days: ['Mon', 'Wed'], start: '10:30', end: '11:45', room: 'K-102', level: 'Intermediate',
    description: 'Build positive, productive classrooms for every learner.',
    outcomes: ['Set routines and expectations', 'Handle disruptive behavior calmly', 'Plan engaging lessons'],
  },
  {
    id: 'se220', code: 'SPED220', title: 'Inclusive Education',
    department: 'Special Education', credits: 3, instructor: 'Dr. Hind Jarrar',
    semester: 'Fall 2026', days: ['Tue', 'Thu'], start: '10:30', end: '11:45', room: 'K-210', level: 'Intermediate',
    description: 'Support learners with different needs in regular classrooms.',
    outcomes: ['Identify common learning differences', 'Adapt activities and assessment', 'Work with families and specialists'],
  },
]

// Every course also knows its faculty, derived from its department.
export const courses = raw.map((c) => ({ ...c, faculty: facultyOfDepartment(c.department).id }))

export const departments = [...new Set(courses.map((c) => c.department))]
export const getCourse = (id) => courses.find((c) => c.id === id)

// Courses every student starts with: up to 3 from their major plus Academic Writing.
export const defaultCoursesFor = (major) => {
  const own = courses.filter((c) => c.department === major).slice(0, 3).map((c) => c.id)
  return [...own, 'en210'].filter((id, i, a) => a.indexOf(id) === i)
}
