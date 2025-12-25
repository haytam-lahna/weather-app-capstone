function WeatherCard({ weather }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg mt-6 w-80 text-center">
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p className="text-4xl mt-2">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize mt-2">{weather.weather[0].description}</p>

      <div className="mt-4 text-sm">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
