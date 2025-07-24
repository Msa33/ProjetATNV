
'use client';

export default function HistorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre histoire</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1992 - Création</h3>
                <p className="text-gray-600">
                  L'Association Tchadienne pour la Non-Violence est créée à Moundou par un groupe de citoyens engagés pour la paix et la justice sociale.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1995-2000 - Développement</h3>
                <p className="text-gray-600">
                  Expansion de nos activités dans plusieurs régions du Tchad avec des programmes de formation et de médiation communautaire.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2001-2010 - Reconnaissance</h3>
                <p className="text-gray-600">
                  Reconnaissance officielle et partenariats avec des organisations internationales pour renforcer notre impact.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2011-Aujourd'hui - Innovation</h3>
                <p className="text-gray-600">
                  Développement de nouvelles approches et utilisation des technologies pour amplifier notre message de paix.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=historical%20timeline%20of%20peace%20building%20in%20Chad%20Africa%20showing%20community%20development%20over%20decades%2C%20traditional%20to%20modern%20transition%2C%20people%20working%20together%20through%20different%20eras%2C%20documentary%20photography%20style%20with%20sepia%20tones%20and%20warm%20lighting%2C%20sense%20of%20progress%20and%20continuity&width=600&height=500&seq=history-atnv&orientation=portrait"
              alt="Histoire de l'ATNV"
              className="w-full h-96 object-cover object-top rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
