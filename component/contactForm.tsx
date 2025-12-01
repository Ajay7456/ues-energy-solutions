'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitting(false)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-6">Send Message</h3>
      {submitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6">
          Message sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            required
            className="w-full p-3 border rounded"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 border rounded"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block mb-2">Message</label>
          <textarea
            required
            rows={5}
            className="w-full p-3 border rounded"
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-900 text-white px-6 py-3 rounded flex items-center"
        >
          {submitting ? 'Sending...' : 'Send Message'}
          <Send className="ml-2" />
        </button>
      </form>
    </div>
  )
}