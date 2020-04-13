<div className="shadow-sm p-2 mb-5 bg-light rounded">
      <div className="card mb-3">
        <a href={news.url} target="_blank" rel="noopener noreferrer">
          <img src={news.urlToImage} className="card-img-top" alt={news.title} />
        </a>
        <div className="card-body">
          <h5 className="card-title">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              {news.title}
            </a>
          </h5>
          <p className="card-text">{news.description}</p>
          <span>Author: {news.author}</span>
        </div>
        <div className="card-footer">
          <small class="text-muted">Published: {news.publishedAt}</small>
        </div>
      </div>
    </div>