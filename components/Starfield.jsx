"use client"

import { useEffect, useMemo, useState } from "react"
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref"

export default function Starfield({ className = "" }) {
  const prefersReducedMotion = useReducedMotionPref()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion])

  // Generate stars with depth layers
  const stars = useMemo(() => {
    if (typeof window === "undefined") return { back: [], front: [] }
    
    const isMobile = window.innerWidth < 768
    const backCount = isMobile ? 20 : 40
    const frontCount = isMobile ? 40 : 80
    
    const colors = ["#8b5cf6", "#3b82f6", "#14b8a6", "#ec4899", "#ffffff"]
    
    const backLayer = Array.from({ length: backCount }, (_, i) => ({
      id: `back-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2, // Larger: 2-5px
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.3 + 0.2, // Lower opacity: 0.2-0.5
      duration: Math.random() * 8 + 12, // Slower: 12-20s
      delay: Math.random() * -20,
    }))
    
    const frontLayer = Array.from({ length: frontCount }, (_, i) => ({
      id: `front-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5, // Smaller: 0.5-2px
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.6 + 0.4, // Higher opacity: 0.4-1.0
      duration: Math.random() * 12 + 18, // Very slow: 18-30s
      delay: Math.random() * -30,
    }))
    
    return { back: backLayer, front: frontLayer }
  }, [])

  if (prefersReducedMotion) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#0b0f19] via-[#1a0f2e] to-[#0f1a2e] ${className}`}
        aria-hidden="true"
      />
    )
  }

  if (!mounted) {
    return (
      <div
        className={`w-full h-full bg-[#0b0f19] ${className}`}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className={`w-full h-full bg-[#0b0f19] overflow-hidden ${className}`} aria-hidden="true">
      {/* Back layer - larger, blurred, slow drift */}
      <div className="absolute inset-0">
        {stars.back.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full blur-[2px] animate-drift-slow"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              transform: `translate(${(mousePos.x / (typeof window !== "undefined" ? window.innerWidth : 1) - 0.5) * 10}px, ${(mousePos.y / (typeof window !== "undefined" ? window.innerHeight : 1) - 0.5) * 10}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}
      </div>

      {/* Front layer - smaller, sharp, very slow drift */}
      <div className="absolute inset-0">
        {stars.front.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              transform: `translate(${(mousePos.x / (typeof window !== "undefined" ? window.innerWidth : 1) - 0.5) * 20}px, ${(mousePos.y / (typeof window !== "undefined" ? window.innerHeight : 1) - 0.5) * 20}px)`,
              transition: "transform 0.2s ease-out",
            }}
          />
        ))}
      </div>

      {/* Nebula overlay - slow rotating gradient */}
      <div
        className="absolute inset-0 opacity-20 blur-3xl animate-nebula-rotate"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #8b5cf6 0deg, #3b82f6 90deg, #14b8a6 180deg, #ec4899 270deg, #8b5cf6 360deg)",
          mixBlendMode: "screen",
        }}
      />

      {/* Cursor spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15] blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  )
}
