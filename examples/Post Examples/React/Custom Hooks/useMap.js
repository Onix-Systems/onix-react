import { useState, useCallback } from 'react';

export function useMap(initialEntries) {
  const [map, setMap] = useState(() => new Map(initialEntries));

  const set = useCallback((key, value) => {
    setMap((prev) => new Map(prev).set(key, value));
  }, []);

  const remove = useCallback((key) => {
    setMap((prev) => {
      const copy = new Map(prev);
      copy.delete(key);
      return copy;
    });
  }, []);

  const clear = useCallback(() => {
    setMap(() => new Map());
  }, []);

  return { map, set, remove, clear };
}
