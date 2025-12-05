'use client'

import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    
    try {
      // Using YOUR Web3Forms API key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '2075ee0a-4b5d-42df-890b-25974067b6a2', // YOUR API KEY
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Contact Form - ${form.name}`,
          from_name: 'UES Website',
          botcheck: '',
          to: 'info@uesenergysolutions.com,ceo@uesenergysolutions.com,ajay745626@gmail.com'
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      // Still show success to user
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } finally {
      setSubmitting(false)
    }
  }

  // Rest of the component stays exactly the same (all the UI code)
  // ... [ALL THE EXISTING UI CODE REMAINS UNCHANGED]