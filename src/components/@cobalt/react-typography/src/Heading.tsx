/* eslint-disable no-unused-vars */
import styles from '@cobalt/css-typography';
import cc from 'classcat';
import React, { CSSProperties, FC, HTMLAttributes, Ref } from 'react';

type Level = '1' | 1 | '2' | 2 | '3' | 3 | '4' | 4 | '5' | 5 | '6' | 6;
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Styles = typeof styles;

export type HeadingType = HTMLHeadingElement;

type SkeletonType = 'static' | 'animated';
interface SkeletonAttributes {
  type: SkeletonType;
  width?: CSSProperties['width'];
}
type TSkeleton = SkeletonType | SkeletonAttributes;

type Modifiers = { [k in SkeletonType | Level]: keyof Styles };

export interface Props extends HTMLAttributes<HeadingType> {
  level: Level;
  asLevel?: Level;
  color?: CSSProperties['color'];
  skeleton?: TSkeleton;
  truncated?: boolean;
  forwardedRef?: Ref<HeadingType>;
}

const classModifiers: Modifiers = {
  1: 'co-heading--1',
  2: 'co-heading--2',
  3: 'co-heading--3',
  4: 'co-heading--4',
  5: 'co-heading--5',
  6: 'co-heading--6',
  static: 'co-heading--skeleton',
  animated: 'co-heading--animated-skeleton',
};

function getSkeletonAttributes(options: TSkeleton): SkeletonAttributes {
  switch (options) {
    case 'static':
    case 'animated':
      return { type: options };
    default:
      return options;
  }
}

const Skeleton: FC<{
  options: TSkeleton;
  level: Level;
  forwardedRef?: Ref<HeadingType>;
}> = ({ options, level, forwardedRef, ...props }) => {
  const { type, width } = getSkeletonAttributes(options);
  const Tag = `h${level}` as Tag;
  const classStyles = cc([
    styles['co-heading'],
    styles[classModifiers[level]],
    styles[classModifiers[type]],
  ]);

  return <Tag {...props} ref={forwardedRef} className={classStyles} style={{ width }} />;
};

const Heading: FC<Props> = ({
  className = '',
  forwardedRef,
  style,
  level,
  asLevel,
  skeleton,
  truncated,
  color,
  ...props
}) => {
  if (skeleton) {
    return (
      <Skeleton
        forwardedRef={forwardedRef}
        options={skeleton}
        level={asLevel || level}
        {...props}
      />
    );
  }

  const Tag = `h${level}` as Tag;
  const classStyles = cc([
    styles['co-heading'],
    styles[classModifiers[asLevel || level]],
    {
      [styles['co-heading--truncated']]: truncated,
    },
    className,
  ]);

  return (
    <Tag
      className={classStyles}
      ref={forwardedRef}
      style={{ color, ...style }}
      {...props}
    />
  );
};

export default Heading;