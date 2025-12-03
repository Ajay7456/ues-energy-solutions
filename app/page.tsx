'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronRight, ArrowRight, Zap, Globe, Shield, TrendingUp } from 'lucide-react'

const services = [
  {
    id: 'reservoir',
    name: 'Reservoir & Subsurface Studies',
    desc: 'Comprehensive characterization & modeling',
    link: '/services#reservoir',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop',
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    id: 'field-services',
    name: 'Oil & Gas Field Services',
    desc: 'Advanced oil & gas operations',
    link: '/services#field-services',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop',
    icon: <Zap className="h-6 w-6" />
  },
  {
    id: 'engineering',
    name: 'Engineering & Technical Services',
    desc: 'End-to-end engineering support',
    link: '/services#engineering',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop',
    icon: <Shield className="h-6 w-6" />
  },
  {
    id: 'clean-energy',
    name: 'Clean Energy Initiatives',
    desc: 'Sustainable energy solutions',
    link: '/services#clean-energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop',
    icon: <Globe className="h-6 w-6" />
  }
]

const stats = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Countries Served', value: '15+' },
  { label: 'Years Experience', value: '10+' }
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <div className="relative min-h-[90vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-16">
          <div className="max-w-4xl">
            {/* Animated Badge */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-sm font-semibold text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Provider of Choice for Energy Solutions
              </span>
            </div>
            
            {/* Main Heading with Typewriter Effect */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="block">Powering</span>
              <span className="block text-blue-300">Africa's Future</span>
            </h1>
            
            {/* Animated Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              UES Energy Solutions Nigeria Limited delivers cutting-edge integrated energy services 
              across the entire oil & gas value chain. Driving innovation, sustainability, and 
              operational excellence for a brighter energy future.
            </p>
            
            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Link
                href="/services"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Our Solutions
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              
              <Link
                href="/contact"
                className="group relative px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300">
                  {stat.value}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-blue-900">Energy Solutions</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              From reservoir to renewables, we deliver end-to-end solutions across the energy spectrum
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                href={service.link}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                
                {/* Service Image */}
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <div className="text-blue-900">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-blue-900 font-medium">
                    <span>Learn more</span>
                    <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              View All Services
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative p-8 md:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Energy Operations?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Partner with Africa's leading integrated energy solutions provider. 
                  Let's build a sustainable energy future together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}