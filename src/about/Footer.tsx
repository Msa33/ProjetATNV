
'use client';

import { Link } from "react-router-dom";
import LogoATNV from '../assets/LogoATNV.png'
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
