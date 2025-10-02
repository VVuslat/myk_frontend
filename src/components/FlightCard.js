import React from 'react';
import './FlightCard.css';

const FlightCard = ({ flight, onShowDetails }) => {
  return (
    <div className="flight-card">
      <div className="flight-card-header">
        <h3 className="airline">{flight.airline}</h3>
        <span className="flight-number">{flight.flightNumber}</span>
      </div>
      
      <div className="flight-card-body">
        <div className="flight-route">
          <div className="location">
            <div className="time">{flight.departureTime}</div>
            <div className="city">{flight.departure}</div>
          </div>
          
          <div className="route-line">
            <div className="duration">{flight.duration}</div>
            <div className="line"></div>
          </div>
          
          <div className="location">
            <div className="time">{flight.arrivalTime}</div>
            <div className="city">{flight.arrival}</div>
          </div>
        </div>
        
        <div className="flight-card-footer">
          <div className="price-section">
            <span className="price">{flight.price} {flight.currency}</span>
            <span className="price-label">Kişi başı</span>
          </div>
          
          <button 
            className="details-button"
            onClick={() => onShowDetails(flight)}
          >
            Detaylar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
