import ACHIEVEMENTS from '@/data/achievements'

export default function Achievements() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Achievements</h1>
      <div className="flex flex-col gap-5">
        {ACHIEVEMENTS.map((item, id) => (
          <div
            key={id}
            className="border-border shadow-shadow bg-secondary-background text-foreground rounded-base border-2 p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-heading text-base sm:text-lg">
                {item.title}
              </h2>
              <span className="border-border shadow-shadow bg-main text-main-foreground shrink-0 rounded-base border-2 px-2 py-0.5 text-xs">
                {item.date}
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-base">{item.description}</p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {item.details.map((d, i) => (
                <li key={i} className="flex gap-2 text-sm opacity-80">
                  <span className="mt-0.5 shrink-0">&#8226;</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
