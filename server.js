const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/weather", async (req, res) => {
  const city = req.query.city || "Zilina";
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error); // Додаємо логування помилки
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
