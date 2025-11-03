"use client"

import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Award, Shield, Code, Database, Cloud, Lock } from "lucide-react"

const techStack = [
  { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-700" },
  { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-500" },
  { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-600" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-blue-600" },
  { name: "Git", icon: "⎇", color: "from-orange-600 to-red-600" },
  { name: "Linux", icon: "🐧", color: "from-yellow-400 to-gray-800" },
]

const achievements = [
  {
    icon: Shield,
    title: "Cybersecurity Certification",
    description: "CompTIA Security+ Certified",
    date: "2024",
    color: "text-cyan-500",
  },
  {
    icon: Code,
    title: "Hackathon Winner",
    description: "First place in Fontys Security Challenge",
    date: "2023",
    color: "text-purple-500",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Dean's List for outstanding performance",
    date: "2023-2024",
    color: "text-yellow-500",
  },
  {
    icon: Database,
    title: "Research Publication",
    description: "Co-authored paper on digital forensics",
    date: "2024",
    color: "text-green-500",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "AWS Security Specialty Certification",
    date: "2024",
    color: "text-orange-500",
  },
  {
    icon: Lock,
    title: "Bug Bounty",
    description: "Discovered critical vulnerabilities",
    date: "2023-2024",
    color: "text-red-500",
  },
]

export function TechStack() {
  const { ref: techRef, inView: techInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: achievementsRef, inView: achievementsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Tech Stack */}
        <div ref={techRef} className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Technologies and tools I work with daily</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`transform transition-all duration-500 ${
                  techInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl font-bold text-white group-hover:rotate-12 transition-transform duration-300`}
                    >
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-center">{tech.name}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div ref={achievementsRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Milestones and recognitions throughout my journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`transform transition-all duration-500 ${
                  achievementsInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group cursor-pointer border-border hover:border-primary/50">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
