import React, { useState } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightCard from './components/FlightCard';
import FlightModal from './components/FlightModal';
import { searchFlights, getFlightDetails } from './services/flightApi';

function App() {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const results = await searchFlights(searchParams);
      setFlights(results);
    } catch (error) {
      console.error('Error searching flights:', error);
      alert('Uçuş arama sırasında bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowDetails = async (flight) => {
    try {
      const detailedFlight = await getFlightDetails(flight.id);
      setSelectedFlight(detailedFlight);
    } catch (error) {
      console.error('Error fetching flight details:', error);
      alert('Uçuş detayları yüklenirken bir hata oluştu');
    }
  };

  const handleCloseModal = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Uçak Bileti Arama
          </h1>
          <p className="text-gray-600 mt-2">En uygun fiyatlı uçuşları bulun</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <FlightSearchForm onSearch={handleSearch} isLoading={isLoading} />

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Uçuşlar aranıyor...</p>
          </div>
        )}

        {/* Results */}
        {!isLoading && hasSearched && (
          <div>
            {flights.length > 0 ? (
              <>
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {flights.length} uçuş bulundu
                  </h2>
                  <p className="text-sm text-gray-600">Fiyata göre sıralandı</p>
                </div>
                <div className="space-y-4">
                  {flights.map(flight => (
                    <FlightCard 
                      key={flight.id} 
                      flight={flight} 
                      onShowDetails={handleShowDetails}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xl text-gray-600">Üzgünüz, arama kriterlerine uygun uçuş bulunamadı</p>
                <p className="text-gray-500 mt-2">Lütfen farklı tarih veya destinasyon deneyin</p>
              </div>
            )}
          </div>
        )}

        {/* Initial State */}
        {!isLoading && !hasSearched && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-xl text-gray-600">Uçuş aramaya başlamak için yukarıdaki formu doldurun</p>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedFlight && (
        <FlightModal 
          flight={selectedFlight} 
          onClose={handleCloseModal}
        />
      )}

      {/* Footer */}
      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 Uçak Bileti Arama. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
