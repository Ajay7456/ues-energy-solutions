'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight, Zap, Cpu, Wrench, Leaf, Database, Package, GraduationCap } from 'lucide-react'
import { useState, useEffect } from 'react'

const services = [
  {
    id: 'reservoir',
    name: 'Reservoir & Subsurface Studies',
    desc: 'Comprehensive characterization & modeling',
    link: '/services#reservoir',
    icon: <Database className="h-8 w-8" />,
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'field-services',
    name: 'Oil & Gas Field Services',
    desc: 'Advanced oil & gas operations',
    link: '/services#field-services',
    icon: <Zap className="h-8 w-8" />,
    color: 'from-blue-700 to-blue-900'
  },
  {
    id: 'engineering',
    name: 'Engineering & Technical Services',
    desc: 'End-to-end engineering support',
    link: '/services#engineering',
    icon: <Wrench className="h-8 w-8" />,
    color: 'from-blue-800 to-blue-950'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain & Logistics',
    desc: 'Integrated supply chain solutions',
    link: '/services#supply-chain',
    icon: <Package className="h-8 w-8" />,
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'clean-energy',
    name: 'Clean Energy Initiatives',
    desc: 'Sustainable energy solutions',
    link: '/services#clean-energy',
    icon: <Leaf className="h-8 w-8" />,
    color: 'from-emerald-600 to-green-800'
  },
  {
    id: 'digital',
    name: 'Digital Solutions',
    desc: 'AI & technology integration',
    link: '/services#digital',
    icon: <Cpu className="h-8 w-8" />,
    color: 'from-cyan-600 to-blue-700'
  },
  {
    id: 'training',
    name: 'Training & Consulting',
    desc: 'Professional development services',
    link: '/services#training',
    icon: <GraduationCap className="h-8 w-8" />,
    color: 'from-blue-700 to-blue-900'
  }
]

export default function Home() {
  const [touchActive, setTouchActive] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        {/* Subtle Pattern Background */}
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Integrated Energy Solutions
              <span className="block text-blue-200 mt-2">for Africa & Beyond</span>
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

      {/* Services Overview - Touch Friendly */}
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
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 group-active:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Service Icon */}
                <div className="p-6 pb-0">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4 group-active:scale-95 transition-transform`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6 pt-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-blue-900 font-medium text-sm">
                    <span>Learn more</span>
                    <ChevronRight className="ml-1 group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
                  </div>
                </div>
                
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