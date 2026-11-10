import { ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { certificates } from '@/data/portfolio'
import { getIcon } from '@/lib/icons'
import type { CertificateItem } from '@/types'

function CertificateCard({ item }: { item: CertificateItem }) {
  const Icon = getIcon(item.icon)

  const preview = item.image ? (
    <img
      src={item.image}
      alt={`Certificate: ${item.title}`}
      width={1287}
      height={910}
      loading="lazy"
      decoding="async"
      className="aspect-[1287/910] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    />
  ) : (
    // No picture: a styled tile keeps all cards the same height
    <div className="relative grid aspect-[1287/910] w-full place-items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/15 via-transparent to-violet-500/15" />
      <div className="bg-grid absolute inset-0 opacity-70" />
      <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-lime-500/30 bg-lime-500/10 text-lime-600 dark:text-lime-400">
        <Icon size={30} aria-hidden="true" />
      </span>
    </div>
  )

  return (
    <article className="group card rotate-card flex h-full flex-col overflow-hidden">
      {item.fileUrl ? (
        <a
          href={item.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden border-b border-slate-100 dark:border-white/5"
        >
          {preview}
        </a>
      ) : (
        <div className="overflow-hidden border-b border-slate-100 dark:border-white/5">{preview}</div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] font-medium text-lime-600 dark:text-lime-400">{item.issuer}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {item.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-slate-100 pt-4 dark:border-white/5">
          {item.fileUrl ? (
            <a
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-600 transition-all hover:gap-2.5 dark:text-lime-400"
              aria-label={`${item.title} - view certificate (PDF)`}
            >
              View certificate
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : (
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">file: on request</span>
          )}
          {item.credentialId && (
            <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
              No. {item.credentialId}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export function Certificates() {
  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title">
      <div className="container-x">
        <SectionHeading
          id="certificates-title"
          eyebrow={certificates.eyebrow}
          title={certificates.title}
          lead={certificates.lead}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.08} className="h-full">
              <CertificateCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
