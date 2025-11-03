"use client"

import { useEffect, useState } from "react"

interface TerminalTextProps {
  lines: string[]
  typingSpeed?: number
  className?: string
}

export function TerminalText({ lines, typingSpeed = 50, className = "" }: TerminalTextProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true)
      return
    }

    const currentLine = lines[currentLineIndex]

    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, currentText])
        setCurrentText("")
        setCurrentLineIndex(currentLineIndex + 1)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [currentText, currentLineIndex, lines, displayedLines, typingSpeed])

  return (
    <div className={`font-mono text-sm ${className}`}>
      {displayedLines.map((line, i) => (
        <div key={i} className="text-primary/80">
          <span className="text-accent mr-2">$</span>
          {line}
        </div>
      ))}
      {!isComplete && (
        <div className="text-primary/80">
          <span className="text-accent mr-2">$</span>
          {currentText}
          <span className="animate-pulse">_</span>
        </div>
      )}
    </div>
  )
}
