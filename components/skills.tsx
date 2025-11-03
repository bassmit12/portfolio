"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "JavaScript/TypeScript", level: 85, category: "Languages" },
  { name: "Java", level: 80, category: "Languages" },
  { name: "C/C++", level: 75, category: "Languages" },
  { name: "React/Next.js", level: 85, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "SQL/NoSQL", level: 85, category: "Database" },
  { name: "Network Security", level: 88, category: "Cybersecurity" },
  { name: "Digital Forensics", level: 82, category: "Cybersecurity" },
  { name: "Penetration Testing", level: 78, category: "Cybersecurity" },
  { name: "Threat Analysis", level: 85, category: "Cybersecurity" },
  { name: "Docker/Kubernetes", level: 75, category: "DevOps" },
]

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <section id="skills" ref={ref} className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across software engineering and cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                    animate={inView}
                  />
                ))}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <RadarChart skills={skills.filter((s) => s.category === "Cybersecurity")} animate={inView} />
        </div>
      </div>
    </section>
  )
}

function SkillBar({
  name,
  level,
  delay,
  animate,
}: {
  name: string
  level: number
  delay: number
  animate: boolean
}) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setWidth(level)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [animate, level, delay])

  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

function RadarChart({ skills, animate }: { skills: Skill[]; animate: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    if (animate) {
      const start = 0
      const duration = 1000
      const startTime = Date.now()

      const animateScale = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setScale(progress)

        if (progress < 1) {
          requestAnimationFrame(animateScale)
        }
      }

      requestAnimationFrame(animateScale)
    }
  }, [animate])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) - 40

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background circles
    ctx.strokeStyle = "rgba(96, 165, 250, 0.1)"
    ctx.lineWidth = 1
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (maxRadius * i) / 5, 0, Math.PI * 2)
      ctx.stroke()
    }

    // Draw axes
    const angleStep = (Math.PI * 2) / skills.length
    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + Math.cos(angle) * maxRadius
      const y = centerY + Math.sin(angle) * maxRadius

      ctx.strokeStyle = "rgba(96, 165, 250, 0.2)"
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()

      // Draw labels
      const labelX = centerX + Math.cos(angle) * (maxRadius + 25)
      const labelY = centerY + Math.sin(angle) * (maxRadius + 25)
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(skill.name, labelX, labelY)
    })

    // Draw skill polygon
    ctx.beginPath()
    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2
      const radius = (maxRadius * skill.level * scale) / 100
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.closePath()
    ctx.fillStyle = "rgba(96, 165, 250, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "rgba(96, 165, 250, 0.8)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw points
    skills.forEach((skill, i) => {
      const angle = i * angleStep - Math.PI / 2
      const radius = (maxRadius * skill.level * scale) / 100
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(96, 165, 250, 1)"
      ctx.fill()
    })
  }, [skills, scale])

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-semibold mb-8 text-center">Cybersecurity Specialization</h3>
      <canvas ref={canvasRef} width={400} height={400} className="max-w-full" />
    </div>
  )
}
