// Mock flight data
const mockFlights = [
  {
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
  },
  {
    id: 2,
    airline: 'Pegasus Airlines',
    flightNumber: 'PC5678',
    departure: {
      airport: 'Istanbul (SAW)',
      time: '10:30',
      date: '2024-01-15'
    },
    arrival: {
      airport: 'Ankara (ESB)',
      time: '11:45',
      date: '2024-01-15'
    },
    price: 350,
    currency: 'TRY',
    duration: '1h 15m',
    class: 'Economy',
    availableSeats: 32
  },
  {
    id: 3,
    airline: 'Turkish Airlines',
    flightNumber: 'TK2468',
    departure: {
      airport: 'Istanbul (IST)',
      time: '14:00',
      date: '2024-01-15'
    },
    arrival: {
      airport: 'Ankara (ESB)',
      time: '15:15',
      date: '2024-01-15'
    },
    price: 480,
    currency: 'TRY',
    duration: '1h 15m',
    class: 'Business',
    availableSeats: 12
  },
  {
    id: 4,
    airline: 'AnadoluJet',
    flightNumber: 'AJ1357',
    departure: {
      airport: 'Istanbul (SAW)',
      time: '16:45',
      date: '2024-01-15'
    },
    arrival: {
      airport: 'Ankara (ESB)',
      time: '18:00',
      date: '2024-01-15'
    },
    price: 320,
    currency: 'TRY',
    duration: '1h 15m',
    class: 'Economy',
    availableSeats: 58
  },
  {
    id: 5,
    airline: 'Pegasus Airlines',
    flightNumber: 'PC9012',
    departure: {
      airport: 'Istanbul (IST)',
      time: '19:30',
      date: '2024-01-15'
    },
    arrival: {
      airport: 'Ankara (ESB)',
      time: '20:45',
      date: '2024-01-15'
    },
    price: 390,
    currency: 'TRY',
    duration: '1h 15m',
    class: 'Economy',
    availableSeats: 28
  }
];

/**
 * Mock API to search for flights
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.from - Departure city
 * @param {string} searchParams.to - Arrival city
 * @param {string} searchParams.date - Flight date
 * @returns {Promise<Array>} - Array of flight objects
 */
export const searchFlights = async (searchParams) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Filter flights based on search params
  let results = mockFlights.filter(flight => {
    const matchesFrom = !searchParams.from || 
      flight.departure.airport.toLowerCase().includes(searchParams.from.toLowerCase());
    const matchesTo = !searchParams.to || 
      flight.arrival.airport.toLowerCase().includes(searchParams.to.toLowerCase());
    const matchesDate = !searchParams.date || 
      flight.departure.date === searchParams.date;
    
    return matchesFrom && matchesTo && matchesDate;
  });

  // Sort by price
  results.sort((a, b) => a.price - b.price);

  return results;
};

/**
 * Mock API to get flight details by ID
 * @param {number} flightId - Flight ID
 * @returns {Promise<Object>} - Flight object with details
 */
export const getFlightDetails = async (flightId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const flight = mockFlights.find(f => f.id === flightId);
  
  if (!flight) {
    throw new Error('Flight not found');
  }

  return {
    ...flight,
    additionalInfo: {
      baggage: '20kg included',
      cancellation: 'Free cancellation up to 24 hours before departure',
      amenities: ['Wi-Fi', 'In-flight meal', 'Entertainment system']
    }
  };
};
