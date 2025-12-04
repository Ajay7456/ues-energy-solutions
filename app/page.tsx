'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    id: 'reservoir',
    name: 'Reservoir & Subsurface Studies',
    desc: 'Comprehensive characterization & modeling',
    link: '/services#reservoir',
    image: 'https://i.ibb.co/4gKggjXs/Reservoir-Subsurface-Studies.jpg'
  },
  {
    id: 'field-services',
    name: 'Oil & Gas Field Services',
    desc: 'Advanced oil & gas operations',
    link: '/services#field-services',
    image: 'https://i.ibb.co/xS7dpGnB/Oil-Gas-Field-Services.jpg'
  },
  {
    id: 'engineering',
    name: 'Engineering & Technical Services',
    desc: 'End-to-end engineering support',
    link: '/services#engineering',
    image: 'https://i.ibb.co/h11s2kJn/Engineering-Technical-Services.jpg'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain & Logistics',
    desc: 'Integrated supply chain solutions',
    link: '/services#supply-chain',
    image: 'https://i.ibb.co/wNWXR3DD/Supply-Chain-Logistics.jpg'
  }
]

export default function Home() {
  const [touchActive, setTouchActive] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Provider of Choice for Energy Solutions</span>
              </div>
            </div>
            
            {/* Updated Title - Single line, smaller but bold */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-snug">
              UES Energy Solutions Limited
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              UES Energy Solutions Nigeria Limited is an integrated energy services company 
              specializing in comprehensive solutions across the oil & gas value chain, with 
              strong capabilities in upstream operations, sustainability, and digital innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="group relative px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200"
                onTouchStart={() => setTouchActive('services')}
                onTouchEnd={() => setTouchActive(null)}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Services
                  <ArrowRight className={`ml-2 transition-transform ${touchActive === 'services' ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="group relative px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white active:scale-95 transition-all duration-200"
                onTouchStart={() => setTouchActive('contact')}
                onTouchEnd={() => setTouchActive(null)}
              >
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-900">Core Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive energy solutions across the entire value chain, from reservoir to renewables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id}
                href={service.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-full"
              >
                {/* Stylish Image Box Container */}
                <div className="md:w-2/5 relative p-6 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white group-hover:from-blue-100 group-hover:to-blue-50 transition-all duration-500">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                  </div>
                  
                  {/* Main image box with cool styling */}
                  <div className="relative w-48 h-48 bg-white rounded-2xl shadow-lg p-4 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                    {/* Inner shadow effect */}
                    <div className="absolute inset-0 rounded-2xl shadow-inner border border-blue-100"></div>
                    
                    {/* Image with subtle border radius */}
                    <div className="absolute inset-3 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Floating badge effect */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Bottom right accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                  </div>
                </div>
                
                {/* Right-aligned Text Content */}
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="mb-3">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-blue-900 text-xs font-medium mb-2">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-2"></div>
                      Core Service
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-blue-900 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="mr-2">Explore details</span>
                    <ChevronRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg group/button"
            >
              View All Services
              <ArrowRight className="ml-3 group-hover/button:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Partner with UES Energy Solutions</h2>
          <p className="text-lg text-blue-100 mb-8">
            Leverage our expertise to optimize your energy operations and drive sustainable growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors group/cta"
          >
            Start a Conversation
            <ArrowRight className="ml-3 group-hover/cta:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  )
}