import { useDispatch } from "react-redux";

import { postTitleActions } from "../../store/index";
import { Link } from "react-router-dom";
import classes from "./BlogPostTitle.module.css";

const BlogPostTitle = (props) => {
  const dispatch = useDispatch();

  // set title in redux store to be used in individual post
  const setTitleHandler = () => {
    dispatch(postTitleActions.setTitle(props.title));
  };
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>{props.title}</blockquote>
      </figure>

      <Link
        onClick={setTitleHandler}
        className="btn"
        to={`/posts/${props.slug}`}
      >
        View Post
      </Link>
    </li>
  );
};

export default BlogPostTitle;
