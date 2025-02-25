import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Users
          </Link>
        </li>
        <li>
          <Link href="/posts" className="hover:text-gray-300">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

