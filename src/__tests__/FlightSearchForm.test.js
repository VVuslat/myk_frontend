import { render, screen, fireEvent } from '@testing-library/react';
import FlightSearchForm from '../components/FlightSearchForm';

describe('FlightSearchForm', () => {
  test('renders search form with all inputs', () => {
    const mockOnSearch = jest.fn();
    render(<FlightSearchForm onSearch={mockOnSearch} isLoading={false} />);
    
    expect(screen.getByLabelText(/Kalkış/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Varış/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tarih/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Uçuş Ara/i })).toBeInTheDocument();
  });

  test('calls onSearch when form is submitted', () => {
    const mockOnSearch = jest.fn();
    render(<FlightSearchForm onSearch={mockOnSearch} isLoading={false} />);
    
    const departureInput = screen.getByLabelText(/Kalkış/i);
    const arrivalInput = screen.getByLabelText(/Varış/i);
    const searchButton = screen.getByRole('button', { name: /Uçuş Ara/i });
    
    fireEvent.change(departureInput, { target: { value: 'İstanbul' } });
    fireEvent.change(arrivalInput, { target: { value: 'Ankara' } });
    fireEvent.click(searchButton);
    
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  test('disables inputs and button when loading', () => {
    const mockOnSearch = jest.fn();
    render(<FlightSearchForm onSearch={mockOnSearch} isLoading={true} />);
    
    const departureInput = screen.getByLabelText(/Kalkış/i);
    const searchButton = screen.getByRole('button', { name: /Aranıyor.../i });
    
    expect(departureInput).toBeDisabled();
    expect(searchButton).toBeDisabled();
  });
});
