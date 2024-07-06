import axios from "axios";

export default async function searchingCurrentWeatherAPI(city) {
  if (!city) {
    throw new Error("City parameter is required");
  }
  const apiKey = "71bf820fa0e438fd4a4ee25fb7c05c5a";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherData = {
    city: "",
    temperature: "",
    temperatureDescription: "",
    humidity: "",
    wind: "",
    icon: "",
  };

  try {
    const response = await axios.get(apiUrl);
    weatherData.city = response.data.name;
    weatherData.temperature = Math.round(response.data.main.temp);
    weatherData.temperatureDescription = response.data.weather[0].description;
    weatherData.humidity = response.data.main.humidity;
    weatherData.wind = response.data.wind.speed;
    weatherData.icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
  } catch (error) {
    console.error(error.message);
    throw error;
  }

  return weatherData;
}
