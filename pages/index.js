import Link from "next/link"

export default function Home() {
  return (
    <div >
      <h1>Practicas con NextJs</h1>
      <div>
      <Link href="/users">
        <button type="button"><a>USER</a></button>
      </Link>
      </div>
    </div>
  )
}
