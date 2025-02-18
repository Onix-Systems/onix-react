"use server"

export async function getPosts() {
  return [
    {
      id: "1",
      title: "Post 1",
      content: "Mastering State Management in Next.js with Zustand!",
    },
    {
      id: "2",
      title: "Post 2",
      content: "Demonstrating how Zustand works",
    },
  ]
}

