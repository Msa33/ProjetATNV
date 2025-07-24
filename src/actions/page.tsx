'use client';

import { Link } from "react-router-dom";
import LogoATNV from '../assets/LogoATNV.png'
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function ActionsPage() {
  const actions = [
    {
      id: 1,
      title: "Formation à la non-violence",
      description: "Programmes complets de formation pour les jeunes, les leaders communautaires et les professionnels sur les méthodes de résolution pacifique des conflits.",
      image: "https://readdy.ai/api/search-image?query=non-violence%20training%20session%20in%20Chad%20with%20diverse%20group%20of%20young%20people%20learning%20conflict%20resolution%20techniques%2C%20educational%20setting%2C%20warm%20lighting%2C%20engaged%20participants%2C%20hope%20and%20empowerment%2C%20documentary%20photography%20style&width=600&height=400&seq=action-formation&orientation=landscape",
      details: [
        "Formation de base en non-violence (40 heures)",
        "Techniques de médiation communautaire",
        "Gestion des émotions et communication non-violente",
        "Prévention des conflits intercommunautaires"
      ],
      beneficiaires: "2000+ personnes formées depuis 2020",
      zone: "Moundou, Sarh, Doba, Koumra"
    },
    {
      id: 2,
      title: "Médiation communautaire",
      description: "Intervention directe dans les conflits locaux pour faciliter le dialogue entre les parties et trouver des solutions durables et équitables.",
      image: "https://readdy.ai/api/search-image?query=community%20mediation%20session%20in%20Chad%20with%20traditional%20leaders%20and%20community%20members%20sitting%20in%20circle%20discussing%20peacefully%2C%20acacia%20trees%2C%20warm%20natural%20lighting%2C%20harmony%20and%20understanding%2C%20documentary%20photography%20style&width=600&height=400&seq=action-mediation&orientation=landscape",
      details: [
        "Médiation dans les conflits fonciers",
        "Résolution des tensions intercommunautaires",
        "Facilitation du dialogue interreligieux",
        "Accompagnement post-conflit"
      ],
      beneficiaires: "500+ conflits résolus avec succès",
      zone: "Toutes les régions du Tchad"
    },
    {
      id: 3,
      title: "Soutien aux victimes",
      description: "Accompagnement psychologique et social des victimes de violences et de conflits pour favoriser leur résilience et leur réintégration.",
      image: "https://readdy.ai/api/search-image?query=counseling%20support%20session%20in%20Chad%20with%20victim%20assistance%2C%20empathetic%20counselor%20helping%20trauma%20survivors%2C%20safe%20comfortable%20environment%2C%20healing%20and%20recovery%2C%20hope%20and%20rehabilitation%2C%20documentary%20photography%20style&width=600&height=400&seq=action-support&orientation=landscape",
      details: [
        "Écoute et accompagnement psychologique",
        "Aide juridique et administrative",
        "Soutien à la réintégration sociale",
        "Thérapie de groupe et individuelle"
      ],
      beneficiaires: "800+ victimes accompagnées",
      zone: "Centres urbains et zones rurales"
    },
    {
      id: 4,
      title: "Sensibilisation et plaidoyer",
      description: "Campagnes de sensibilisation pour promouvoir une culture de paix et de non-violence dans la société tchadienne.",
      image: "https://readdy.ai/api/search-image?query=awareness%20campaign%20in%20Chad%20with%20community%20outreach%2C%20people%20holding%20peace%20banners%2C%20public%20education%20about%20non-violence%2C%20diverse%20crowd%2C%20bright%20daylight%2C%20positive%20energy%20and%20unity%2C%20documentary%20photography%20style&width=600&height=400&seq=action-awareness&orientation=landscape",
      details: [
        "Campagnes médiatiques sur la non-violence",
        "Plaidoyer auprès des autorités",
        "Sensibilisation dans les écoles",
        "Production de supports éducatifs"
      ],
      beneficiaires: "100 000+ personnes sensibilisées",
      zone: "Niveau national"
    },
    {
      id: 5,
      title: "Éducation à la paix",
      description: "Programmes éducatifs dans les écoles et universités pour former la nouvelle génération aux valeurs de paix et de tolérance.",
      image: "https://readdy.ai/api/search-image?query=peace%20education%20program%20in%20Chad%20school%20with%20children%20learning%20about%20tolerance%20and%20harmony%2C%20classroom%20setting%2C%20bright%20environment%2C%20engaged%20young%20students%2C%20educational%20materials%2C%20hope%20for%20future%2C%20documentary%20photography%20style&width=600&height=400&seq=action-education&orientation=landscape",
      details: [
        "Curriculum d'éducation à la paix",
        "Formation des enseignants",
        "Clubs de paix dans les écoles",
        "Concours et activités culturelles"
      ],
      beneficiaires: "50 écoles et 10 000 élèves",
      zone: "Moundou, Sarh, N'Djamena"
    },
    {
      id: 6,
      title: "Recherche et documentation",
      description: "Recherche appliquée sur les causes des conflits et développement de stratégies innovantes pour la construction de la paix.",
      image: "https://readdy.ai/api/search-image?query=research%20documentation%20center%20in%20Chad%20with%20researchers%20analyzing%20conflict%20data%2C%20modern%20office%20setting%2C%20books%20and%20documents%2C%20analytical%20work%2C%20academic%20atmosphere%2C%20knowledge%20building%2C%20documentary%20photography%20style&width=600&height=400&seq=action-research&orientation=landscape",
      details: [
        "Études sur les dynamiques de conflit",
        "Documentation des bonnes pratiques",
        "Recherche participative communautaire",
        "Publications scientifiques"
      ],
      beneficiaires: "25 études publiées",
      zone: "Centres de recherche nationaux"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/">
              <img className='h-30 w-30' src={LogoATNV}/>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</Link>
              <Link to="/actions" className="text-blue-600 font-semibold">Actions</Link>
              <Link to="/actualites" className="text-gray-700 hover:text-blue-600 transition-colors">Actualités</Link>
              <Link to="/reservation" className="text-gray-700 hover:text-blue-600 transition-colors">Réservation</Link>
              <Link to="/don" className="text-gray-700 hover:text-blue-600 transition-colors">Faire un don</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=community%20action%20and%20empowerment%20in%20Chad%20with%20people%20working%20together%20for%20peace%2C%20collaborative%20activities%2C%20traditional%20African%20village%20setting%2C%20warm%20golden%20lighting%2C%20sense%20of%20unity%20and%20progress%2C%20documentary%20photography%20style&width=1200&height=600&seq=actions-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-green-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Actions pour la Paix
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez nos programmes et initiatives pour construire une société tchadienne plus pacifique et juste
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
              <div className="text-gray-600">Personnes formées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Conflits résolus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">800+</div>
              <div className="text-gray-600">Victimes accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Écoles partenaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Domaines d'Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six axes stratégiques pour promouvoir la paix et la non-violence au Tchad
            </p>
          </div>
          
          <div className="space-y-16">
            {actions.map((action, index) => (
              <div key={action.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <img 
                    src={action.image}
                    alt={action.title}
                    className="w-full h-96 object-cover object-top rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{action.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{action.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Activités principales :</h4>
                    <ul className="space-y-2">
                      {action.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <i className="ri-check-line text-green-600 w-5 h-5 flex items-center justify-center mr-3 mt-0.5"></i>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">Impact</h5>
                      <p className="text-blue-700 text-sm">{action.beneficiaires}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">Zone d'intervention</h5>
                      <p className="text-green-700 text-sm">{action.zone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Participez à nos actions
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Rejoignez-nous dans notre mission pour construire un Tchad plus pacifique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Devenir volontaire
            </Link>
            <Link 
              to="/don" 
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Soutenir nos actions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico' }}>ATNV</h3>
              <p className="text-gray-400 mb-4">
                Association Tchadienne pour la Non-Violence
              </p>
              <p className="text-gray-400">
                Moundou, Tchad<br />
                Depuis 1992
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">À propos</Link></li>
                <li><Link to="/actions" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Actions</Link></li>
                <li><Link to="/actualites" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Actualités</Link></li>
                <li><Link to="/evenements" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Événements</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Soutien</h4>
              <ul className="space-y-2">
                <li><Link to="/don" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Faire un don</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Devenir volontaire</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Facebook/>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Twitter/>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Linkedin/>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Association Tchadienne pour la Non-Violence. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}