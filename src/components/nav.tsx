'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
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

const gooeyLinks: { path: string; label: string }[] = [
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

      {/* Mobile: gooey SVG blob menu (ham2.0) */}
      <div className="lg:hidden gooey-menu-wrapper">
        <GooeyMenu />
        <div className="fixed right-3 top-5 z-[60]">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

function GooeyMenu() {
  const path = usePathname()
  const [expanded, setExpanded] = useState(false)
  const pathRef = useRef<SVGPathElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const animRef = useRef({
    height: 800,
    x: 0,
    y: 400,
    curveX: 10,
    curveY: 0,
    targetX: 0,
    xitteration: 0,
    yitteration: 0,
    menuExpanded: false,
    rafId: 0,
  })

  const easeOutExpo = useCallback(
    (currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) =>
      changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue,
    [],
  )

  useEffect(() => {
    const anim = animRef.current
    anim.height = window.innerHeight
    anim.y = window.innerHeight / 2

    const onMouseMove = (e: MouseEvent) => {
      anim.x = e.pageX
      anim.y = e.pageY
    }

    const onResize = () => {
      anim.height = window.innerHeight
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    const hoverZone = 150
    const expandAmount = 20
    const anchorDistance = 200
    const curviness = anchorDistance - 40

    function svgCurve() {
      const h = anim.height

      if (anim.curveX <= anim.x + 1 && anim.curveX >= anim.x - 1) {
        anim.xitteration = 0
      } else {
        if (anim.menuExpanded) {
          anim.targetX = 0
        } else {
          anim.xitteration = 0
          if (anim.x > hoverZone) {
            anim.targetX = 0
          } else {
            anim.targetX = -(((60 + expandAmount) / 100) * (anim.x - hoverZone))
          }
        }
        anim.xitteration++
      }

      if (anim.curveY <= anim.y + 1 && anim.curveY >= anim.y - 1) {
        anim.yitteration = 0
      } else {
        anim.yitteration = 0
        anim.yitteration++
      }

      anim.curveX = easeOutExpo(anim.xitteration, anim.curveX, anim.targetX - anim.curveX, 100)
      anim.curveY = easeOutExpo(anim.yitteration, anim.curveY, anim.y - anim.curveY, 100)

      const curveX = anim.curveX
      const curveY = anim.curveY

      const newCurve2 = [
        'M60,', h, 'H0V0h60v', (curveY - anchorDistance),
        'c0,', curviness, ',', curveX, ',', curviness, ',', curveX, ',', anchorDistance,
        'S60,', curveY, ',60,', (curveY + (anchorDistance * 2)),
        'V', h, 'z',
      ].join('')

      if (pathRef.current) {
        pathRef.current.setAttribute('d', newCurve2)
      }
      if (blobRef.current) {
        blobRef.current.style.width = (curveX + 60) + 'px'
      }
      if (hamburgerRef.current) {
        hamburgerRef.current.style.transform = `translate(${curveX}px, ${curveY}px)`
      }

      anim.rafId = requestAnimationFrame(svgCurve)
    }

    anim.rafId = requestAnimationFrame(svgCurve)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(anim.rafId)
    }
  }, [easeOutExpo])

  useEffect(() => {
    animRef.current.menuExpanded = expanded
  }, [expanded])

  return (
    <>
      <div
        ref={menuRef}
        className={`gooey-menu fixed h-full z-50 transition-all duration-1000 ${expanded ? '!left-0' : ''}`}
        style={{
          width: 300,
          backgroundColor: 'var(--main)',
          left: 60,
          transform: expanded ? 'translateX(0%)' : 'translateX(-100%)',
          transition: '1000ms all cubic-bezier(0.19, 1, 0.22, 1)',
        }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div
          ref={hamburgerRef}
          className="absolute cursor-pointer"
          style={{
            right: 20,
            width: 20,
            height: 20,
            marginTop: -10,
            zIndex: 3,
          }}
          onClick={() => setExpanded(v => !v)}
        >
          <div className="line" style={{
            width: '100%', height: 4, backgroundColor: '#fff', position: 'absolute', top: 0,
          }} />
          <div className="line" style={{
            width: '100%', height: 4, backgroundColor: '#fff', position: 'absolute',
            top: '50%', marginTop: -2,
          }} />
          <div className="line" style={{
            width: '100%', height: 4, backgroundColor: '#fff', position: 'absolute', bottom: 0,
          }} />
        </div>

        <div className="menu-inner relative w-full h-full">
          <ul style={{
            padding: 0, listStyle: 'none', width: '80%', marginLeft: '10%',
            position: 'absolute', top: 10,
          }}>
            {gooeyLinks.map(link => (
              <li key={link.path} style={{
                color: 'var(--main-foreground)',
                fontFamily: 'sans-serif',
                padding: '20px 0',
              }}>
                <Link
                  href={link.path}
                  onClick={() => setExpanded(false)}
                  className={clsx(
                    'text-lg font-bold no-underline transition-colors',
                    path === link.path ? 'text-foreground' : 'text-main-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div ref={blobRef} className="absolute top-0 -right-[60px] h-full" style={{ zIndex: -1 }}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            style={{ overflow: 'hidden' }}
            preserveAspectRatio="none"
          >
            <path ref={pathRef} id="blob-path" fill="var(--main)" />
          </svg>
        </div>
      </div>
    </>
  )
}
