import React, { useEffect, useState } from "react";
import { fetchCalendarData } from "../api/calendar"; // Import the fetchCalendarData function from calendar.js

function Calendar() {
  const [holidays, setHolidays] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCalendarData = async () => {
      try {
        const data = await fetchCalendarData();
        if (data) {
          setHolidays(data); // Store the holiday data in state
        } else {
          setError("Failed to fetch holiday data.");
        }
      } catch (err) {
        setError("An error occurred while fetching the holiday data.");
      }
    };
    getCalendarData();
  }, []);

  return (
    <div className="calendar-container">
      <h2>Public Holidays in Austria (2024)</h2>
      {error ? (
        <p>{error}</p> // Show error message if there's an issue fetching the data
      ) : holidays.length ? (
        <ul>
          {holidays.map((holiday, index) => (
            <li key={index} className="holiday-item">
              <h3>{holiday.localName}</h3> {/* Holiday name */}
              <p>{holiday.date}</p> {/* Holiday date */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // Display loading message if data is still being fetched
      )}
    </div>
  );
}

export default Calendar;
