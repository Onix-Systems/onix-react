import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold">Zustand Demo</h1>
        <p className="text-xl text-muted-foreground">
          A demonstration of Zustand state management with Next.js
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/posts">View Posts</Button>
          <Button href="/posts/create" variant="outline">
            Create Post
          </Button>
        </div>
      </div>
    </div>
  )
}

