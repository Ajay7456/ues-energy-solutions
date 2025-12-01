'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-900">
              UES Energy Solutions
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <Link href="/about" className="hover:text-blue-900">About</Link>
            <Link href="/services" className="hover:text-blue-900">Services</Link>
            <Link href="/contact" className="hover:text-blue-900">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/services" className="block py-2">Services</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}