import React from 'react';

const FlightCard = ({ flight, onShowDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Airline Info */}
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 rounded-full p-3">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{flight.airline}</h3>
            <p className="text-sm text-gray-500">{flight.flightNumber}</p>
          </div>
        </div>

        {/* Flight Route */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">{flight.departure.time}</p>
                <p className="text-sm text-gray-600">{flight.departure.airport}</p>
              </div>
              
              <div className="flex flex-col items-center px-4">
                <svg className="w-6 h-6 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <p className="text-xs text-gray-500">{flight.duration}</p>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">{flight.arrival.time}</p>
                <p className="text-sm text-gray-600">{flight.arrival.airport}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex flex-col items-end space-y-3 md:min-w-[150px]">
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-600">
              {flight.price} {flight.currency}
            </p>
            <p className="text-sm text-gray-500">{flight.class}</p>
          </div>
          <button
            onClick={() => onShowDetails(flight)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-full"
          >
            Detaylar
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Müsait Koltuk: {flight.availableSeats}</span>
          <span>Tarih: {flight.departure.date}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
