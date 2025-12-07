export async function getCoordinates(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city.trim()
    )}&count=5&language=en`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch city");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found. Try another name.");
  }

  // Take the best match
  const { latitude, longitude, name, country } = data.results[0];
  return { latitude, longitude, name, country };
}


// Get current weather
export async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  return response.json();
}
