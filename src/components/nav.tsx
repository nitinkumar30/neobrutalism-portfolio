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
  { path: '/', short: 'Home', full: 'Home', icon: <Home className="h-4 w-4" /> },
  { path: '/about', short: 'About', full: 'About', icon: <User className="h-4 w-4" /> },
  { path: '/projects', short: 'Proj', full: 'Projects', icon: <FolderGit2 className="h-4 w-4" /> },
  { path: '/experience', short: 'Exp', full: 'Experience', icon: <Briefcase className="h-4 w-4" /> },
  { path: '/education', short: 'Edu', full: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
  { path: '/skills', short: 'Skills', full: 'Skills', icon: <Code2 className="h-4 w-4" /> },
  { path: '/achievements', short: 'Awards', full: 'Achievements', icon: <Trophy className="h-4 w-4" /> },
  { path: '/certifications', short: 'Certs', full: 'Certifications', icon: <Award className="h-4 w-4" /> },
  { path: '/testimonials', short: 'Reviews', full: 'Testimonials', icon: <MessageSquare className="h-4 w-4" /> },
  { path: '/recommendations', short: 'Recs', full: 'Recommendations', icon: <ThumbsUp className="h-4 w-4" /> },
  { path: '/publications', short: 'Pubs', full: 'Publications', icon: <FileText className="h-4 w-4" /> },
]

const colors = [
  'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500',
  'bg-emerald-500', 'bg-cyan-500', 'bg-blue-500', 'bg-indigo-500',
  'bg-violet-500', 'bg-fuchsia-500', 'bg-rose-500',
]

const positions = [
  { x: -108, y: 19 }, { x: -99, y: 48 }, { x: -82, y: 74 },
  { x: -58, y: 93 }, { x: -30, y: 106 }, { x: 0, y: 110 },
  { x: 30, y: 106 }, { x: 58, y: 93 }, { x: 82, y: 74 },
  { x: 99, y: 48 }, { x: 108, y: 19 },
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

      {/* Mobile: colourful popup hamburger menu */}
      <div className="flex w-full items-center lg:hidden">
        <nav className="menu relative mx-auto" style={{ width: 70, height: 70, fontSize: 26 }}>
          <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" style={{ display: 'none' }} />
          <label
            htmlFor="menu-open"
            className="menu-open-button border-border shadow-shadow flex cursor-pointer items-center justify-center rounded-full border-2"
            style={{
              width: 70,
              height: 70,
              background: '#ffd700',
              zIndex: 2,
              position: 'absolute' as const,
              top: 0,
              left: 0,
              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transitionDuration: '0.3s',
              transform: 'scale(1.1, 1.1) translate3d(0, 0, 0)',
              boxShadow: '3px 3px 10px 0 rgba(178, 34, 34, 0.5)',
              textShadow: '1px 1px 0 rgba(0, 0, 0, 0.12)',
            }}
          >
            <span className="lines line-1" style={{
              display: 'block', position: 'absolute', top: '50%', left: '50%',
              marginLeft: -17, marginTop: -1, width: 35, height: 4,
              background: '#0000cc', borderRadius: '1em',
              transition: 'transform 200ms',
              transform: 'translate3d(0, -9px, 0)',
            }} />
            <span className="lines line-2" style={{
              display: 'block', position: 'absolute', top: '50%', left: '50%',
              marginLeft: -17, marginTop: -1, width: 35, height: 4,
              background: '#0000cc', borderRadius: '1em',
              transition: 'transform 200ms',
              transform: 'translate3d(0, 0, 0)',
            }} />
            <span className="lines line-3" style={{
              display: 'block', position: 'absolute', top: '50%', left: '50%',
              marginLeft: -17, marginTop: -1, width: 35, height: 4,
              background: '#0000cc', borderRadius: '1em',
              transition: 'transform 200ms',
              transform: 'translate3d(0, 9px, 0)',
            }} />
          </label>

          {links.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                'menu-item',
                'flex flex-col items-center justify-center rounded-full text-white no-underline',
                colors[i % colors.length],
              )}
              style={{
                width: 52,
                height: 52,
                position: 'absolute',
                top: 9,
                left: 9,
                borderRadius: '100%',
                color: '#ffffff',
                transition: 'transform ease-out 200ms',
                transitionDuration: '0.2s',
                transform: 'translate3d(0, 0, 0)',
                boxShadow: '3px 3px 10px 0 rgba(178, 34, 34, 0.5)',
                textShadow: '1px 1px 0 rgba(0, 0, 0, 0.12)',
              }}
            >
              <span className="text-xs">{link.icon}</span>
              <span className="text-[7px] font-bold leading-tight">{link.short}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <ThemeSwitcher />
        </div>

        <style>{`
          .menu-open-button:hover {
            transform: scale(1.2, 1.2) translate3d(0, 0, 0) !important;
          }
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
