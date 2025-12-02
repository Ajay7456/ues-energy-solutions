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

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Company Address</h3>
                <p className="text-gray-600 text-lg">
                  Plot 126, Obadina Street<br />
                  Omole Estate, Ikeja<br />
                  Lagos, Nigeria
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Address</h3>
                <a 
                  href="mailto:UESEnergySolutions@gmail.com"
                  className="text-blue-900 text-lg hover:text-blue-700"
                >
                  info@uesenergysolutions.com
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Phone Numbers</h3>
                <div className="space-y-2">
                  <a 
                    href="tel:+2348054261206"
                    className="text-gray-600 text-lg hover:text-blue-900 block"
                  >
                    +234 80 5426 1206
                  </a>
                  <a 
                    href="tel:+2348034450222"
                    className="text-gray-600 text-lg hover:text-blue-900 block"
                  >
                    +234 80 3445 0222
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Hours</h3>
                <p className="text-gray-600 text-lg">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM
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