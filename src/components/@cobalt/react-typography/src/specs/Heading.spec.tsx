import { render } from '@testing-library/react';
import React from 'react';

import Heading, { HeadingType } from '../Heading';

describe('<Heading />', () => {
  it('renders', () => {
    const { container } = render(
      <>
        <Heading level="1">H1</Heading>
        <Heading level="2">H2</Heading>
        <Heading level="3">H3</Heading>
        <Heading level="4">H4</Heading>
        <Heading level="5">H5</Heading>
        <Heading level="6">H6</Heading>
      </>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with correct class modifiers', () => {
    const wrapper = render(
      <>
        <Heading level="2" asLevel="1">
          asH1
        </Heading>
        <Heading level="1" asLevel="2">
          asH2
        </Heading>
        <Heading level="1" asLevel="3">
          asH3
        </Heading>
        <Heading level="1" asLevel="4">
          asH4
        </Heading>
        <Heading level="1" asLevel="5">
          asH5
        </Heading>
        <Heading level="1" asLevel="6">
          asH6
        </Heading>
      </>,
    );

    expect(wrapper.getByText('asH1').classList).toContain('co-heading--1');
    expect(wrapper.getByText('asH2').classList).toContain('co-heading--2');
    expect(wrapper.getByText('asH3').classList).toContain('co-heading--3');
    expect(wrapper.getByText('asH4').classList).toContain('co-heading--4');
    expect(wrapper.getByText('asH5').classList).toContain('co-heading--5');
    expect(wrapper.getByText('asH6').classList).toContain('co-heading--6');
  });

  it('supports adding additional classes', () => {
    const wrapper = render(
      <Heading level="1" className="new-class">
        Custom className
      </Heading>,
    );

    expect(wrapper.getByText('Custom className').classList.value).toBe(
      'co-heading co-heading--1 new-class',
    );
  });

  it('renders with a ref', () => {
    const ref = React.createRef<HeadingType>();

    const { getByTestId } = render(
      <Heading level="1" forwardedRef={ref} data-testid="test">
        H1
      </Heading>,
    );

    expect(getByTestId('test')).toBe(ref.current);
  });

  it('renders with truncated class', () => {
    const { getByText } = render(
      <Heading level="1" truncated>
        Heading
      </Heading>,
    );

    expect(getByText('Heading').classList).toContain('co-heading--truncated');
  });

  it('renders with custom color', () => {
    const { getByText } = render(
      <Heading level="1" color="red">
        Heading
      </Heading>,
    );

    expect(getByText('Heading').style.color).toBe('red');
  });

  it('renders with custom attribute', () => {
    const { getByText } = render(
      <Heading level="1" data-test="test">
        Heading
      </Heading>,
    );

    expect(getByText('Heading').hasAttribute('data-test')).toBeTruthy();
  });

  it('renders with a static skeleton', () => {
    const { getByText } = render(
      <Heading level="1" skeleton="static">
        Heading
      </Heading>,
    );

    expect(getByText('Heading').classList).toContain('co-heading--skeleton');
  });

  it('renders with an animated skeleton', () => {
    const { getByText } = render(
      <Heading level="1" skeleton="animated">
        Heading
      </Heading>,
    );

    expect(getByText('Heading').classList).toContain('co-heading--animated-skeleton');
  });

  it('renders a skeleton with a different width', () => {
    const { getByText } = render(
      <Heading level="1" skeleton={{ type: 'static', width: 200 }}>
        Heading
      </Heading>,
    );

    expect(getByText('Heading').style.width).toBe('200px');
  });
});
