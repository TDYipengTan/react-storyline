/* eslint-disable no-unused-vars */
import styles from '@cobalt/css-typography';
import cc from 'classcat';
import React, { CSSProperties, FC, HTMLAttributes, Ref } from 'react';

type Size = 'small' | 'medium';
type Weight = 'light' | 'regular' | 'medium' | 'inherit';
type Styles = typeof styles;

type SkeletonType = 'static' | 'animated';
interface SkeletonAttributes {
  type: SkeletonType;
  lines?: number;
  width?: CSSProperties['width'];
}
type TSkeleton = SkeletonType | SkeletonAttributes;

type SizeKey = 'smallSize' | 'mediumSize';
type WeightKey = 'lightWeight' | 'regularWeight' | 'mediumWeight' | 'inheritWeight';
type Modifiers = {
  [k in SkeletonType | SizeKey | WeightKey | 'truncated']: keyof Styles;
};

export type TextType = HTMLParagraphElement;

export interface Props extends HTMLAttributes<HTMLElement> {
  color?: CSSProperties['color'];
  inline?: boolean;
  size?: Size;
  skeleton?: TSkeleton;
  truncated?: boolean;
  weight?: Weight;
  forwardedRef?: Ref<TextType>;
}

const classNames: Modifiers = {
  smallSize: 'co-text--small',
  mediumSize: 'co-text--medium',
  lightWeight: 'co-text--weight-light',
  regularWeight: 'co-text--weight-regular',
  mediumWeight: 'co-text--weight-medium',
  inheritWeight: 'co-text--weight-inherit',
  truncated: 'co-text--truncated',
  static: 'co-text--skeleton',
  animated: 'co-text--animated-skeleton',
};

function getSizeKey(size: Size): SizeKey {
  switch (size) {
    case 'medium':
      return 'mediumSize';
    case 'small':
      return 'smallSize';
  }
}

function getWeightKey(weight: Weight): WeightKey {
  switch (weight) {
    case 'medium':
      return 'mediumWeight';
    case 'regular':
      return 'regularWeight';
    case 'light':
      return 'lightWeight';
    case 'inherit':
      return 'inheritWeight';
  }
}

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
  size: Size;
  inline?: boolean;
  forwardedRef?: Ref<TextType>;
}> = ({ options, size, inline, forwardedRef, ...props }) => {
  const { type, lines = 1, width } = getSkeletonAttributes(options);
  const Tag = inline ? 'span' : 'p';
  const classStyles = cc([
    styles['co-text'],
    styles[classNames[getSizeKey(size)]],
    styles[classNames[type]],
  ]);

  const SkeletonLine = () => (
    <span className={classStyles} style={{ display: 'block', width }} />
  );

  if (lines > 1 && !inline) {
    return (
      <Tag {...props} ref={forwardedRef} style={{ width }}>
        {new Array(lines).fill(0).map((_, index) => (
          <SkeletonLine key={index} />
        ))}
      </Tag>
    );
  }

  return <Tag {...props} className={classStyles} style={{ width }} />;
};

const Text: FC<Props> = ({
  className = '',
  forwardedRef,
  style,
  color,
  inline,
  size = 'medium',
  skeleton,
  weight = 'regular',
  truncated,
  ...props
}) => {
  if (skeleton) {
    return <Skeleton options={skeleton} size={size} inline={inline} {...props} />;
  }

  const Tag = inline ? 'span' : 'p';
  const classStyles = [
    styles['co-text'],
    styles[classNames[getSizeKey(size)]],
    styles[classNames[getWeightKey(weight)]],
    {
      [styles[classNames['truncated']]]: truncated,
    },
    className,
  ];

  return (
    <Tag
      className={cc(classStyles)}
      ref={forwardedRef}
      style={{ color, ...style }}
      {...props}
    />
  );
};

export default Text;
