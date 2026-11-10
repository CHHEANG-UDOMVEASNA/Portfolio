import { Check, MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/portfolio'
import { getIcon } from '@/lib/icons'

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container-x">
        <SectionHeading
          id="experience-title"
          eyebrow={experience.eyebrow}
          title={experience.title}
          lead={experience.lead}
        />

        <div className="mt-12">
          <ol className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-white/10">
            {experience.items.map((item, i) => {
              const Icon = getIcon(item.icon)
              return (
                <Reveal as="li" key={`${item.organization}-${item.role}`} delay={i * 0.05} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-1 -left-[2.78rem] grid h-6 w-6 place-items-center rounded-full border-2 border-lime-500 bg-slate-50 text-lime-600 dark:bg-ink-950 dark:text-lime-400"
                  >
                    <span className="h-2 w-2 rounded-full bg-lime-500" />
                  </span>

                  <article className="card rotate-card p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                          <p className="text-sm font-medium text-lime-600 dark:text-lime-400">
                            {item.organization}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="chip">{item.type}</span>
                        <span className="chip">{item.period}</span>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-lime-600 dark:text-lime-400"
                            aria-hidden="true"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {item.location && (
                      <p className="mt-5 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                        <MapPin size={13} aria-hidden="true" />
                        {item.location}
                      </p>
                    )}
                  </article>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
