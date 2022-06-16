import { render } from '@testing-library/react';
import React from 'react';

import Mark, { MarkType } from '../Mark';

describe('<Mark />', () => {
  it('renders', () => {
    const { container } = render(<Mark>Mark</Mark>);

    expect(container).toMatchSnapshot();
  });

  it('supports adding additional classes', () => {
    const { getByText } = render(<Mark className="new-class">Mark</Mark>);

    expect(getByText('Mark').classList.value).toBe('co-mark co-mark--yellow new-class');
  });

  it('renders with custom attribute', () => {
    const { getByText } = render(<Mark data-test="test">Mark</Mark>);

    expect(getByText('Mark').hasAttribute('data-test')).toBeTruthy();
  });

  it('renders with a ref', () => {
    const ref = React.createRef<MarkType>();

    const { getByTestId } = render(
      <Mark forwardedRef={ref} data-testid="test">
        Mark
      </Mark>,
    );

    expect(getByTestId('test')).toBe(ref.current);
  });

  it('renders with yellow color', () => {
    const { getByText } = render(<Mark color="yellow">Mark</Mark>);

    expect(getByText('Mark').classList).toContain('co-mark--yellow');
  });

  it('renders with light-yellow color', () => {
    const { getByText } = render(<Mark color="light-yellow">Mark</Mark>);

    expect(getByText('Mark').classList).toContain('co-mark--light-yellow');
  });
});
