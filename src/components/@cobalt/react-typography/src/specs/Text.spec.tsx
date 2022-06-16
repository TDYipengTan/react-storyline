import { render } from '@testing-library/react';
import React from 'react';

import Text, { TextType } from '../Text';

describe('<Text />', () => {
  it('renders a paragraph', () => {
    const { container } = render(<Text>Text</Text>);

    expect(container).toMatchSnapshot();
  });

  it('renders a span', () => {
    const { container } = render(<Text inline>Text</Text>);

    expect(container).toMatchSnapshot();
  });

  it('supports adding additional classes', () => {
    const { getByText } = render(<Text className="new-class">Text</Text>);

    expect(getByText('Text').classList.value).toBe(
      'co-text co-text--medium co-text--weight-regular new-class',
    );
  });

  it('renders with small class', () => {
    const { getByText } = render(<Text size="small">Text</Text>);

    const textClassList = getByText('Text').classList;

    expect(textClassList).toContain('co-text--small');
  });

  it('renders with medium class', () => {
    const { getByText } = render(<Text size="medium">Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--medium');
  });

  it('renders with light weight', () => {
    const { getByText } = render(<Text weight="light">Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--weight-light');
  });

  it('renders with regular weight', () => {
    const { getByText } = render(<Text weight="regular">Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--weight-regular');
  });

  it('renders with medium weight', () => {
    const { getByText } = render(<Text weight="medium">Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--weight-medium');
  });

  it('renders with inherit weight', () => {
    const { getByText } = render(<Text weight="inherit">Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--weight-inherit');
  });

  it('renders with truncated class', () => {
    const { getByText } = render(<Text truncated>Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--truncated');
  });

  it('renders with custom color', () => {
    const { getByText } = render(<Text color="red">Text</Text>);

    expect(getByText('Text').style.color).toBe('red');
  });

  it('renders with custom attribute', () => {
    const { getByText } = render(<Text data-test="test">Text</Text>);

    expect(getByText('Text').hasAttribute('data-test')).toBeTruthy();
  });

  it('renders with a ref', () => {
    const ref = React.createRef<TextType>();

    const { getByTestId } = render(
      <Text forwardedRef={ref} data-testid="test">
        Text
      </Text>,
    );

    expect(getByTestId('test')).toBe(ref.current);
  });

  it('renders with a static skeleton', () => {
    const { getByText } = render(<Text skeleton="static">Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--skeleton');
  });

  it('renders with an animated skeleton', () => {
    const { getByText } = render(<Text skeleton="animated">Text</Text>);

    expect(getByText('Text').classList).toContain('co-text--animated-skeleton');
  });

  it('renders a skeleton with a different width', () => {
    const { getByTestId } = render(
      <Text skeleton={{ type: 'static', width: 200 }} data-testid="text" />,
    );

    expect(getByTestId('text').style.width).toBe('200px');
  });

  it('renders with a multi-line skeleton', () => {
    const { getByTestId } = render(
      <Text skeleton={{ type: 'static', lines: 2 }} data-testid="text" />,
    );

    const element = getByTestId('text');

    expect(element.children).toHaveLength(2);
  });

  it('does not render with a multi-line skeleton when inline', () => {
    const { getByTestId } = render(
      <Text inline skeleton={{ type: 'static', lines: 2 }} data-testid="text" />,
    );

    const element = getByTestId('text');

    expect(element.children).not.toHaveLength(2);
  });
});