import { render, screen, fireEvent } from '@testing-library/react';
import FlightCard from '../components/FlightCard';

const mockFlight = {
  id: 1,
  airline: 'Türk Hava Yolları',
  flightNumber: 'TK101',
  departure: 'İstanbul',
  arrival: 'Ankara',
  departureTime: '10:00',
  arrivalTime: '11:15',
  price: 450,
  currency: 'TL',
  duration: '1s 15dk',
};

describe('FlightCard', () => {
  test('renders flight information correctly', () => {
    const mockOnShowDetails = jest.fn();
    render(<FlightCard flight={mockFlight} onShowDetails={mockOnShowDetails} />);
    
    expect(screen.getByText('Türk Hava Yolları')).toBeInTheDocument();
    expect(screen.getByText('TK101')).toBeInTheDocument();
    expect(screen.getByText('İstanbul')).toBeInTheDocument();
    expect(screen.getByText('Ankara')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('11:15')).toBeInTheDocument();
    expect(screen.getByText('450 TL')).toBeInTheDocument();
  });

  test('calls onShowDetails when details button is clicked', () => {
    const mockOnShowDetails = jest.fn();
    render(<FlightCard flight={mockFlight} onShowDetails={mockOnShowDetails} />);
    
    const detailsButton = screen.getByText(/Detaylar/i);
    fireEvent.click(detailsButton);
    
    expect(mockOnShowDetails).toHaveBeenCalledWith(mockFlight);
  });
});
