import { m } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /** Rendered element, e.g. 'li' or 'article'. Defaults to 'div'. */
  as?: 'div' | 'li' | 'article' | 'aside' | 'p' | 'ul' | 'dl'
}

/** Fade + slide-up entrance, triggered once when scrolled into view. */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Component = m[as] as ElementType
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
