"use client";

import { deletePost } from "@/utils/actions";

export default function DeleteButton({ id }) {
  const handleDelete = async () => {
    await deletePost(id);
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
}
