import { Hero } from "@/components/hero"
import { AboutMe } from "@/components/about-me"
import { Timeline } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { AnimatedBackground } from "@/components/animated-background"
import { CursorTrail } from "@/components/cursor-trail"
import { ThemeToggle } from "@/components/theme-toggle"
import { EasterEggTerminal } from "@/components/easter-egg-terminal"
import { KonamiCode } from "@/components/konami-code"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <CursorTrail />
      <ThemeToggle />
      <EasterEggTerminal />
      <KonamiCode />
      <Hero />
      <AboutMe />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  )
}
