import type React from "react"
import useUsersStore from "../store/useUsersStore"

const UserList: React.FC = () => {
  const users = useUsersStore((state) => state.users)

  return (
    <ul className="space-y-4">
      {users.map((user) => (
        <li key={user.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </li>
      ))}
    </ul>
  )
}

export default UserList

