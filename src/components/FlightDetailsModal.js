import React from 'react';
import './FlightDetailsModal.css';

const FlightDetailsModal = ({ flight, onClose }) => {
  if (!flight) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Uçuş Detayları</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="detail-section">
            <h3>Havayolu Bilgileri</h3>
            <div className="detail-row">
              <span className="label">Havayolu:</span>
              <span className="value">{flight.airline}</span>
            </div>
            <div className="detail-row">
              <span className="label">Uçuş Numarası:</span>
              <span className="value">{flight.flightNumber}</span>
            </div>
            <div className="detail-row">
              <span className="label">Uçak Tipi:</span>
              <span className="value">{flight.aircraft}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Uçuş Bilgileri</h3>
            <div className="detail-row">
              <span className="label">Kalkış:</span>
              <span className="value">{flight.departure} - {flight.departureTime}</span>
            </div>
            <div className="detail-row">
              <span className="label">Varış:</span>
              <span className="value">{flight.arrival} - {flight.arrivalTime}</span>
            </div>
            <div className="detail-row">
              <span className="label">Süre:</span>
              <span className="value">{flight.duration}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Fiyat ve Müsaitlik</h3>
            <div className="detail-row">
              <span className="label">Fiyat:</span>
              <span className="value price-highlight">{flight.price} {flight.currency}</span>
            </div>
            <div className="detail-row">
              <span className="label">Müsait Koltuk:</span>
              <span className="value">{flight.availableSeats} koltuk</span>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="book-button">
            Rezervasyon Yap
          </button>
          <button className="cancel-button" onClick={onClose}>
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsModal;
