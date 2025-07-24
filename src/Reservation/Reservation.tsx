'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import LogoATNV from "../assets/LogoATNV.png";
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
  reason: string;
  organizationType: string[];
  otherOrganization: string;
  requiredMaterial: string[];
  otherMaterial: string;
}

export default function Reservation() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    room: '',
    date: '',
    startTime: '',
    endTime: '',
    reason: '',
    organizationType: [],
    otherOrganization: '',
    requiredMaterial: [],
    otherMaterial: '',
  });

  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const currentArray = prevData[name as keyof FormData] as string[];
        if (checked) {
          return {
            ...prevData,
            [name]: [...currentArray, value],
          };
        } else {
          return {
            ...prevData,
            [name]: currentArray.filter((item) => item !== value),
          };
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Simule l'envoi de données (remplace par une vraie API si besoin)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setModalMessage("Réservation envoyée avec succès !");
      setIsSuccess(true);
      setShowModal(true);
    } catch {
      setModalMessage("Une erreur est survenue lors de l'envoi de la réservation.");
      setIsSuccess(false);
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen p-4">
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
      <div className='max-w-5xl max-h-full mx-auto bg-green-50 p-8 rounded-lg shadow-lg my-8'>
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Formulaire de réservation
      </h1>
      <form onSubmit={handleSubmit} className="max-w-4xl max-h-full mx-auto p-8">
        {/* Nom, Email, Téléphone */}
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom complet"
            className="p-2 border rounded w-2xl"
            required
          /> <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded w-82 "
            required
          /> 
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="p-2 border rounded w-82"
            required
          /> 
        </div>

        {/* Salle, Date, Heure début/fin */}
        <div className="grid md:grid-cols-4 gap-4 mt-4">
         
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* Motif */}
        <div className="mt-4">
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Motif de la réservation"
            className="p-2 border rounded w-2xl"
            rows={3}
            required
          />
        </div>

        {/* Organisation */}
        <div className="mt-4">
          <label className="font-medium">Type d'organisation :</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {['association', 'ONG', 'groupe'].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="organizationType"
                  value={type}
                  checked={formData.organizationType.includes(type)}
                  onChange={handleChange}
                />
                <span>{type}</span>
              </label>
            ))}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="organizationType"
                value="autres"
                checked={formData.organizationType.includes('autres')}
                onChange={handleChange}
              />
              <span>Autres</span>
            </label>
            {formData.organizationType.includes('autres') && (
              <input
                type="text"
                name="otherOrganization"
                value={formData.otherOrganization}
                onChange={handleChange}
                placeholder="Précisez l'organisation"
                className="p-2 border rounded w-full md:w-auto"
              />
            )}
          </div>
        </div>

        {/* Matériel */}
        <div className="mt-4">
          <label className="font-medium">Matériel nécessaire :</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {['projecteur', 'sono', 'micro'].map((mat) => (
              <label key={mat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredMaterial"
                  value={mat}
                  checked={formData.requiredMaterial.includes(mat)}
                  onChange={handleChange}
                />
                <span>{mat}</span>
              </label>
            ))}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="requiredMaterial"
                value="autres"
                checked={formData.requiredMaterial.includes('autres')}
                onChange={handleChange}
              />
              <span>Autres</span>
            </label>
            {formData.requiredMaterial.includes('autres') && (
              <input
                type="text"
                name="otherMaterial"
                value={formData.otherMaterial}
                onChange={handleChange}
                placeholder="Précisez le matériel"
                className="p-2 border rounded w-full md:w-auto"
              />
            )}
          </div>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Envoyer la réservation
        </button>
      </form>

      {/* Modal de confirmation ou erreur */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p className={isSuccess ? 'text-green-600' : 'text-red-600'}>
              {modalMessage}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
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
