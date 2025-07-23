"use client"

import { User, GraduationCap, Target, Code, Lightbulb, Users, MapPin, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  const aboutItems = [
    { icon: <Code className="w-6 h-6 text-teal-400" />, label: "Passionate Coder" },
    { icon: <Lightbulb className="w-6 h-6 text-yellow-400" />, label: "Creative Thinker" },
    { icon: <Users className="w-6 h-6 text-emerald-400" />, label: "Team Player" },
    { icon: <MapPin className="w-6 h-6 text-cyan-400" />, label: "Based in India" },
    { icon: <Rocket className="w-6 h-6 text-teal-400" />, label: "Fast Learner" },
    { icon: <Lightbulb className="w-6 h-6 text-emerald-400" />, label: "Problem Solver" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: <User className="w-6 h-6 text-teal-400" />,
                title: "Who I Am",
                content:
                  "I'm a passionate and dedicated MERN stack developer with a strong foundation in modern web technologies. As a fresher in the field, I bring enthusiasm, fresh perspectives, and a hunger to learn and grow.",
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
                title: "Education",
                content:
                  "Bachelor's in Computer Application with focus on web development technologies. Completed various online Playlists and Projects to master the MERN stack.",
              },
              {
                icon: <Target className="w-6 h-6 text-cyan-400" />,
                title: "Goals",
                content:
                  "To contribute to innovative projects, work with experienced teams, and continuously improve my skills while building scalable and user-friendly web applications.",
              },
            ].map((block, i) => (
              <motion.div key={i} className="flex justify-center items-start space-x-4" variants={item}>
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {block.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{block.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{block.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Skills Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-teal-900/20 to-emerald-900/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-teal-500/10">
              <motion.div
                className="w-full h-full grid grid-cols-3 gap-5 p-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {aboutItems.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col justify-center gap-2 items-center text-center p-4 bg-black/30 rounded-xl shadow-lg border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300"
                    variants={item}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)",
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-2"
                      whileHover={{ rotate: 10 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="text-sm font-medium text-gray-300">{skill.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
