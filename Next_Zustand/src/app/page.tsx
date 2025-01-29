import Link from "next/link"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Zustand with Next.js and SSR</h1>
      <div className="flex space-x-4">
        <Link href="/counter">
          <Button>Go to Counter</Button>
        </Link>
        <Link href="/about">
          <Button>About Project</Button>
        </Link>
      </div>
    </main>
  )
}

