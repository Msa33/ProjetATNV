
'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoATNV from '../assets/LogoATNV.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function DonPage() {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('unique');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData) as Record<string, string>;

  try {
    const response = await fetch('https://readdy.ai/api/form-handler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    });

    if (response.ok) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  } catch {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};


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
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Accueil</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">À propos</Link>
              <Link to="/actions" className="text-gray-700 hover:text-green-600 transition-colors">Actions</Link>
              <Link to="/actualites" className="text-gray-700 hover:text-green-600 transition-colors">Actualités</Link>
              <Link to="/reservation" className="text-gray-700 hover:text-green-600 transition-colors">Réservation</Link>
              <Link to="/don" className="text-blue-600 font-semibold">Faire un don</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
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
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Actions
              </Link>
              <Link 
                to="/actualites" 
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link 
                to="/evenements" 
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Événements
              </Link>
              <Link 
                to="/don" 
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Faire un don
              </Link>
              <Link 
                to="/contact" 
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
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
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=hands%20holding%20symbolic%20dove%20of%20peace%20in%20warm%20golden%20light%2C%20hopeful%20and%20inspiring%20atmosphere%2C%20soft%20focus%20background%2C%20gentle%20lighting%2C%20representing%20support%20and%20generosity%2C%20emotional%20and%20uplifting%20mood%2C%20documentary%20photography%20style&width=1200&height=600&seq=don-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-green-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Soutenez la paix au Tchad
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Votre don nous permet de continuer notre mission pour construire un avenir plus pacifique et juste
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">L'impact de votre don</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque contribution fait une différence concrète dans la vie des communautés
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25 000 FCFA</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Formation d'un médiateur</h3>
              <p className="text-gray-600">
                Permet de former un médiateur communautaire aux techniques de résolution pacifique des conflits.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50 000 FCFA</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Atelier de sensibilisation</h3>
              <p className="text-gray-600">
                Finance un atelier de sensibilisation à la non-violence pour 30 participants.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100 000 FCFA</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Programme complet</h3>
              <p className="text-gray-600">
                Soutient un programme complet de médiation dans une communauté pendant un mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faire un don</h2>
            
            <form id="donation-form" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form_type" value="donation" />
              
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Montant du don</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {['10000', '25000', '50000', '100000'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`py-3 px-4 rounded-lg border-2 transition-colors whitespace-nowrap cursor-pointer ${
                        amount === preset
                          ? 'border-green-600 bg-blue-50 text-green-600'
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {parseInt(preset).toLocaleString()} FCFA
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Montant personnalisé"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Fréquence</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFrequency('unique')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors whitespace-nowrap cursor-pointer ${
                      frequency === 'unique'
                        ? 'border-green-600 bg-blue-50 text-green-600'
                        : 'border-gray-300 hover:border-green-300'
                    }`}
                  >
                    Don unique
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('mensuel')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors whitespace-nowrap cursor-pointer ${
                      frequency === 'mensuel'
                        ? 'border-green-600 bg-blue-50 text-green-600'
                        : 'border-gray-300 hover:border-green-300'
                    }`}
                  >
                    Don mensuel
                  </button>
                </div>
                <input type="hidden" name="frequency" value={frequency} />
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Mode de paiement</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors whitespace-nowrap cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-green-600 bg-blue-50 text-green-600'
                        : 'border-gray-300 hover:border-green-300'
                    }`}
                  >
                    Carte bancaire
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mobile')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors whitespace-nowrap cursor-pointer ${
                      paymentMethod === 'mobile'
                        ? 'border-green-600 bg-blue-50 text-green-600'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    Mobile Money
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors whitespace-nowrap cursor-pointer ${
                      paymentMethod === 'bank'
                        ? 'border-green-600 bg-blue-50 text-green-600'
                        : 'border-gray-300 hover:border-green-300'
                    }`}
                  >
                    Virement bancaire
                  </button>
                </div>
                <input type="hidden" name="payment_method" value={paymentMethod} />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (optionnel)</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Votre message de soutien..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Traitement en cours...' : 'Faire le don'}
              </button>
            </form>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Merci pour votre don ! Nous vous contacterons bientôt pour finaliser le processus.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Autres façons de nous aider</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Il existe plusieurs moyens de soutenir notre mission pour la paix
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Devenir volontaire</h3>
              <p className="text-gray-600 mb-6">
                Rejoignez notre équipe de volontaires et participez directement à nos actions sur le terrain.
              </p>
              <Link 
                to="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                S'engager
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-share-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partager notre message</h3>
              <p className="text-gray-600 mb-6">
                Aidez-nous à faire connaître notre mission en partageant nos actions sur les réseaux sociaux.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Partager
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-handshake-line text-blue-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partenariat</h3>
              <p className="text-gray-600 mb-6">
                Organisations et entreprises, explorez les possibilités de partenariat avec l'ATNV.
              </p>
              <Link 
                to="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Collaborer
              </Link>
            </div>
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
              © 2025 Association Tchadienne pour la Non-Violence. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
