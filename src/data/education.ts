const EDUCATION: {
  degree: string
  institution: string
  duration?: string
  year?: string
  description?: string
  highlights?: string[]
}[] = [
  {
    degree: 'MCA (Master of Computer Applications)',
    institution: 'Arka Jain University',
    duration: '2021 — 2023',
    description:
      'Completed Post Graduation with Computer Software as specialization.',
    highlights: ['Computer Science', 'Software Development', 'Data Structures'],
  },
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Arka Jain University',
    duration: '2017 — 2020',
    description: 'Completed Graduation with IT as specialization.',
    highlights: ['Information Technology', 'Programming', 'Database Management'],
  },
  {
    degree: 'Intermediate (Science)',
    institution: 'DAV Public School, NIT Campus',
    year: '2017',
    description:
      'Completed schooling with Science stream & 1st division.',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
  },
]

export default EDUCATION
