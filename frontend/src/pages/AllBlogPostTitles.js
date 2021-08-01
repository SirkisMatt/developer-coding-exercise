import { useEffect } from "react";

import BlogPostList from "../components/BlogPostList/BlogPostList";
import NoBlogPosts from "../components/NoBlogPosts/NoBlogPosts";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllPosts } from "../lib/api";

const blogPostsMeta = [
  {
    title: "title",
    slug: "title",
  },
  {
    title: "title2",
    slug: "title2",
  },
  {
    title: "title3",
    slug: "title3",
  },
];
const AllBlogPostTitles = () => {
  const { sendRequest, status, data: loadedPosts, error } = useHttp(
    getAllPosts,
    true
  );
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === "completed" && (!loadedPosts || loadedPosts.length === 0)) {
    return <NoBlogPosts />;
  }

  return <BlogPostList blogPosts={loadedPosts} />;
};

export default AllBlogPostTitles;
