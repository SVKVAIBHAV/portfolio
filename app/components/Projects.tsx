"use client"

import type React from "react"

import { ExternalLink, Github } from "lucide-react"
import { CardTitle, CardDescription } from "@/components/ui/card"
import { motion, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Project Management System",
    description: "Manage projects, teams, and invoices with real-time status and analytics.",
    image: "/assets/zem.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Resend Email"],
    features: [
      "Client Dashboard",
      "Project Dashboard",
      "File Management",
      "Team Collaboration",
      "Budget Tracking",
      "Timeline View",
    ],
    links: {
      github: "https://github.com/SVKVAIBHAV",
      live: "#",
    },
  },
  {
    title: "Creavo – Creative Minds Hub",
    description: "Social platform for programmers to share and collaborate on design ideas.",
    image: "/assets/creavo.png",
    technologies: ["React.js", "JavaScript", "MongoDB", "Tailwind CSS"],
    features: [
      "User Posts",
      "Like/Dislike System",
      "Dark Mode",
      "Responsive",
      "Personal Profile",
      "Follow/Unfollow Feature",
    ],
    links: {
      github: "https://github.com/SVKVAIBHAV",
      live: "#",
    },
  },
  {
    title: "Portfolio with 3D Animations",
    description: "Interactive portfolio with animated 3D elements and dynamic project loading.",
    image: "/assets/portfolio.png",
    technologies: ["Next.js", "Resend Email", "Tailwind CSS"],
    features: ["Hero Section", "Easy Contact", "Performance Optimized", "Better UI"],
    links: {
      github: "https://github.com/SVKVAIBHAV",
      live: "#",
    },
  },
  {
    title: "Inventory Management System",
    description: "Manage your inventory easily with a user-friendly dashboard and features.",
    image: "/assets/inventory.jpg",
    technologies: ["PHP", "MySQL", "CSS"],
    features: ["Personal Account", "Easy to Insert Data", "Dashboard", "Update Features"],
    links: {
      github: "https://github.com/SVKVAIBHAV",
      live: "#",
    },
  },
]

function InfiniteMarquee({ children }: { children: React.ReactNode }) {
  const baseX = useRef(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((t, delta) => {
    if (containerRef.current && !isPaused) {
      baseX.current -= (delta / 10) * 0.5
      containerRef.current.style.transform = `translateX(${baseX.current % (containerRef.current.scrollWidth / 2)}px)`
    }
  })

  return (
    <div
      className="overflow-hidden w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={containerRef} className="flex w-max gap-8 px-4">
        {children}
        {children} {/* Duplicate for seamless infinite loop */}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl shadow-xl bg-black/50 backdrop-blur-sm p-6 border border-teal-500/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <InfiniteMarquee>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="min-w-[320px] max-w-sm rounded-xl overflow-hidden border border-teal-500/20 bg-black/70 p-4 shadow-lg hover:shadow-teal-500/20 transition-all duration-500"
              >
                <div className="h-48 rounded-lg overflow-hidden mb-4 group relative">
                  <Image
                    width={400}
                    height={225}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </div>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </InfiniteMarquee>
        </motion.div>
      </div>
    </section>
  )
}
