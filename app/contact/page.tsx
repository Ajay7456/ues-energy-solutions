import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-8">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-5 animate-fade-in">Contact Us</h1>
          <p className="text-xl mb-3">Get in touch with <span className="font-semibold">UES Energy Solutions</span> and let us empower your energy needs.</p>
          <span className="inline-block w-24 h-1 rounded bg-white opacity-30 mb-2"></span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div className="flex items-start bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <MapPin className="text-blue-900 mr-3 mt-1 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">Address</h3>
                <p className="text-gray-700">Plot 126, Obadina Street,<br />Omole Estate, Ikeja, Lagos</p>
              </div>
            </div>
            <div className="flex items-center bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Phone className="text-blue-900 mr-3 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">Phone</h3>
                <p className="text-gray-700">+234 80 5426 1206<br />+234 80 3445 0222</p>
              </div>
            </div>
            <div className="flex items-center bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Mail className="text-blue-900 mr-3 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">Email</h3>
                <p className="text-gray-700">UESEnergySolutions@gmail.com</p>
              </div>
            </div>
            {/* Social Media optionally */}
            {/* <div className="flex items-center space-x-2">
              // Add icons here
            </div> */}
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="mt-12 h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="UES Energy Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3676478!3d6.5961759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93c7f8a3c0b9%3A0x6bb6e55c27b5b5[...]"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { 
            animation: fade-in 1.3s cubic-bezier(.42,0,.58,1) backwards;
          }
        `}
      </style>
    </div>
  )
}