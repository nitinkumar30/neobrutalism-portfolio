const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  highlights?: string[]
}[] = [
  {
    company: 'Happiest Minds Technologies',
    role: 'Senior Automation Engineer',
    description:
      'Leading automation engineering in the PDES department, developing robust test frameworks and mentoring team members.',
    startDate: 'March 2024',
    endDate: 'Present',
    highlights: [
      'Department: PDES (Product & Digital Engineering Services)',
      'Developed and maintained robust automation test scripts using Python and Selenium',
      'Enhanced existing automation frameworks, optimizing performance and ensuring scalability',
      'Led migration of test automation frameworks from legacy systems to modern platforms',
      'Headed an intern one-month internship in data science',
      'Delivered comprehensive session on GCP automation for data migration',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer',
    description:
      'Served as Automation Engineer in Python, developing automated solutions and supporting system engineering tasks.',
    startDate: 'October 2023',
    endDate: 'March 2024',
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Assistant System Engineer',
    description:
      'System engineering, integration, and performance analysis using manual and automated tools.',
    startDate: 'October 2022',
    endDate: 'September 2023',
    highlights: [
      'System engineering, software engineering, system integration',
      'Hardware and software testing',
      'Performance analysis using manual and automated tools',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Programmer',
    description:
      'Automation engineering with Selenium, framework design, and defect management.',
    startDate: 'October 2021',
    endDate: 'September 2022',
    highlights: [
      'Selenium Test Environment setup',
      'Framework design and implementation',
      'Defect management and regression testing',
      'Customer interaction and issue resolution',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'IT Analyst',
    description:
      'Software testing, database analysis, and client interaction for product requirements.',
    startDate: 'October 2020',
    endDate: 'September 2021',
    highlights: [
      'Software Functional Testing',
      'Test scenario preparation and execution',
      'Database impact analysis',
      'Client interaction for product requirements',
    ],
  },
  {
    company: 'Arka Jain University',
    role: 'Placement Coordinator',
    description:
      'Coordinated BCA student placements, resume building workshops, and employer communication.',
    startDate: 'September 2019',
    endDate: 'February 2020',
  },
  {
    company: 'Self-Employed',
    role: 'Freelance Web Developer',
    description:
      'Built websites and web applications for clients during college.',
    startDate: '2019',
    endDate: '2020',
  },
  {
    company: 'Integrated Software Enterprises',
    role: 'Internship Trainee',
    description:
      'Trained in ASP.NET framework and SQL Server backend development.',
    startDate: 'May 2019',
    endDate: 'July 2019',
  },
]

export default PAST_ROLES
