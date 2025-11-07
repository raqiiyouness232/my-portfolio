interface EducationCardProps {
  school: string
  program: string
  start: string
  end: string
}

export default function EducationCard({ school, program, start, end }: EducationCardProps) {
  return (
    <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#8b5cf6]/10">
      <div className="flex items-start justify-between mb-2 gap-4">
        <div>
          <h3 className="text-base font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#3b82f6] transition-all duration-300">
            {program}
          </h3>
          <p className="text-sm font-medium text-white/60 mt-1">{school}</p>
        </div>
        <span className="text-xs text-white/50 whitespace-nowrap">{start} - {end}</span>
      </div>
    </div>
  )
}
