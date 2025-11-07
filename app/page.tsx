"use client"

import { useState, useEffect, useRef } from "react"
import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import Container from "@/components/Container"
import Section from "@/components/Section"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"
import ContactSection from "@/components/contact-section"
import Badge from "@/components/Badge"
import { profile, projects, experience, education, tech } from "@/data/site"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const { language, t } = useLanguage()
  const previousSection = useRef("about")

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ["about", "projects", "experience", "education", "contact"]
          const scrollPosition = window.scrollY + 200

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                if (previousSection.current !== sectionId) {
                  previousSection.current = sectionId
                  setActiveSection(sectionId)
                }
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen bg-transparent text-white">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 ml-0 lg:ml-72">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="scroll-mt-20 border-t border-white/10">
          <Container>
            <Section 
              title={t.aboutMe}
              eyebrow={t.about}
            >
              <div className="max-w-4xl mx-auto">
                {/* About Text */}
                <div className="space-y-6 text-base md:text-lg text-white/70 leading-relaxed mb-16">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-transparent first-letter:bg-clip-text first-letter:bg-gradient-to-r first-letter:from-[#8b5cf6] first-letter:to-[#3b82f6] first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                    {t.aboutText1
                      .replace('{name}', profile.name)
                      .replace('{role}', profile.role[language].toLowerCase())
                      .replace('{tagline}', profile.tagline[language].toLowerCase())}
                  </p>
                  <p>
                    {t.aboutText2}
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-8 text-center">{t.technicalSkills}</h3>
                  <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">{t.languages}</h4>
                    <div className="flex flex-wrap gap-3">
                      {tech.languages.map((lang) => (
                        <Badge key={lang}>{lang}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">{t.frameworks}</h4>
                    <div className="flex flex-wrap gap-3">
                      {tech.frameworks.map((framework) => (
                        <Badge key={framework}>{framework}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">{t.cms}</h4>
                    <div className="flex flex-wrap gap-3">
                      {tech.cms.map((c) => (
                        <Badge key={c}>{c}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">{t.spokenLanguages}</h4>
                    <div className="flex flex-wrap gap-3">
                      {tech.languagesSpoken.map((lang) => (
                        <Badge key={lang}>{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Section>
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20 border-t border-white/10">
          <Container>
            <Section 
              title={t.featuredProjects}
              eyebrow={t.projects}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </Section>
          </Container>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20 border-t border-white/10">
          <Container>
            <Section 
              title={t.experienceTitle}
              eyebrow={t.experience}
            >
              <div className="space-y-8 max-w-3xl mx-auto">
                {experience.map((item, index) => (
                  <ExperienceCard key={index} {...item} />
                ))}
              </div>
            </Section>
          </Container>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20 border-t border-white/10">
          <Container>
            <Section 
              title={t.educationTitle}
              eyebrow={t.education}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {education.map((item, index) => (
                  <EducationCard key={index} {...item} />
                ))}
              </div>
            </Section>
          </Container>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  )
}

