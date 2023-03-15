import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./blog.css";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article key={1} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021" imgURL={blog01} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article key={2} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021" imgURL={blog02} />
          <Article key={3} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021" imgURL={blog03} />
          <Article key={4} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021" imgURL={blog04} />
          <Article key={5} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021" imgURL={blog05} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
