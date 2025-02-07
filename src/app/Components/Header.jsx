import Link from "next/link";
import "./Header.css";
export default function Header() {
  return (
    <>
      <h1>This is the best app in the Universe</h1>
      <h2>I am the nav bar to help you find what you need</h2>
      <nav>
        <Link href={"/"}>Home</Link>

        <Link href={"/posts"}>Posts</Link>
        <Link href={"/new_post"}>New Posts</Link>
      </nav>
    </>
  );
}
