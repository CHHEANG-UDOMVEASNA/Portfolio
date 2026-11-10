import { BookOpen, Calendar, Check, GraduationCap, MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          <SectionHeading
            id="education-title"
            eyebrow={education.eyebrow}
            title={education.title}
            lead={education.lead}
          />

          <Reveal className="space-y-5">
            {education.items.map((item) => (
              <article key={item.institution} className="card overflow-hidden">
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20">
                    <GraduationCap size={24} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.institution}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-lime-600 dark:text-lime-400">{item.degree}</p>
                    <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{item.major}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 dark:text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} aria-hidden="true" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} aria-hidden="true" />
                        {item.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-lime-600 dark:text-lime-400"
                            aria-hidden="true"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}

            <article className="card p-6 sm:p-7">
              <h3 className="flex items-center gap-2.5 text-base font-semibold text-slate-900 dark:text-white">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400">
                  <BookOpen size={18} aria-hidden="true" />
                </span>
                {education.coursesTitle}
              </h3>
              <ul className="mt-4 divide-y divide-slate-100 dark:divide-white/5">
                {education.courses.map((c) => (
                  <li
                    key={c.title}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{c.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{c.provider}</p>
                    </div>
                    <span className="chip">{c.period}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
