import { Suspense } from "react";
import AuthorPage from "./author";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  const filteredPosts = posts.filter((post) => post.id % 10 === 1);
  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-200">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Suspense fallback={<div>Loading Author...</div>}>
            <AuthorPage userId={post.userId} />
          </Suspense>
          {/* You can also pass the post.userId directly to AuthorPage */}
          {/* <AuthorPage userId={post.userId} /> */}
        </div>
      ))}
    </div>
  );
}
