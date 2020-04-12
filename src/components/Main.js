import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

function Main() {
  const [news, setNews] = useState([]);

  const URL =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=bd5aa59d0a5d4dfe88cbad0fb2bffbc1';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const {
          data: { articles },
        } = await axios.get(URL);
        setNews(articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  console.log(news);
  return (
    <div>
      {news.map(news => (
        <Article key={news.title} news={news} />
      ))}
    </div>
  );
}

export default Main;
