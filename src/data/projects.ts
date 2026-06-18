const PROJECTS: {
  name: string
  description: string
  url?: string
  stars?: number
  language?: string
  category?: string
  technologies?: string[]
  featured: boolean
}[] = [
  {
    name: 'Auto Edu Mail Generator',
    description:
      'Automatically generates EDU email accounts with Python and Selenium automation.',
    stars: 119,
    language: 'Python',
    category: 'Automation',
    url: 'https://github.com/nitinkumar30/edu-mail-auto-generator',
    technologies: ['Python', 'Selenium'],
    featured: true,
  },
  {
    name: 'n8n Projects',
    description:
      'Workflow automation projects built with n8n for API orchestration.',
    stars: 12,
    language: 'TypeScript',
    category: 'Automation',
    url: 'https://github.com/nitinkumar30/n8n-projects',
    technologies: ['n8n', 'TypeScript', 'APIs'],
    featured: true,
  },
  {
    name: 'Naukri Auto Resume Uploader',
    description:
      'Automates resume uploads on Naukri.com job portal using Python and Selenium.',
    stars: 15,
    language: 'Python',
    category: 'Automation',
    url: 'https://github.com/nitinkumar30/naukri-auto-resume-uploader',
    technologies: ['Python', 'Selenium'],
    featured: true,
  },
  {
    name: 'Email Marketing Tool',
    description:
      'Automated email marketing campaigns and newsletters using Python SMTP.',
    stars: 8,
    language: 'Python',
    category: 'Automation',
    url: 'https://github.com/nitinkumar30/email-marketing-tool',
    technologies: ['Python', 'SMTP'],
    featured: true,
  },
  {
    name: 'Automation Framework',
    description:
      'Modular test automation framework built from scratch using Python, Pytest, and Selenium.',
    stars: 10,
    language: 'Python',
    category: 'Automation',
    url: 'https://github.com/nitinkumar30/automation-framework-in-python',
    technologies: ['Python', 'Pytest', 'Selenium'],
    featured: true,
  },
  {
    name: 'Emoji Encoder',
    description:
      'Encode and decode text into emoji-based representations.',
    stars: 7,
    language: 'Python',
    category: 'Development',
    url: 'https://github.com/nitinkumar30/emoji-encoder',
    technologies: ['Python'],
    featured: true,
  },
  {
    name: 'Ransomware Simulation',
    description:
      'Educational ransomware demonstrating file encryption for cybersecurity learning.',
    stars: 5,
    language: 'Python',
    category: 'Cyber Security',
    url: 'https://github.com/nitinkumar30/ransomware-using-python',
    technologies: ['Python', 'Cryptography'],
    featured: true,
  },
  {
    name: 'Investing Website Automation',
    description:
      'Automates investing platform interactions using Python and Selenium.',
    stars: 5,
    language: 'Python',
    category: 'Automation',
    url: 'https://github.com/nitinkumar30/automate-investing-website',
    technologies: ['Python', 'Selenium'],
    featured: true,
  },
  {
    name: 'Data Science Mini Projects',
    description:
      'Collection of ML, visualization, and analysis projects with Python.',
    stars: 6,
    language: 'Jupyter Notebook',
    category: 'Data Science',
    url: 'https://github.com/nitinkumar30/Data-Science-mini-projects',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    featured: true,
  },
  {
    name: 'PyShrink',
    description:
      'Python project sanitizer & packager with POM-style framework architecture.',
    url: 'https://github.com/nitinkumar30/pyshrink-vscode',
    language: 'Python',
    category: 'Open Source',
    technologies: ['Python'],
    featured: true,
  },
  {
    name: 'PhoneTracer',
    description:
      'OSINT toolkit for extracting metadata from phone numbers for security research.',
    url: 'https://github.com/nitinkumar30/phonetracer',
    language: 'Python',
    category: 'Cyber Security',
    technologies: ['Python'],
    featured: true,
  },
  {
    name: 'Ration Card Automation',
    description:
      'Automates ration card request submissions on government portals using Selenium.',
    category: 'Automation',
    technologies: ['Python', 'Selenium'],
    featured: false,
  },
  {
    name: 'Slack ChatBot',
    description:
      'Slack chatbot for automated team notifications and task management.',
    category: 'Automation',
    technologies: ['Python', 'Slack API'],
    featured: false,
  },
  {
    name: 'Meesho Order Automation',
    description:
      'Automates ordering workflow on Meesho e-commerce platform.',
    category: 'Automation',
    technologies: ['Python', 'Selenium'],
    featured: false,
  },
  {
    name: 'Gmail Dictionary Attack',
    description:
      'Dictionary attack simulation for security education and awareness.',
    category: 'Cyber Security',
    technologies: ['Python'],
    featured: false,
  },
  {
    name: 'Password Encrypter & Generator',
    description:
      'Password generation and encryption tool with multiple algorithms.',
    category: 'Cyber Security',
    technologies: ['Python', 'Cryptography'],
    featured: false,
  },
  {
    name: 'Live Camera Sketching',
    description:
      'Real-time webcam to pencil-sketch art conversion using OpenCV.',
    category: 'Development',
    technologies: ['Python', 'OpenCV'],
    featured: false,
  },
  {
    name: 'Airline Ticket Predictor',
    description:
      'ML model predicting airline ticket prices based on historical data.',
    category: 'Data Science',
    technologies: ['Python', 'Machine Learning'],
    featured: false,
  },
  {
    name: 'Sleep Sort',
    description:
      'Novel sleep sort algorithm implementation with multi-threading.',
    category: 'Development',
    technologies: ['Python'],
    featured: false,
  },
  {
    name: 'CSV Search Engine',
    description:
      'Search engine capable of indexing and querying CSV data files.',
    category: 'Data',
    technologies: ['Python', 'Pandas'],
    featured: false,
  },
]

export default PROJECTS
