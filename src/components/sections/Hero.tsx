import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { ProfileImage } from '@/components/ui/ProfileImage'
import { contact, heroBadges, heroCodeLines, heroStats, person } from '@/data/portfolio'
import { getSocialLinks } from '@/lib/socials'

export function Hero() {
  const socials = getSocialLinks()

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="bg-grid relative scroll-mt-20 overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl dark:bg-lime-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-600/15"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* ----------------------------- Intro column ----------------------------- */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {person.availability}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1
              id="hero-title"
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              <span className="block">{person.firstName}</span>
              <span className="text-gradient block">{person.lastName}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-3 font-mono text-sm font-medium tracking-wide text-slate-600 sm:text-base dark:text-slate-400">
              {person.title}
            </p>
            <p className="mt-1 text-sm font-medium text-lime-600 sm:text-base dark:text-lime-400">
              {person.tagline.join(' • ')}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {person.summary}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
            <a href={person.cvUrl} download={person.cvFileName} className="btn-secondary">
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </Reveal>

          <Reveal delay={0.3} className="mt-8">
            <ul className="flex items-center gap-2.5" aria-label="Social links">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    className="social-btn"
                    aria-label={s.label}
                    {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <s.icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={15} aria-hidden="true" />
              {contact.location}
            </p>
          </Reveal>
        </div>

        {/* ----------------------------- Visual column ---------------------------- */}
        <Reveal delay={0.15} className="relative">
          <div className="shadow-card mx-auto mb-6 w-full max-w-[14rem] overflow-hidden rounded-2xl border border-slate-200/80 sm:max-w-[18rem] dark:border-white/10">
            <ProfileImage className="aspect-[4/5] w-full" />
            <div className="flex items-center justify-between border-t border-slate-200/80 bg-slate-50 px-4 py-2 dark:border-white/10 dark:bg-ink-900">
              <span className="font-mono text-xs font-semibold text-lime-600 dark:text-lime-400">
                {person.handle}
              </span>
              <span className="hidden font-mono text-[10px] text-slate-400 sm:block dark:text-slate-500">
                {contact.location}
              </span>
            </div>
          </div>

          <div className="animate-float">
            <div className="shadow-card overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm dark:border-white/10 dark:bg-ink-900/90">
              <div className="flex items-center gap-2 border-b border-slate-200/80 px-4 py-3 dark:border-white/10">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 truncate font-mono text-xs text-slate-400 dark:text-slate-500">
                  profile.yaml — {person.name}
                </span>
              </div>
              <div
                className="overflow-x-auto p-5 font-mono text-[13px] leading-6 whitespace-pre sm:text-sm"
                role="img"
                aria-label={`Developer profile: ${person.name}, ${person.title}, based in ${contact.location}`}
              >
                <div className="text-slate-500">{'// developer profile'}</div>
                <div className="text-lime-600 dark:text-lime-400">{'const developer = {'}</div>
                <div className="text-slate-700 dark:text-slate-200">{`  name:     '${person.name}',`}</div>
                <div className="text-slate-700 dark:text-slate-200">{`  role:     '${person.title}',`}</div>
                <div className="text-slate-700 dark:text-slate-200">
                  {`  focus:    [${heroCodeLines.focus.map((f) => `'${f}'`).join(', ')}],`}
                </div>
                <div className="text-slate-700 dark:text-slate-200">{`  location: '${contact.location}',`}</div>
                <div className="text-lime-600 dark:text-lime-400">{'};'}</div>
                <div className="animate-blink text-lime-600 dark:text-lime-400">▍</div>
              </div>
            </div>
          </div>

          <div className="shadow-card absolute -bottom-6 -left-4 hidden rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur-sm sm:block dark:border-white/10 dark:bg-ink-800/90">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{heroBadges.building.label}</p>
            <p className="font-mono text-sm font-semibold text-lime-600 dark:text-lime-400">
              {heroBadges.building.value}
            </p>
          </div>
          <div className="absolute -top-5 -right-3 hidden rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2.5 font-mono text-xs font-medium text-violet-600 backdrop-blur-sm sm:block dark:text-violet-300">
            {heroBadges.stack}
          </div>
        </Reveal>
      </div>

      {/* ------------------------------ At a glance ------------------------------ */}
      <div className="container-x relative mt-16">
        <Reveal
          as="dl"
          className="grid max-w-2xl grid-cols-1 gap-4 border-t border-slate-200/70 pt-8 sm:grid-cols-3 dark:border-white/10"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                {stat.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{stat.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
