// src/components/Weather.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchWeather } from '../api/weather';

// function Weather() {
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getWeather = async () => {
//       const data = await fetchWeather();
//       if (data) {
//         setWeather(data);
//       } else {
//         setError("Failed to fetch weather data");
//       }
//     };
//     getWeather();
//   }, []);

//   return (
//     <div className="weather-container">
//       <h2>Weather</h2>
//       {error ? (
//         <p>{error}</p>
//       ) : weather ? (
//         <div>
//           <p>{`The temperature is ${weather.main.temp}°C with ${weather.weather[0].description}.`}</p>
//           <p>{`Location: ${weather.name}, ${weather.sys.country}`}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Weather;

// src/components/Weather.jsx
import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather();
      if (data) {
        setWeather(data);
      } else {
        setError("Failed to fetch weather data");
      }
    };
    getWeather();
  }, []);

  return (
    <div className="weather-container">
      <h2>Weather</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : weather ? (
        <div>
          <p>{`The temperature is ${weather.main.temp}°C with ${weather.weather[0].description}.`}</p>
          <p>{`Location: ${weather.name}, ${weather.sys.country}`}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;

