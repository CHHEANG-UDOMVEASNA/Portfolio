import { AnimatePresence, m } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { navItems, person } from '@/data/portfolio'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import type { Theme } from '@/hooks/useTheme'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const ids = useMemo(() => navItems.map((n) => n.id), [])
  const spyActive = useScrollSpy(ids)
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  // Clicking a link highlights it instantly; the scroll spy takes over once scrolling settles.
  const [clicked, setClicked] = useState<string | null>(null)
  const active = clicked ?? spyActive

  useEffect(() => {
    setClicked(null)
  }, [spyActive])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const solid = scrolled || open
  const isDark = theme === 'dark'

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? 'border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a
          href="#home"
          onClick={close}
          className="flex items-center rounded-lg py-1.5 pr-2.5 pl-2 font-mono text-[15px] font-bold tracking-tight transition-colors hover:bg-slate-100 sm:text-base dark:hover:bg-white/5"
          aria-label={`${person.name} - back to top`}
        >
          <span className="text-slate-400 dark:text-slate-500">&lt;</span>
          <span className="text-slate-900 dark:text-white">
            {person.firstName.charAt(0) + person.firstName.slice(1).toLowerCase()} {person.lastName}
          </span>
          <span className="text-slate-400 dark:text-slate-500">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setClicked(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-lime-600 dark:text-lime-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <m.span
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-lime-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="icon-btn"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-xl bg-lime-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-md shadow-lime-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:shadow-lime-400/30 sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="icon-btn xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            // Overlay (absolute) so opening/closing never changes the page layout -
            // a layout shift would cancel the smooth scroll started by tapping a link.
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-slate-200/70 bg-white/95 backdrop-blur-md xl:hidden dark:border-white/10 dark:bg-ink-950/95"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ul className="container-x grid gap-1 pt-1 pb-5">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => {
                        setClicked(item.id)
                        close()
                      }}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-lime-500/10 text-lime-600 dark:text-lime-400'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />}
                    </a>
                  </li>
                )
              })}
              <li className="pt-2">
                <a href="#contact" onClick={close} className="btn-primary w-full">
                  Hire Me
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
