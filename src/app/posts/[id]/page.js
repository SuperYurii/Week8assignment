import pg from "pg";
import { notFound } from "next/navigation";

export default async function Post({ params }) {
  const { id } = await params;
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
  const post = result.rows;
  if (post.length === 0) {
    notFound();
  }

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
//===========This is version from GPT====================

// import pg from "pg";
// import { notFound } from "next/navigation";

// export default async function Post({ params }) {
//   const { id } = params; // ✅ No need for `await`

//   const db = new pg.Pool({
//     connectionString: process.env.NEXT_POSTGRES,
//   });

//   // ✅ Use parameterized query to prevent SQL injection
//   const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
//   const post = result.rows;

//   // ✅ Check if post is empty
//   if (post.length === 0) {
//     notFound(); // ✅ Redirect to `not-found.js`
//   }

//   return (
//     <div>
//       <h2>{post[0].title}</h2> {/* ✅ Use first element directly */}
//       <p>{post[0].content}</p>
//     </div>
//   );
// }
