interface ExperienceCardProps {
  role: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
}

export default function ExperienceCard({ role, company, location, start, end, bullets }: ExperienceCardProps) {
  return (
    <div className="group relative border-l-2 border-white/10 pl-6 py-4 hover:border-[#8b5cf6] transition-all duration-300">
      {/* Decorative dot */}
      <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#8b5cf6] group-hover:shadow-lg group-hover:shadow-[#8b5cf6]/50 transition-all duration-300" />
      
      <div className="flex items-start justify-between mb-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#3b82f6] transition-all duration-300">
            {role}
          </h3>
          <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">
            {company}
          </p>
          <p className="text-xs text-white/50 mt-1">{location}</p>
        </div>
        <span className="text-xs text-white/50 whitespace-nowrap">{start} - {end}</span>
      </div>
      <ul className="space-y-2 mt-4">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-white/70 leading-relaxed text-sm flex items-start">
            <span className="text-[#8b5cf6] mr-2 mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
