import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Get form data
    const { name, email, message, source = 'Contact Form' } = await request.json()

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill all fields' },
        { status: 400 }
      )
    }

    // SIMPLE EMAIL CONFIGURATION
    // Uses your existing email - NO THIRD PARTY SERVICES
    
    const transporter = nodemailer.createTransport({
      // Method 1: Try Gmail first (works for most emails)
      service: 'gmail',
      auth: {
        user: process.env.YOUR_EMAIL,      // Your email address
        pass: process.env.YOUR_PASSWORD,   // Your email password
      },
    })

    // Send email
    await transporter.sendMail({
      from: `"UES Website" <${process.env.YOUR_EMAIL}>`, // Shows as "UES Website"
      to: 'info@uesenergysolutions.com',                // Where to send
      cc: 'ceo@uesenergysolutions.com',                 // Copy to CEO
      replyTo: email,                                   // User's email for reply
      subject: `New Message from ${name} - UES Website`,
      text: `
New ${source} Submission

Name: ${name}
Email: ${email}
Message:
${message}

---
Sent from UES Energy Solutions Website
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #1e40af;">New ${source} Submission</h2>
  <div style="background: #f8fafc; padding: 15px; border-radius: 5px;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <div style="background: white; padding: 10px; margin: 10px 0; border-left: 3px solid #1e40af;">
      ${message.replace(/\n/g, '<br>')}
    </div>
  </div>
  <p style="color: #666; font-size: 12px; margin-top: 20px;">
    Sent from UES Energy Solutions Website
  </p>
</div>
      `,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully!' 
    })

  } catch (error) {
    console.error('Email error:', error)
    
    // Try alternative SMTP if Gmail fails
    try {
      const transporter2 = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.YOUR_EMAIL,
          pass: process.env.YOUR_PASSWORD,
        },
      })

      await transporter2.sendMail({
        from: process.env.YOUR_EMAIL,
        to: 'info@uesenergysolutions.com',
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      })

      return NextResponse.json({ success: true })

    } catch (fallbackError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service temporarily unavailable. Please email us directly at info@uesenergysolutions.com' 
        },
        { status: 500 }
      )
    }
  }
}