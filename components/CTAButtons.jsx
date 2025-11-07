"use client"

import { motion } from "framer-motion"
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref"

export default function CTAButtons({ primary, secondary }) {
  const prefersReducedMotion = useReducedMotionPref()

  const buttonAnimation = prefersReducedMotion ? {} : {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 }
  }

  return (
    <div className="flex flex-wrap gap-4">
      {primary && (
        <motion.a
          href={primary.href}
          target={primary.external ? "_blank" : undefined}
          rel={primary.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#14b8a6] hover:shadow-lg hover:shadow-[#8b5cf6]/25 transition-all duration-300 ring-1 ring-white/20 hover:ring-white/30 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-[#0b0f19]"
          {...buttonAnimation}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {primary.icon && <span className="mr-2">{primary.icon}</span>}
          {primary.label}
        </motion.a>
      )}
      
      {secondary && (
        <motion.a
          href={secondary.href}
          target={secondary.external ? "_blank" : undefined}
          rel={secondary.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0b0f19]"
          {...buttonAnimation}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {secondary.icon && <span className="mr-2">{secondary.icon}</span>}
          {secondary.label}
        </motion.a>
      )}
    </div>
  )
}
