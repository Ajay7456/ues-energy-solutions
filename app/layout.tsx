'use client'

import './globals.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu')
      const menuButton = document.getElementById('mobile-menu-button')
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(event.target as Node) && 
          menuButton && 
          !menuButton.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <html lang="en">
      <head>
        <title>UES Energy Solutions Limited | Provider of Choice for Energy Solutions</title>
        <meta name="description" content="Innovative, reliable, and sustainable energy solutions across Africa and beyond." />
      </head>
      <body>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <div className="relative h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3 
                              transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  {/* Logo Image */}
                  <img
                    src="https://i.imgur.com/fHC1NZ4.png"
                    alt="UES Energy Solutions Logo"
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMwQTI0NjMiLz4KPHRleHQgeD0iMjAiIHk9IjI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlVFUzwvdGV4dD4KPC9zdmc+'
                    }}
                  />
                </div>
                <div className="transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent block leading-tight">
                    UES Energy
                  </span>
                  <span className="text-sm text-gray-600 block leading-tight transition-colors group-hover:text-blue-900">
                    Solutions Limited
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Contact', href: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-6 py-2 text-gray-700 font-medium group/nav"
                  >
                    <span className="relative z-10 transition-colors group-hover/nav:text-blue-900">
                      {item.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg 
                                  opacity-0 group-hover/nav:opacity-100 transition-all duration-300 
                                  scale-95 group-hover/nav:scale-100"></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 
                                  transition-all duration-300 group-hover/nav:w-4/5 group-hover/nav:left-1/10"></div>
                  </Link>
                ))}
                
                <Link
                  href="/contact"
                  className="relative ml-4 px-6 py-2.5 rounded-lg font-medium overflow-hidden group/cta"
                >
                  <span className="relative z-10 text-white">Get Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 
                                transition-all duration-500 group-hover/cta:from-blue-700 group-hover/cta:to-blue-900"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full 
                                transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                id="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
                aria-label="Menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <div className={`h-0.5 w-full bg-blue-900 rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                  <div className={`h-0.5 w-full bg-blue-900 rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`h-0.5 w-full bg-blue-900 rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`md:hidden fixed top-20 w-full bg-white shadow-lg z-40 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-1 border-t">
            <Link href="/" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="px-4 py-3">
              <Link href="/contact" className="block w-full bg-blue-900 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Spacer for fixed nav */}
        <div className="h-20"></div>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-3">
                    {/* Logo in Footer */}
                    <img
                      src="https://i.imgur.com/fHC1NZ4.png"
                      alt="UES Energy Solutions Logo"
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwQTI0NjMiLz4KPHRleHQgeD0iMTYiIHk9IjIxIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlVFUzwvdGV4dD4KPC9zdmc+'
                      }}
                    />
                  </div>
                  <div>
                    <span className="text-xl font-bold block">UES Energy</span>
                    <span className="text-blue-200 text-sm block">Solutions Limited</span>
                  </div>
                </div>
                <p className="text-blue-200">
                  Provider of Choice for Energy Solutions
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="text-blue-200 hover:text-white block">Home</Link>
                  <Link href="/about" className="text-blue-200 hover:text-white block">About</Link>
                  <Link href="/services" className="text-blue-200 hover:text-white block">Services</Link>
                  <Link href="/contact" className="text-blue-200 hover:text-white block">Contact</Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-2 text-blue-200">
                  <p>Plot 126, Obadina Street</p>
                  <p>Omole Estate, Ikeja, Lagos</p>
                  <p>Info@uesenergysolutions.com</p>
                  <p>+234 80 5426 1206</p>
                  <p>+234 80 3445 0222</p>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
              <p>&copy; {new Date().getFullYear()} UES Energy Solutions Limited. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}