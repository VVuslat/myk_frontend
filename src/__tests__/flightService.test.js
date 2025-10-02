import { searchFlights, getFlightById } from '../services/flightService';

describe('flightService', () => {
  test('searchFlights returns filtered results', async () => {
    const results = await searchFlights('İstanbul', 'Ankara', '2024-01-01');
    
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    
    // Check if results match the search criteria
    results.forEach(flight => {
      expect(
        flight.departure.includes('İstanbul') || 
        flight.arrival.includes('Ankara')
      ).toBe(true);
    });
  });

  test('searchFlights returns all flights when no match found', async () => {
    const results = await searchFlights('NonExistentCity', 'AnotherCity', '2024-01-01');
    
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
  });

  test('getFlightById returns correct flight', async () => {
    const flight = await getFlightById(1);
    
    expect(flight).toBeDefined();
    expect(flight.id).toBe(1);
    expect(flight.airline).toBeDefined();
  });

  test('getFlightById returns undefined for non-existent id', async () => {
    const flight = await getFlightById(999);
    
    expect(flight).toBeUndefined();
  });
});
