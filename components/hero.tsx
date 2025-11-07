"use client"

import { useState } from "react"
import type { MouseEvent } from "react"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { profile } from "@/data/site"
import { useLanguage } from "@/contexts/LanguageContext"
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref"

export default function Hero() {
  const { language, t } = useLanguage()
  const reducedMotion = useReducedMotionPref()
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }
  
  const buttonHover = reducedMotion ? {} : { 
    scale: 1.03,
    boxShadow: "0 0 18px rgba(139,92,246,0.5)"
  }
  const buttonTap = reducedMotion ? {} : { scale: 0.98 }
  
  return (
    <section 
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 lg:pt-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient beam behind name */}
      {!reducedMotion && (
        <div 
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30 blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)",
            transform: `translate(-50%, -50%) translate(${(mousePos.x - 50) * 0.5}px, ${(mousePos.y - 50) * 0.5}px)`,
          }}
        />
      )}
      
      {/* Parallax glow layer */}
      {!reducedMotion && (
        <div 
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-200"
          style={{
            background: `radial-gradient(1200px 500px at ${mousePos.x}% ${mousePos.y}%, rgba(139,92,246,0.15), transparent 70%)`,
          }}
        />
      )}
      
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
            {profile.name}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#14b8a6]">
            {profile.role[language]}
          </p>
          <p className="text-base sm:text-lg text-white/70 text-balance leading-relaxed max-w-2xl mx-auto">
            {profile.tagline[language]}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#14b8a6] hover:shadow-lg hover:shadow-[#8b5cf6]/25 transition-all duration-300 ring-1 ring-white/20 hover:ring-white/30 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-[#0b0f19]"
            whileHover={buttonHover}
            whileTap={buttonTap}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {t.viewMyWork}
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0b0f19]"
            whileHover={buttonHover}
            whileTap={buttonTap}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {t.getInTouch}
          </motion.a>
        </div>

        {!reducedMotion && (
          <div className="pt-16 animate-bounce">
            <ArrowDown className="mx-auto text-white/40" size={28} />
          </div>
        )}
      </div>
    </section>
  )
}
