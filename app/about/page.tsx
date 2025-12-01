export default function About() {
  return (
    <main className="pt-8" aria-label="About UES Energy Solutions">
      <header className="bg-blue-900 text-white py-16" role="banner">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About UES Energy Solutions</h1>
          <p className="text-xl">Leading the energy transition with innovative solutions.</p>
        </div>
      </header>
      <section
        className="max-w-7xl mx-auto px-4 py-16"
        aria-labelledby="mission-vision-heading"
      >
        <h2
          className="text-3xl font-bold mb-8"
          id="mission-vision-heading"
        >
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <section
            className="bg-white p-8 rounded-lg shadow"
            aria-labelledby="mission-heading"
          >
            <h3
              className="text-2xl font-bold text-blue-900 mb-4"
              id="mission-heading"
            >
              Mission
            </h3>
            <p>
              To provide innovative, sustainable energy solutions that empower industries and communities.
            </p>
          </section>
          <section
            className="bg-white p-8 rounded-lg shadow"
            aria-labelledby="vision-heading"
          >
            <h3
              className="text-2xl font-bold text-blue-900 mb-4"
              id="vision-heading"
            >
              Vision
            </h3>
            <p>
              To be Africa's leading integrated energy solutions provider.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}