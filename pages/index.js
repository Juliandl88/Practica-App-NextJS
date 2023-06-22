import Link from "next/link"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div >
      <Navbar/>
      <h1>Practicas con NextJS</h1>
      <div>
      <Link href="/users">
        <button type="button"><a>USUARIO</a></button>
      </Link>
      </div>
    </div>
  )
}
