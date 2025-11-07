"use client"

import { Mail, Linkedin, Phone, Download } from "lucide-react"
import { motion } from "framer-motion"
import Container from "./Container"
import Section from "./Section"
import { profile } from "@/data/site"
import { useLanguage } from "@/contexts/LanguageContext"
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref"

export default function ContactSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotionPref()
  
  const buttonHover = reducedMotion ? {} : { 
    scale: 1.03,
    boxShadow: "0 0 18px rgba(139,92,246,0.5)"
  }
  const buttonTap = reducedMotion ? {} : { scale: 0.98 }
  
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/10">
      <Container>
        <Section 
          title={t.workTogether}
          eyebrow={t.connect}
          subtitle={t.contactText}
        >
          <div className="max-w-xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 flex-1 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#14b8a6] hover:shadow-lg hover:shadow-[#8b5cf6]/25 transition-all duration-300 ring-1 ring-white/20 hover:ring-white/30 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-[#0b0f19]"
                whileHover={buttonHover}
                whileTap={buttonTap}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Mail size={22} />
                {t.sendEmail}
              </motion.a>

              <motion.a
                href="/files/Younes Raqi CV.pdf"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 flex-1 rounded-lg text-base font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0b0f19]"
                whileHover={buttonHover}
                whileTap={buttonTap}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Download size={22} />
                {t.downloadCV || "Download CV"}
              </motion.a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-white/50 mb-6 text-center">{t.findMeOnSocial}</p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                  aria-label="LinkedIn"
                  whileHover={reducedMotion ? {} : { scale: 1.1, y: -2 }}
                  whileTap={reducedMotion ? {} : { scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Linkedin size={22} className="text-white/70 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#3b82f6] transition-all" />
                </motion.a>
                <motion.a
                  href={`mailto:${profile.email}`}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                  aria-label="Email"
                  whileHover={reducedMotion ? {} : { scale: 1.1, y: -2 }}
                  whileTap={reducedMotion ? {} : { scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Mail size={22} className="text-white/70 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#3b82f6] transition-all" />
                </motion.a>
                <motion.a
                  href={`tel:${profile.phone}`}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                  aria-label="Phone"
                  whileHover={reducedMotion ? {} : { scale: 1.1, y: -2 }}
                  whileTap={reducedMotion ? {} : { scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Phone size={22} className="text-white/70 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#3b82f6] transition-all" />
                </motion.a>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </section>
  )
}
