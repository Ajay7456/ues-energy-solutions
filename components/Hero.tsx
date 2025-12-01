import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Integrated Energy Solutions
          </h1>
          <p className="text-xl mb-8">
            UES Energy Solutions delivers end-to-end energy expertise for a sustainable future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}