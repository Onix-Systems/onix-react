import { useState, useCallback } from 'react';

export function useHistoryState(initial) {
  const [history, setHistory] = useState([initial]);
  const [idx, setIdx] = useState(0);

  const state = history[idx];

  const set = useCallback((val) => {
    const next = history.slice(0, idx + 1);
    setHistory([...next, val]);
    setIdx((i) => i + 1);
  }, [history, idx]);

  const undo = () => idx > 0 && setIdx((i) => i - 1);
  const redo = () => idx < history.length - 1 && setIdx((i) => i + 1);

  const clear = useCallback(() => {
    setHistory([initial]);
    setIdx(0);
  }, [initial]);

  return {
    state,
    set,
    undo,
    redo,
    canUndo: idx > 0,
    canRedo: idx < history.length - 1,
    clear,
  };
}
