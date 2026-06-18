const ACHIEVEMENTS: {
  title: string
  date: string
  description: string
  details: string[]
  type: 'award' | 'appreciation' | 'milestone'
}[] = [
  {
    title: "Chairman's Team Award",
    date: 'May 27, 2026',
    description:
      'Recognized at Happiest Minds Technologies for project contributions through code authenticity, code sharing, and small tools that benefited the team.',
    details: [
      'Awarded 1000 reward bonus points for exceptional performance',
      'Received a trophy & Certificate of Appreciation',
      'Recognized for extra effort in ensuring code authenticity and quality',
      'Created small utility tools that improved team productivity',
    ],
    type: 'award',
  },
  {
    title: 'Client Appreciation — Horton Team',
    date: '2026',
    description:
      'Client-side recognition for dedication, technical excellence, and leadership in the edu-tech domain project over the past year.',
    details: [
      'Applauded for bringing a new level of thoroughness and technical expertise to the team',
      'Recognized for challenging systems to ensure robustness under any situation',
      'Praised for passionate, creative ideas that help the team move forward',
      'Consistently recognized in sprint reviews for amazing work and high-quality output',
      'Acknowledged for taking on massive workloads with a respectful attitude and realistic deadline management',
    ],
    type: 'appreciation',
  },
  {
    title: 'iAppreciate Q2 \'24',
    date: '2024',
    description:
      'Quarterly recognition award at Happiest Minds Technologies for outstanding performance and contributions.',
    details: [
      'Quarterly recognition for exceptional contributions to automation and testing',
      'Awarded for delivering high-quality work and demonstrating technical leadership',
    ],
    type: 'award',
  },
  {
    title: 'Open Source Contributor — 160+ GitHub Stars',
    date: 'Ongoing',
    description:
      'Built and published open-source projects including PyShrink and PhoneTracer, used by developers globally.',
    details: [
      'PyShrink: Python project sanitizer & packager with POM-style architecture',
      'PhoneTracer: OSINT toolkit for phone number metadata extraction',
      '160+ GitHub stars across multiple repositories',
      '227+ GitHub repositories with active open source contributions',
    ],
    type: 'milestone',
  },
  {
    title: '30+ Professional Certifications',
    date: '2019 — Present',
    description:
      'Earned certifications across automation, data science, cybersecurity, cloud, and AI domains.',
    details: [
      'Data Science with Python — Simplilearn',
      'Agile for Practitioners — Tata Consultancy Services',
      'Automate the Boring Stuff with Python — Udemy',
      'Microsoft Technical Associate — Microsoft',
      'Programming Foundations: Software Testing/QA — LinkedIn',
    ],
    type: 'milestone',
  },
  {
    title: 'Codegoda 2022 — Programming Competition',
    date: '2022',
    description:
      'Participated in Codegoda 2022, a competitive programming competition showcasing algorithmic problem-solving skills.',
    details: [
      'Competed in a global programming competition',
      'Demonstrated proficiency in algorithms and data structures',
    ],
    type: 'milestone',
  },
  {
    title: 'Data Science Internship Program Lead',
    date: '2024',
    description:
      'Headed a data science internship program at Happiest Minds Technologies, mentoring and guiding interns.',
    details: [
      'Designed and assigned diverse data science projects covering real-world applications',
      'Mentored interns on data analysis, machine learning, and automation techniques',
      'Enhanced practical knowledge and hands-on skills of team members',
    ],
    type: 'milestone',
  },
  {
    title: 'GCP Automation & Testing Sessions',
    date: '2024',
    description:
      'Delivered technical sessions on GCP automation for data migration and testing best practices.',
    details: [
      'Conducted sessions on GCP automation for data migration workflows',
      'Shared testing best practices and framework design principles with teams',
      'Helped upskill team members in cloud automation technologies',
    ],
    type: 'milestone',
  },
]

export default ACHIEVEMENTS
