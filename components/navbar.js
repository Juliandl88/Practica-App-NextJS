import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/users">
        <a>Usuarios</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </nav>
  );
}
