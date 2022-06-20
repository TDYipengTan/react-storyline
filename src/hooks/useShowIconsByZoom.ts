import { MIN_ZOOM } from 'configs';
import { useEffect, useState } from 'react';
import { useViewport } from 'react-flow-renderer';

const useShowIconsByZoom = (targetZoom = MIN_ZOOM) => {
  const [showIcons, setShowIcons] = useState(false);
  const { zoom } = useViewport();

  useEffect(() => {
    setShowIcons(zoom > targetZoom);
  }, [zoom]);

  return showIcons;
};

export default useShowIconsByZoom;
