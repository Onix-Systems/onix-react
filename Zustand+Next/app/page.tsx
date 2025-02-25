import { Suspense } from "react"
import UserList from "../components/UserList"
import Pagination from "../components/Pagination"
import useUsersStore from "../store/useUsersStore"

async function getUsers(page: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
  const users = await res.json()
  const totalCount = Number.parseInt(res.headers.get("x-total-count") || "0", 10)
  const totalPages = Math.ceil(totalCount / 5)
  return { users, totalPages }
}

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const page = Number.parseInt(searchParams.page || "1", 10)
  const { users, totalPages } = await getUsers(page)

  useUsersStore.setState({
    users,
    currentPage: page,
    totalPages,
  })

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserList />
      </Suspense>
      <Pagination store={useUsersStore} />
    </>
  )
}

