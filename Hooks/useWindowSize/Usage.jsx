import { useWindowSize } from './useWindowSize'

const Component = () => {
  const { width, height } = useWindowSize()

  return (
    <div>
      The current window dimensions are:{' '}
      <code>{JSON.stringify({ width, height })}</code>
    </div>
  )
}

export default Component
