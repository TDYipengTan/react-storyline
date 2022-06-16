import styles from '@cobalt/css-flex';
import useResponsiveValue from '@cobalt/react-responsive-value-hook';
import cc from 'classcat';
import React, { FC } from 'react';

import FlexContainer, { FlexProps, GapProps } from './FlexContainer';
import { getDefaultAlignX, getDefaultAlignY } from './utils';

type Styles = typeof styles;

export type FProps = GapProps & FlexProps;

const Flex: FC<FProps> = ({
  as = 'div',
  backgroundColor,
  direction = 'row',
  gap,
  itemGrow,
  grow,
  scrollable,
  width,
  height,
  style,
  alignX = 'start',
  alignY = 'start',
  ...props
}) => {
  const Tag = as;
  const rWidth = useResponsiveValue(width);
  const rHeight = useResponsiveValue(height);
  const defaultAlignX = getDefaultAlignX(direction, alignX);
  const defaultAlignY = getDefaultAlignY(direction, alignY);

  const classNames = cc([
    styles['co-flex'],
    styles[`co-flex--${direction}` as keyof Styles],
    {
      [styles['co-flex--grow']]: grow,
      [styles['co-flex--scrollable']]: scrollable,
    },
  ]);

  if (gap !== undefined) {
    return (
      <Tag
        className={classNames}
        style={{ width: rWidth, height: rHeight, backgroundColor, ...style }}
      >
        <FlexContainer
          direction={direction}
          gap={gap}
          itemGrow={itemGrow}
          grow={grow}
          alignX={defaultAlignX}
          alignY={defaultAlignY}
          {...props}
        />
      </Tag>
    );
  }

  return (
    <FlexContainer
      as={as}
      backgroundColor={backgroundColor}
      direction={direction}
      grow={grow}
      scrollable={scrollable}
      width={width}
      height={height}
      style={style}
      alignX={defaultAlignX}
      alignY={defaultAlignY}
      {...props}
    />
  );
};

export default Flex;
