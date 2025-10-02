import React, { useState } from 'react';
import './FlightSearchForm.css';

const FlightSearchForm = ({ onSearch, isLoading }) => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(departure, arrival, date);
  };

  return (
    <div className="flight-search-form">
      <h2>Uçuş Ara</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="departure">Kalkış</label>
            <input
              id="departure"
              type="text"
              placeholder="Nereden?"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="arrival">Varış</label>
            <input
              id="arrival"
              type="text"
              placeholder="Nereye?"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Tarih</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={isLoading}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="search-button"
          disabled={isLoading}
        >
          {isLoading ? 'Aranıyor...' : 'Uçuş Ara'}
        </button>
      </form>
    </div>
  );
};

export default FlightSearchForm;
