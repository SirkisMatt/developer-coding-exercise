import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";

import BlogPostList from "../components/BlogPostList/BlogPostList";
import NoBlogPosts from "../components/NoBlogPosts/NoBlogPosts";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllPosts } from "../lib/api";
import { postTitleActions } from "../store";

const AllBlogPostTitles = () => {
  const dispatch = useDispatch();
  // clean up title state
  const setTitleHandler = useCallback(() => {
    dispatch(postTitleActions.clearTitle());
  }, [dispatch]);

  // custom hook to reuse http request
  const { sendRequest, status, data: loadedPosts, error } = useHttp(
    getAllPosts,
    true
  );

  // fetch posts on render and clear title
  useEffect(() => {
    sendRequest();
    setTitleHandler();
  }, [sendRequest, setTitleHandler]);

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
