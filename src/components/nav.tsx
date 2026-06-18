'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  Home, User, FolderGit2, Briefcase, GraduationCap,
  Code2, Trophy, Award, MessageSquare, ThumbsUp, FileText,
} from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const links: { path: string; short: string; full: string; icon: React.ReactNode }[] = [
  { path: '/', short: 'Home', full: 'Home', icon: <Home className="h-5 w-5" /> },
  { path: '/about', short: 'About', full: 'About', icon: <User className="h-5 w-5" /> },
  { path: '/projects', short: 'Proj', full: 'Projects', icon: <FolderGit2 className="h-5 w-5" /> },
  { path: '/experience', short: 'Exp', full: 'Experience', icon: <Briefcase className="h-5 w-5" /> },
  { path: '/education', short: 'Edu', full: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
  { path: '/skills', short: 'Skills', full: 'Skills', icon: <Code2 className="h-5 w-5" /> },
  { path: '/achievements', short: 'Awards', full: 'Achievements', icon: <Trophy className="h-5 w-5" /> },
  { path: '/certifications', short: 'Certs', full: 'Certifications', icon: <Award className="h-5 w-5" /> },
  { path: '/testimonials', short: 'Reviews', full: 'Testimonials', icon: <MessageSquare className="h-5 w-5" /> },
  { path: '/recommendations', short: 'Recs', full: 'Recommendations', icon: <ThumbsUp className="h-5 w-5" /> },
  { path: '/publications', short: 'Pubs', full: 'Publications', icon: <FileText className="h-5 w-5" /> },
]

export default function Nav() {
  const path = usePathname()

  return (
    <div className="fixed top-5 left-0 z-50 flex w-full justify-center px-4 max-lg:hidden">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base mx-auto flex items-center justify-center gap-1 border-2 px-3 py-2 text-xs sm:gap-2 sm:px-4 sm:text-sm md:text-base lg:gap-3 lg:px-5 lg:text-lg">
        <TooltipProvider>
          {links.map((link) => (
            <Tooltip key={link.path}>
              <TooltipTrigger asChild>
                <Link
                  className={clsx(
                    'hover:bg-secondary-background hover:shadow-shadow rounded-base border-2 whitespace-nowrap px-1.5 py-1 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:px-2',
                    path === link.path
                      ? 'border-border bg-secondary-background shadow-shadow'
                      : 'border-transparent',
                  )}
                  href={link.path}
                >
                  {link.short}
                </Link>
              </TooltipTrigger>
              <TooltipContent>{link.full}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
