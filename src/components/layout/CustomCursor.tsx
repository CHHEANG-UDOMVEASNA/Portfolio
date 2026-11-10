import { m, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const INTERACTIVE = 'a, button, [role="button"], summary, label, select'
const TEXT_FIELD = 'input, textarea'

/**
 * Lime dot + trailing ring that replaces the system cursor.
 * Only active for fine pointers (mouse/trackpad) and when the user has not asked
 * for reduced motion - touch devices and keyboard users are unaffected.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as Element | null
      const onField = !!target?.closest(TEXT_FIELD)
      setVisible(!onField)
      setHovering(!!target?.closest(INTERACTIVE))
    }
    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      <m.div
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-lime-400"
        style={{ x, y, translate: '-50% -50%', opacity: visible ? 1 : 0 }}
      />
      <m.div
        className="absolute top-0 left-0 h-8 w-8 rounded-full border border-lime-400/70"
        style={{ x: ringX, y: ringY, translate: '-50% -50%' }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.8 : hovering ? 1.6 : 1,
          backgroundColor: pressed
            ? 'rgba(163, 230, 53, 0.35)'
            : hovering
              ? 'rgba(163, 230, 53, 0.10)'
              : 'rgba(163, 230, 53, 0)',
        }}
        transition={{ duration: 0.18 }}
      />
    </div>
  )
}
