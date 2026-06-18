'use client'

import { useState, useMemo } from 'react'
import PAST_ROLES from '@/data/experience'
import SearchBar from '@/components/search-bar'

export default function Experience() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return PAST_ROLES
    const q = search.toLowerCase()
    return PAST_ROLES.filter(
      (r) =>
        r.role.toLowerCase().includes(q) ||
        r.company.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.highlights?.some((h) => h.toLowerCase().includes(q)),
    )
  }, [search])

  return (
    <div>
      <h1 className="font-heading mb-6 text-2xl sm:text-4xl">Experience</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="flex flex-col gap-6">
        {filtered.map((role, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="font-heading text-lg sm:text-xl">
                    {role.role}
                  </h2>
                  <span className="text-xs opacity-70 sm:text-sm">
                    {role.startDate} — {role.endDate}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-heading sm:text-base">
                  @ {role.company}
                </p>
                <p className="mt-3 text-sm sm:text-base">
                  {role.description}
                </p>
                {role.highlights && role.highlights.length > 0 && (
                  <ul className="mt-3 list-inside list-disc space-y-1">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="text-sm">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-foreground/50 text-center text-sm">
            No experience matches your search.
          </p>
        )}
      </div>
    </div>
  )
}
