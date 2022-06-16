import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Provider, useViewport, ViewportContext } from '../ViewportProvider';

const ViewportConsumer = () => {
  const viewport = useViewport();
  return <span>{viewport}</span>;
};

const ViewportProvider = ({ target }: any) => {
  return (
    <Provider target={target}>
      <ViewportConsumer />
    </Provider>
  );
};

function ViewportTest(width: number, viewportSize: string) {
  const win = { ...window, innerWidth: width };
  const { container, getByText } = render(<ViewportProvider target={win} />);

  fireEvent(container, new Event('resize'));

  getByText(viewportSize);
}

describe('<ViewportProvider />', () => {
  it('passes the value small to the consumer when the window width is 0', () => {
    ViewportTest(0, 'small');
  });

  it('passes the value small to the consumer when the window width is 640', () => {
    ViewportTest(640, 'small');
  });

  it('passes the value medium to the consumer when the window width is 641', () => {
    ViewportTest(641, 'medium');
  });

  it('passes the value medium to the consumer when the window width is 960', () => {
    ViewportTest(960, 'medium');
  });

  it('passes the value large to the consumer when the window width is 961', () => {
    ViewportTest(961, 'large');
  });

  it('passes the value large to the consumer when the window width is infinity', () => {
    ViewportTest(Infinity, 'large');
  });
});

describe('useViewport', () => {
  it('returns the active viewport', () => {
    const { getByText } = render(
      <ViewportContext.Provider value="small">
        <ViewportConsumer />
      </ViewportContext.Provider>,
    );

    expect(getByText('small')).toBeDefined();
  });

  it('throws an error when hook is used without a provider', () => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    expect(() =>
      render(
        <ViewportContext.Provider value={null}>
          <ViewportConsumer />
        </ViewportContext.Provider>,
      ),
    ).toThrowError('You must use a ViewportProvider to get a viewport.');

    spy.mockRestore();
  });
});
