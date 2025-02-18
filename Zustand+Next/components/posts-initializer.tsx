"use client"

import { useRef } from "react"
import { usePostStore } from "@/lib/store"
import type { Post } from "@/lib/store"

export function PostsInitializer({ posts }: { posts: Post[] }) {
  const initialized = useRef(false)

  if (!initialized.current) {
    usePostStore.setState({ posts })
    initialized.current = true
  }

  return null
}

