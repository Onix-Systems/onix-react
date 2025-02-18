import { getPosts } from "@/lib/actions"
import { PostsInitializer } from "@/components/posts-initializer"
import PostList from "@/components/post-list"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Plus } from "lucide-react"

export default async function PostsPage() {
  const initialPosts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <PostsInitializer posts={initialPosts} />

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <Button href="/posts/create">
            <Plus className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>
        <PostList />
      </div>
    </div>
  )
}

