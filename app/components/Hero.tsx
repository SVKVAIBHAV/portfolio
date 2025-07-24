"use client"

import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-500/10 rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full"
      />

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 p-1 shadow-lg shadow-teal-500/20">
            <Image
              height={160}
              width={160}
              priority
              src="/assets/personalpic.jpg"
              alt="MyPic"
              className="w-full h-full rounded-full bg-gray-900 object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I&apos;m Vaibhav
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          <Typewriter
            words={["Full Stack Web Developer", "MERN Stack Developer", "Next.js + PostgreSQL", "Quick Learner"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Passionate fresher developer specializing in MongoDB, Express.js, React, Node.js and Next.js. Ready to build
          amazing web applications and contribute to innovative projects.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.a
            href="/assets/Vaibhav Sarvaiya.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center shadow-lg shadow-teal-500/20">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          {[
            { href: "https://github.com/SVKVAIBHAV", icon: <Github className="w-8 h-8" /> },
            { href: "https://www.linkedin.com/in/vaibhav-sarvaiya/", icon: <Linkedin className="w-8 h-8" /> },
            { href: "mailto:vaibhavsarvaiya35@gmail.com", icon: <Mail className="w-8 h-8" /> },
          ].map((social, index) => (
            <motion.a
              key={index}
              target="_blank"
              href={social.href}
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              rel="noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
