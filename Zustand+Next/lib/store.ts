import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface Post {
  id: string
  title: string
  content: string
}

interface PostStore {
  posts: Post[]
  setPosts: (posts: Post[]) => void 
  addPost: (title: string, content: string) => void
  editPost: (id: string, title: string, content: string) => void
  deletePost: (id: string) => void
  getPost: (id: string) => Post | undefined
}

export const usePostStore = create<PostStore>()(
  persist(
    (set, get) => ({
      posts: [],
      setPosts: (posts) => set({ posts }),
      addPost: (title, content) =>
        set((state) => ({
          posts: [...state.posts, { id: Math.random().toString(36).substring(7), title, content }],
        })),
      editPost: (id, title, content) =>
        set((state) => ({
          posts: state.posts.map((post) => (post.id === id ? { ...post, title, content } : post)),
        })),
      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
      getPost: (id) => get().posts.find((post) => post.id === id),
    }),
    {
      name: "post-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
)

