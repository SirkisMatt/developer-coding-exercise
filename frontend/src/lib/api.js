const BASE_URL = "http://localhost:8000";

export async function getAllPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error(response.json().message || "Could not fetch posts");
  }

  const data = await response.json();
  return data;
}

export async function getSinglePost(slug) {
  const response = await fetch(`${BASE_URL}/post/${slug}`);

  if (!response.ok) {
    throw new Error(response.json().message || "Could not fetch post");
  }

  const data = await response.json();

  const loadedPost = {
    id: slug,
    ...data.post,
  };

  return loadedPost;
}
