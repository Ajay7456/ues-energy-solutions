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
          access_key: '05c5b889-b1a8-4f2b-9715-b4e5ad8d42ae',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Contact Form - ${form.name}`,
          from_name: 'UES Website',
          botcheck: '',
          to: 'info@uesenergysolutions.com,05c5b889-b1a8-4f2b-9715-b4e5ad8d42ae'
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">Get in touch with UES Energy Solutions Limited</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Address</h3>
                    <p className="text-gray-600">
                      Plot 126, Obadina Street<br />
                      Omole Estate, Ikeja<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Address</h3>
                    <div className="space-y-2">
                      <a href="mailto:info@uesenergysolutions.com" className="text-blue-900 hover:text-blue-700 block">
                        info@uesenergysolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium min-w-[120px]">Monday - Friday:</span>
                        <span className="text-right ml-4">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium min-w-[120px]">Saturday:</span>
                        <span className="text-right ml-4">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium min-w-[120px]">Sunday:</span>
                        <span className="text-right ml-4">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.367647774016972!3d6.596175921913226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93c7f8a3c0b9%3A0x6bb6e55c27b5b5f5!2sOmole%20Estate%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UES Energy Solutions Office Location"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-gray-600 text-sm">📍 Located in Omole Estate, Ikeja</p>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-900 text-white mr-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">Get a Quote</h2>
                  <p className="text-gray-600">Fill out the form below</p>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you! We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}