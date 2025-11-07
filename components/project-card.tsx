import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  tech: string[]
  image: string
  demoUrl?: string | null
  sourceUrl?: string | null
  status?: string
}

export default function ProjectCard({ title, description, tags, tech, image, demoUrl, sourceUrl, status }: ProjectCardProps) {
  const isComingSoon = status === "coming-soon"
  const href = demoUrl || sourceUrl || "#"
  
  const CardContent = () => (
    <>
      <div className="relative h-48 overflow-hidden bg-card">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
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
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground/70 border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (isComingSoon) {
    return (
      <div className="group block overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <CardContent />
      </div>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      <CardContent />
    </a>
  )
}
