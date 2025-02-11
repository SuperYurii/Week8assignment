import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h2 className="text-4xl font-bold text-red-600">404 - Not Found</h2>
      <p className="text-gray-600 mt-2 text-lg">
        Could not find the requested post.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
