import { CounterStoreProvider } from "../../components/CounterStoreProvider"
import { Counter } from "../../components/Counter"
import Link from "next/link"
import { Button } from "../../components/ui/button"

async function getInitialCount() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return Math.floor(Math.random() * 100)
}

export default async function CounterPage() {
  const initialCount = await getInitialCount()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Counter Page</h1>
      <CounterStoreProvider initialCount={initialCount}>
        <Counter />
      </CounterStoreProvider>
      <div className="mt-8">
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </main>
  )
}

