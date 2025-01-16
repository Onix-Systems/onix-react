'use client'

import { createContext, useRef, useContext, ReactNode } from 'react'
import { useStore } from 'zustand'
import { createCounterStore, CounterStore } from '@/store/counterStore'

const CounterStoreContext = createContext<ReturnType<typeof createCounterStore> | null>(null)

export const CounterStoreProvider = ({ 
  children,
  initialCount
}: { 
  children: ReactNode
  initialCount: number 
}) => {
  const storeRef = useRef<ReturnType<typeof createCounterStore>>()
  if (!storeRef.current) {
    storeRef.current = createCounterStore({ count: initialCount })
  }
  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}

export const useCounterStore = <T,>(selector: (store: CounterStore) => T): T => {
  const store = useContext(CounterStoreContext)
  if (!store) throw new Error('useCounterStore must be used within CounterStoreProvider')
  return useStore(store, selector)
}
