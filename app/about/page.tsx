import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About UES Energy Solutions</h1>
          <p className="text-xl text-blue-100">
            Provider of Choice for Energy Solutions across Africa and beyond
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Info */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Company</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <span className="font-semibold text-blue-900">UES Energy Solutions Limited</span> was established in <span className="font-semibold">December 2025</span> with a vision to bridge traditional energy expertise with emerging sustainable technologies.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide comprehensive integrated energy solutions across the entire value chain—from reservoir studies and field operations to clean energy initiatives and digital transformation, serving clients across Africa and beyond.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed">
              To deliver innovative, reliable, and sustainable energy solutions that optimize performance, maximize resource recovery, and accelerate the energy transition, becoming the provider of choice for integrated oil & gas services, clean energy initiatives, and digital transformation across the energy value chain.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed">
              To be the leading and most trusted provider of choice for energy solutions in Africa and beyond, driving operational excellence, environmental stewardship, and long-term value for our clients, communities, and stakeholders through technical expertise, cutting-edge technology, and unwavering commitment to safety and sustainability.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reliability */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-blue-900">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                Consistently delivering on our promises with unwavering commitment to operational excellence and dependable service delivery across all our engagements.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-blue-900">✅</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Operating with transparency, honesty, and the highest ethical standards in all business dealings, building trust with clients, partners, and stakeholders.
              </p>
            </div>

            {/* Team Work */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-blue-900">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Team Work</h3>
              <p className="text-gray-600">
                Fostering collaborative environments where diverse expertise converges to achieve shared success, driving innovation through collective effort.
              </p>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-blue-900">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Leveraging deep technical knowledge, continuous learning, and innovative thinking to deliver superior solutions and maintain industry leadership.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Partner with UES Energy Solutions</h2>
          <p className="text-blue-100 mb-6">
            Let's work together to drive the energy transition with innovative and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}