import { NextRequest, NextResponse } from 'next/server'
import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'OfIHUHhPErJDPnAWy'
const EMAILJS_SERVICE_ID = 'service_xlhrzl5'
const EMAILJS_TEMPLATE_ID = 'template_usgg5ny'

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Prepare email template parameters
    const templateParams = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service.trim(),
      message: message.trim(),
      to_email: 'victordrux1@gmail.com'
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      return NextResponse.json(
        {
          success: true,
          message: 'Email sent successfully',
          data: response
        },
        { status: 200 }
      )
    } else {
      throw new Error('EmailJS returned non-200 status')
    }

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
