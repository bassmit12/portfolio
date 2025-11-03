"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? "opacity-0" : ""}>{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-red-500"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, -2px)",
            }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 text-cyan-500"
            style={{
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translate(2px, 2px)",
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}
