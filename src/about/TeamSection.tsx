
'use client';

export default function TeamSection() {
  const team = [
    {
      name: "Béassemda Julien",
      role: "Fondateur",
      description: "Fondateur de l'ATNV, spécialiste en résolution de conflits avec plus de 30 ans d'expérience.",
      image: ""
    },
    {
      name: "Djekasnabeye Mbaïndo",
      role: "Délégué",
      description: "Experte en développement communautaire et droits des femmes, coordinatrice des programmes sur le terrain.",
      image: ""
    },
    {
      name: "Djimtobaye Iddo",
      role: "Gestionnaire Comptable",
      description: "Responsable de la Finance.",
      image: ""
    },
    {
      name: "Mbaïlaou Benjamin",
      role: "Responsable Communication",
      description: "Journaliste et communicatrice, elle développe les stratégies de sensibilisation et de plaidoyer.",
      image: ""
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre equipe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des professionnels engagés au service de la paix et du développement communautaire
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
