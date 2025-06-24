import { useState, useEffect } from 'react';

export function useThrottle(value, delay = 200) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttledValue;
}
