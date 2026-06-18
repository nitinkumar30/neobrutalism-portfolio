import Image from 'next/image'
import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="border-border shadow-shadow shrink-0 rounded-base border-2 overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Nitin S Kumar"
            width={160}
            height={160}
            className="block h-40 w-40 object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-heading sm:text-4xl">Nitin S Kumar</h1>
          <p className="font-heading mt-2 text-base sm:text-lg">
            Senior Automation Engineer
          </p>
          <p className="mt-0.5 text-xs sm:text-sm font-medium opacity-80">
            @ Happiest Minds Technologies
          </p>
          <p className="mt-0.5 text-xs sm:text-sm opacity-70">
            EdTech domain
          </p>
          <p className="mt-0.5 text-[0.65rem] sm:text-xs opacity-60">
            March 2024 — Present
          </p>
        </div>
      </div>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Automation Engineer navigating through a digital universe. Building the
          future with Python, AI, and an unhealthy amount of caffeine.
        </p>
        <br />
        <p>
          Currently serving in the PDES (Product & Digital Engineering Services)
          department, developing robust automation test frameworks, leading
          migrations, and delivering sessions on GCP automation.
        </p>
        <br />
        <p>
          Open source contributor with 200+ projects, 30+ certifications, and a
          passion for automation, data science, cybersecurity, and AI.
        </p>
      </div>
      <Links />
    </div>
  )
}
