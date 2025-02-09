import db from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const metadata = {
  title: "The page to create a new posts ",
  description: "User can read,add and delete posts",
  keywords: "posts, latest posts, great sayings,content, add,delete",
};

export default function NewPostPage() {
  //function to handle submit --> onSubmit listener (event)
  //In a server component, we cannot use events --> we are going to use a server action!
  // a server action is an async function that runs in the server specifically
  async function handleSubmit(formValues) {
    "use server";
    //I want to store the formValues --> state
    //I cannot use state and useState in the server --> I will "get" the formValues from the inputs directly
    const title = formValues.get("title");
    const content = formValues.get("content");

    //we could also store the values in an object:
    // const formData = {
    //   title: formValues.get("title"),
    //   content: formValues.get("content"),
    // };

    //I can send the formValues data to the data with a SQL query right here in the server!
    await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
      title,
      content,
    ]);

    //two Next.js tools to improve the UX
    //revalidatePath checks if there is new data to render on a particular location
    revalidatePath("/posts");
    //we can also redirect the user automatically after they submit the form, so they can see the new bird added on the page
    redirect("/posts");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Add a New Post</h1>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <form action={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium"
            >
              Content:
            </label>
            <textarea
              name="content"
              id="content"
              rows="5"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Submit Your Post
          </button>
        </form>
      </div>
    </div>
  );
}
