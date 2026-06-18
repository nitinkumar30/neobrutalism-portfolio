import {
  type IconType,
  SiPython,
  SiSelenium,
  SiTestinglibrary,
  SiPytest,
  SiJira,
  SiGit,
  SiGooglecloud,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiDocker,
  SiGithubactions,
  SiOpenai,
  SiAnthropic,
  SiPostman,
  SiGooglecolab,
} from '@icons-pack/react-simple-icons'

type Skill = { name: string; icon?: IconType }

const SKILLS: {
  field: string
  skills: Skill[]
}[] = [
  {
    field: 'Automation',
    skills: [
      { name: 'Python Automation', icon: SiPython },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Playwright', icon: SiTestinglibrary },
      { name: 'Pytest', icon: SiPytest },
      { name: 'CI/CD', icon: SiGithubactions },
    ],
  },
  {
    field: 'Testing',
    skills: [
      { name: 'Manual Testing', icon: SiPostman },
      { name: 'API Testing', icon: SiPostman },
      { name: 'JIRA', icon: SiJira },
      { name: 'Pytest', icon: SiPytest },
    ],
  },
  {
    field: 'Python Development',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Flask', icon: SiFlask },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    field: 'Web Development',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
  },
  {
    field: 'Data Science',
    skills: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Scikit-learn', icon: SiScikitlearn },
    ],
  },
  {
    field: 'Cloud & Tools',
    skills: [
      { name: 'GCP', icon: SiGooglecloud },
      { name: 'Docker', icon: SiDocker },
      { name: 'SQL', icon: SiMysql },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    field: 'AI & LLMs',
    skills: [
      { name: 'ChatGPT', icon: SiOpenai },
      { name: 'Gemini', icon: SiGooglecolab },
      { name: 'Claude Code', icon: SiAnthropic },
      { name: 'DeepSeek', icon: SiOpenai },
      { name: 'Cursor', icon: SiOpenai },
      { name: 'openCode', icon: SiOpenai },
      { name: 'Codex', icon: SiOpenai },
      { name: 'AntiGravity', icon: SiOpenai },
      { name: 'Lovable', icon: SiOpenai },
      { name: 'Zaphier', icon: SiOpenai },
    ],
  },
  {
    field: 'Models',
    skills: [
      { name: 'DeepSeek V4 Flash', icon: SiOpenai },
      { name: 'Opus', icon: SiAnthropic },
      { name: 'Sonnet', icon: SiAnthropic },
      { name: 'Haiku', icon: SiAnthropic },
      { name: 'Gemini Flash', icon: SiGooglecolab },
      { name: 'Gemini Flash Lite', icon: SiGooglecolab },
      { name: 'Gemini Nano', icon: SiGooglecolab },
      { name: 'GPT 4o', icon: SiOpenai },
      { name: 'GPT 4o Mini', icon: SiOpenai },
      { name: 'Stable Diffusion', icon: SiOpenai },
      { name: 'DALL-E', icon: SiOpenai },
    ],
  },
]

export default SKILLS
export type { Skill }
