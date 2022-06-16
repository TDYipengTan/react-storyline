import { MAX_ZOOM } from 'configs';
import { useEffect, useState } from 'react';
import { useViewport } from 'react-flow-renderer';

const useBoldByZoom = (targetZoom = MAX_ZOOM) => {
  const [bold, setBold] = useState(false);
  const { zoom } = useViewport();

  useEffect(() => {
    setBold(zoom >= targetZoom);
  }, [zoom]);

  return bold;
};

export default useBoldByZoom;
