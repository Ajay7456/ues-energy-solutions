export default function About() {
  return (
    <div className="pt-8">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About UES Energy Solutions</h1>
          <p className="text-xl">Leading the energy transition with innovative solutions.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Mission</h3>
            <p>To provide innovative, sustainable energy solutions that empower industries and communities.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Vision</h3>
            <p>To be Africa's leading integrated energy solutions provider.</p>
          </div>
        </div>
      </div>
    </div>
  )
}