import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'UES Energy Solutions Limited | Integrated Energy Services',
  description: 'Providing comprehensive energy solutions from reservoir to renewables across Nigeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Enhanced Animated Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Animated Logo */}
              <Link href="/" className="flex items-center group">
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center mr-3 
                              transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-900/30">
                  <span className="text-white font-bold text-lg tracking-wider">UES</span>
                  {/* Pulsing Ring Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping opacity-75"></div>
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

              {/* Navigation Links with Animation */}
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
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg 
                                  opacity-0 group-hover/nav:opacity-100 transition-all duration-300 
                                  scale-95 group-hover/nav:scale-100"></div>
                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 
                                  transition-all duration-300 group-hover/nav:w-4/5 group-hover/nav:left-1/10"></div>
                  </Link>
                ))}
                
                {/* Animated CTA Button */}
                <Link
                  href="/contact"
                  className="relative ml-4 px-6 py-2.5 rounded-lg font-medium overflow-hidden group/cta"
                >
                  <span className="relative z-10 text-white">Get Quote</span>
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 
                                transition-all duration-500 group-hover/cta:from-blue-700 group-hover/cta:to-blue-900"></div>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full 
                                transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  {/* Border Animation */}
                  <div className="absolute inset-0 rounded-lg border border-transparent 
                                group-hover/cta:border-white/30 transition-all duration-300"></div>
                </Link>
              </div>

              {/* Mobile Menu Button (Animated) */}
              <button className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors group/menu">
                <div className="w-6 h-5 flex flex-col justify-between">
                  <div className="h-0.5 w-full bg-blue-900 rounded transition-transform duration-300 
                                group-hover/menu:translate-y-2 group-hover/menu:rotate-45"></div>
                  <div className="h-0.5 w-full bg-blue-900 rounded transition-opacity duration-300 
                                group-hover/menu:opacity-0"></div>
                  <div className="h-0.5 w-full bg-blue-900 rounded transition-transform duration-300 
                                group-hover/menu:-translate-y-2 group-hover/menu:-rotate-45"></div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Floating Indicator */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent 
                        animate-[pulse_3s_ease-in-out_infinite]"></div>
        </nav>

        {/* Spacer for fixed nav */}
        <div className="h-20"></div>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Enhanced Footer */}
        <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Company Info with Animation */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3 
                                transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <span className="text-blue-900 font-bold text-lg">UES</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold block leading-tight">UES Energy</span>
                    <span className="text-blue-200 text-sm block leading-tight">Solutions Limited</span>
                  </div>
                </div>
                <p className="text-blue-200 transition-colors group-hover:text-white">
                  Integrated energy solutions for a sustainable future.
                </p>
              </div>

              {/* Quick Links with Hover Effects */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {['Home', 'About', 'Services', 'Contact'].map((link) => (
                    <Link
                      key={link}
                      href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                      className="text-blue-200 hover:text-white transition-all duration-300 block transform hover:translate-x-2"
                    >
                      → {link}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3 text-blue-200">
                  <p className="hover:text-white transition-colors duration-300">📍 Plot 126, Obadina Street</p>
                  <p className="hover:text-white transition-colors duration-300">Omole Estate, Ikeja, Lagos</p>
                  <p className="hover:text-white transition-colors duration-300">📧 UESEnergySolutions@gmail.com</p>
                  <p className="hover:text-white transition-colors duration-300">📞 +234 80 5426 1206</p>
                  <p className="hover:text-white transition-colors duration-300">📞 +234 80 3445 0222</p>
                </div>
              </div>
            </div>

            {/* Copyright with Animation */}
            <div className="border-t border-blue-800/50 mt-8 pt-8 text-center">
              <p className="text-blue-200 animate-[pulse_5s_ease-in-out_infinite]">
                &copy; {new Date().getFullYear()} UES Energy Solutions Limited. All rights reserved.
              </p>
              <div className="mt-2 flex justify-center space-x-4">
                {['Innovation', 'Sustainability', 'Excellence'].map((word) => (
                  <span key={word} className="text-blue-300/70 text-sm animate-[fadeIn_2s_ease-in-out_infinite]">
                    • {word} •
                  </span>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}