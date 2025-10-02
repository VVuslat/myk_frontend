import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { searchFlights } from './services/flightApi';

// Mock the API
jest.mock('./services/flightApi');

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /Uçak Bileti Arama/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders search form with all inputs', () => {
    render(<App />);
    
    expect(screen.getByLabelText(/Nereden/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nereye/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tarih/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Uçuş Ara/i })).toBeInTheDocument();
  });

  test('displays initial state message', () => {
    render(<App />);
    
    expect(screen.getByText(/Uçuş aramaya başlamak için yukarıdaki formu doldurun/i)).toBeInTheDocument();
  });

  test('handles flight search successfully', async () => {
    const mockFlights = [
      {
        id: 1,
        airline: 'Turkish Airlines',
        flightNumber: 'TK1234',
        departure: { airport: 'Istanbul (IST)', time: '08:00', date: '2024-01-15' },
        arrival: { airport: 'Ankara (ESB)', time: '09:15', date: '2024-01-15' },
        price: 450,
        currency: 'TRY',
        duration: '1h 15m',
        class: 'Economy',
        availableSeats: 45
      }
    ];

    searchFlights.mockResolvedValue(mockFlights);

    render(<App />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/Nereden/i), { target: { value: 'Istanbul' } });
    fireEvent.change(screen.getByLabelText(/Nereye/i), { target: { value: 'Ankara' } });
    fireEvent.change(screen.getByLabelText(/Tarih/i), { target: { value: '2024-01-15' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Uçuş Ara/i }));

    // Wait for results
    await waitFor(() => {
      expect(screen.getByText(/Turkish Airlines/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/1 uçuş bulundu/i)).toBeInTheDocument();
    expect(screen.getByText(/TK1234/i)).toBeInTheDocument();
  });

  test('displays no results message when no flights found', async () => {
    searchFlights.mockResolvedValue([]);

    render(<App />);

    // Fill in and submit the form
    fireEvent.change(screen.getByLabelText(/Nereden/i), { target: { value: 'Istanbul' } });
    fireEvent.change(screen.getByLabelText(/Nereye/i), { target: { value: 'Paris' } });
    fireEvent.change(screen.getByLabelText(/Tarih/i), { target: { value: '2024-01-15' } });
    fireEvent.click(screen.getByRole('button', { name: /Uçuş Ara/i }));

    await waitFor(() => {
      expect(screen.getByText(/arama kriterlerine uygun uçuş bulunamadı/i)).toBeInTheDocument();
    });
  });
});
