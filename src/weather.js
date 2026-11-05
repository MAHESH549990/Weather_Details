
const API = "https://api.openweathermap.org/data/2.5/weather";
export async function fetchWeather(city) {
  const key = import.meta.env.VITE_API_KEY;
  if (!key) throw new Error("Weather API key is missing. Add VITE_API_KEY to .env and restart Vite.");
  const response = await fetch(API + "?q=" + encodeURIComponent(city) + "&appid=" + key + "&units=metric");
  const data = await response.json();
  if (!response.ok) throw new Error(response.status === 404 ? "We couldn't find that place. Check the spelling and try again." : data.message || "Weather is temporarily unavailable.");
  return { city:data.name, country:data.sys.country, temperature:Math.round(data.main.temp), feelsLike:Math.round(data.main.feels_like), maxTemp:Math.round(data.main.temp_max), minTemp:Math.round(data.main.temp_min), humidity:data.main.humidity, windSpeed:Math.round(data.wind.speed*3.6), weather:data.weather[0].main, description:data.weather[0].description, icon:data.weather[0].icon, coordinates:{lat:data.coord.lat,lon:data.coord.lon}, sunrise:data.sys.sunrise, sunset:data.sys.sunset, timezone:data.timezone };
}
