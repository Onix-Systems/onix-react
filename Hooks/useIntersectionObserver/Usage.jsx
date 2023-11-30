import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const UseIntersectionObserverExample = () => {
  const { ref, entry } = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  });

  const isVisible = entry?.isIntersecting;

  return (
    <div ref={ref}>
      {isVisible ? 'Visible' : 'Not Visible'}
    </div>
  );
};

export default UseIntersectionObserverExample;
