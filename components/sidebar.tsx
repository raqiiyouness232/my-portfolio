"use client"

import { useState } from "react"
import { Menu, X, Linkedin, Mail, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { profile } from "@/data/site"
import { useLanguage } from "@/contexts/LanguageContext"
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const reducedMotion = useReducedMotionPref()

  const navItems = [
    { id: "about", label: t.about },
    { id: "projects", label: t.projects },
    { id: "experience", label: t.experience },
    { id: "education", label: t.education },
    { id: "contact", label: t.contact },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  const NavButton = ({ item, index }: { item: { id: string; label: string }; index: number }) => {
    const isActive = activeSection === item.id
    
    if (reducedMotion) {
      return (
        <button
          onClick={() => handleNavClick(item.id)}
          className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group ${
            isActive
              ? "bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white shadow-lg shadow-[#8b5cf6]/20"
              : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
        >
          <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
        </button>
      )
    }

    return (
      <motion.button
        onClick={() => handleNavClick(item.id)}
        className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group ${
          isActive
            ? "bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white shadow-lg shadow-[#8b5cf6]/20"
            : "text-white/60 hover:text-white"
        }`}
        whileHover={{ x: 4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: index * 0.05,
          type: "spring", 
          stiffness: 300, 
          damping: 25 
        }}
      >
        {!isActive && (
          <motion.div 
            className="absolute inset-0 bg-white/5 rounded-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-20 blur-xl"
            layoutId="activeNav"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.button>
    )
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 lg:hidden z-50 p-3 bg-[#0b0f19]/90 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 shadow-lg"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        whileHover={reducedMotion ? {} : { scale: 1.05 }}
        whileTap={reducedMotion ? {} : { scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden z-40" 
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-[#0b0f19]/90 backdrop-blur-2xl border-r border-white/10 p-6 overflow-y-auto transition-all duration-300 z-40 lg:translate-x-0 shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.05) 0%, transparent 50%)'
        }}
      >
        {/* Logo/Name */}
        <div className="mb-10 mt-4 pb-6 border-b border-white/10">
          <div 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {profile.name}
          </div>
          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mt-2 font-medium">
            {profile.role[language]}
          </p>
          
          {/* Language Switcher */}
          <motion.button
            onClick={toggleLanguage}
            className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300"
            whileHover={reducedMotion ? {} : { scale: 1.05 }}
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
          >
            <Globe size={14} />
            <span>{language === 'fr' ? 'English' : 'Français'}</span>
          </motion.button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-10">
          {navItems.map((item, index) => (
            <NavButton key={item.id} item={item} index={index} />
          ))}
        </nav>

        {/* Social Links */}
        <div className="mb-20 pb-6 border-t border-white/10 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">{t.connect}</p>
          <div className="space-y-2">
            <motion.a 
              href={profile.socials.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/70 hover:text-white bg-white/0 hover:bg-white/5 rounded-lg transition-all duration-300 group"
              whileHover={reducedMotion ? {} : { x: 4 }}
            >
              <div className="p-1.5 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-lg">
                <Linkedin size={14} className="text-white" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </motion.a>
            <motion.a 
              href={`mailto:${profile.email}`} 
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/70 hover:text-white bg-white/0 hover:bg-white/5 rounded-lg transition-all duration-300 group"
              whileHover={reducedMotion ? {} : { x: 4 }}
            >
              <div className="p-1.5 bg-gradient-to-r from-[#3b82f6] to-[#14b8a6] rounded-lg">
                <Mail size={14} className="text-white" />
              </div>
              <span className="font-medium">Email</span>
            </motion.a>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-xs text-white/40 border-t border-white/10 bg-[#0b0f19]/95 backdrop-blur-xl">
          <p className="leading-relaxed">© 2025 {profile.name}</p>
          <p className="mt-1 text-white/30">{t.allRightsReserved}</p>
        </div>
      </aside>
    </>
  )
}
