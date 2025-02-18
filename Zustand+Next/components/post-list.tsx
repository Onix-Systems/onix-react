"use client"

import { usePostStore } from "@/lib/store"
import { Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PostList() {
  const { posts, deletePost } = usePostStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">All Posts</h2>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{post.content}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/posts/edit/${post.id}`}>
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Link>
              </Button>
              <Button variant="destructive" size="sm" onClick={() => deletePost(post.id)}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

