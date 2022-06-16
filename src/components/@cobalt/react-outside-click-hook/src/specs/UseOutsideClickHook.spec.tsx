import { fireEvent, render } from '@testing-library/react';
import React, { FC } from 'react';

import useOutsideClick from '../useOutsideClick';

interface Props {
  outsideClickHandler: () => void;
  condition?: boolean;
}

const Component: FC<Props> = ({ outsideClickHandler, condition = true }) => {
  const handler = useOutsideClick(outsideClickHandler, condition);

  return (
    <>
      <div data-testid="outside-DIV" />
      <div data-testid="inside-DIV" {...handler}>
        <div data-testid="nested-DIV" />
      </div>
    </>
  );
};

describe('useOutsideClick', () => {
  it('detects outside clicks', () => {
    const outsideClickHandler = jest.fn();

    const { getByTestId } = render(
      <Component outsideClickHandler={outsideClickHandler} />,
    );

    fireEvent.click(getByTestId('outside-DIV'));
    expect(outsideClickHandler).toHaveBeenCalled();
  });

  it('is not triggered by inside clicks', () => {
    const outsideClickHandler = jest.fn();

    const { getByTestId } = render(
      <Component outsideClickHandler={outsideClickHandler} />,
    );

    fireEvent.click(getByTestId('inside-DIV'));
    expect(outsideClickHandler).not.toHaveBeenCalled();
  });

  it('is not triggered by nested clicks', () => {
    const outsideClickHandler = jest.fn();

    const { getByTestId } = render(
      <Component outsideClickHandler={outsideClickHandler} />,
    );

    fireEvent.click(getByTestId('nested-DIV'));
    expect(outsideClickHandler).not.toHaveBeenCalled();
  });

  it('is is triggered based on a condition', () => {
    const outsideClickHandler = jest.fn();

    const wrapper = render(
      <Component outsideClickHandler={outsideClickHandler} condition={false} />,
    );
    fireEvent.click(wrapper.getByTestId('outside-DIV'));

    wrapper.rerender(
      <Component outsideClickHandler={outsideClickHandler} condition={true} />,
    );
    fireEvent.click(wrapper.getByTestId('outside-DIV'));

    expect(outsideClickHandler).toHaveBeenCalledTimes(1);
  });
});