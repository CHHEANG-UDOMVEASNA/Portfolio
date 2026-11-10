import { ArrowUp } from 'lucide-react'
import { contact, footerAscii, navItems, person } from '@/data/portfolio'
import { getSocialLinks } from '@/lib/socials'

export function Footer() {
  const socials = getSocialLinks()
  const year = new Date().getFullYear()

  const backToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200/70 bg-slate-50 py-12 dark:border-white/10 dark:bg-ink-900/60">
      <div className="container-x">
        <div className="space-y-4 overflow-x-auto" aria-hidden="true">
          {footerAscii.map((line, i) => (
            <pre
              key={i}
              className="mx-auto w-max font-mono text-[clamp(4px,1.6vw,11px)] leading-[1.25] text-green-600/80 select-none dark:text-green-400/70"
            >
              {line}
            </pre>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-slate-200/70 pt-8 md:flex-row md:justify-between dark:border-white/10">
          <div className="text-center md:text-left">
            <p className="font-mono text-base font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="text-slate-400 dark:text-slate-500">&lt;</span>
              {person.name}
              <span className="text-slate-400 dark:text-slate-500">/&gt;</span>
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{person.title} · {contact.location}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-1 gap-y-1">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="btn-ghost !px-3 !py-1.5">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className="social-btn"
                aria-label={s.label}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row dark:text-slate-500">
          <p>
            © {year} {person.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with React · TypeScript · Tailwind CSS</p>
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500 hover:text-lime-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-lime-400 dark:hover:text-lime-400"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
