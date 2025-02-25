import { create } from "zustand"

interface User {
  id: number
  name: string
  email: string
}

interface UsersState {
  users: User[]
  currentPage: number
  totalPages: number
  setUsers: (users: User[]) => void
  setCurrentPage: (page: number) => void
  setTotalPages: (total: number) => void
}

const useUsersStore = create<UsersState>((set) => ({
  users: [],
  currentPage: 1,
  totalPages: 1,
  setUsers: (users) => set({ users }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: total }),
}))

export default useUsersStore

