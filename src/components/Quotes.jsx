import React, { useEffect, useState } from "react";
import { fetchQuotes } from "../api/quotes"; // Import the fetchQuotes function from quotes.js

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const data = await fetchQuotes();
        if (data) {
          setQuote(data); // Set the fetched quote
        } else {
          setError("Failed to fetch quote data.");
        }
      } catch (err) {
        setError("An error occurred while fetching the quote.");
      }
    };
    getQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2>Quote</h2>
      {error ? (
        <p>{error}</p>
      ) : quote ? (
        <div className="quote-item">
          <blockquote>{quote.quote}</blockquote>
          <footer>- {quote.author}</footer>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Quotes;
