import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightCard from './FlightCard';

describe('FlightCard Component', () => {
  const mockFlight = {
    id: 1,
    airline: 'Turkish Airlines',
    flightNumber: 'TK1234',
    departure: {
      airport: 'Istanbul (IST)',
      time: '08:00',
      date: '2024-01-15'
    },
    arrival: {
      airport: 'Ankara (ESB)',
      time: '09:15',
      date: '2024-01-15'
    },
    price: 450,
    currency: 'TRY',
    duration: '1h 15m',
    class: 'Economy',
    availableSeats: 45
  };

  const mockOnShowDetails = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders flight information correctly', () => {
    render(<FlightCard flight={mockFlight} onShowDetails={mockOnShowDetails} />);
    
    expect(screen.getByText('Turkish Airlines')).toBeInTheDocument();
    expect(screen.getByText('TK1234')).toBeInTheDocument();
    expect(screen.getByText('08:00')).toBeInTheDocument();
    expect(screen.getByText('Istanbul (IST)')).toBeInTheDocument();
    expect(screen.getByText('09:15')).toBeInTheDocument();
    expect(screen.getByText('Ankara (ESB)')).toBeInTheDocument();
    expect(screen.getByText('450 TRY')).toBeInTheDocument();
    expect(screen.getByText('Economy')).toBeInTheDocument();
    expect(screen.getByText(/Müsait Koltuk: 45/i)).toBeInTheDocument();
  });

  test('calls onShowDetails when Detaylar button is clicked', () => {
    render(<FlightCard flight={mockFlight} onShowDetails={mockOnShowDetails} />);
    
    const detailsButton = screen.getByRole('button', { name: /Detaylar/i });
    fireEvent.click(detailsButton);
    
    expect(mockOnShowDetails).toHaveBeenCalledWith(mockFlight);
  });

  test('displays flight duration', () => {
    render(<FlightCard flight={mockFlight} onShowDetails={mockOnShowDetails} />);
    
    expect(screen.getByText('1h 15m')).toBeInTheDocument();
  });
});
