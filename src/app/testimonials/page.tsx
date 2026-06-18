'use client'

import { useState, useMemo } from 'react'
import TESTIMONIALS from '@/data/testimonials'
import SearchBar from '@/components/search-bar'

export default function Testimonials() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return TESTIMONIALS
    const q = search.toLowerCase()
    return TESTIMONIALS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.designation.toLowerCase().includes(q) ||
        item.testimonial.toLowerCase().includes(q),
    )
  }, [search])

  return (
    <div>
      <h1 className="font-heading mb-6 text-2xl sm:text-4xl">Testimonials</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="flex flex-col gap-5">
        {filtered.map((item, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base">
                <p className="text-sm italic sm:text-base">
                  &ldquo;{item.testimonial}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-sm sm:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs opacity-70 sm:text-sm">
                      {item.designation}
                    </p>
                  </div>
                  <span className="text-sm">
                    {'★'.repeat(item.rating)}
                    {'☆'.repeat(5 - item.rating)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-foreground/50 text-center text-sm">
            No testimonials match your search.
          </p>
        )}
      </div>
    </div>
  )
}
