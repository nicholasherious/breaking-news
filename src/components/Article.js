import React from 'react';

function Article({ news }) {
  return (
    <div>
    <div className="card mb-3 mt-4">
    <a href={news.url} target="_blank" rel="noopener noreferrer"><img src={news.urlToImage} className="card-img-top" alt="..." /></a>
  <div className="card-body">
    <h5 className="card-title"><a href={news.url} target="_blank" rel="noopener noreferrer">{news.title}</a></h5>
    <p className="card-text">{news.description}</p>
    <span>Author: {news.author}</span>
    <p className="card-text"><small className="text-muted">Published: {news.publishedAt}</small></p> 
    
  </div>
</div>
    </div>
  );
}

export default Article;
