export const fetchCalendarData = async () => {
  try {
    const response = await fetch(
      'https://date.nager.at/api/v3/publicholidays/2024/AT', // API URL for Austria public holidays in 2024
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Setting Content-Type for JSON response
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const calendarData = await response.json();
    return calendarData; // Return the fetched holiday data
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    return null; // Return null if an error occurs
  }
};
