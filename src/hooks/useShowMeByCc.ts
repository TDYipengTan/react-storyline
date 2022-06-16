import { MAX_ZOOM } from 'configs';
import { useEffect, useState } from 'react';
import { useViewport } from 'react-flow-renderer';

const useShowMeByCc = (cc = false) => {
  const [showMe, setShowMe] = useState(true);
  const { zoom } = useViewport();

  useEffect(() => {
    setShowMe(zoom >= MAX_ZOOM);
  }, [zoom]);

  return cc ? showMe : true;
};

export default useShowMeByCc;
