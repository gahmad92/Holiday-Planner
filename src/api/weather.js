export const fetchWeather = async () => {
    try {
      const response = await fetch(
        // 'https://api.openweathermap.org/data/2.5/weather?lat=31.5204&lon=74.3587&appid=c2101829f8e2f35b77990824886b1bce'
        "https://api.openweathermap.org/data/2.5/weather?lat=47.5162&lon=14.5501&appid=c2101829f8e2f35b77990824886b1bce"
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const weatherData = await response.json();
      return weatherData; // Return the JSON data directly
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null; // Return null or a fallback value in case of an error
    }
  };
  