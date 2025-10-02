import { render, screen } from '@testing-library/react';
import App from './App';

test('renders flight search header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /✈ Uçak Bileti Arama/i });
  expect(headerElement).toBeInTheDocument();
});

test('renders search form', () => {
  render(<App />);
  const searchButton = screen.getByRole('button', { name: /Uçuş Ara/i });
  expect(searchButton).toBeInTheDocument();
});
