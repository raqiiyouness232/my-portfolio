"use client"

import { motion } from "framer-motion"
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = "" }: BadgeProps) {
  const prefersReducedMotion = useReducedMotionPref()

  if (prefersReducedMotion) {
    return (
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-white/90 ring-1 ring-white/20 ${className}`}>
        {children}
      </span>
    )
  }

  return (
    <motion.span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-white/90 ring-1 ring-white/20 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {children}
    </motion.span>
  )
}
