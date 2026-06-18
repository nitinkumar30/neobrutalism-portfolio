'use client'

import { Search } from 'lucide-react'

export default function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="border-border shadow-shadow rounded-base bg-secondary-background text-foreground mb-6 flex items-center border-2 px-3 py-2">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        className="bg-transparent w-full text-sm outline-none placeholder:text-sm placeholder:opacity-50"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
