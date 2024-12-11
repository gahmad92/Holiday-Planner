export const fetchNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=tesla&from=2024-11-11&sortBy=publishedAt&apiKey=5ce5f527fd64486a820f8f9e20cd54c9'
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const newsData = await response.json();
      return newsData.articles; // Return only the articles array for easier use
    } catch (error) {
      console.error("Error fetching news data:", error);
      return null; // Return null or a fallback value in case of an error
    }
  };
  