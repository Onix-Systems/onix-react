import type React from "react"
import usePostsStore from "../store/usePostsStore"

const PostList: React.FC = () => {
  const posts = usePostsStore((state) => state.posts)

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostList

