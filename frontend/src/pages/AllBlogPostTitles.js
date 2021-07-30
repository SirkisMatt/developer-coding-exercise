import BlogPostList from "../components/BlogPostList/BlogPostList";

const blogPostsMeta = [
  {
    title: "title",
  },
  {
    title: "title2",
  },
  {
    title: "title3",
  },
];
const AllBlogPostTitles = () => {
  return <BlogPostList blogPosts={blogPostsMeta} />;
};

export default AllBlogPostTitles;
