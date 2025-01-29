import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">About This Project</h1>
      <p className="text-center max-w-2xl mb-8">
        This project demonstrates the integration of Zustand for state management with Next.js, showcasing server-side
        rendering (SSR) and client-side interactivity. It features a counter that initializes with a random value
        fetched on the server, demonstrating how Zustand can be used effectively in a Next.js application.
      </p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </main>
  )
}

