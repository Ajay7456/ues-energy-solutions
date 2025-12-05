'use client'

import { useState } from 'react'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    
    try {
      // Using Formspree as a reliable alternative
      const response = await fetch('https://formspree.io/f/xdorabgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'New Quote Request - UES Energy Solutions Website',
          _cc: 'ceo@uesenergysolutions.com',
          source: 'Quote Button Modal'
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          onClose()
        }, 3000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Failed to send message. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900">Get a Quote</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close"
            >
              <X size={24} />
            </button>
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
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quote Request Sent!</h3>
              <p className="text-gray-600">We'll get back to you shortly at {form.email}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition resize-none"
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 active:scale-95 transition-all duration-200 touch-manipulation flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Quote Request'}
                <Send className="ml-2" size={20} />
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Your quote request will be sent to info@uesenergysolutions.com
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}