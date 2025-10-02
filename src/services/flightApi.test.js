import { searchFlights, getFlightDetails } from './flightApi';

describe('Flight API Service', () => {
  describe('searchFlights', () => {
    test('returns all flights when no search params provided', async () => {
      const results = await searchFlights({});
      expect(results).toBeInstanceOf(Array);
      expect(results.length).toBeGreaterThan(0);
    });

    test('filters flights by departure city', async () => {
      const results = await searchFlights({ from: 'Istanbul' });
      expect(results.every(flight => 
        flight.departure.airport.toLowerCase().includes('istanbul')
      )).toBe(true);
    });

    test('filters flights by arrival city', async () => {
      const results = await searchFlights({ to: 'Ankara' });
      expect(results.every(flight => 
        flight.arrival.airport.toLowerCase().includes('ankara')
      )).toBe(true);
    });

    test('filters flights by date', async () => {
      const results = await searchFlights({ date: '2024-01-15' });
      expect(results.every(flight => 
        flight.departure.date === '2024-01-15'
      )).toBe(true);
    });

    test('returns empty array when no flights match criteria', async () => {
      const results = await searchFlights({ 
        from: 'NonExistentCity',
        to: 'AnotherNonExistent'
      });
      expect(results).toEqual([]);
    });

    test('sorts results by price', async () => {
      const results = await searchFlights({});
      for (let i = 0; i < results.length - 1; i++) {
        expect(results[i].price).toBeLessThanOrEqual(results[i + 1].price);
      }
    });
  });

  describe('getFlightDetails', () => {
    test('returns flight details for valid flight ID', async () => {
      const flightDetails = await getFlightDetails(1);
      expect(flightDetails).toHaveProperty('id', 1);
      expect(flightDetails).toHaveProperty('airline');
      expect(flightDetails).toHaveProperty('additionalInfo');
      expect(flightDetails.additionalInfo).toHaveProperty('baggage');
      expect(flightDetails.additionalInfo).toHaveProperty('cancellation');
      expect(flightDetails.additionalInfo).toHaveProperty('amenities');
    });

    test('throws error for invalid flight ID', async () => {
      await expect(getFlightDetails(999)).rejects.toThrow('Flight not found');
    });

    test('includes additional info in flight details', async () => {
      const flightDetails = await getFlightDetails(1);
      expect(flightDetails.additionalInfo.amenities).toBeInstanceOf(Array);
      expect(flightDetails.additionalInfo.amenities.length).toBeGreaterThan(0);
    });
  });
});
