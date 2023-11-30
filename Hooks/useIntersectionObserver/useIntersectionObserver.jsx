import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}) => {
  const [entry, setEntry] = useState(undefined);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || freezeOnceVisible || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return { ref: elementRef, entry };
};

export default useIntersectionObserver;
