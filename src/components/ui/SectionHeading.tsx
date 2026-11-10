import { Reveal } from '@/components/ui/Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  lead?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, lead, id }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  )
}
