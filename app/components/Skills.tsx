"use client"

import { Database, Server, Globe, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      technologies: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      technologies: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 80 },
        { name: "JWT Authentication", level: 70 },
        { name: "Prisma", level: 80 },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      technologies: [
        { name: "MongoDB", level: 80 },
        { name: "Mongoose", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "PostgreSql", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-500",
      technologies: [
        { name: "Git/GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies I work with to build modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <SkillCard key={index} skillCategory={skillCategory} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skillCategory, index }: { skillCategory: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-teal-500/10 hover:border-teal-500/30 transition-all duration-500 shadow-lg hover:shadow-teal-500/10"
    >
      <div className="flex items-center mb-6">
        <motion.div
          className={`w-16 h-16 flex justify-center items-center rounded-xl bg-gradient-to-r ${skillCategory.color} p-3 mr-4`}
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <div className="text-white">{skillCategory.icon}</div>
        </motion.div>
        <h3 className="text-2xl font-bold text-white">{skillCategory.category}</h3>
      </div>
      <div className="space-y-4">
        {skillCategory.technologies.map((tech: any, techIndex: number) => (
          <div key={techIndex}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 font-medium">{tech.name}</span>
              <span className="text-gray-400 text-sm">{tech.level}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${skillCategory.color}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 + techIndex * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
