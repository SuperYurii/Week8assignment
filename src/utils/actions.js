"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function deletePost(postId) {
  try {
    await db.query(`DELETE FROM posts WHERE id = $1`, [postId]);

    //  Revalidate the cache to update UI
    revalidatePath("/posts");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}
