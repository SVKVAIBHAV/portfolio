// /app/api/contact/route.ts
import { NextResponse } from "next/server"
import { Resend } from "resend"
import ContactEmail from "@/app/emails/ContactEmail"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, subject, message } = body

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    // 1. Store in DB
    await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    })

    // 2. Send Email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: "From Portfolio Contact <onboarding@resend.dev>", // must match your Resend domain
      to: ["vaibhavsarvaiya35@gmail.com"], // your receiving Gmail
      subject: subject,
      react: ContactEmail({ firstName, lastName, email, message }),
    })

    if (error) {
      console.error("Resend Error:", error)
      return NextResponse.json({ error: "Email failed to send." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Server Error:", err)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}
