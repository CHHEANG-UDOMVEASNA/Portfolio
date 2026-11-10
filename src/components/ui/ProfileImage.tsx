import { useState } from 'react'
import { person } from '@/data/portfolio'

interface ProfileImageProps {
  className?: string
  /** Size of the initials shown while no photo exists. */
  initialsClassName?: string
}

/**
 * Shows the profile photo from `person.profileImage`.
 * If the file is missing (or empty), a styled initials placeholder is shown instead,
 * so the site never has a broken image.
 */
export function ProfileImage({ className = '', initialsClassName = 'text-5xl' }: ProfileImageProps) {
  const [failed, setFailed] = useState(false)
  const showPhoto = person.profileImage.trim() !== '' && !failed

  if (showPhoto) {
    return (
      <img
        src={person.profileImage}
        alt={`Portrait of ${person.name}`}
        width={765}
        height={956}
        decoding="async"
        onError={() => setFailed(true)}
        className={`object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${person.name} - profile photo placeholder`}
      className={`relative grid place-items-center overflow-hidden bg-slate-100 dark:bg-ink-800 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-lime-300/50 via-transparent to-violet-300/50 dark:from-lime-500/20 dark:to-violet-600/20"
      />
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <span
        className={`relative font-mono font-bold tracking-tight text-lime-600 dark:text-lime-400 ${initialsClassName}`}
      >
        {person.initials}
      </span>
    </div>
  )
}
