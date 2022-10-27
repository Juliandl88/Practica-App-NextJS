import Link from "next/link"

export default function Home() {
  return (
    <div >
      <h1>Practicas con NextJs</h1>
      <div>
      <Link href="/post">
        <button type="button"><a>Post</a></button>
      </Link>
      </div>
    </div>
  )
}
