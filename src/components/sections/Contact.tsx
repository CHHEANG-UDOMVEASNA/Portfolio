import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { ContactForm } from '@/components/ui/ContactForm'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contact, contactSection } from '@/data/portfolio'
import { GithubIcon, LinkedinIcon, TelegramIcon, FacebookIcon } from '@/lib/icons'
import { prettyUrl, toTelHref } from '@/lib/socials'

interface ContactTile {
  label: string
  value: string
  href?: string
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>
}

export function Contact() {
  // Tiles with an empty value are skipped, so unfilled links never render as dead buttons.
  const tiles: ContactTile[] = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
    { label: 'Phone', value: contact.phone, href: toTelHref(contact.phone), icon: Phone },
    { label: 'Location', value: contact.location, icon: MapPin },
    { label: 'GitHub', value: prettyUrl(contact.github), href: contact.github, icon: GithubIcon },
    { label: 'LinkedIn', value: prettyUrl(contact.linkedin), href: contact.linkedin, icon: LinkedinIcon },
    { label: 'Telegram', value: prettyUrl(contact.telegram), href: contact.telegram, icon: TelegramIcon },
    { label: 'Facebook', value: prettyUrl(contact.facebook), href: contact.facebook, icon: FacebookIcon },
  ].filter((t) => t.value.trim() !== '')

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow={contactSection.eyebrow}
              title={contactSection.title}
              lead={contactSection.lead}
            />

            <ul className="mt-10 space-y-4">
              {tiles.map((tile, i) => {
                const body = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400">
                      <tile.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                        {tile.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                        {tile.value}
                      </span>
                    </span>
                  </>
                )
                const external = !!tile.href && tile.href.startsWith('http')
                return (
                  <Reveal as="li" key={tile.label} delay={i * 0.05}>
                    {tile.href ? (
                      <a
                        href={tile.href}
                        className="card group flex items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500"
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="card flex items-center gap-4 p-4">{body}</div>
                    )}
                  </Reveal>
                )
              })}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
