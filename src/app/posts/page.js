import pg from "pg";
import Link from "next/link";
import db from "@/utils/db";
import DeleteButton from "@/app/Components/Delete";
export const metadata = {
  title: "All Posts ",
  description: "Browse through all the latest posts shared by users.",
  keywords: "posts, latest posts, great sayings,content",
};

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
  //========================================
  //Took the Idea from the web ite that I use and used it here.
  return (
    <div className="min-h-screen bg-amber-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Great sayings from the smartest beings on the planet.
      </h1>

      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-gray-200 hover:bg-gray-300 transition rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h2>
                <p className="text-gray-700">{post.content}</p>
                <p className="text-gray-500 text-sm">
                  {post.created_at
                    ? new Date(post.created_at).toLocaleString()
                    : "No Date Available"}
                </p>

                {/* Delete Button */}
                <div className="mt-2">
                  <DeleteButton id={post.id} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No posts available.</p>
        )}
      </div>
    </div>
  );
}
