
'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoATNV from '../assets/LogoATNV.png'

export default function EvenementsPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showRoomReservation, setShowRoomReservation] = useState(false);
  const [showLibraryAccess, setShowLibraryAccess] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const events = [
    {
      id: 1,
      title: "Conférence sur la paix et la réconciliation",
      date: "2024-04-15",
      time: "14:00",
      location: "Salle de conférence ATNV, Moundou",
      type: "Conférence",
      capacity: 150,
      registered: 87,
      description: "Une conférence interactive sur les mécanismes traditionnels de réconciliation au Tchad.",
      speaker: "Dr. Amadou Brahim, Président ATNV",
      image: "https://readdy.ai/api/search-image?query=professional%20conference%20in%20Chad%20with%20African%20speakers%20presenting%20about%20peace%20and%20reconciliation%2C%20modern%20meeting%20room%2C%20engaged%20audience%2C%20warm%20lighting%2C%20educational%20atmosphere%2C%20hope%20and%20learning%2C%20documentary%20photography%20style&width=600&height=400&seq=event-conference&orientation=landscape"
    },
    {
      id: 2,
      title: "Atelier de formation : Médiation communautaire",
      date: "2024-04-20",
      time: "09:00",
      location: "Centre de formation ATNV, Sarh",
      type: "Formation",
      capacity: 30,
      registered: 25,
      description: "Formation pratique de 2 jours sur les techniques de médiation pour les leaders communautaires.",
      speaker: "Équipe de formateurs ATNV",
      image: "https://readdy.ai/api/search-image?query=community%20mediation%20training%20workshop%20in%20Chad%20with%20participants%20learning%20conflict%20resolution%20techniques%2C%20interactive%20group%20activities%2C%20traditional%20African%20meeting%20space%2C%20educational%20materials%2C%20engaged%20learning%2C%20documentary%20photography%20style&width=600&height=400&seq=event-training&orientation=landscape"
    },
    {
      id: 3,
      title: "Journée portes ouvertes",
      date: "2024-04-25",
      time: "10:00",
      location: "Siège social ATNV, Moundou",
      type: "Événement public",
      capacity: 200,
      registered: 45,
      description: "Découvrez nos activités et rencontrez notre équipe dans une atmosphère conviviale.",
      speaker: "Toute l'équipe ATNV",
      image: "https://readdy.ai/api/search-image?query=open%20house%20event%20in%20Chad%20with%20community%20members%20visiting%20NGO%20offices%2C%20friendly%20atmosphere%2C%20informational%20displays%2C%20cultural%20activities%2C%20warm%20welcoming%20environment%2C%20community%20engagement%2C%20documentary%20photography%20style&width=600&height=400&seq=event-openhouse&orientation=landscape"
    },
    {
      id: 4,
      title: "Séminaire : Droits humains et non-violence",
      date: "2024-05-05",
      time: "13:30",
      location: "Université de Moundou",
      type: "Séminaire",
      capacity: 100,
      registered: 62,
      description: "Séminaire académique sur les liens entre droits humains et approches non-violentes.",
      speaker: "Prof. Fatima Mahamat",
      image: "https://readdy.ai/api/search-image?query=academic%20seminar%20on%20human%20rights%20in%20Chad%20university%20setting%2C%20students%20and%20professors%20discussing%2C%20modern%20classroom%2C%20educational%20atmosphere%2C%20diversity%20of%20participants%2C%20intellectual%20engagement%2C%20documentary%20photography%20style&width=600&height=400&seq=event-seminar&orientation=landscape"
    },
    {
      id: 5,
      title: "Réunion mensuelle des volontaires",
      date: "2024-05-10",
      time: "18:00",
      location: "Salle de réunion ATNV, Moundou",
      type: "Réunion",
      capacity: 50,
      registered: 32,
      description: "Réunion mensuelle pour les volontaires actifs et nouveaux membres intéressés.",
      speaker: "Coordinateurs ATNV",
      image: "https://readdy.ai/api/search-image?query=volunteer%20meeting%20in%20Chad%20with%20diverse%20group%20of%20committed%20people%20discussing%20community%20projects%2C%20circular%20seating%20arrangement%2C%20warm%20lighting%2C%20collaborative%20atmosphere%2C%20teamwork%20and%20dedication%2C%20documentary%20photography%20style&width=600&height=400&seq=event-meeting&orientation=landscape"
    },
    {
      id: 6,
      title: "Célébration de la Journée internationale de la paix",
      date: "2024-09-21",
      time: "16:00",
      location: "Place publique de Moundou",
      type: "Célébration",
      capacity: 500,
      registered: 178,
      description: "Célébration communautaire avec spectacles culturels et messages de paix.",
      speaker: "Artistes locaux et équipe ATNV",
      image: "https://readdy.ai/api/search-image?query=international%20peace%20day%20celebration%20in%20Chad%20with%20community%20gathering%2C%20cultural%20performances%2C%20colorful%20traditional%20clothing%2C%20festive%20atmosphere%2C%20unity%20and%20joy%2C%20public%20square%20setting%2C%20documentary%20photography%20style&width=600&height=400&seq=event-celebration&orientation=landscape"
    }
  ];

  const rooms = [
    {
      id: 1,
      name: "Salle de conférence principale",
      capacity: 150,
      equipment: ["Projecteur", "Système audio", "Climatisation", "Wi-Fi"],
      location: "Siège ATNV, Moundou",
      pricePerHour: 15000,
      image: "https://readdy.ai/api/search-image?query=modern%20conference%20room%20in%20Chad%20with%20professional%20setup%2C%20projector%2C%20comfortable%20seating%2C%20good%20lighting%2C%20clean%20and%20organized%20space%2C%20suitable%20for%20NGO%20meetings%2C%20African%20context&width=400&height=300&seq=room-conference&orientation=landscape"
    },
    {
      id: 2,
      name: "Salle de formation",
      capacity: 30,
      equipment: ["Tableau blanc", "Chaises modulables", "Climatisation", "Wi-Fi"],
      location: "Centre de formation ATNV, Sarh",
      pricePerHour: 8000,
      image: "https://readdy.ai/api/search-image?query=training%20room%20in%20Chad%20with%20modular%20chairs%2C%20whiteboard%2C%20good%20lighting%20for%20workshops%2C%20educational%20setting%2C%20comfortable%20learning%20environment%2C%20African%20context&width=400&height=300&seq=room-training&orientation=landscape"
    },
    {
      id: 3,
      name: "Salle de réunion",
      capacity: 20,
      equipment: ["Table de réunion", "Écran TV", "Climatisation", "Wi-Fi"],
      location: "Siège ATNV, Moundou",
      pricePerHour: 5000,
      image: "https://readdy.ai/api/search-image?query=meeting%20room%20in%20Chad%20with%20conference%20table%2C%20TV%20screen%2C%20professional%20setting%20for%20small%20group%20discussions%2C%20well-lit%20space%2C%20African%20context&width=400&height=300&seq=room-meeting&orientation=landscape"
    },
    {
      id: 4,
      name: "Espace polyvalent",
      capacity: 80,
      equipment: ["Espace ouvert", "Système audio portable", "Chaises empilables"],
      location: "Siège ATNV, Moundou",
      pricePerHour: 12000,
      image: "https://readdy.ai/api/search-image?query=multipurpose%20hall%20in%20Chad%20with%20open%20space%2C%20stackable%20chairs%2C%20portable%20audio%20system%2C%20versatile%20room%20for%20various%20activities%2C%20community%20center%20setting%2C%20African%20context&width=400&height=300&seq=room-multipurpose&orientation=landscape"
    }
  ];

  const libraryResources = [
    {
      category: "Livres sur la paix et la non-violence",
      count: 350,
      description: "Ouvrages de référence sur la résolution pacifique des conflits"
    },
    {
      category: "Documentation sur les droits humains",
      count: 200,
      description: "Rapports, études et guides sur les droits fondamentaux"
    },
    {
      category: "Archives historiques du Tchad",
      count: 150,
      description: "Documents historiques et témoignages sur l'histoire tchadienne"
    },
    {
      category: "Ressources pédagogiques",
      count: 100,
      description: "Manuels et guides de formation pour animateurs"
    }
  ];

  const eventTypes = ['all', 'Conférence', 'Formation', 'Événement public', 'Séminaire', 'Réunion', 'Célébration'];

  type EventItem = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  capacity: number;
  registered: number;
  description: string;
  speaker: string;
  image: string;
};

  const filteredEvents = events.filter(event => {
    const matchesDate = !selectedDate || event.date === selectedDate;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesDate && matchesType;
  });

  const handleReservation = (event: EventItem) => {
    setSelectedEvent(event);
    setShowReservationForm(true);
  };

  const handleRoomReservation = () => {
    setShowRoomReservation(true);
  };

  const handleLibraryAccess = () => {
    setShowLibraryAccess(true);
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
              <Link to="/salles" className="text-blue-600 font-semibold">Réservation</Link>
              <Link to="/don" className="text-gray-700 hover:text-green-600 transition-colors">Faire un don</Link>
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
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Événements & Formations
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Participez à nos événements et formations pour approfondir vos connaissances sur la non-violence
            </p>

            {/* Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-4 py-3 text-white border-1 border-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <div className="flex gap-2 flex-wrap">
                  {eventTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                        selectedType === type
                          ? 'bg-white text-green-600'
                          : 'bg-green-700 text-white hover:bg-green-800'
                      }`}
                    >
                      {type === 'all' ? 'Tous' : type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className="ri-building-line w-8 h-8 flex items-center justify-center text-green-700 mr-3 text-2xl"></i>
                <h3 className="text-xl font-bold text-gray-900">Réserver une salle</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Réservez nos espaces pour vos événements, formations ou réunions. Équipements modernes disponibles.
              </p>
              <button
                onClick={handleRoomReservation}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Voir les salles disponibles
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className="ri-book-open-line w-8 h-8 flex items-center justify-center text-green-600 mr-3 text-2xl"></i>
                <h3 className="text-xl font-bold text-gray-900">Accès à la bibliothèque</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Consultez notre collection de livres et documents sur la paix, les droits humains et l'histoire du Tchad.
              </p>
              <button
                onClick={handleLibraryAccess}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Accéder à la bibliothèque
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-calendar-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        {new Date(event.date).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        {event.time}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h2>

                    <div className="flex items-center text-gray-600 mb-4">
                      <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-2"></i>
                      {event.location}
                    </div>

                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-gray-600">
                        <i className="ri-user-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        {event.speaker}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-group-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        {event.registered}/{event.capacity} inscrits
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleReservation(event)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Réserver une place
                      </button>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Reservation Modal */}
      {showRoomReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Réservation de salles</h3>
                <button
                  onClick={() => setShowRoomReservation(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center text-xl"></i>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {rooms.map(room => (
                  <div key={room.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{room.name}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-group-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        Capacité: {room.capacity} personnes
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        {room.location}
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <i className="ri-money-dollar-circle-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        {room.pricePerHour.toLocaleString()} FCFA/heure
                      </div>
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Équipements:</h5>
                        <div className="flex flex-wrap gap-2">
                          {room.equipment.map((item, index) => (
                            <span key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Formulaire de réservation</h4>
                <form id="room-reservation-form" className="grid md:grid-cols-2 gap-4">
                  <input type="hidden" name="form_type" value="room_reservation" />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      name="full_name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organisation *</label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salle souhaitée *</label>
                    <select
                      name="room_id"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                      required
                    >
                      <option value="">Sélectionnez une salle</option>
                      {rooms.map(room => (
                        <option key={room.id} value={room.id}>
                          {room.name} - {room.pricePerHour.toLocaleString()} FCFA/h
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date souhaitée *</label>
                    <input
                      type="date"
                      name="reservation_date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Heure de début *</label>
                    <input
                      type="time"
                      name="start_time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Heure de fin *</label>
                    <input
                      type="time"
                      name="end_time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Objet de la réservation *</label>
                    <textarea
                      name="purpose"
                      rows={3}
                      maxLength={500}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Décrivez l'événement ou la réunion..."
                      required
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de participants estimé *</label>
                    <input
                      type="number"
                      name="participants_count"
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="md:col-span-2 flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowRoomReservation(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Envoyer la demande
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Library Access Modal */}
      {showLibraryAccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Bibliothèque ATNV</h3>
                <button
                  onClick={() => setShowLibraryAccess(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center text-xl"></i>
                </button>
              </div>

              <div className="mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=peaceful%20library%20in%20Chad%20with%20books%20on%20shelves%2C%20reading%20tables%2C%20natural%20lighting%2C%20quiet%20study%20environment%2C%20African%20context%2C%20educational%20atmosphere%2C%20knowledge%20and%20learning%20space&width=800&height=300&seq=library-main&orientation=landscape"
                  alt="Bibliothèque ATNV"
                  className="w-full h-64 object-cover object-top rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Collections disponibles</h4>
                  <div className="space-y-4">
                    {libraryResources.map((resource, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-gray-900">{resource.category}</h5>
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                            {resource.count} items
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Informations pratiques</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="ri-time-line w-5 h-5 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                      <div>
                        <h5 className="font-semibold text-gray-900">Horaires d'ouverture</h5>
                        <p className="text-gray-600">Lundi - Vendredi: 8h00 - 17h00</p>
                        <p className="text-gray-600">Samedi: 8h00 - 12h00</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                      <div>
                        <h5 className="font-semibold text-gray-900">Adresse</h5>
                        <p className="text-gray-600">Siège ATNV, Moundou, Tchad</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-user-line w-5 h-5 flex items-center justify-center text-green-600 mr-3 mt-1"></i>
                      <div>
                        <h5 className="font-semibold text-gray-900">Accès</h5>
                        <p className="text-gray-600">Gratuit pour les membres</p>
                        <p className="text-gray-600">5,000 FCFA/mois pour les non-membres</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Demande d'accès à la bibliothèque</h4>
                <form id="library-access-form" className="grid md:grid-cols-2 gap-4">
                  <input type="hidden" name="form_type" value="library_access" />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      name="full_name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profession *</label>
                    <input
                      type="text"
                      name="profession"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type d'accès *</label>
                    <select
                      name="access_type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                      required
                    >
                      <option value="">Sélectionnez le type d'accès</option>
                      <option value="member">Membre ATNV (gratuit)</option>
                      <option value="non_member">Non-membre (5,000 FCFA/mois)</option>
                      <option value="student">Étudiant (2,500 FCFA/mois)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Domaine d'intérêt *</label>
                    <select
                      name="interest_domain"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                      required
                    >
                      <option value="">Sélectionnez votre domaine</option>
                      <option value="peace">Paix et non-violence</option>
                      <option value="human_rights">Droits humains</option>
                      <option value="history">Histoire du Tchad</option>
                      <option value="education">Ressources pédagogiques</option>
                      <option value="research">Recherche académique</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Motivation *</label>
                    <textarea
                      name="motivation"
                      rows={3}
                      maxLength={500}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Expliquez pourquoi vous souhaitez accéder à notre bibliothèque..."
                      required
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowLibraryAccess(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Envoyer la demande
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reservation Form Modal */}
      {showReservationForm && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Réserver une place</h3>
              <button
                onClick={() => setShowReservationForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="ri-close-line w-6 h-6 flex items-center justify-center text-xl"></i>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">{selectedEvent.title}</h4>
              <p className="text-gray-600 text-sm mb-2">
                {new Date(selectedEvent.date).toLocaleDateString('fr-FR')} à {selectedEvent.time}
              </p>
              <p className="text-gray-600 text-sm">{selectedEvent.location}</p>
            </div>

            <form id="reservation-form" className="space-y-4">
              <input type="hidden" name="form_type" value="reservation" />
              <input type="hidden" name="event_id" value={selectedEvent.id} />
              <input type="hidden" name="event_title" value={selectedEvent.title} />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                <input
                  type="text"
                  name="full_name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organisation (optionnel)</label>
                <input
                  type="text"
                  name="organization"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowReservationForm(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  Réserver
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
                  <i className="ri-facebook-fill w-6 h-6 flex items-center justify-center text-xl"></i>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-twitter-x-fill w-6 h-6 flex items-center justify-center text-xl"></i>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center text-xl"></i>
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
