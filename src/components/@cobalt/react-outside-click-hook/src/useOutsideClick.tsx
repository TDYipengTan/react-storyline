import { useCallback, useEffect, useRef } from 'react';

function useOutsideClick(handler: () => void, mounted: boolean = true) {
  const isClicked = useRef(false);

  const handleClick = useCallback(() => {
    isClicked.current = true;
  }, []);

  const handleEvent = useCallback(() => {
    if (isClicked.current) {
      isClicked.current = false;
      return;
    }

    handler();
  }, [handler]);

  useEffect(() => {
    if (!mounted) return;

    document.addEventListener('click', handleEvent);
    window.addEventListener('blur', handleEvent);

    return () => {
      document.removeEventListener('click', handleEvent);
      window.removeEventListener('blur', handleEvent);
    };
  }, [handleEvent, mounted]);

  return { onClickCapture: handleClick };
}

export default useOutsideClick;