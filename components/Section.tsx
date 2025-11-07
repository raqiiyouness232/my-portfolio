"use client"

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ 
  id, 
  eyebrow, 
  title, 
  subtitle, 
  children, 
  className = "" 
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mb-12 md:mb-16 text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#14b8a6] animate-pulse">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
