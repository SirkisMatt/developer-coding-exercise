import { Link } from "react-router-dom";
import classes from "./BlogPostTitle.module.css";

const BlogPostTitle = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>{props.title}</blockquote>
      </figure>

      <Link className="btn" to={`/posts/${props.slug}`}>
        View Post
      </Link>
    </li>
  );
};

export default BlogPostTitle;
