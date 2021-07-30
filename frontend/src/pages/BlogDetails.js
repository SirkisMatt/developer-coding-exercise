import { useParams } from "react-router-dom";

import BlogPostItem from "../components/BlogPostItem/BlogPostItem";

const blogPost = {
  title: "title",
  author: "Author name",
  content: "...some content...",
  tags: ["word1", "word2", "word3"],
};
const BlogDetails = () => {
  const params = useParams();
  const { slug } = params;

  return <BlogPostItem blogPost={blogPost} />;
};

export default BlogDetails;
