import React, { useEffect } from 'react';

const FlightModal = ({ flight, onClose }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!flight) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 m-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Uçuş Detayları</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="font-semibold">{flight.airline}</span>
              <span>•</span>
              <span>{flight.flightNumber}</span>
            </div>
          </div>

          {/* Flight Info */}
          <div className="space-y-6">
            {/* Route Details */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Kalkış</p>
                  <p className="text-xl font-bold text-gray-800">{flight.departure.time}</p>
                  <p className="text-gray-600">{flight.departure.airport}</p>
                  <p className="text-sm text-gray-500">{flight.departure.date}</p>
                </div>
                
                <div className="flex flex-col items-center px-4 py-2">
                  <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-600">{flight.duration}</p>
                </div>
                
                <div className="flex-1 text-right">
                  <p className="text-sm text-gray-500 mb-1">Varış</p>
                  <p className="text-xl font-bold text-gray-800">{flight.arrival.time}</p>
                  <p className="text-gray-600">{flight.arrival.airport}</p>
                  <p className="text-sm text-gray-500">{flight.arrival.date}</p>
                </div>
              </div>
            </div>

            {/* Price and Class */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Fiyat</p>
                <p className="text-2xl font-bold text-blue-600">
                  {flight.price} {flight.currency}
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Sınıf</p>
                <p className="text-xl font-semibold text-gray-800">{flight.class}</p>
              </div>
            </div>

            {/* Additional Information */}
            {flight.additionalInfo && (
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Ek Bilgiler</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{flight.additionalInfo.baggage}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{flight.additionalInfo.cancellation}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      Kolaylıklar: {flight.additionalInfo.amenities.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Available Seats */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">
                  <span className="font-semibold">{flight.availableSeats}</span> müsait koltuk
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Kapat
            </button>
            <button
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Rezervasyon Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightModal;
