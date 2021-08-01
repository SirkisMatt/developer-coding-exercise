import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import Tags from "../Tags/Tags";
import classes from "./BlogPostItem.module.css";

const BlogPostItem = (props) => {
  const history = useHistory();

  // grab title from redux store
  const title = useSelector((state) => state.postTitle);

  const goBackHandler = () => {
    history.push("/posts");
  };

  return (
    <>
      <figure className={classes.post}>
        <h1>{title}</h1>
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
