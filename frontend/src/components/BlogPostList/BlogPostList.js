import BlogPostTitle from "../BlogPostTitle/BlogPostTitle";
import classes from "./BlogPostList.module.css";

const BlogPostList = (props) => {
  return (
    <>
      <h2>Posts</h2>
      <ul className={classes.list}>
        {props.blogPosts.map((blogPost) => (
          <BlogPostTitle key={blogPost.title} title={blogPost.title} />
        ))}
      </ul>
    </>
  );
};

export default BlogPostList;
