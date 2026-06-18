'use client'

import { useState, useMemo } from 'react'
import EDUCATION from '@/data/education'
import SearchBar from '@/components/search-bar'

export default function Education() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return EDUCATION
    const q = search.toLowerCase()
    return EDUCATION.filter(
      (item) =>
        item.degree.toLowerCase().includes(q) ||
        item.institution.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.highlights?.some((h) => h.toLowerCase().includes(q)),
    )
  }, [search])

  return (
    <div>
      <h1 className="font-heading mb-6 text-2xl sm:text-4xl">Education</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="flex flex-col gap-5">
        {filtered.map((item, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base">
                <h2 className="font-heading text-lg sm:text-xl">
                  {item.degree}
                </h2>
                <p className="mt-0.5 text-sm sm:text-base">
                  {item.institution}
                </p>
                {item.duration && (
                  <span className="text-xs opacity-70 sm:text-sm">
                    {item.duration}
                  </span>
                )}
                {item.year && (
                  <span className="text-xs opacity-70 sm:text-sm">
                    {item.year}
                  </span>
                )}
                {item.description && (
                  <p className="mt-2 text-sm sm:text-base">
                    {item.description}
                  </p>
                )}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base border-2 px-2 py-0.5 text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-foreground/50 text-center text-sm">
            No education entries match your search.
          </p>
        )}
      </div>
    </div>
  )
}
