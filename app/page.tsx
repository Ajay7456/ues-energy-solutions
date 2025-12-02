import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Oil Rig Background */}
      <div className="relative bg-gradient-to-r from-blue-900/90 to-blue-800/90 text-white">
        {/* Oil Rig Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                Provider of Choice for Energy Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Integrated Energy Solutions for 
              <span className="text-blue-300"> Africa & Beyond</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Delivering innovative, reliable, and sustainable energy solutions that optimize performance and maximize resource recovery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Started button → About Page */}
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors group/start"
              >
                Get Started
                <span className="ml-2 group-hover/start:translate-x-1 transition-transform">→</span>
              </Link>
              
              {/* Our Services button → Services Page */}
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

      {/* Services Overview */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-900">Core Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions across the entire value chain, from reservoir to renewables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Reservoir & Subsurface Studies', desc: 'Comprehensive characterization & modeling', link: '/services#reservoir' },
              { name: 'Oil & Gas Field Services', desc: 'Advanced oil & gas operations', link: '/services#field-services' },
              { name: 'Engineering & Technical Services', desc: 'End-to-end engineering support', link: '/services#engineering' },
              { name: 'Supply Chain & Logistics', desc: 'Integrated supply chain solutions', link: '/services#supply-chain' },
              { name: 'Clean Energy Initiatives', desc: 'Sustainable energy solutions', link: '/services#clean-energy' },
              { name: 'Digital Solutions', desc: 'AI & technology integration', link: '/services#digital' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link 
                  href={service.link}
                  className="text-blue-900 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  Explore Service
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors group/services"
            >
              View All Services
              <span className="ml-2 group-hover/services:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Energy Projects?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact UES Energy Solutions for innovative solutions that drive efficiency and sustainability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
}