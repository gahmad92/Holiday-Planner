// import React, { useEffect, useState } from "react";
// import { fetchNews } from "../api/news";

// function News() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const getNews = async () => {
//       const data = await fetchNews();
//       setArticles(data);
//     };
//     getNews();
//   }, []);

//   return (
//     <div className="card">
//       <h2>News</h2>
//       <ul>
//         {articles.map((article, index) => (
//           <li key={index}>{article.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default News;



import React, { useEffect, useState } from "react";
import { fetchNews } from "../api/news";

function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        if (data) {
          setArticles(data);
        } else {
          setError("Failed to fetch news data.");
        }
      } catch (err) {
        setError("An error occurred while fetching the news.");
      }
    };
    getNews();
  }, []);

  return (
    <div className="news-container">
      <h2>News</h2>
      {error ? (
        <p>{error}</p>
      ) : articles.length ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="news-article">
              <h3>{article.title}</h3>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default News;
