import "./article.css";

function Article({ title, date, imgURL }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgURL} />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read All Article</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
