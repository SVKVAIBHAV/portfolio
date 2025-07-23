import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vaibhav Developer - MERN Stack Developer Portfolio",
  description:
    "Portfolio of John Developer, a passionate MERN stack developer specializing in MongoDB, Express.js, React, and Node.js. Showcasing modern web applications and projects.",
  keywords:
    "MERN stack developer, React developer, Node.js developer, MongoDB, Express.js, JavaScript, TypeScript, web developer portfolio",
  authors: [{ name: "John Developer" }],
  openGraph: {
    title: "Vaibhav - Full Stack Developer",
    description: "Passionate MERN stack developer ready to build amazing web applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Toaster position="top-center" />{children}
        </body>
    </html>
  )
}
