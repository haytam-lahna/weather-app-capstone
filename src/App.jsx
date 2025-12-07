import { useState } from "react";
import { getCoordinates, getWeather } from "./services/weatherService";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;


    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const coords = await getCoordinates(city);
      setLocation(coords);

      const data = await getWeather(coords.latitude, coords.longitude);
      setWeather(data.current_weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>

        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weather && location && (
          <div className="mt-5">
            <h2 className="text-xl font-semibold">
              {location.name}, {location.country}
            </h2>
            <p className="text-3xl mt-2">
              {Math.round(weather.temperature)}°C
            </p>
            <p className="mt-1">Wind: {weather.windspeed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
