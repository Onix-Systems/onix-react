"use client"

import type React from "react"

import { useRef } from "react"
import type { StoreApi } from "zustand"
import useUsersStore from "../store/useUsersStore"

function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<StoreApi<ReturnType<typeof useUsersStore>>>()
  if (!storeRef.current) {
    storeRef.current = useUsersStore
  }
  return <>{children}</>
}

export default StoreProvider

