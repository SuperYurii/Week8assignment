import pg from "pg";
import Link from "next/link";
import db from "@/utils/db";

export default async function PostsPage({ searchParams }) {
  const sort = searchParams;

  const result = await db.query(`SELECT * FROM posts`);
  let posts = result.rows;
  console.log(posts);
  //We awant to sort trhe posts(ASC-DESC)
  if (sort === "desc") {
    posts.sort((a, b) => b.title.localeCompare(a.title)); // Descending order
  } else if (sort === "asc") {
    posts.sort((a, b) => a.title.localeCompare(b.title)); // ascending order
  }

  console.log(posts);
  //===============================================
  return (
    <>
      <h1>The Greatest Posts of All Time</h1>

      <Link href={`/posts?sort=asc`}>A-Z</Link>
      <Link href={`/posts?sort=desc`}>Z-A</Link>

      {/* with this part I asked some help from chat gpt. It told me how to sort it out with map and key */}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            {post.created_at
              ? new Date(post.created_at).toLocaleString()
              : "No Date Available"}
          </p>
        </div>
      ))}
    </>
  );
}
