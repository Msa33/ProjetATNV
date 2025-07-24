// RoomPage.jsx

import { Link } from "react-router-dom";
import { useState } from "react";
import LogoATNV from '../assets/LogoATNV.png'
import { Facebook, Twitter, Linkedin } from "lucide-react";

// Assurez-vous que onNavigate est passé en tant que prop
function RoomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rooms = [
    {
      id: 1,
      name: "Amphi 800",
      capacity: 800,
      description: "Notre amphithéâtre principal, idéal pour les grandes conférences, les séminaires et les événements d'envergure. Équipé d'un système de sonorisation et de projection de pointe.",
      image: "https://placehold.co/600x400/ADD8E6/000000?text=Amphi+500"
    },
    {
      id: 2,
      name: "Salle 80 places",
      capacity: 80,
      description: "Une salle polyvalente parfaite pour les ateliers, les formations de taille moyenne et les réunions de groupe. Modulable selon vos besoins.",
      image: "https://placehold.co/600x400/ADD8E6/000000?text=Salle+80+places"
    },
    {
      id: 3,
      name: "Salle 50 places",
      capacity: 50,
      description: "Conçue pour des réunions plus intimes, des sessions de brainstorming ou des petits cours. Ambiance conviviale et équipement moderne.",
      image: "https://placehold.co/600x400/ADD8E6/000000?text=Salle+50+places"
    },
    {
      id: 4,
      name: "Salle 25 places",
      capacity: 25,
      description: "Notre plus petite salle, parfaite pour les entretiens, les sessions de coaching ou les réunions très ciblées. Offre une grande tranquillité.",
      image: "https://placehold.co/600x400/ADD8E6/000000?text=Salle+25+places"
    }
  ];

  return (
   <div>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img className='h-30 w-30' src={LogoATNV}/>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</Link>
              <Link to="/actions" className="text-gray-700 hover:text-blue-600 transition-colors">Actions</Link>
              <Link to="/actualites" className="text-gray-700 hover:text-blue-600 transition-colors">Actualités</Link>
              <Link to="/salles" className="text-gray-700 hover:text-blue-600 transition-colors">Réservation</Link>
              <Link to="/don" className="text-gray-700 hover:text-blue-600 transition-colors">Faire un don</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600 cursor-pointer"
              >
                <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center`}></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4">
              <Link 
                to="/" 
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/actions" 
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Actions
              </Link>
              <Link 
                to="/actualites" 
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link 
                to="/evenements" 
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Événements
              </Link>
              <Link 
                to="/don" 
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Faire un don
              </Link>
              <Link 
                to="/contact" 
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    <div className="min-h-screen bg-gray-100 p-4">
      <section className="py-16 bg-white rounded-lg shadow-lg my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-gray-900">Nos Salles Disponibles</h1>
            <p className="mt-4 text-lg text-gray-600">Découvrez nos espaces adaptés à tous vos événements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rooms.map(room => (
              <div key={room.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={room.image}
                  alt={`Image de la ${room.name}`}
                  className="w-full h-64 object-cover object-center"
                  // onError={(e) => {
                  //   e.target.onerror = null;
                  //   e.target.src = `https://placehold.co/600x400/E0E0E0/333333?text=Image+Non+Disponible`;
                  // }}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h2>
                  <p className="text-green-600 font-semibold mb-3">Capacité : {room.capacity} places</p>
                  <p className="text-gray-700 text-base mb-4">{room.description}</p>
                  {/* Bouton Réserver */}
                  <Link to="/reservation">
                      <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors shadow-md"
                  >
                    Réserver
                  </button>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
   </div>
   <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img className='h-25 w-25' src={LogoATNV}/>
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
              <li><Link to="" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Réservation</Link></li>
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
            © 2025 Association Tchadienne pour la Non-Violence. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
   </div>
  );
}

export default RoomPage;

