import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/users">
        Users
      </Link>
      <Link href="/posts">
        Posteos
      </Link>
    </nav>
  );
}
