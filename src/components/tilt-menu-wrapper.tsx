'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { X } from 'lucide-react'

const navLinks: { path: string; label: string }[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/skills', label: 'Skills' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/recommendations', label: 'Recommendations' },
  { path: '/publications', label: 'Publications' },
]

export default function TiltMenuWrapper({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const frontRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const offset = 1800

  const updateTransformOrigin = useCallback(() => {
    const scrollTop = window.scrollY
    const pageHeight = document.documentElement.scrollHeight
    const equation = ((scrollTop + offset) / pageHeight) * 100
    if (frontRef.current) {
      frontRef.current.style.transformOrigin = `center ${Math.min(equation, 100)}%`
    }
  }, [])

  useEffect(() => {
    updateTransformOrigin()
    window.addEventListener('scroll', updateTransformOrigin)
    return () => window.removeEventListener('scroll', updateTransformOrigin)
  }, [updateTransformOrigin])

  const openMenu = useCallback(() => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
    if (hamburgerRef.current) {
      hamburgerRef.current.style.position = 'absolute'
      hamburgerRef.current.style.top = window.scrollY + 12 + 'px'
    }
  }, [])

  const closeMenu = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
    setTimeout(() => {
      if (hamburgerRef.current) {
        hamburgerRef.current.style.position = 'fixed'
        hamburgerRef.current.style.top = '12px'
      }
    }, 300)
  }, [])

  return (
    <>
      {/* Paper-back nav panel — mobile only */}
      <div
        className="fixed top-0 left-0 z-40 h-screen w-full hidden max-lg:flex flex-col"
        style={{ backgroundColor: 'var(--main)' }}
      >
        <div className="flex items-center justify-between px-6 pt-5">
          <span className="text-main-foreground text-lg font-bold">Navigation</span>
          <button
            onClick={closeMenu}
            className="border-border shadow-shadow rounded-base bg-secondary-background text-foreground flex h-9 w-9 cursor-pointer items-center justify-center border-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              className={clsx(
                'border-border shadow-shadow rounded-base mb-3 block border-2 px-4 py-3 text-lg font-bold no-underline transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
                path === link.path
                  ? 'bg-secondary-background text-foreground'
                  : 'bg-main text-main-foreground hover:bg-secondary-background hover:text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Paper window — wraps all content, tilts on mobile */}
      <div
        id="paper-window"
        className={clsx(
          'relative w-full',
          open && 'max-lg:overflow-hidden max-lg:pointer-events-none',
        )}
        style={{ zIndex: open ? 50 : undefined }}
      >
        <div
          ref={frontRef}
          id="paper-front"
          className={clsx(
            'bg-background relative',
            open ? 'max-lg:rotate-[10deg]' : '',
          )}
          style={{
            transition: 'all 0.3s ease',
            transformOrigin: 'center 70%',
          }}
        >
          {/* Hamburger — compact, top-right, mobile only */}
          <button
            ref={hamburgerRef}
            className="border-border shadow-shadow rounded-base bg-main fixed top-3 right-3 z-50 hidden h-8 w-8 cursor-pointer items-center justify-center border-2 max-lg:flex"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <span className="hamburger-icon" />
          </button>

          {children}
        </div>
      </div>

      <style>{`
        .hamburger-icon,
        .hamburger-icon:before,
        .hamburger-icon:after {
          display: block;
          width: 16px;
          height: 2px;
          background-color: var(--main-foreground);
          border-radius: 1px;
        }
        .hamburger-icon {
          position: relative;
        }
        .hamburger-icon:before,
        .hamburger-icon:after {
          content: '';
          position: absolute;
          left: 0;
        }
        .hamburger-icon:before { top: -5px; }
        .hamburger-icon:after { top: 5px; }

        @media (min-width: 1024px) {
          #paper-window { overflow: visible !important; pointer-events: auto !important; }
          #paper-front { transform: none !important; }
        }
      `}</style>
    </>
  )
}
