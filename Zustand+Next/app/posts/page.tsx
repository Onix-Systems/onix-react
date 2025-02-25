import { Suspense } from "react"
import PostList from "../../components/PostList"
import Pagination from "../../components/Pagination"
import usePostsStore from "../../store/usePostsStore"

async function getPosts(page: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
  const posts = await res.json()
  const totalCount = Number.parseInt(res.headers.get("x-total-count") || "0", 10)
  const totalPages = Math.ceil(totalCount / 5)
  return { posts, totalPages }
}

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const page = Number.parseInt(searchParams.page || "1", 10)
  const { posts, totalPages } = await getPosts(page)

  usePostsStore.setState({
    posts,
    currentPage: page,
    totalPages,
  })

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Post List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
      <Pagination store={usePostsStore} />
    </>
  )
}

