export default function WeatherCard({ weather }) {
  if (!weather) return null

  return (
    <div className="mt-6 bg-blue-50 p-4 rounded">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className="text-3xl">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>

      <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
      </div>
    </div>
  )
}
