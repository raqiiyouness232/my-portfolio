"use client"

import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref"
import Badge from "./Badge"

export default function ProjectCard({ title, description, tags, tech, image, demoUrl, sourceUrl, status }) {
  const isComingSoon = status === "coming-soon"
  const href = demoUrl || sourceUrl || "#"
  const reducedMotion = useReducedMotionPref()
  
  const hoverAnimation = reducedMotion ? {} : {
    y: -4,
    scale: 1.02,
    boxShadow: "0 0 18px rgba(139,92,246,0.35), 0 8px 24px rgba(0,0,0,0.4)",
  }
  
  const CardContent = () => (
    <>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Coming Soon</span>
          </div>
        )}
        {!isComingSoon && (
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ExternalLink size={32} className="text-white" />
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#3b82f6] transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-white/60 mt-2 line-clamp-2 leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </>
  )

  const containerClass = "group block overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"

  if (isComingSoon) {
    return (
      <motion.div 
        className={containerClass}
        whileHover={hoverAnimation}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <CardContent />
      </motion.div>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={containerClass}
      whileHover={hoverAnimation}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <CardContent />
    </motion.a>
  )
}

