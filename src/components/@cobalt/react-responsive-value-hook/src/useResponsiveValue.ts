import { useViewport } from '@cobalt/react-viewport-provider';

export type ResponsiveValue<T> = T | [T, T, T];

function useResponsiveValue<T>(value: ResponsiveValue<T>): T {
  const viewport = useViewport();

  if (!Array.isArray(value)) {
    return value;
  }

  switch (viewport) {
    case 'small':
      return value[0];
    case 'medium':
      return value[1];
    case 'large':
      return value[2];
  }
}

export default useResponsiveValue;
