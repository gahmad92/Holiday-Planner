export const fetchQuotes = async () => {
  try {
    const response = await fetch(
      'https://dummyjson.com/quotes/random', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'YOUR_API_KEY', // Replace with your actual API key from API Ninjas
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const quotesData = await response.json();
    return quotesData; // Return the data directly or customize as needed
  } catch (error) {
    console.error("Error fetching quotes data:", error);
    return null; // Return null or a fallback value in case of an error
  }
};
