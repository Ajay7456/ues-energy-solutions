import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">UES Energy Solutions</h3>
            <p>Integrated energy solutions for a sustainable future.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block">Home</Link>
              <Link href="/about" className="block">About</Link>
              <Link href="/services" className="block">Services</Link>
              <Link href="/contact" className="block">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1" />
                <p>Plot 126, Obadina Street, Omole Estate, Ikeja, Lagos</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <p>+234 80 5426 1206</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" />
                <p>UESEnergySolutions@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t">
          <p>&copy; {new Date().getFullYear()} UES Energy Solutions Limited</p>
        </div>
      </div>
    </footer>
  )
}