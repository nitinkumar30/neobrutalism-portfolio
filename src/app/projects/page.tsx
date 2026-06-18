'use client'

import { useState, useMemo } from 'react'
import PROJECTS from '@/data/projects'
import SearchBar from '@/components/search-bar'
import clsx from 'clsx'

export default function Projects() {
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(() => {
    const items = showAll ? PROJECTS : PROJECTS.filter((p) => p.featured)
    if (!search.trim()) return items
    const q = search.toLowerCase()
    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.language && p.language.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        p.technologies?.some((t) => t.toLowerCase().includes(q)),
    )
  }, [search, showAll])

  return (
    <div>
      <h1 className="font-heading mb-4 text-2xl sm:text-4xl">Projects</h1>

      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setShowAll(false)}
          className={clsx(
            'border-border shadow-shadow rounded-base font-base cursor-pointer border-2 px-4 py-1 text-sm transition-all hover:shadow-none',
            !showAll
              ? 'bg-main text-main-foreground'
              : 'bg-secondary-background text-foreground',
          )}
        >
          Highlights
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={clsx(
            'border-border shadow-shadow rounded-base font-base cursor-pointer border-2 px-4 py-1 text-sm transition-all hover:shadow-none',
            showAll
              ? 'bg-main text-main-foreground'
              : 'bg-secondary-background text-foreground',
          )}
        >
          All Projects
        </button>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="flex flex-col gap-5">
        {filtered.map((project, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-heading text-xl sm:text-2xl">
                    {project.name}
                  </h2>
                  {project.category && (
                    <span className="border-border bg-secondary-background text-foreground shadow-shadow shrink-0 rounded-base border-2 px-2 py-0.5 text-xs">
                      {project.category}
                    </span>
                  )}
                </div>
                <p className="mt-2">{project.description}</p>
                {project.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base border-2 px-2 py-0.5 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 grid grid-cols-2 gap-5">
                  {project.url && (
                    <a
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.stars ? (
                    <span className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base flex items-center justify-center border-2 px-4 py-2 text-sm sm:text-base">
                      ⭐ {project.stars}
                    </span>
                  ) : (
                    <span className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base flex items-center justify-center border-2 px-4 py-2 text-sm sm:text-base">
                      {project.language || ''}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-foreground/50 text-center text-sm">
            No projects match your search.
          </p>
        )}
      </div>
    </div>
  )
}
