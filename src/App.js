import React, { useState } from 'react';
import './App.css';
import FlightSearchForm from './components/FlightSearchForm';
import FlightCard from './components/FlightCard';
import FlightDetailsModal from './components/FlightDetailsModal';
import { searchFlights } from './services/flightService';

function App() {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (departure, arrival, date) => {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const results = await searchFlights(departure, arrival, date);
      setFlights(results);
    } catch (error) {
      console.error('Arama hatası:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowDetails = (flight) => {
    setSelectedFlight(flight);
  };

  const handleCloseModal = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>✈ Uçak Bileti Arama</h1>
        <p>En uygun uçuşları bulun</p>
      </header>
      
      <main className="App-main">
        <FlightSearchForm 
          onSearch={handleSearch} 
          isLoading={isLoading}
        />
        
        {isLoading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Uçuşlar aranıyor...</p>
          </div>
        )}
        
        {!isLoading && hasSearched && flights.length === 0 && (
          <div className="no-results">
            <p>Arama kriterlerinize uygun uçuş bulunamadı.</p>
          </div>
        )}
        
        {!isLoading && flights.length > 0 && (
          <div className="flights-container">
            <h2>Bulunan Uçuşlar ({flights.length})</h2>
            <div className="flights-list">
              {flights.map(flight => (
                <FlightCard 
                  key={flight.id} 
                  flight={flight}
                  onShowDetails={handleShowDetails}
                />
              ))}
            </div>
          </div>
        )}
      </main>
      
      {selectedFlight && (
        <FlightDetailsModal 
          flight={selectedFlight}
          onClose={handleCloseModal}
        />
      )}
      
      <footer className="App-footer">
        <p>© 2024 MYK Uçak Bileti Arama Sistemi</p>
      </footer>
    </div>
  );
}

export default App;
