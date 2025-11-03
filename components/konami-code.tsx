"use client"

import { useEffect, useState } from "react"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

export function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([])
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-KONAMI_CODE.length)

        if (newKeys.join(",") === KONAMI_CODE.join(",")) {
          setActivated(true)
          setTimeout(() => setActivated(false), 5000)
          return []
        }

        return newKeys
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  if (!activated) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      <div className="text-6xl font-bold text-primary animate-bounce">🎮 KONAMI CODE ACTIVATED! 🎮</div>
    </div>
  )
}
