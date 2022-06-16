import { ViewportContext } from '@cobalt/react-viewport-provider';
import { render } from '@testing-library/react';
import React, { FC } from 'react';

import FlexComponent, { FProps } from '../Flex';
import { FlexType } from '../FlexContainer';

const Flex: FC<FProps> = (props) => (
  <ViewportContext.Provider value="medium">
    <FlexComponent {...props} />
  </ViewportContext.Provider>
);

describe('<Flex />', () => {
  it('renders a row container', () => {
    const { container } = render(
      <Flex>
        <div />
      </Flex>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with a ref', () => {
    const ref = React.createRef<FlexType>();

    const { getByTestId } = render(<Flex forwardedRef={ref} data-testid="flex" />);

    expect(getByTestId('flex')).toBe(ref.current);
  });

  it('renders with custom classes', () => {
    const { getByTestId } = render(<Flex className="custom-styles" data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList.length).toBeGreaterThan(1);
    expect(node.classList).toContain('custom-styles');
  });

  it('renders with custom background color', () => {
    const { getByText } = render(<Flex backgroundColor="red">Flex</Flex>);

    expect(getByText('Flex').style.backgroundColor).toBe('red');
  });

  it('renders with custom styles', () => {
    const { getByTestId } = render(
      <Flex style={{ backgroundColor: 'red' }} data-testid="flex" />,
    );
    const node = getByTestId('flex');

    expect(node.style.backgroundColor).toBe('red');
  });

  it('renders a column container', () => {
    const { getByTestId } = render(<Flex direction="column" data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).not.toContain('co-flex--row');
    expect(node.classList).toContain('co-flex--column');
  });

  it('aligns the children horizontally', () => {
    const { getByTestId } = render(
      <>
        <Flex alignX="start" data-testid="flex-start" />
        <Flex alignX="center" data-testid="flex-center" />
        <Flex alignX="end" data-testid="flex-end" />
      </>,
    );
    const flexStart = getByTestId('flex-start');
    const flexCenter = getByTestId('flex-center');
    const flexEnd = getByTestId('flex-end');

    expect(flexStart.classList).toContain('co-flex--align-x-start');
    expect(flexCenter.classList).toContain('co-flex--align-x-center');
    expect(flexEnd.classList).toContain('co-flex--align-x-end');
  });

  it('aligns the children vertically', () => {
    const { getByTestId } = render(
      <>
        <Flex alignY="start" data-testid="flex-start" />
        <Flex alignY="center" data-testid="flex-center" />
        <Flex alignY="end" data-testid="flex-end" />
      </>,
    );
    const flexStart = getByTestId('flex-start');
    const flexCenter = getByTestId('flex-center');
    const flexEnd = getByTestId('flex-end');

    expect(flexStart.classList).toContain('co-flex--align-y-start');
    expect(flexCenter.classList).toContain('co-flex--align-y-center');
    expect(flexEnd.classList).toContain('co-flex--align-y-end');
  });

  it('applies a gap to the children', () => {
    const { container } = render(
      <Flex gap={2}>
        <div>One</div>
        <div>Two</div>
      </Flex>,
    );

    expect(container).toMatchSnapshot();
  });

  it('applies a gap to the children based on the viewport', () => {
    const { container } = render(
      <Flex gap={[1, 2, 3]}>
        <div>One</div>
        <div>Two</div>
      </Flex>,
    );

    expect(container).toMatchSnapshot();
  });

  it('applies a negative gap to the children', () => {
    const { container } = render(
      <Flex gap={2} inwards>
        <div>One</div>
        <div>Two</div>
      </Flex>,
    );

    expect(container).toMatchSnapshot();
  });

  it('applies a custom grow to the children', () => {
    const { getByTestId } = render(
      <Flex gap={2} itemGrow={[1, 0]}>
        <div data-testid="one">One</div>
        <div data-testid="two">Two</div>
      </Flex>,
    );

    expect(getByTestId('one').parentElement!.style.flexGrow).toBe('1');
    expect(getByTestId('two').parentElement!.style.flexGrow).toBe('0');
  });

  it('fills the available space', () => {
    const { getByTestId } = render(<Flex grow data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--grow');
  });

  it('wraps the elements when they do not fit the container', () => {
    const { container } = render(
      <Flex gap={2} wrap>
        <div>One</div>
        <div>Two</div>
      </Flex>,
    );

    expect(container).toMatchSnapshot();
  });

  it('supports a custom width', () => {
    const { getByTestId } = render(<Flex width={300} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.style.width).toBe('300px');
  });

  it('supports a custom width based on the viewport', () => {
    const { getByTestId } = render(<Flex width={[100, 200, 300]} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.style.width).toBe('200px');
  });

  it('supports a custom height', () => {
    const { getByTestId } = render(<Flex height={300} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.style.height).toBe('300px');
  });

  it('supports a custom height based on the viewport', () => {
    const { getByTestId } = render(<Flex height={[100, 200, 300]} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.style.height).toBe('200px');
  });

  it('applies both horizontal and vertical padding', () => {
    const { getByTestId } = render(<Flex padding={2} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--padding-2');
  });

  it('applies both horizontal and vertical padding based on the viewport', () => {
    const { getByTestId } = render(<Flex padding={[1, 2, 3]} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--padding-2');
  });

  it('applies horizontal padding', () => {
    const { getByTestId } = render(<Flex paddingX={2} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--padding-x-2');
  });

  it('applies horizontal padding based on the viewport', () => {
    const { getByTestId } = render(<Flex paddingX={[1, 2, 3]} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--padding-x-2');
  });

  it('applies vertical padding', () => {
    const { getByTestId } = render(<Flex paddingY={2} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--padding-y-2');
  });

  it('applies vertical padding based on the viewport', () => {
    const { getByTestId } = render(<Flex paddingY={[1, 2, 3]} data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--padding-y-2');
  });

  ['Bottom', 'Left', 'Right', 'Top'].forEach((side) => {
    const lowercaseSide = side.toLowerCase();

    it(`applies ${lowercaseSide} padding`, () => {
      const props = { [`padding${side}`]: 2 };
      const { getByTestId } = render(<Flex {...props} data-testid="flex" />);
      const node = getByTestId('flex');

      expect(node.classList).toContain(`co-flex--padding-${lowercaseSide}-2`);
    });

    it(`applies ${lowercaseSide} padding based on the viewport`, () => {
      const props = { [`padding${side}`]: [1, 2, 3] };
      const { getByTestId } = render(<Flex {...props} data-testid="flex" />);
      const node = getByTestId('flex');

      expect(node.classList).toContain(`co-flex--padding-${lowercaseSide}-2`);
    });
  });

  it('renders with a different tag', () => {
    const { getByTestId } = render(<Flex as="header" data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.tagName).toBe('HEADER');
  });

  it('renders a scrollable container', () => {
    const { getByTestId } = render(<Flex scrollable data-testid="flex" />);
    const node = getByTestId('flex');

    expect(node.classList).toContain('co-flex--scrollable');
  });

  describe('when there is a gap', () => {
    it('makes the outer container flexible', () => {
      const { getByTestId } = render(<Flex gap={2} data-testid="flex" />);
      const node = getByTestId('flex').parentElement!;

      expect(node.classList).toContain('co-flex');
    });

    it('sets the direction on the outer container', () => {
      const { getByTestId } = render(<Flex gap={2} data-testid="flex" />);
      const node = getByTestId('flex').parentElement!;

      expect(node.classList).toContain('co-flex--row');
    });

    it('makes the outer container fill the available space', () => {
      const { getByTestId } = render(<Flex gap={2} grow data-testid="flex" />);
      const node = getByTestId('flex').parentElement!;

      expect(node.classList).toContain('co-flex--grow');
    });

    it('makes the outer container scrollable', () => {
      const { getByTestId } = render(<Flex gap={2} scrollable data-testid="flex" />);
      const node = getByTestId('flex').parentElement!;

      expect(node.classList).toContain('co-flex--scrollable');
    });

    it('applies the custom styles to the outer container', () => {
      const { getByTestId } = render(
        <Flex
          gap={2}
          width={100}
          height={100}
          style={{ color: 'red' }}
          data-testid="flex"
        />,
      );
      const node = getByTestId('flex').parentElement!;

      expect(node.style.width).toBe('100px');
      expect(node.style.height).toBe('100px');
      expect(node.style.color).toBe('red');
    });
  });

  describe('When direction is set to row', () => {
    it('aligns items horizontally with the corresponding spacing properties', () => {
      const { getByTestId } = render(
        <>
          <Flex alignX="space-around" data-testid="flex-space-around-x" />
          <Flex alignX="space-between" data-testid="flex-space-between-x" />
          <Flex alignX="space-evenly" data-testid="flex-evenly-x" />
        </>,
      );
      const flexSpaceAroundX = getByTestId('flex-space-around-x');
      const flexSpaceBetweenX = getByTestId('flex-space-between-x');
      const flexSpaceEvenlyX = getByTestId('flex-evenly-x');

      expect(flexSpaceAroundX.classList).toContain('co-flex--align-x-space-around');
      expect(flexSpaceBetweenX.classList).toContain('co-flex--align-x-space-between');
      expect(flexSpaceEvenlyX.classList).toContain('co-flex--align-x-space-evenly');
    });

    it('stretches items vertically', () => {
      const { getByTestId } = render(
        <Flex direction="row" alignY="stretch" data-testid="flex-stretch-y" />,
      );

      const flexStretchY = getByTestId('flex-stretch-y');

      expect(flexStretchY.classList).toContain('co-flex--align-y-stretch');
    });

    it('alignX defaults to center when a stretch value is passed', () => {
      const { getByTestId } = render(
        // @ts-ignore as these types are incompatible - TODO TS ^3.9 @ts-expect-error
        <Flex direction="row" alignX="stretch" data-testid="flex-stretch-x" />,
      );

      const flexStretchX = getByTestId('flex-stretch-x');

      expect(flexStretchX.classList).toContain('co-flex--align-x-center');
    });

    it('alignY defaults to center when a spacing value is passed', () => {
      const { getByTestId } = render(
        // @ts-ignore as these types are incompatible - TODO TS 3.9 @ts-expect-error
        <Flex direction="row" alignY="space-around" data-testid="flex-stretch-y" />,
      );
      const flexStretchY = getByTestId('flex-stretch-y');

      expect(flexStretchY.classList).toContain('co-flex--align-y-center');
    });
  });

  describe('When direction is set to column', () => {
    it('stretches items horizontally', () => {
      const { getByTestId } = render(
        <Flex direction="column" alignX="stretch" data-testid="flex-stretch-x" />,
      );
      const flexStretchX = getByTestId('flex-stretch-x');

      expect(flexStretchX.classList).toContain('co-flex--align-x-stretch');
    });

    it('aligns items vertically with the spacing properties', () => {
      const { getByTestId } = render(
        <>
          <Flex
            direction="column"
            alignY="space-around"
            data-testid="flex-space-around-y"
          />
          <Flex
            direction="column"
            alignY="space-between"
            data-testid="flex-space-between-y"
          />
          <Flex direction="column" alignY="space-evenly" data-testid="flex-evenly-y" />
        </>,
      );
      const flexSpaceAroundY = getByTestId('flex-space-around-y');
      const flexSpaceBetweenY = getByTestId('flex-space-between-y');
      const flexSpaceEvenlyY = getByTestId('flex-evenly-y');

      expect(flexSpaceAroundY.classList).toContain('co-flex--align-y-space-around');
      expect(flexSpaceBetweenY.classList).toContain('co-flex--align-y-space-between');
      expect(flexSpaceEvenlyY.classList).toContain('co-flex--align-y-space-evenly');
    });

    it('alignX defaults to center when a spacing property is passed', () => {
      const { getByTestId } = render(
        // @ts-ignore as these types are incompatible - TODO when TS 3.9 @ts-expect-error
        <Flex
          direction="column"
          alignX="space-around"
          data-testid="flex-default-center-x"
        />,
      );

      const flexStretchX = getByTestId('flex-default-center-x');
      expect(flexStretchX.classList).toContain('co-flex--align-x-center');
    });

    it('alignY defaults to center when the stretch property is passed', () => {
      const { getByTestId } = render(
        // @ts-ignore as these types are incompatible - TODO TS 3.9 @ts-expect-error
        <Flex direction="column" alignY="stretch" data-testid="flex-default-center-y" />,
      );

      const flexStretchY = getByTestId('flex-default-center-y');
      expect(flexStretchY.classList).toContain('co-flex--align-y-center');
    });
  });
});
