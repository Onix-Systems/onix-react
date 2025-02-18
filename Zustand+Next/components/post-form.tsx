"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePostStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface PostFormProps {
  postId?: string
  isEditing?: boolean
}

export default function PostForm({ postId, isEditing = false }: PostFormProps) {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const { addPost, editPost, getPost } = usePostStore()

  useEffect(() => {
    if (isEditing && postId) {
      const post = getPost(postId)
      if (post) {
        setTitle(post.title)
        setContent(post.content)
      }
    }
  }, [isEditing, postId, getPost])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isEditing && postId) {
      editPost(postId, title, content)
    } else {
      addPost(title, content)
    }
    router.push("/")
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Post" : "Create New Post"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Content
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter post content"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" type="button" onClick={() => router.push("/")}>
              Cancel
            </Button>
            <Button type="submit">{isEditing ? "Save Changes" : "Create Post"}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

