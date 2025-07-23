"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast"
import { useState, useTransition } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [loading, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    startTransition(async () => {
      const toastId = toast.loading("Sending message...")
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        const result = await res.json()
        if (res.ok) {
          toast.success("Message sent successfully!", { id: toastId })
          setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
        } else {
          toast.error(result.error || "Something went wrong.", { id: toastId })
        }
      } catch {
        toast.error("Failed to send message.", { id: toastId })
      }
    })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you&apos;re looking for a dedicated developer to join your team, have a project in mind, or just
                want to network, I&apos;d love to hear from you. Let&apos;s build something amazing together!
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={item}>
                <InfoItem
                  icon={<Mail className="w-6 h-6 text-teal-400" />}
                  label="Email"
                  value="vaibhavsarvaiya35@email.com"
                />
              </motion.div>
              <motion.div variants={item}>
                <InfoItem icon={<Phone className="w-6 h-6 text-emerald-400" />} label="Phone" value="+91 9228891006" />
              </motion.div>
              <motion.div variants={item}>
                <InfoItem icon={<MapPin className="w-6 h-6 text-cyan-400" />} label="Location" value="Surat, India" />
              </motion.div>
            </div>

            <motion.div className="pt-8" variants={item}>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <SocialIcon href="https://github.com/SVKVAIBHAV" icon={<Github className="w-6 h-6" />} />
                <SocialIcon
                  href="https://www.linkedin.com/in/vaibhav-sarvaiya/"
                  icon={<Linkedin className="w-6 h-6" />}
                />
                <SocialIcon href="https://www.instagram.com/svk_vaibhav" icon={<Instagram className="w-6 h-6" />} />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-teal-500/10 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-teal-500/20 focus:border-teal-500/50 focus:ring-teal-500/30"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg shadow-teal-500/20"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Reusable components
const InputField = ({ label, name, type = "text", value, onChange }: any) => (
  <div>
    <label className="block text-gray-300 text-sm font-medium mb-2">{label}</label>
    <Input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="bg-gray-800/50 border-teal-500/20 focus:border-teal-500/50 focus:ring-teal-500/30"
    />
  </div>
)

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center space-x-4">
    <motion.div
      className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center"
      whileHover={{ rotate: 10, scale: 1.1 }}
    >
      {icon}
    </motion.div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
)

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all duration-300"
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    rel="noreferrer"
  >
    {icon}
  </motion.a>
)
