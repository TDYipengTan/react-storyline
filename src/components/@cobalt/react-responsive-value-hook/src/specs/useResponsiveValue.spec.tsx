import { ViewportContext } from '@cobalt/react-viewport-provider';
import { render } from '@testing-library/react';
import React, { FC } from 'react';

import useResponsiveValue, { ResponsiveValue } from '../useResponsiveValue';

type Viewport = React.ContextType<typeof ViewportContext>;

const viewports: Viewport[] = ['small', 'medium', 'large'];
const Component: FC<{ value: ResponsiveValue<string> }> = ({ value }) => {
  const v = useResponsiveValue(value);

  return <span>{v}</span>;
};

describe('useResponsiveValue', () => {
  describe('when using a single value', () => {
    viewports.forEach((viewport) => {
      it(`returns the value for the ${viewport} viewport`, () => {
        const { getByText } = render(
          <ViewportContext.Provider value={viewport}>
            <Component value="ALL" />
          </ViewportContext.Provider>,
        );

        expect(getByText('ALL')).toBeDefined();
      });
    });
  });

  describe('when using an array value', () => {
    const values: ResponsiveValue<string> = ['sm', 'md', 'lg'];

    viewports.forEach((viewport, index) => {
      it(`returns the index ${index} for the ${viewport} viewport`, () => {
        const { getByText } = render(
          <ViewportContext.Provider value={viewport}>
            <Component value={values} />
          </ViewportContext.Provider>,
        );

        expect(getByText(values[index])).toBeDefined();
      });
    });
  });
});
