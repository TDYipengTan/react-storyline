import { fireEvent, render, waitForElement } from '@testing-library/react';
import React from 'react';

import Icon, { IconType } from '../Icon';

const noop = () => {};

Object.defineProperty(document, 'fonts', {
  value: {
    load: () => Promise.resolve(),
  },
});

describe('<Icon />', () => {
  it('renders', async () => {
    const { container, getByText } = render(<Icon name="code" />);

    await waitForElement(() => getByText('code'));

    expect(container).toMatchSnapshot();
  });

  it('renders a clickable icon', async () => {
    const { container, getByText } = render(<Icon name="code" onClick={noop} />);

    await waitForElement(() => getByText('code'));

    expect(container).toMatchSnapshot();
  });

  it('renders an Icon with other attributes', async () => {
    const { getByText, getByTestId } = render(<Icon name="code" data-testid="test" />);

    await waitForElement(() => getByText('code'));

    expect(getByTestId('test')).toBeDefined();
  });

  it('renders an Icon with default & custom classes', async () => {
    const { getByText } = render(<Icon name="code" className="customClassName" />);

    await waitForElement(() => getByText('code'));

    const { classList } = getByText('code');

    expect(classList.value).toBe('co-icon customClassName');
  });

  it('renders with a ref', async () => {
    const ref = React.createRef<IconType>();

    const { getByText } = render(<Icon name="code" forwardedRef={ref} />);

    await waitForElement(() => getByText('code'));

    expect(getByText('code')).toBe(ref.current);
  });

  it('renders with an accessible label', async () => {
    const { getByText } = render(<Icon name="code" accessibilityLabel="Some label" />);

    await waitForElement(() => getByText('code'));

    expect(getByText('Some label')).toBeDefined();
  });

  it('renders an icon with a specific color', async () => {
    const { getByText } = render(<Icon name="code" color="red" />);

    await waitForElement(() => getByText('code'));

    const { style } = getByText('code');

    expect(style.color).toBe('red');
  });

  it('renders with custom styles', async () => {
    const { getByText } = render(
      <Icon name="code" color="red" style={{ width: 20, height: 20 }} />,
    );

    await waitForElement(() => getByText('code'));

    const { style } = getByText('code');

    expect(style.width).toBe('20px');
    expect(style.height).toBe('20px');
  });

  it('renders a micro Icon', async () => {
    const { getByText } = render(<Icon name="code" size="micro" />);

    await waitForElement(() => getByText('code'));

    expect(getByText('code').classList).toContain('co-icon--micro');
  });

  it('renders a tiny Icon', async () => {
    const { getByText } = render(<Icon name="code" size="tiny" />);

    await waitForElement(() => getByText('code'));

    expect(getByText('code').classList).toContain('co-icon--tiny');
  });

  it('renders a small Icon', async () => {
    const { getByText } = render(<Icon name="code" size="small" />);

    await waitForElement(() => getByText('code'));

    expect(getByText('code').classList).toContain('co-icon--small');
  });

  it('renders a medium Icon', async () => {
    const { getByText } = render(<Icon name="code" size="medium" />);

    await waitForElement(() => getByText('code'));

    expect(getByText('code').classList).toContain('co-icon--medium');
  });

  it('renders a large Icon', async () => {
    const { getByText } = render(<Icon name="code" size="large" />);

    await waitForElement(() => getByText('code'));

    expect(getByText('code').classList).toContain('co-icon--large');
  });

  it('renders a xlarge Icon', async () => {
    const { getByText } = render(<Icon name="code" size="xlarge" />);

    await waitForElement(() => getByText('code'));

    expect(getByText('code').classList).toContain('co-icon--xlarge');
  });

  it('renders a disabled Icon', async () => {
    const { getByRole, getByText } = render(<Icon name="code" disabled onClick={noop} />);

    await waitForElement(() => getByText('code'));

    expect(getByRole('button').getAttribute('data-co-disabled')).toBe('true');
    expect(getByRole('button').getAttribute('aria-disabled')).toBe('true');
  });

  it('calls/triggers the onClick callback', async () => {
    const clickSpy = jest.fn();
    const { getByRole, getByText } = render(<Icon name="code" onClick={clickSpy} />);

    await waitForElement(() => getByText('code'));

    fireEvent.click(getByRole('button'));

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('does not call/trigger the onClick callback when disabled', async () => {
    const clickSpy = jest.fn();
    const { getByRole, getByText } = render(
      <Icon name="code" disabled onClick={clickSpy} />,
    );

    await waitForElement(() => getByText('code'));

    fireEvent.click(getByRole('button'));

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('renders loading while font is not loaded', async () => {
    const { getByText } = render(<Icon name="code" />);

    const { classList: beforeFontLoadedClassList } = getByText('code');

    expect(beforeFontLoadedClassList.value).toBe('co-icon co-icon--loading');

    await waitForElement(() => getByText('code'));

    const { classList } = getByText('code');

    expect(classList.value).toBe('co-icon');
  });
});