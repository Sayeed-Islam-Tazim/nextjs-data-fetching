type Author = {
  id: number;
  name: string;
};

export default async function AuthorPage({ userId }: { userId: number }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  //   const authors: Author[] = await response.json();
  const author: Author = await response.json();
  return (
    await new Promise((resolve) => setTimeout(resolve, 1000)), // Simulating a delay
    (
      <div>
        <h1>written by: {author.name}</h1>
      </div>
    )
  );
}
