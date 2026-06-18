'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

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
  const hamburgerRef = useRef<HTMLDivElement>(null)
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
      hamburgerRef.current.style.top = window.scrollY + 30 + 'px'
    }
  }, [])

  const closeMenu = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
    setTimeout(() => {
      if (hamburgerRef.current) {
        hamburgerRef.current.style.position = 'fixed'
        hamburgerRef.current.style.top = '30px'
      }
    }, 300)
  }, [])

  return (
    <>
      {/* Paper-back nav panel — mobile only */}
      <div
        className="fixed top-0 left-0 z-40 h-screen w-full hidden max-lg:block"
        style={{ backgroundColor: 'var(--main)' }}
      >
        <nav className="px-8" style={{ padding: '120px 34px' }}>
          <div className="close-btn block w-[45px] h-[34px] fixed top-[30px] left-[30px] cursor-pointer z-50"
            onClick={closeMenu}
          />
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              className={clsx(
                'mb-6 block text-3xl no-underline transition-colors',
                path === link.path ? 'text-foreground' : 'text-main-foreground/70 hover:text-foreground',
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
          'relative w-full min-h-screen overflow-x-hidden',
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
            boxShadow: undefined,
          }}
        >
          {/* Hamburger — mobile only */}
          <div
            ref={hamburgerRef}
            className="fixed top-[30px] left-[30px] z-50 w-[45px] h-[34px] cursor-pointer select-none hidden max-lg:block"
            onClick={openMenu}
          >
            <span className="hamburger-line" />
          </div>

          {children}
        </div>
      </div>

      <style>{`
        .hamburger-line,
        .hamburger-line:before,
        .hamburger-line:after {
          display: block;
          width: 45px;
          height: 6px;
          background-color: var(--main-foreground);
          border-radius: 2px;
        }
        .hamburger-line {
          position: relative;
        }
        .hamburger-line:before,
        .hamburger-line:after {
          content: '';
          position: absolute;
        }
        .hamburger-line:before { bottom: -14px; }
        .hamburger-line:after { bottom: -28px; }

        .close-btn:before,
        .close-btn:after {
          content: '';
          position: absolute;
          display: block;
          width: 45px;
          height: 6px;
          top: 50%;
          left: 0;
          background-color: #fff;
          border-radius: 2px;
        }
        .close-btn:before { transform: translateY(-50%) rotate(45deg); }
        .close-btn:after { transform: translateY(-50%) rotate(-45deg); }

        @media (min-width: 1024px) {
          #paper-window { overflow: visible !important; pointer-events: auto !important; }
          #paper-front { transform: none !important; }
        }
      `}</style>
    </>
  )
}
