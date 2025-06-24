import { useRef, useState, useEffect } from 'react';

export function useMeasure() {
  const ref = useRef(null);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setBounds(entry.contentRect);
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [ref, bounds];
}
