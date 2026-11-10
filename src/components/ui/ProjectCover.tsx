import { getIcon } from '@/lib/icons'
import type { Project } from '@/types'

/* Full class names are listed so Tailwind can detect them at build time. */
const ACCENTS: Record<Project['cover']['accent'], { glow: string; icon: string; ring: string }> = {
  lime: {
    glow: 'from-lime-500/30 via-lime-500/10 to-transparent',
    icon: 'text-lime-600 dark:text-lime-400',
    ring: 'border-lime-500/40 bg-lime-500/10',
  },
  violet: {
    glow: 'from-violet-500/30 via-violet-500/10 to-transparent',
    icon: 'text-violet-600 dark:text-violet-300',
    ring: 'border-violet-500/40 bg-violet-500/10',
  },
  emerald: {
    glow: 'from-emerald-500/30 via-emerald-500/10 to-transparent',
    icon: 'text-emerald-600 dark:text-emerald-400',
    ring: 'border-emerald-500/40 bg-emerald-500/10',
  },
  amber: {
    glow: 'from-amber-400/30 via-amber-400/10 to-transparent',
    icon: 'text-amber-600 dark:text-amber-400',
    ring: 'border-amber-500/40 bg-amber-500/10',
  },
}

/**
 * 16:9 project thumbnail. Uses `project.image` when provided; otherwise renders a
 * consistent generated cover (grid + glow + icon) so cards look good without screenshots.
 */
export function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          width={1280}
          height={720}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  const accent = ACCENTS[project.cover.accent]
  const Icon = getIcon(project.cover.icon)

  return (
    <div
      role="img"
      aria-label={`${project.title} cover`}
      className="bg-grid relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-ink-800"
    >
      <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${accent.glow}`} />
      <Icon
        aria-hidden="true"
        className={`absolute -right-6 -bottom-8 h-44 w-44 opacity-[0.07] ${accent.icon}`}
        strokeWidth={1.25}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className={`grid h-16 w-16 place-items-center rounded-2xl border backdrop-blur-sm ${accent.ring}`}>
          <Icon size={30} className={accent.icon} aria-hidden="true" />
        </span>
      </div>
      <span className="absolute bottom-3 left-4 font-mono text-[11px] text-slate-500 dark:text-slate-400">
        ~/projects/{project.id}
      </span>
    </div>
  )
}
