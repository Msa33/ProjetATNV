'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoATNV from '../assets/LogoATNV.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function ActualitesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "Formation de 50 médiateurs communautaires à Moundou",
      excerpt: "Un programme intensif de 3 jours pour former des leaders locaux aux techniques de médiation et de résolution pacifique des conflits.",
      date: "15 Mars 2024",
      category: "Formation",
      image: "https://readdy.ai/api/search-image?query=African%20community%20training%20session%20with%20mediators%20learning%20conflict%20resolution%20techniques%2C%20group%20discussion%20in%20traditional%20meeting%20space%2C%20warm%20lighting%2C%20educational%20materials%2C%20engaged%20participants%2C%20documentary%20photography%20style&width=600&height=400&seq=news-formation&orientation=landscape",
      featured: true
    },
    {
      id: 2,
      title: "Résolution réussie du conflit foncier de Doba",
      excerpt: "Grâce à notre intervention, deux communautés ont trouvé un accord durable concernant l'usage des terres agricoles.",
      date: "8 Mars 2024",
      category: "Médiation",
      image: "https://readdy.ai/api/search-image?query=peaceful%20resolution%20ceremony%20in%20Chad%20with%20community%20leaders%20shaking%20hands%2C%20traditional%20African%20setting%2C%20celebration%20of%20agreement%2C%20warm%20golden%20lighting%2C%20sense%20of%20harmony%20and%20reconciliation%2C%20documentary%20photography%20style&width=600&height=400&seq=news-resolution&orientation=landscape",
      featured: true
    },
    {
      id: 3,
      title: "Partenariat avec l'UNICEF pour la protection des enfants",
      excerpt: "Signature d'un accord de collaboration pour renforcer la protection des enfants dans les zones de conflit.",
      date: "1 Mars 2024",
      category: "Partenariat",
      image: "https://readdy.ai/api/search-image?query=official%20partnership%20signing%20ceremony%20with%20UNICEF%20representatives%20and%20local%20officials%2C%20professional%20meeting%20room%2C%20handshake%20moment%2C%20formal%20atmosphere%2C%20hope%20for%20children%20protection%2C%20documentary%20photography%20style&width=600&height=400&seq=news-partnership&orientation=landscape",
      featured: false
    },
    {
      id: 4,
      title: "Campagne de sensibilisation dans 20 écoles",
      excerpt: "Lancement d'une campagne de sensibilisation à la non-violence auprès de 2000 élèves dans la région du Logone.",
      date: "25 Février 2024",
      category: "Sensibilisation",
      image: "https://readdy.ai/api/search-image?query=educational%20campaign%20in%20African%20school%20with%20children%20learning%20about%20non-violence%2C%20classroom%20setting%2C%20interactive%20presentation%2C%20bright%20atmosphere%2C%20engaged%20young%20students%2C%20hope%20and%20learning%2C%20documentary%20photography%20style&width=600&height=400&seq=news-campaign&orientation=landscape",
      featured: false
    },
    {
      id: 5,
      title: "Atelier sur les droits des femmes à Sarh",
      excerpt: "Organisation d'un atelier de sensibilisation aux droits des femmes avec 80 participantes de différentes communautés.",
      date: "18 Février 2024",
      category: "Droits humains",
      image: "https://readdy.ai/api/search-image?query=women%20empowerment%20workshop%20in%20Chad%20with%20African%20women%20participating%20actively%2C%20traditional%20meeting%20space%2C%20colorful%20traditional%20clothing%2C%20empowering%20atmosphere%2C%20learning%20and%20solidarity%2C%20documentary%20photography%20style&width=600&height=400&seq=news-women&orientation=landscape",
      featured: false
    },
    {
      id: 6,
      title: "Nouveau centre de médiation à Koumra",
      excerpt: "Ouverture d'un nouveau centre de médiation pour mieux servir les communautés du sud du pays.",
      date: "10 Février 2024",
      category: "Infrastructure",
      image: "https://readdy.ai/api/search-image?query=new%20mediation%20center%20opening%20in%20Chad%2C%20modern%20building%20with%20traditional%20African%20architectural%20elements%2C%20community%20gathering%20for%20inauguration%2C%20hopeful%20atmosphere%2C%20progress%20and%20development%2C%20documentary%20photography%20style&width=600&height=400&seq=news-center&orientation=landscape",
      featured: false
    }
  ];

  const categories = ['all', 'Formation', 'Médiation', 'Partenariat', 'Sensibilisation', 'Droits humains', 'Infrastructure'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
              <Link to="/actions" className="text-gray-700 hover:text-blue-600 transition-colors">Actions</Link>
              <Link to="/actualites" className="text-blue-600 font-semibold">Actualités</Link>
              <Link to="/evenements" className="text-gray-700 hover:text-blue-600 transition-colors">Réservation</Link>
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
      <section className="bg-[#008037] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Actualités & Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Suivez nos dernières actions et découvrez nos réflexions sur la construction de la paix au Tchad
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                        selectedCategory === category
                          ? 'bg-green-100 text-green-700'
                          : 'border-1 border-white text-white hover:bg-green-700'
                      }`}
                    >
                      {category === 'all' ? 'Tout' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles à la une</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <button className="text-green-600 font-medium cursor-pointer">
                      Lire la suite →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {featuredArticles.length > 0 ? 'Autres actualités' : 'Toutes les actualités'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map(article => (
              <article key={article.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  <button className="text-green-600 hover:text-blue-700 font-medium cursor-pointer">
                    Lire la suite →
                  </button>
                </div>
              </article>
            ))}
            <button className='border-2 bg-[#008037] h-13 w-35 text-xl text-white rounded-xl ml-160 mt-100 '>
              <Link to="/evenements" className=" transition-colors">Evénements</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#008037]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Restez informé de nos actualités
          </h2>
          <p className="text-blue-100 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles et mises à jour
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border-2 border-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#008037] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              S'inscrire
            </button>
          </form>
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