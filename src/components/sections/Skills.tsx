import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skills } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container-x">
        <SectionHeading id="skills-title" eyebrow={skills.eyebrow} title={skills.title} lead={skills.lead} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.07} className="h-full">
              <article className="group card rotate-card h-full p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime-500/10 text-lime-600 transition-colors group-hover:bg-lime-500/20 dark:bg-lime-400/10 dark:text-lime-400 dark:group-hover:bg-lime-400/20">
                  <span className="font-mono text-sm font-bold tracking-wide">{group.abbr}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{group.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tech-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
