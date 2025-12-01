import Hero from '@/components/Hero'
import Link from 'next/link'
import { Database, Drill, Wrench, Package, Leaf, Cpu, GraduationCap, ArrowRight } from 'lucide-react'

const services = [
  { title: 'Reservoir Studies', icon: <Database />, link: '/services#reservoir' },
  { title: 'Field Services', icon: <Drill />, link: '/services#field-services' },
  { title: 'Engineering', icon: <Wrench />, link: '/services#engineering' },
  { title: 'Supply Chain', icon: <Package />, link: '/services#supply-chain' },
  { title: 'Clean Energy', icon: <Leaf />, link: '/services#clean-energy' },
  { title: 'Digital Solutions', icon: <Cpu />, link: '/services#digital' },
  { title: 'Training', icon: <GraduationCap />, link: '/services#training' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <Link href={service.link} className="text-blue-900 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}