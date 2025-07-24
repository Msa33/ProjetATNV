
'use client';

import { Link } from "react-router-dom";
import LogoATNV from '../assets/LogoATNV.png'

export default function Header() {
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
            <button className="text-gray-700 hover:text-blue-600">
              <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
