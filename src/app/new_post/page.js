import db from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    <>
      <h1>Add a new post to the app</h1>
      {/* we are going to add a form in here, same as usual */}
      {/* remember to add some validation to make sure your data is as precise as possible! */}
      <form action={handleSubmit}>
        <label htmlFor="title">Title: </label>
        {/* the name attribute gives an identifier to the input, so I can target each input specifically */}
        {/* it is recommended that the name attribute value matches the table column where the data will be stored */}
        <input
          type="text"
          name="title"
          id="title"
          className="text-emerald-600"
        />
        <label htmlFor="Content">Content: </label>
        <input
          type="text"
          name="content"
          id="content"
          className="text-emerald-600"
        />

        <button
          type="submit"
          className="border-amber-600 border-4 m-4 hover:bg-sky-700"
        >
          Submit your post
        </button>
      </form>
    </>
  );
}
