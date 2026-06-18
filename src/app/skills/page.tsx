import SKILLS from '@/data/skills'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Skills() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Skills</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((item, id) => {
          return (
            <div
              key={id}
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4"
            >
              <h2 className="font-heading mb-4 text-base sm:text-lg">
                {item.field}
              </h2>
              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill, i) => {
                  if (skill.icon) {
                    return (
                      <TooltipProvider key={i}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <skill.icon className="h-7 w-7" title="" />
                          </TooltipTrigger>
                          <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )
                  }
                  return (
                    <span
                      key={i}
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-2 py-0.5 text-xs"
                    >
                      {skill.name}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
