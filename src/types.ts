import type { IconName } from '@/lib/icons'

export interface Person {
  name: string
  firstName: string
  lastName: string
  initials: string
  handle: string
  title: string
  tagline: string[]
  summary: string
  availability: string
  profileImage: string
  cvUrl: string
  cvFileName: string
}

export interface Contact {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  telegram: string
  facebook: string
}

export interface NavItem {
  id: string
  label: string
}

export interface AboutHighlight {
  icon: IconName
  title: string
  text: string
}

export interface GlanceRow {
  label: string
  value: string
}

export interface SkillGroup {
  abbr: string
  title: string
  description: string
  items: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  /** Optional screenshot, e.g. '/images/projects/my-project.png'. A generated cover is used when empty. */
  image?: string
  categories: string[]
  tech: string[]
  repoUrl?: string
  demoUrl?: string
  /** Shows "source: private" instead of a code link. */
  isPrivate?: boolean
  cover: { icon: IconName; accent: 'lime' | 'violet' | 'emerald' | 'amber' }
}

export interface ExperienceItem {
  role: string
  organization: string
  type: string
  period: string
  description: string
  bullets: string[]
  location?: string
  icon: IconName
}

export interface EducationItem {
  institution: string
  degree: string
  major: string
  period: string
  location: string
  description: string
  achievements: string[]
}

export interface CertificateItem {
  id: string
  title: string
  issuer: string
  description: string
  /** Certificate number printed on the document (optional). */
  credentialId?: string
  /** Preview picture in /public (optional). */
  image?: string
  /** PDF in /public. Leave empty to show "on request" instead of a link. */
  fileUrl?: string
  icon: IconName
}

export interface CourseItem {
  title: string
  provider: string
  period: string
}
