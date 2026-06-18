'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const links: { path: string; short: string; full: string }[] = [
  { path: '/', short: 'Home', full: 'Home' },
  { path: '/about', short: 'About', full: 'About' },
  { path: '/projects', short: 'Proj', full: 'Projects' },
  { path: '/experience', short: 'Exp', full: 'Experience' },
  { path: '/education', short: 'Edu', full: 'Education' },
  { path: '/skills', short: 'Skills', full: 'Skills' },
  { path: '/achievements', short: 'Awards', full: 'Achievements' },
  { path: '/certifications', short: 'Certs', full: 'Certifications' },
  { path: '/testimonials', short: 'Reviews', full: 'Testimonials' },
  { path: '/recommendations', short: 'Recs', full: 'Recommendations' },
  { path: '/publications', short: 'Pubs', full: 'Publications' },
]

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

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

      {/* Mobile hamburger button */}
      <div className="border-border shadow-shadow rounded-base bg-main flex w-full items-center justify-between border-2 px-3 py-2 lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-main-foreground cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <ThemeSwitcher />
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-border shadow-shadow rounded-base bg-main absolute top-full left-4 right-4 mt-2 border-2 p-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                className={clsx(
                  'hover:bg-secondary-background rounded-base border-2 px-3 py-2 text-sm transition-colors',
                  path === link.path
                    ? 'border-border bg-secondary-background'
                    : 'border-transparent',
                )}
                href={link.path}
                onClick={() => setOpen(false)}
              >
                {link.full}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
