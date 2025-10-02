import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightSearchForm from './FlightSearchForm';

describe('FlightSearchForm Component', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    render(<FlightSearchForm onSearch={mockOnSearch} isLoading={false} />);
    
    expect(screen.getByLabelText(/Nereden/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nereye/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tarih/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Uçuş Ara/i })).toBeInTheDocument();
  });

  test('calls onSearch with form data when submitted', () => {
    render(<FlightSearchForm onSearch={mockOnSearch} isLoading={false} />);
    
    const fromInput = screen.getByLabelText(/Nereden/i);
    const toInput = screen.getByLabelText(/Nereye/i);
    const dateInput = screen.getByLabelText(/Tarih/i);
    const submitButton = screen.getByRole('button', { name: /Uçuş Ara/i });

    fireEvent.change(fromInput, { target: { value: 'Istanbul' } });
    fireEvent.change(toInput, { target: { value: 'Ankara' } });
    fireEvent.change(dateInput, { target: { value: '2024-01-15' } });
    fireEvent.click(submitButton);

    expect(mockOnSearch).toHaveBeenCalledWith({
      from: 'Istanbul',
      to: 'Ankara',
      date: '2024-01-15'
    });
  });

  test('disables submit button when loading', () => {
    render(<FlightSearchForm onSearch={mockOnSearch} isLoading={true} />);
    
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent(/Aranıyor.../i);
  });

  test('updates input values when typing', () => {
    render(<FlightSearchForm onSearch={mockOnSearch} isLoading={false} />);
    
    const fromInput = screen.getByLabelText(/Nereden/i);
    fireEvent.change(fromInput, { target: { value: 'Istanbul' } });
    
    expect(fromInput.value).toBe('Istanbul');
  });
});
