"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TerminalText } from "@/components/terminal-text"
import { GlitchText } from "@/components/glitch-text"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const terminalLines = ["initializing portfolio...", "loading cybersecurity modules...", "system ready."]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <TerminalText lines={terminalLines} typingSpeed={30} />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <GlitchText text="Bas Smit" />
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
          Software Engineer & Cybersecurity Specialist
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Third-year Software Engineering student at Fontys Netherlands, specializing in forensic cybersecurity.
          Building secure, scalable applications with a focus on digital forensics and threat analysis.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" onClick={() => scrollToSection("projects")} className="gap-2">
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="gap-2">
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:bas@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
