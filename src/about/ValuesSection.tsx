
'use client';

export default function ValuesSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes qui guident notre action quotidienne pour la paix
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-peace-line text-blue-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Non-Violence</h3>
            <p className="text-gray-600">
              Promotion de méthodes pacifiques pour résoudre les conflits et construire la paix durable.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-scales-3-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Justice</h3>
            <p className="text-gray-600">
              Défense des droits humains et promotion de l'équité pour tous les citoyens tchadiens.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-discuss-line text-blue-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dialogue</h3>
            <p className="text-gray-600">
              Facilitation des échanges entre différentes communautés pour une meilleure compréhension mutuelle.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Solidarité</h3>
            <p className="text-gray-600">
              Soutien mutuel et accompagnement des communautés vers un développement harmonieux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
