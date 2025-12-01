import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-900/90 to-blue-800/90 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Logo Placeholder */}
            <div className="flex items-center mb-8">
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <span className="text-2xl font-bold">UES</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">UES Energy Solutions</h1>
                <p className="text-blue-100 mt-2">Limited</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Integrated Energy Solutions for a 
              <span className="text-blue-300"> Sustainable Future</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              From reservoir to renewables, we deliver end-to-end energy expertise across Nigeria and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview with Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-900">Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions across the entire value chain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reservoir & Subsurface</h3>
                <p className="text-gray-600 mb-4">Comprehensive reservoir studies and modeling</p>
                <Link href="/services#reservoir" className="text-blue-900 font-medium hover:text-blue-700">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Field Services</h3>
                <p className="text-gray-600 mb-4">Advanced oil & gas field operations</p>
                <Link href="/services#field-services" className="text-blue-900 font-medium hover:text-blue-700">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Clean Energy</h3>
                <p className="text-gray-600 mb-4">Sustainable energy solutions</p>
                <Link href="/services#clean-energy" className="text-blue-900 font-medium hover:text-blue-700">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Projects?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact UES Energy Solutions for innovative solutions that drive efficiency and sustainability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}