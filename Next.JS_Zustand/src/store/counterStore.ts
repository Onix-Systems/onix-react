import { createStore } from 'zustand/vanilla'

export interface CounterState {
  count: number
}

export interface CounterActions {
  increment: () => void
  decrement: () => void
  reset: () => void
}

export type CounterStore = CounterState & CounterActions

export const createCounterStore = (initialState: CounterState) => {
  return createStore<CounterStore>()((set) => ({
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: initialState.count }),
  }))
}
