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
    image: 'https://i.ibb.co/LfGQQxz/Reservoir-Subsurface-Studies.jpg'
  },
  {
    id: 'field-services',
    name: 'Oil & Gas Field Services',
    desc: 'Advanced oil & gas operations',
    link: '/services#field-services',
    image: 'https://i.ibb.co/j9hYK0zV/Oil-Gas-Field-Services.jpg'
  },
  {
    id: 'engineering',
    name: 'Engineering & Technical Services',
    desc: 'End-to-end engineering support',
    link: '/services#engineering',
    image: 'https://i.ibb.co/YBRmWgQN/Engineering-Technical-Services.jpg'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain & Logistics',
    desc: 'Integrated supply chain solutions',
    link: '/services#supply-chain',
    image: 'https://i.ibb.co/RGW41mJk/Supply-Chain-Logistics.jpg'
  },
  {
    id: 'clean-energy',
    name: 'Clean Energy Initiatives',
    desc: 'Sustainable energy solutions',
    link: '/services#clean-energy',
    image: 'https://i.ibb.co/0V6FRjgS/Clean-Energy-Initiatives.jpg'
  },
  {
    id: 'digital',
    name: 'Digital Solutions',
    desc: 'AI & technology integration',
    link: '/services#digital',
    image: 'https://i.ibb.co/VYG9CQpK/Digital-Solutions.jpg'
  },
  {
    id: 'training',
    name: 'Training & Consulting',
    desc: 'Professional development services',
    link: '/services#training',
    image: 'https://i.ibb.co/rGjBS3kz/Training-Consulting.jpg'
  }
]

export default function Home() {
  const [touchActive, setTouchActive] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id))
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, serviceName: string) => {
    const target = e.currentTarget
    target.style.display = 'none'
    const parent = target.parentElement
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
          <div class="text-center p-4">
            <div class="text-3xl font-bold text-blue-900 mb-2">${serviceName.charAt(0)}</div>
            <div class="font-bold text-blue-900 text-sm">${serviceName.split(' ')[0]}</div>
          </div>
        </div>
      `
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Professional Tagline */}
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Provider of Choice for Energy Solutions</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-300">
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
                className="group relative px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200 touch-manipulation"
                onTouchStart={() => setTouchActive('services')}
                onTouchEnd={() => setTouchActive(null)}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Services
                  <ArrowRight className={`ml-2 transition-transform ${touchActive === 'services' ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
              
              <Link
                href="/contact"
                className="group relative px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white active:scale-95 transition-all duration-200 touch-manipulation"
                onTouchStart={() => setTouchActive('contact')}
                onTouchEnd={() => setTouchActive(null)}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview - With Your Images */}
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <Link 
                key={service.id}
                href={service.link}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl active:shadow-lg transition-all duration-300 active:scale-[0.98] touch-manipulation"
                onTouchStart={(e) => {
                  e.currentTarget.classList.add('active:scale-[0.98]')
                }}
              >
                {/* Service Image with Loading State */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                  {/* Loading Skeleton */}
                  {!loadedImages.has(service.id) && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-100 to-blue-200"></div>
                  )}
                  
                  {/* Actual Image - object-contain for full visibility */}
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ${
                      loadedImages.has(service.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(service.id)}
                    onError={(e) => handleImageError(e, service.name)}
                  />
                  
                  {/* Service Indicator */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-blue-900 font-medium text-sm">
                    <span>Learn more</span>
                    <ChevronRight className="ml-1 group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900/10 rounded-xl transition-colors duration-300 pointer-events-none"></div>
                
                {/* Touch Feedback Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
          
          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 active:scale-95 transition-all duration-200 touch-manipulation shadow-lg"
              onTouchStart={() => setTouchActive('all-services')}
              onTouchEnd={() => setTouchActive(null)}
            >
              View All Services
              <ArrowRight className={`ml-3 transition-transform ${touchActive === 'all-services' ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Partner with UES Energy Solutions</h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Leverage our expertise to optimize your energy operations and drive sustainable growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200 touch-manipulation"
            onTouchStart={() => setTouchActive('cta')}
            onTouchEnd={() => setTouchActive(null)}
          >
            Start a Conversation
            <ArrowRight className={`ml-3 transition-transform ${touchActive === 'cta' ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Link>
        </div>
      </section>
    </div>
  )
}