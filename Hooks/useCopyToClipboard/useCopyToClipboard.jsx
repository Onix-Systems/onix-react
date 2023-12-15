import { useState } from 'react';

const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copyHandler = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copyHandler];
};

export default useCopyToClipboard;
