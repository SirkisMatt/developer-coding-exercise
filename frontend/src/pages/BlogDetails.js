import { useEffect } from "react";
import { useParams } from "react-router-dom";

import BlogPostItem from "../components/BlogPostItem/BlogPostItem";
import NoBlogPosts from "../components/NoBlogPosts/NoBlogPosts";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSinglePost } from "../lib/api";

const BlogDetails = () => {
  const params = useParams();
  const { slug } = params;

  const { sendRequest, status, data: loadedPost, error } = useHttp(
    getSinglePost,
    true
  );
  useEffect(() => {
    sendRequest(slug);
  }, [sendRequest, slug]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && !loadedPost.content) {
    return <NoBlogPosts />;
  }

  return <BlogPostItem blogPost={loadedPost} />;
};

export default BlogDetails;
