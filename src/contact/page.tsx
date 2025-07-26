'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoATNV from '../assets/LogoATNV.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function ContactPage() {
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
      e.currentTarget.reset();
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
              <Link to="/don" className="text-gray-700 hover:text-green-600 transition-colors">Faire un don</Link>
              <Link to="/contact" className="text-blue-600 font-semibold">Contact</Link>
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20office%20building%20in%20Chad%20Africa%20with%20people%20having%20meaningful%20conversations%2C%20warm%20welcoming%20atmosphere%2C%20natural%20lighting%2C%20professional%20but%20friendly%20environment%2C%20contemporary%20African%20architecture%2C%20sense%20of%20collaboration%20and%20openness&width=1200&height=600&seq=contact-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-green-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nous sommes là pour vous écouter et répondre à vos questions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-blue-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adresse</h3>
              <p className="text-gray-600">
                Quartier Dombao<br />
                BP 397 Moundou<br />
                Tchad
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-green-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Téléphone</h3>
              <p className="text-gray-600">
                +235 66 00 00 00<br />
                +235 99 00 00 00
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-blue-600 w-8 h-8 flex items-center justify-center text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600">
                info@atnv-tchad.org<br />
                contact@atnv-tchad.org
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Envoyez-nous un message</h2>
            <p className="text-xl text-gray-600">
              Nous vous répondrons dans les plus brefs délais
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form_type" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  Je souhaite recevoir la newsletter de l'ATNV
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.
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

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Où nous trouver</h2>
            <p className="text-xl text-gray-600">
              Visitez notre siège social à Moundou
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8!2d16.081!3d8.561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzMnNDAuMCJOIDE2wrAwNCc1MS42IkU!5e0!3m2!1sfr!2s!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
                <li><Link to="/salles" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Réservation</Link></li>
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