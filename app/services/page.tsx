'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Database,
  Drill,
  Wrench,
  Package,
  Leaf,
  Cpu,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Search
} from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  items: string[]
}

const servicesData: Service[] = [
  {
    id: 'reservoir',
    title: 'Reservoir & Subsurface Integrated Studies',
    description: 'Comprehensive reservoir characterization and modeling services to optimize field development and enhance recovery.',
    icon: <Database className="h-8 w-8" />,
    items: [
      'Comprehensive reservoir characterization and modelling',
      'Geological, geophysical, and petrophysical analysis',
      'Reservoir simulation, dynamic modelling, and production forecasting',
      'Field development planning and optimization',
      'Pressure-transient and rate-transient analysis',
      'Enhanced oil recovery (EOR) and IOR studies',
      'Well integrity and formation evaluation'
    ]
  },
  {
    id: 'field-services',
    title: 'Oil & Gas Field Services',
    description: 'Advanced well services and field operations for optimal production and reservoir management.',
    icon: <Drill className="h-8 w-8" />,
    items: [
      'Wireline logging (open-hole and cased-hole)',
      'Borehole pressure (BHP) measurement and acquisition',
      'Production logging and well surveillance',
      'Slickline and e-line intervention services',
      'Perforation, sampling, and downhole tool deployment',
      'Testing, monitoring, and diagnostics to support well performance'
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering, Operations & Technical Services',
    description: 'End-to-end engineering support and operational management for energy projects.',
    icon: <Wrench className="h-8 w-8" />,
    items: [
      'Drilling and completion engineering support',
      'Wellsite supervision and operational management',
      'Production optimization and artificial-lift services',
      'Integrity, reliability, and maintenance engineering',
      'HSE management, audits, and risk assessments'
    ]
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain, Procurement & Logistics',
    description: 'Integrated supply chain solutions for efficient energy operations.',
    icon: <Package className="h-8 w-8" />,
    items: [
      'End-to-end supply-chain management for energy operations',
      'Strategic sourcing, vendor management, and procurement services',
      'Materials management and inventory optimization',
      'Integrated logistics support and transportation coordination',
      'Local content development and supply-chain compliance programs'
    ]
  },
  {
    id: 'clean-energy',
    title: 'Clean Energy & Sustainability Initiatives',
    description: 'Sustainable energy solutions and environmental stewardship programs.',
    icon: <Leaf className="h-8 w-8" />,
    items: [
      'Renewable-energy project development (solar, wind, hybrid systems)',
      'Energy-efficiency studies and decarbonization strategies',
      'Carbon capture, utilization, and storage (CCUS) technical support',
      'Geothermal resource assessment and feasibility studies',
      'Environmental monitoring and ESG performance planning',
      'Advisory support for energy transition programs'
    ]
  },
  {
    id: 'digital',
    title: 'Digital & Technology Solutions',
    description: 'Cutting-edge digital solutions for data-driven energy operations.',
    icon: <Cpu className="h-8 w-8" />,
    items: [
      'Data acquisition, digital logging, and real-time monitoring',
      'Reservoir software and analytics solutions',
      'IoT-enabled energy monitoring systems',
      'AI and machine-learning tools for predictive maintenance and optimization',
      'Digital twin development for fields and facilities'
    ]
  },
  {
    id: 'training',
    title: 'Training, Competency Development & Consulting',
    description: 'Professional development and strategic advisory services.',
    icon: <GraduationCap className="h-8 w-8" />,
    items: [
      'Technical training for subsurface, drilling, and production disciplines',
      'Safety, operations, and regulatory compliance training',
      'Strategic advisory for asset management, field development, and energy transition',
      'Workforce development and competency frameworks'
    ]
  },
]

export default function Services() {
  const [expandedSection, setExpandedSection] = useState<string | null>('reservoir')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section with Deep Blue Background */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        {/* Subtle pattern overlay for depth */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
              backgroundSize: '30px 30px',
            }}
          ></div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Provider of Choice for Energy Solutions
            </div>
            <p className="text-xl text-blue-100">
              Comprehensive energy solutions across the entire value chain. Explore our seven core service areas.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {filteredServices.map((service) => {
            const expanded = expandedSection === service.id;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-blue-50 text-blue-900 mr-4">
                        {service.icon}
                      </div>
                      <div>
                        {/* Heading with id for accessibility */}
                        <h3
                          className="text-xl font-bold text-gray-800 mb-2"
                          id={`accordion-header-${service.id}`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection(service.id)}
                      aria-label={expanded ? `Collapse ${service.title}` : `Expand ${service.title}`}
                      aria-expanded={expanded}
                      aria-controls={`accordion-panel-${service.id}`}
                      className="text-blue-900 hover:text-blue-700 ml-4 flex-shrink-0 focus:ring-2 focus:ring-blue-800 rounded"
                    >
                      {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  {expanded && (
                    <div
                      id={`accordion-panel-${service.id}`}
                      role="region"
                      aria-labelledby={`accordion-header-${service.id}`}
                      className="mt-6 pt-6 border-t border-gray-100"
                    >
                      <ul className="space-y-3">
                        {service.items.map((item, index) => (
                          <li key={index} className="flex items-start group">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <div className="h-2 w-2 rounded-full bg-blue-900" />
                            </div>
                            <span className="text-gray-700 group-hover:text-blue-900 transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Contact CTA within expanded section */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-gray-600 mb-4">Interested in this service?</p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                        >
                          Contact Us for Details
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Custom Energy Solutions?</h2>
          <p className="text-blue-100 mb-6">
            Contact our team of experts to discuss your specific energy project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}