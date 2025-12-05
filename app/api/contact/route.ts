import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Get form data from request
    const { name, email, message, source = 'Contact Form' } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `UES Website <${process.env.EMAIL_USER}>`,
      to: 'info@uesenergysolutions.com',
      cc: 'ceo@uesenergysolutions.com',
      subject: `New ${source} - ${name}`,
      text: `
UES Energy Solutions - New ${source}

Name: ${name}
Email: ${email}
Message: ${message}

---
Sent from UES Energy Solutions Website
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #1e40af, #1e3a8a); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1e40af; display: block; margin-bottom: 5px; }
    .value { padding: 10px; background: white; border-radius: 4px; border: 1px solid #e2e8f0; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>UES Energy Solutions - New ${source}</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name</span>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <span class="label">Email</span>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <span class="label">Message</span>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        <p>Sent from UES Energy Solutions Website Contact Form</p>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    )
  }
}