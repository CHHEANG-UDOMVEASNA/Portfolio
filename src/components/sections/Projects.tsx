import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { ProjectCover } from '@/components/ui/ProjectCover'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contact, projects } from '@/data/portfolio'
import { GithubIcon } from '@/lib/icons'
import type { Project } from '@/types'

function ProjectCard({ project }: { project: Project }) {
  const primaryHref = project.demoUrl ?? project.repoUrl

  const cover = (
    <div className="transition-transform duration-500 group-hover:scale-[1.03]">
      <ProjectCover project={project} />
    </div>
  )

  return (
    <article className="group card rotate-card flex h-full flex-col overflow-hidden">
      {primaryHref ? (
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden"
        >
          {cover}
        </a>
      ) : (
        <div className="overflow-hidden">{cover}</div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <ul className="flex flex-wrap gap-2" aria-label="Categories">
          {project.categories.map((c) => (
            <li
              key={c}
              className="rounded-md bg-lime-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
            >
              {c}
            </li>
          ))}
        </ul>

        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
          {primaryHref ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lime-600 dark:hover:text-lime-400"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-slate-200 px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-white/5">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-lime-600 dark:text-slate-400 dark:hover:text-lime-400"
              aria-label={`${project.title} - source code on GitHub`}
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          ) : (
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
              {project.isPrivate ? 'source: private' : 'source: coming soon'}
            </span>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-600 transition-all hover:gap-2.5 dark:text-lime-400"
              aria-label={`${project.title} - live demo`}
            >
              Live demo
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          eyebrow={projects.eyebrow}
          title={projects.title}
          lead={projects.lead}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.items.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {contact.github && (
          <Reveal className="mt-10 flex justify-center">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GithubIcon className="h-4 w-4" />
              More on GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
