"use client"

import { useCounterStore } from "./CounterStoreProvider"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore((state) => state)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      {isClient ? (
        <p className="text-sm text-gray-500">Value is now interactive</p>
      ) : (
        <p className="text-sm text-gray-500">Initial SSR value</p>
      )}
      <div className="flex space-x-2">
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}

