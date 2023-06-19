import Link from "next/link"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div >
      <Navbar/>
      <h1>Practicas con NextJS y REACT</h1>
      <div>
      <Link href="/users">
        <button type="button"><a>USER</a></button>
      </Link>
      </div>
    </div>
  )
}
