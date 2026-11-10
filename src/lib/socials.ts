import { contact } from '@/data/portfolio'
import { FacebookIcon, GithubIcon, LinkedinIcon, TelegramIcon } from '@/lib/icons'
import { Mail, type LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

export interface SocialLink {
  id: 'github' | 'linkedin' | 'telegram' | 'facebook' | 'email'
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon
  external: boolean
}

/** Builds the social-link list from the contact data. Empty values are skipped. */
export function getSocialLinks(): SocialLink[] {
  const all: SocialLink[] = [
    { id: 'github', label: 'GitHub', href: contact.github, icon: GithubIcon, external: true },
    { id: 'linkedin', label: 'LinkedIn', href: contact.linkedin, icon: LinkedinIcon, external: true },
    { id: 'telegram', label: 'Telegram', href: contact.telegram, icon: TelegramIcon, external: true },
    { id: 'facebook', label: 'Facebook', href: contact.facebook, icon: FacebookIcon, external: true },
    {
      id: 'email',
      label: 'Email',
      href: contact.email ? `mailto:${contact.email}` : '',
      icon: Mail,
      external: false,
    },
  ]
  return all.filter((s) => s.href.trim() !== '')
}

/** "+855-96-671-9476" -> "+855966719476" (for tel: links) */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`
}

/** "https://github.com/foo" -> "github.com/foo" */
export function prettyUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}
