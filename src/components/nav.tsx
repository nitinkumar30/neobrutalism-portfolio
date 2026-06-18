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

const positions = [
  { x: -94, y: 17 }, { x: -85, y: 42 }, { x: -71, y: 64 },
  { x: -50, y: 81 }, { x: -26, y: 91 }, { x: 0, y: 95 },
  { x: 26, y: 91 }, { x: 50, y: 81 }, { x: 71, y: 64 },
  { x: 85, y: 42 }, { x: 94, y: 17 },
]

export default function Nav() {
  const path = usePathname()

  return (
    <div className="fixed top-5 left-0 z-50 flex w-full justify-center px-4">
      {/* Desktop nav */}
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base mx-auto hidden items-center justify-center gap-1 border-2 px-3 py-2 text-xs sm:gap-2 sm:px-4 sm:text-sm md:text-base lg:flex lg:gap-3 lg:px-5 lg:text-lg">
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

      {/* Mobile: neobrutalism popup hamburger menu */}
      <div className="flex w-full items-center lg:hidden">
        <nav className="menu relative mx-auto" style={{ width: 56, height: 56, fontSize: 26 }}>
          <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" style={{ display: 'none' }} />
          <label
            htmlFor="menu-open"
            className="menu-open-button bg-main text-main-foreground border-border shadow-shadow flex cursor-pointer items-center justify-center rounded-full border-2"
            style={{
              width: 56,
              height: 56,
              zIndex: 2,
              position: 'absolute' as const,
              top: 0,
              left: 0,
              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transitionDuration: '0.3s',
              transform: 'scale(1.1, 1.1) translate3d(0, 0, 0)',
            }}
          >
            <span className="lines line-1" style={{
              display: 'block', position: 'absolute', top: '50%', left: '50%',
              marginLeft: -14, marginTop: -1.5, width: 28, height: 3,
              background: 'var(--main-foreground)', borderRadius: '1em',
              transition: 'transform 200ms',
              transform: 'translate3d(0, -7px, 0)',
            }} />
            <span className="lines line-2" style={{
              display: 'block', position: 'absolute', top: '50%', left: '50%',
              marginLeft: -14, marginTop: -1.5, width: 28, height: 3,
              background: 'var(--main-foreground)', borderRadius: '1em',
              transition: 'transform 200ms',
              transform: 'translate3d(0, 0, 0)',
            }} />
            <span className="lines line-3" style={{
              display: 'block', position: 'absolute', top: '50%', left: '50%',
              marginLeft: -14, marginTop: -1.5, width: 28, height: 3,
              background: 'var(--main-foreground)', borderRadius: '1em',
              transition: 'transform 200ms',
              transform: 'translate3d(0, 7px, 0)',
            }} />
          </label>

          {links.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                'menu-item',
                'bg-secondary-background text-foreground border-border shadow-shadow',
                'flex items-center justify-center rounded-full border-2 no-underline',
                'hover:bg-main hover:text-main-foreground',
                'transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
              )}
              style={{
                width: 44,
                height: 44,
                position: 'absolute',
                top: 6,
                left: 6,
                transitionDuration: '0.2s',
                transform: 'translate3d(0, 0, 0)',
              }}
            >
              {link.icon}
            </Link>
          ))}
        </nav>

        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <ThemeSwitcher />
        </div>

        <style>{`
          #menu-open:checked + .menu-open-button {
            transition-timing-function: linear;
            transition-duration: 0.2s;
            transform: scale(1, 1) translate3d(0, 0, 0) !important;
          }
          #menu-open:checked + .menu-open-button .line-1 {
            transform: translate3d(0, 0, 0) rotate(45deg) !important;
          }
          #menu-open:checked + .menu-open-button .line-2 {
            transform: translate3d(0, 0, 0) scale(0, 1) !important;
          }
          #menu-open:checked + .menu-open-button .line-3 {
            transform: translate3d(0, 0, 0) rotate(-45deg) !important;
          }
          ${links.map((_, i) => `
            #menu-open:checked ~ .menu-item:nth-child(${i + 3}) {
              transition-duration: 0.4s;
              transition-timing-function: cubic-bezier(0.2, 1, 0.2, 1.2);
              transition-delay: ${i * 0.05}s;
              transform: translate3d(${positions[i].x}px, ${positions[i].y}px, 0) !important;
            }
          `).join('')}
        `}</style>
      </div>
    </div>
  )
}
