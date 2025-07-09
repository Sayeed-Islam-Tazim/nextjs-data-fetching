type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Author = {
  id: number;
  name: string;
};

async function getUserPosts(userId: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

async function getUserAlbums(userId: number) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch albums");
  }
  return response.json();
}

async function getUserInfo(userId: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = parseInt(id);
  const postData: Promise<Post[]> = getUserPosts(userId);
  const albumData: Promise<Album[]> = getUserAlbums(userId);
  const userData: Promise<Author> = getUserInfo(userId);

  const [posts, albums, user] = await Promise.all([
    postData,
    albumData,
    userData,
  ]);
  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      <div className="flex gap-2 p-2 m-2 border-2 rounded border-white">
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => (
              <li
                className="p-2 my-2 border-2 rounded border-white"
                key={post.id}
              >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Albums</h2>
          <ul>
            {albums.map((album) => (
              <li
                className="p-2 my-2 border-2 rounded border-white"
                key={album.id}
              >
                <h3>{album.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
