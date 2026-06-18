import { Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-border shadow-shadow bg-secondary-background text-foreground font-base mx-auto mt-16 w-[750px] max-w-full border-2 px-5 py-4 text-center text-sm transition-all duration-700">
      <p className="flex items-center justify-center gap-1.5">
        &copy; {new Date().getFullYear()} Nitin S Kumar &mdash; Built with
        <Code2 className="inline h-4 w-4" />
        OpenCode and DeepSeek v4 Flash Free model
      </p>
    </footer>
  )
}
