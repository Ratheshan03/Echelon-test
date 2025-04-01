"use client";

import { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );
        const data = await res.json();

        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError("Failed to fetch news.");
        }
      } catch (err) {
        setError("Error fetching data.");
      }
    };

    fetchNews();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="news-grid">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="news-item">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                width="500"
                height="300"
                className="news-image"
              />
            )}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p className="author">By {article.author}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      ) : (
        <div>No articles available.</div>
      )}
    </div>
  );
};

export default News;
