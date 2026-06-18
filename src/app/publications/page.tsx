import PUBLICATIONS from '@/data/publications'

export default function Publications() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Publications</h1>
      <div className="flex flex-col gap-5">
        {PUBLICATIONS.map((pub, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-heading text-lg sm:text-xl">
                    {pub.title}
                  </h2>
                  <span className="border-border bg-secondary-background text-foreground shadow-shadow shrink-0 rounded-base border-2 px-2 py-0.5 text-xs">
                    {pub.type}
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-base">
                  {pub.description}
                </p>
                <div className="mt-4">
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY inline-block cursor-pointer border-2 px-4 py-2 text-sm transition-all hover:shadow-none sm:text-base"
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
