import { useState } from "react"
import Search from "./components/Search"
import WeatherCard from "./components/WeatherCard"

export default function App() {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const fetchWeather = async (city) => {
    try {
      setLoading(true)
      setError("")
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      )
      if (!res.ok) throw new Error("City not found")
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setWeather(null)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Weather Dashboard 🌦️
        </h1>

        <Search onSearch={fetchWeather} />

        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        <WeatherCard weather={weather} />
      </div>
    </div>
  )
}
