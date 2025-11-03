"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const commands = {
  help: "Available commands: help, about, skills, projects, contact, clear, matrix, hack",
  about:
    "Bas Smit - 22 years old, studying Software Engineering at Fontys Netherlands, specializing in forensic cybersecurity.",
  skills: "Python, JavaScript, React, Cybersecurity, Network Security, Digital Forensics, Penetration Testing",
  projects: "Network Forensics Analyzer, Secure Authentication System, Malware Detection ML Model, and more!",
  contact: "Email: bas@example.com | GitHub: github.com | LinkedIn: linkedin.com",
  clear: "CLEAR",
  matrix: "Wake up, Neo...",
  hack: "Access granted. Initiating security protocols... Just kidding! 😄",
}

export function EasterEggTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to Bas's Terminal v1.0",
    "Type 'help' for available commands",
    "",
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl + K to open terminal
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.toLowerCase().trim()
    const newHistory = [...history, `$ ${input}`]

    if (cmd === "clear") {
      setHistory([])
    } else if (cmd in commands) {
      newHistory.push(commands[cmd as keyof typeof commands])
      setHistory(newHistory)
    } else {
      newHistory.push(`Command not found: ${input}. Type 'help' for available commands.`)
      setHistory(newHistory)
    }

    setInput("")
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 text-sm font-mono text-primary animate-pulse">
          Press Ctrl+K for terminal
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm font-mono">terminal@bassmit</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div ref={historyRef} className="h-96 overflow-y-auto p-4 font-mono text-sm bg-background">
          {history.map((line, i) => (
            <div key={i} className={line.startsWith("$") ? "text-primary" : "text-foreground"}>
              {line}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-border p-4 bg-muted">
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none font-mono text-foreground"
              placeholder="Type a command..."
            />
          </div>
        </form>
      </div>
    </div>
  )
}
