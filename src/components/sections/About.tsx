import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProfileImage } from '@/components/ui/ProfileImage'
import { about, person } from '@/data/portfolio'
import { getIcon } from '@/lib/icons'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} lead={about.lead} />

            <Reveal className="mt-8 space-y-5 text-base leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.highlights.map((item, i) => {
                const Icon = getIcon(item.icon)
                return (
                  <Reveal key={item.title} delay={i * 0.06} className="h-full">
                    <article className="card h-full p-5">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {item.text}
                      </p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <Reveal as="aside" className="lg:sticky lg:top-24">
            <div className="shadow-card overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm dark:border-white/10 dark:bg-ink-900/90">
              <figure className="flex flex-col items-center px-6 pt-6 pb-5">
                <span className="relative mt-3 inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-1.5 rounded-full border border-dashed border-lime-500/40"
                  />
                  <span className="shadow-glow block h-32 w-32 shrink-0 overflow-hidden rounded-full bg-slate-100 ring-4 ring-lime-500/30 transition-transform duration-300 hover:scale-105 dark:bg-ink-800">
                    <ProfileImage className="h-full w-full" initialsClassName="text-3xl" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -right-0.5 -bottom-0.5 h-5 w-5 rounded-full border-4 border-slate-50 bg-emerald-500 dark:border-ink-950"
                  />
                </span>
                <figcaption className="mt-4 text-center">
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{person.name}</p>
                  <p className="mt-1 font-mono text-xs font-medium text-lime-600 dark:text-lime-400">
                    {person.tagline.join(' • ')}
                  </p>
                </figcaption>
              </figure>

              <div className="border-t border-slate-200/80 px-6 py-5 dark:border-white/10">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  at a glance
                </p>
                <dl className="mt-3">
                  {about.glance.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-b border-slate-100 py-2.5 last:border-b-0 dark:border-white/5"
                    >
                      <dt className="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                        {row.label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-slate-700 dark:text-slate-200">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="border-t border-slate-200/80 px-6 py-5 dark:border-white/10">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  Core stack
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {about.coreStack.map((tech) => (
                    <li key={tech} className="tech-chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
