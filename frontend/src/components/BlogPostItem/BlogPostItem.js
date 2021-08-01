import ReactMarkdown from "react-markdown";
import { useHistory, useParams } from "react-router-dom";

import Tags from "../Tags/Tags";
import classes from "./BlogPostItem.module.css";

const BlogPostItem = (props) => {
  const history = useHistory();

  const goBackHandler = () => {
    history.push("/posts");
  };

  return (
    <>
      <figure className={classes.post}>
        <ReactMarkdown>{props.blogPost.content}</ReactMarkdown>
        <div className={classes.tags}>
          <h3>Tags</h3>
          {props.blogPost.tags.map((tag) => (
            <Tags key={tag} tag={tag} />
          ))}
        </div>
      </figure>
      <button onClick={goBackHandler} className="btn centered">
        Back to Posts
      </button>
    </>
  );
};

export default BlogPostItem;
