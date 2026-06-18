'use client'

import { useState, useMemo } from 'react'
import RECOMMENDATIONS from '@/data/recommendations'
import SearchBar from '@/components/search-bar'

export default function Recommendations() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return RECOMMENDATIONS
    const q = search.toLowerCase()
    return RECOMMENDATIONS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.relationship.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q),
    )
  }, [search])

  return (
    <div>
      <h1 className="font-heading mb-6 text-2xl sm:text-4xl">
        Recommendations
      </h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="flex flex-col gap-5">
        {filtered.map((item, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="font-heading text-base sm:text-lg">
                    {item.name}
                  </h2>
                  <span className="text-xs opacity-70 sm:text-sm">
                    {item.date}
                  </span>
                </div>
                <p className="mt-0.5 text-xs opacity-70 sm:text-sm">
                  {item.role}
                </p>
                <p className="mt-0.5 text-xs opacity-60 sm:text-sm">
                  {item.relationship}
                </p>
                <p className="mt-3 text-sm italic sm:text-base">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-foreground/50 text-center text-sm">
            No recommendations match your search.
          </p>
        )}
      </div>
    </div>
  )
}
