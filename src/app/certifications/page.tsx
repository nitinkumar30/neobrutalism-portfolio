'use client'

import { useState, useMemo } from 'react'
import CERTIFICATIONS from '@/data/certifications'
import SearchBar from '@/components/search-bar'

export default function Certifications() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return CERTIFICATIONS
    const q = search.toLowerCase()
    return CERTIFICATIONS.filter(
      (cert) =>
        cert.name.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.year.includes(q),
    )
  }, [search])

  return (
    <div>
      <h1 className="font-heading mb-6 text-2xl sm:text-4xl">
        Certifications
      </h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="flex flex-col gap-4">
        {filtered.map((cert, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-secondary-background border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-foreground font-base">
                <h2 className="font-heading text-base sm:text-lg">
                  {cert.name}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm opacity-70">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                  {cert.credential_id && (
                    <span className="font-mono text-xs">
                      ID: {cert.credential_id}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-foreground/50 text-center text-sm">
            No certifications match your search.
          </p>
        )}
      </div>
    </div>
  )
}
