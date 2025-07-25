
'use client';

import { Link } from "react-router-dom";
import LogoATNV from '../assets/LogoATNV.png';
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
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
            <Link to="/about" className="text-blue-600 font-semibold">À propos</Link>
            <Link to="/actions" className="text-gray-700 hover:text-blue-600 transition-colors">Actions</Link>
            <Link to="/actualites" className="text-gray-700 hover:text-blue-600 transition-colors">Actualités</Link>
            <Link to="/reservation" className="text-gray-700 hover:text-blue-600 transition-colors">Réservation</Link>
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
  );
}
