'use client'
import { useState } from 'react'
import ServiceCard from '@/components/ServiceCard'
import { Database, Drill, Wrench, Package, Leaf, Cpu, GraduationCap, Search } from 'lucide-react'

const services = [
  {
    id: 'reservoir',
    title: 'Reservoir & Subsurface Studies',
    description: 'Comprehensive reservoir characterization and modeling.',
    icon: <Database />,
    items: ['Reservoir characterization', 'Geological analysis', 'Production forecasting']
  },
  {
    id: 'field-services',
    title: 'Oil & Gas Field Services',
    description: 'Advanced well services and field operations.',
    icon: <Drill />,
    items: ['Wireline logging', 'Production logging', 'Well intervention']
  }
]

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <div className="pt-8">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p>Comprehensive energy solutions across the value chain.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            isExpanded={expanded === service.id}
            onToggle={() => setExpanded(expanded === service.id ? null : service.id)}
          />
        ))}
      </div>
    </div>
  )
}