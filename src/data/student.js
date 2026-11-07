// Demo student used by the mock login. All data is fictional.
export const student = {
  profile: {
    name: 'Demo Student',
    studentId: '2026-0142',
    major: 'Computer Science',
    year: 'Junior',
  },
  defaultEnrolled: ['cs301', 'cs340', 'en210', 'ma220'],
  cumulativeGpa: 3.4,
  completedCredits: 78,
  history: [
    { term: 'Fall 23', gpa: 3.1 },
    { term: 'Spring 24', gpa: 3.3 },
    { term: 'Fall 24', gpa: 3.2 },
    { term: 'Spring 25', gpa: 3.5 },
    { term: 'Fall 25', gpa: 3.6 },
    { term: 'Spring 26', gpa: 3.7 },
  ],
}

// Converts a 0-100 score to a 4.0-scale grade point.
export function scoreToPoints(score) {
  if (score >= 90) return 4.0
  if (score >= 85) return 3.7
  if (score >= 80) return 3.3
  if (score >= 75) return 3.0
  if (score >= 70) return 2.7
  if (score >= 65) return 2.3
  if (score >= 60) return 2.0
  if (score >= 50) return 1.0
  return 0
}
