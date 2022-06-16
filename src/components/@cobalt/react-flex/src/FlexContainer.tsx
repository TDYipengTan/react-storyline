/* eslint-disable no-undef */
import styles from '@cobalt/css-flex';
import useResponsiveValue, { ResponsiveValue } from '@cobalt/react-responsive-value-hook';
import cc from 'classcat';
import React, { CSSProperties, FC, HTMLAttributes, Ref } from 'react';

type Styles = typeof styles;

export type Direction = 'row' | 'column';

type Alignment = 'start' | 'center' | 'end';

type Spacing = 'space-around' | 'space-evenly' | 'space-between';

type Stretch = 'stretch';

export type AlignmentProperties = Alignment | Spacing | Stretch | undefined;

type Space =
  | 0
  | '0'
  | 1
  | '1'
  | 2
  | '2'
  | 3
  | '3'
  | 4
  | '4'
  | 5
  | '5'
  | 6
  | '6'
  | 7
  | '7'
  | 8
  | '8'
  | 9
  | '9'
  | 10
  | '10'
  | 11
  | '11'
  | 12
  | '12';

type As = keyof Pick<
  JSX.IntrinsicElements,
  | 'section'
  | 'header'
  | 'main'
  | 'footer'
  | 'div'
  | 'aside'
  | 'article'
  | 'details'
  | 'nav'
  | 'span'
>;

export type FlexType = any;

export interface Props extends HTMLAttributes<HTMLElement> {
  /** Defines the horizontal alignment of the child elements. */
  alignX?: AlignmentProperties;
  /** Defines the vertical alignment of the child elements. */
  alignY?: AlignmentProperties;
  /** Renders the component using a different element. */
  as?: As;
  backgroundColor?: CSSProperties['backgroundColor'];
  /** Sets the direction of the flex container. */
  direction?: Direction;
  /** Fills the available space in a flex container. */
  grow?: boolean;
  /**
   * Defines the height of the element.
   * Use any valid value for CSS property, or a tuple with values for the supported viewports.
   */
  height?: ResponsiveValue<CSSProperties['height']>;
  /**
   * Converts the gap into negative space.
   * This is useful to make child elements stack on top of each other.
   */
  inwards?: boolean;
  /**
   * Defines the padding.
   * Use values from 0 to 12, or a tuple with values for the supported viewports.
   * These values will be multiplied by a predefined space unit.
   */
  padding?: ResponsiveValue<Space>;
  /**
   * defines the horizontal padding.
   * use values from 0 to 12, or a tuple with values for the supported viewports.
   * these values will be multiplied by a predefined space unit.
   */
  paddingX?: ResponsiveValue<Space>;
  /**
   * defines the vertical padding.
   * use values from 0 to 12, or a tuple with values for the supported viewports.
   * these values will be multiplied by a predefined space unit.
   */
  paddingY?: ResponsiveValue<Space>;
  /**
   * Defines the bottom padding.
   * Use values from 0 to 12, or a tuple with values for the supported viewports.
   * These values will be multiplied by a predefined space unit.
   */
  paddingBottom?: ResponsiveValue<Space>;
  /**
   * Defines the left padding.
   * Use values from 0 to 12, or a tuple with values for the supported viewports.
   * These values will be multiplied by a predefined space unit.
   */
  paddingLeft?: ResponsiveValue<Space>;
  /**
   * Defines the right padding.
   * Use values from 0 to 12, or a tuple with values for the supported viewports.
   * These values will be multiplied by a predefined space unit.
   */
  paddingRight?: ResponsiveValue<Space>;
  /**
   * Defines the top padding.
   * Use values from 0 to 12, or a tuple with values for the supported viewports.
   * These values will be multiplied by a predefined space unit.
   */
  paddingTop?: ResponsiveValue<Space>;
  /** Makes the container scrollable. */
  scrollable?: boolean;
  /**
   * Defines the width of the element.
   * Use any valid value for CSS property, or a tuple with values for the supported viewports.
   */
  width?: ResponsiveValue<CSSProperties['width']>;
  /** Wraps the child elements. */
  wrap?: boolean;
  forwardedRef?: Ref<FlexType>;
}

interface IRowProps extends Props {
  direction?: 'row';
  alignX?: Alignment | Spacing;
  alignY?: Alignment | Stretch;
}

interface IColumnProps extends Props {
  direction?: 'column';
  alignX?: Alignment | Stretch;
  alignY?: Alignment | Spacing;
}

export type GapProps =
  | {
      gap?: undefined;
      itemGrow?: never;
    }
  | {
      /**
       * Defines the space between child elements.
       * Use values from 0 to 12, or a tuple with values for the supported viewports.
       * These values will be multiplied by a predefined space unit.
       */
      gap: ResponsiveValue<Space>;
      /**
       * Array with numbers that defines the `flex-grow` values to be applied to each child,
       * according to the index on the array.
       * Only available when `gap` is defined.
       */
      itemGrow?: Array<number>;
    };

export type FlexProps = IRowProps | IColumnProps;

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  grow?: number;
}

const Item: FC<ItemProps> = ({ children, grow }) => {
  const style = grow !== undefined ? { flexGrow: grow } : {};

  return (
    <div className={styles['co-flex__item']} style={style}>
      {children}
    </div>
  );
};

const FlexContainer: FC<Props & GapProps> = ({
  children,
  className = '',
  forwardedRef,
  style,
  alignX,
  alignY,
  as = 'div',
  backgroundColor,
  direction = 'row',
  width,
  height,
  gap,
  itemGrow,
  inwards,
  grow,
  padding,
  paddingX,
  paddingY,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  scrollable,
  wrap,
  ...props
}) => {
  const Tag = as;
  const rWidth = useResponsiveValue(width);
  const rHeight = useResponsiveValue(height);
  const rGap = useResponsiveValue(gap);
  const rPadding = useResponsiveValue(padding);
  const rPaddingX = useResponsiveValue(paddingX);
  const rPaddingY = useResponsiveValue(paddingY);
  const rPaddingBottom = useResponsiveValue(paddingBottom);
  const rPaddingLeft = useResponsiveValue(paddingLeft);
  const rPaddingRight = useResponsiveValue(paddingRight);
  const rPaddingTop = useResponsiveValue(paddingTop);
  const hasGap = rGap !== undefined;
  const classNames = cc([
    styles['co-flex'],
    styles[`co-flex--${direction}` as keyof Styles],
    {
      [styles[`co-flex--align-x-${alignX}` as keyof Styles]]: alignX,
      [styles[`co-flex--align-y-${alignY}` as keyof Styles]]: alignY,
      [styles[`co-flex--gap-${rGap}` as keyof Styles]]: hasGap,
      [styles['co-flex--inwards']]: inwards,
      [styles['co-flex--wrap']]: wrap,
      [styles['co-flex--grow']]: grow,
      [styles['co-flex--scrollable']]: scrollable,
      [styles[`co-flex--padding-${rPadding}` as keyof Styles]]: rPadding !== undefined,
      [styles[`co-flex--padding-x-${rPaddingX}` as keyof Styles]]:
        rPaddingX !== undefined,
      [styles[`co-flex--padding-y-${rPaddingY}` as keyof Styles]]:
        rPaddingY !== undefined,
      [styles[`co-flex--padding-bottom-${rPaddingBottom}` as keyof Styles]]:
        rPaddingBottom !== undefined,
      [styles[`co-flex--padding-left-${rPaddingLeft}` as keyof Styles]]:
        rPaddingLeft !== undefined,
      [styles[`co-flex--padding-right-${rPaddingRight}` as keyof Styles]]:
        rPaddingRight !== undefined,
      [styles[`co-flex--padding-top-${rPaddingTop}` as keyof Styles]]:
        rPaddingTop !== undefined,
    },
    className,
  ]);

  return (
    <Tag
      ref={forwardedRef}
      className={classNames}
      style={{ width: rWidth, height: rHeight, backgroundColor, ...style }}
      {...props}
    >
      {hasGap
        ? React.Children.map(
            children,
            (child, index) =>
              child && <Item grow={itemGrow && itemGrow[index]}>{child}</Item>,
          )
        : children}
    </Tag>
  );
};

export default FlexContainer;
