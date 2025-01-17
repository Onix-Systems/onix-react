'use client'

import { useCounterStore } from './CounterStoreProvider'
import { Button } from './ui/button'

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore((state) => state)

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex space-x-2">
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}

