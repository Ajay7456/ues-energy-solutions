import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Get in touch with UES Energy Solutions Limited
          </p>
        </div>
      </div>

      {/* Contact Info - Redesigned */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address Column */}
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">📍</span> Office Address
                </h3>
                <p className="text-gray-600">
                  Plot 126, Obadina Street<br />
                  Omole Estate, Ikeja<br />
                  Lagos, Nigeria
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">⏰</span> Business Hours
                </h3>
                <p className="text-gray-600">
                  <span className="font-medium">Monday - Friday:</span><br />
                  8:00 AM - 5:00 PM<br />
                  <span className="font-medium mt-2 block">Saturday:</span>
                  9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
            
            {/* Contact Column */}
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">📧</span> Email Address
                </h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:Info@uesenergysolutions.com"
                    className="text-blue-900 text-lg hover:text-blue-700 flex items-center"
                  >
                    Info@uesenergysolutions.com
                  </a>
                  <a 
                    href="mailto:ceo@uesenergysolutions.com"
                    className="text-blue-900 text-lg hover:text-blue-700 flex items-center"
                  >
                    ceo@uesenergysolutions.com
                  </a>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">📞</span> Phone Numbers
                </h3>
                <div className="space-y-2">
                  <a 
                    href="tel:+2348054261206"
                    className="text-gray-600 text-lg hover:text-blue-900 block flex items-center"
                  >
                    +234 80 5426 1206
                  </a>
                  <a 
                    href="tel:+2348034450222"
                    className="text-gray-600 text-lg hover:text-blue-900 block flex items-center"
                  >
                    +234 80 3445 0222
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Column */}
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quick Contact</h3>
                <p className="text-blue-100 mb-4">
                  Need immediate assistance? Send us a message and we'll respond within 24 hours.
                </p>
                <Link
                  href="/#contact-form"  // Changed to a simple link
                  className="w-full bg-white text-blue-900 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors block text-center"
                >
                  Send Quick Message
                </Link>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Emergency Contact</h3>
                <p className="text-gray-600 text-sm">
                  For urgent matters outside business hours, please call our emergency line.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96">
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
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600">
              📍 Located in Omole Estate, Ikeja - easily accessible from major roads in Lagos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}