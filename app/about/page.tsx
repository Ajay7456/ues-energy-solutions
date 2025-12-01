export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About UES Energy Solutions</h1>
          <p className="text-xl text-blue-100">
            Integrated energy solutions for a sustainable future
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Company</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-blue-900">UES Energy Solutions Limited</span> was established in <span className="font-semibold">December 2025</span> with a vision to bridge traditional energy expertise with emerging sustainable technologies.
              </p>
              <p>
                We provide comprehensive integrated energy solutions across the entire value chain—from reservoir studies and field operations to clean energy initiatives and digital transformation.
              </p>
              <p>
                Our mission is to deliver innovative, sustainable energy solutions that empower industries and communities while minimizing environmental impact.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">What We Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-900"></div>
                </div>
                <span>Reservoir & subsurface integrated studies</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-900"></div>
                </div>
                <span>Oil & gas field services and operations</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-900"></div>
                </div>
                <span>Clean energy & sustainability initiatives</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-900"></div>
                </div>
                <span>Digital & technology solutions for energy</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-900"></div>
                </div>
                <span>Training, competency development & consulting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-900">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and creative solutions</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-900">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Balancing energy needs with environmental responsibility</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-900">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Delivering superior quality in every project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}