import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { Certificates } from '@/components/sections/Certificates'
import { Contact } from '@/components/sections/Contact'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { useTheme } from '@/hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    // LazyMotion keeps the animation bundle small; reducedMotion="user" respects OS settings.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:rounded-lg focus:bg-lime-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-950"
        >
          Skip to content
        </a>
        <CustomCursor />
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
