import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-8">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with UES Energy Solutions.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="text-blue-900 mr-3 mt-1" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>Plot 126, Obadina Street,<br />Omole Estate, Ikeja, Lagos</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-blue-900 mr-3" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+234 80 5426 1206<br />+234 80 3445 0222</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-blue-900 mr-3" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>UESEnergySolutions@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
        <div className="mt-12 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3676478!3d6.5961759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93c7f8a3c0b9%3A0x6bb6e55c27b5b5f5!2sOmole%20Estate%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1700000000000"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}