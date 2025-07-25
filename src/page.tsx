
'use client';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoATNV from './assets/LogoATNV.png'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reunionAccueil = "/src/assets/reunionAccueil.jpg"

  return (
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
                <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center`}>☰</i>
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

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
       style={{
           backgroundImage: `url(${reunionAccueil})`
        }}

      >
        <div className="absolute inset-0 bg-green-900/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Construire la paix au Tchad depuis 1992
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              L'Association Tchadienne pour la Non-Violence œuvre pour promouvoir la paix, la justice sociale et le dialogue au sein de notre société.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Découvrir notre mission
              </Link>
              <Link 
                to="/don" 
                className="bg-white/10 hover:bg-white/20 text-black px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center border border-white/30"
              >
                Soutenir nos actions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis plus de 30 ans, nous travaillons pour construire une société tchadienne plus juste et pacifique
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-peace-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Promouvoir la paix</h3>
              <p className="text-gray-600">
                Nous facilitons le dialogue entre les communautés pour résoudre les conflits de manière pacifique et durable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-scales-3-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Justice sociale</h3>
              <p className="text-gray-600">
                Nous défendons les droits humains et œuvrons pour une société plus équitable pour tous les Tchadiens.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dialogue communautaire</h3>
              <p className="text-gray-600">
                Nous encourageons le dialogue interculturel et interreligieux pour renforcer la cohésion sociale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos actions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos projets et initiatives pour construire un Tchad plus pacifique
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-book-open-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Formation à la non-violence</h3>
                  <p className="text-gray-600">
                    Programmes de formation pour les jeunes et les leaders communautaires sur les méthodes de résolution pacifique des conflits.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-discuss-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Médiation communautaire</h3>
                  <p className="text-gray-600">
                    Intervention dans les conflits locaux pour faciliter le dialogue et trouver des solutions durables.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-heart-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Soutien aux victimes</h3>
                  <p className="text-gray-600">
                    Accompagnement psychologique et social des victimes de violences et de conflits.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=African%20community%20workshop%20with%20people%20sitting%20in%20circle%20learning%20about%20conflict%20resolution%20and%20peace%20building%2C%20facilitator%20standing%20with%20educational%20materials%2C%20warm%20natural%20lighting%2C%20hopeful%20atmosphere%2C%20traditional%20meeting%20space%20with%20modern%20educational%20elements%2C%20documentary%20photography%20style%2C%20focus%20on%20engagement%20and%20learning&width=600&height=400&seq=atnv-actions&orientation=landscape"
                alt="Formation communautaire"
                className="w-full h-96 object-cover object-top rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 30 ans d'engagement pour la paix au Tchad
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#008037] mb-2">30+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#008037] mb-2">500+</div>
              <div className="text-gray-600">Conflits résolus</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#008037] mb-2">2000+</div>
              <div className="text-gray-600">Personnes formées</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#008037] mb-2">50+</div>
              <div className="text-gray-600">Communautés aidées</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008037]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Rejoignez notre mission pour la paix
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Votre soutien nous permet de continuer notre travail pour construire un Tchad plus pacifique et juste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/don" 
              className="bg-white text-[#008037] hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Faire un don
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-[#008037] text-white px-8 py-4 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer"
            >
              Devenir volontaire
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img className='h-30 w-30' src={LogoATNV}/>
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
                <Link to="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Instagram/>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              2024 Association Tchadienne pour la Non-Violence. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
