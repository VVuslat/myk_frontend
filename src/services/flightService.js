// Mock API service for flight search
const mockFlights = [
  {
    id: 1,
    airline: "Türk Hava Yolları",
    flightNumber: "TK101",
    departure: "İstanbul",
    arrival: "Ankara",
    departureTime: "10:00",
    arrivalTime: "11:15",
    price: 450,
    currency: "TL",
    duration: "1s 15dk",
    aircraft: "Boeing 737",
    availableSeats: 45
  },
  {
    id: 2,
    airline: "Pegasus",
    flightNumber: "PC202",
    departure: "İstanbul",
    arrival: "Ankara",
    departureTime: "14:30",
    arrivalTime: "15:45",
    price: 380,
    currency: "TL",
    duration: "1s 15dk",
    aircraft: "Airbus A320",
    availableSeats: 32
  },
  {
    id: 3,
    airline: "Türk Hava Yolları",
    flightNumber: "TK303",
    departure: "İstanbul",
    arrival: "İzmir",
    departureTime: "08:45",
    arrivalTime: "10:00",
    price: 520,
    currency: "TL",
    duration: "1s 15dk",
    aircraft: "Airbus A321",
    availableSeats: 28
  },
  {
    id: 4,
    airline: "AnadoluJet",
    flightNumber: "AJ404",
    departure: "İstanbul",
    arrival: "İzmir",
    departureTime: "16:20",
    arrivalTime: "17:35",
    price: 410,
    currency: "TL",
    duration: "1s 15dk",
    aircraft: "Boeing 737-800",
    availableSeats: 55
  },
  {
    id: 5,
    airline: "Pegasus",
    flightNumber: "PC505",
    departure: "Ankara",
    arrival: "İstanbul",
    departureTime: "12:00",
    arrivalTime: "13:15",
    price: 390,
    currency: "TL",
    duration: "1s 15dk",
    aircraft: "Airbus A320neo",
    availableSeats: 40
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Search flights based on departure, arrival and date
export const searchFlights = async (departure, arrival, date) => {
  // Simulate network delay
  await delay(800);

  // Filter flights based on search criteria
  let results = mockFlights.filter(flight => {
    const matchesDeparture = !departure || flight.departure.toLowerCase().includes(departure.toLowerCase());
    const matchesArrival = !arrival || flight.arrival.toLowerCase().includes(arrival.toLowerCase());
    return matchesDeparture && matchesArrival;
  });

  // If no results found, return all flights
  if (results.length === 0) {
    results = mockFlights;
  }

  return results;
};

// Get flight by ID
export const getFlightById = async (id) => {
  await delay(300);
  return mockFlights.find(flight => flight.id === id);
};
