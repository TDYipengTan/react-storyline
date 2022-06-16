/* eslint-disable no-unused-vars */
import throttle from 'lodash.throttle';
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type Size = 'small' | 'medium' | 'large';
type Breakpoints = {
  [k in Size]: { min: number; max: number };
};
type Target = Pick<Window, 'innerWidth' | 'addEventListener' | 'removeEventListener'>;

const BREAKPOINTS: Breakpoints = {
  small: {
    min: 0,
    max: 640,
  },
  medium: {
    min: 641,
    max: 960,
  },
  large: {
    min: 961,
    max: Infinity,
  },
};

const ViewportContext = React.createContext<Size | null>(null);

const useViewport = (): Size => {
  const viewport = useContext(ViewportContext);

  if (!viewport) {
    throw new Error('You must use a ViewportProvider to get a viewport.');
  }

  return viewport;
};

const getViewportMatch = (target: Target): Size | null => {
  const { innerWidth } = target;
  let breakpoint: Size;

  for (breakpoint in BREAKPOINTS) {
    const { min, max } = BREAKPOINTS[breakpoint];

    if (innerWidth >= min && innerWidth <= max) return breakpoint;
  }

  return null;
};

const Provider: FunctionComponent<{ target?: Target }> = ({
  children,
  target = window,
}) => {
  const [viewport, setViewport] = useState<Size | null>(getViewportMatch(target));

  const setNewSize = useCallback(() => {
    setViewport(getViewportMatch(target));
  }, [target]);

  const resizeCallback = useCallback(throttle(setNewSize, 200), []);
  const handleResize = useCallback(() => {
    resizeCallback();
  }, [resizeCallback]);

  useEffect(() => {
    setNewSize();

    if (!target || !target.addEventListener) return;

    target.addEventListener('resize', handleResize, true);

    return () => {
      resizeCallback.cancel();

      if (!target || !target.removeEventListener) return;

      target.removeEventListener('resize', handleResize, true);
    };
  }, [target, resizeCallback, setNewSize, handleResize]);

  return <ViewportContext.Provider value={viewport}>{children}</ViewportContext.Provider>;
};

const ViewportProvider: FunctionComponent = ({ children }) => (
  <Provider>{children}</Provider>
);

export { Provider, useViewport, ViewportContext };
export default ViewportProvider;
