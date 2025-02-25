import { create } from "zustand"

interface Post {
  id: number
  title: string
  body: string
}

interface PostsState {
  posts: Post[]
  currentPage: number
  totalPages: number
  setPosts: (posts: Post[]) => void
  setCurrentPage: (page: number) => void
  setTotalPages: (total: number) => void
}

const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  currentPage: 1,
  totalPages: 1,
  setPosts: (posts) => set({ posts }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: total }),
}))

export default usePostsStore

