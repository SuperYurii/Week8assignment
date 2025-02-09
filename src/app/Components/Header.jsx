import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-lg md:text-2xl font-semibold text-center md:text-left">
          The place where your dreams come true
        </h1>

        <nav className="mt-4 md:mt-0 flex gap-6">
          <Link href="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link href="/posts" className="hover:text-blue-300 transition">
            Posts
          </Link>
          <Link href="/new_post" className="hover:text-blue-300 transition">
            New Post
          </Link>
        </nav>
      </div>
    </header>
  );
}
