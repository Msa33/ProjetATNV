
'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=peaceful%20African%20village%20scene%20in%20Chad%20with%20traditional%20houses%20and%20people%20walking%20together%20harmoniously%2C%20golden%20hour%20lighting%2C%20serene%20atmosphere%2C%20acacia%20trees%2C%20traditional%20architecture%2C%20warm%20colors%2C%20sense%20of%20community%20and%20belonging%2C%20documentary%20photography%20style&width=1200&height=600&seq=about-hero-atnv&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-green-900/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          À propos de l'ATNV
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Découvrez notre histoire, nos valeurs et notre équipe dévouée à la construction d'un Tchad plus pacifique
        </p>
      </div>
    </section>
  );
}
