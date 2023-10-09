import { useEffect } from 'react';

function useHotkeys(shortcuts, element = window) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      for (const shortcut in shortcuts) {
        const { key, callback } = shortcuts[shortcut];
        if (event.key === key) {
          callback();
        }
      }
    };

    if (element) {
      element.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      if (element) {
        element.removeEventListener('keydown', handleKeyPress);
      }
    };
  }, [shortcuts, element]);
}

export default useHotkeys;
