/* eslint-disable no-unused-vars */
import styles from '@cobalt/css-typography';
import cc from 'classcat';
import React, { FunctionComponent, HTMLAttributes, Ref } from 'react';

export type MarkType = HTMLElement;

type Color = 'yellow' | 'light-yellow';
type Styles = typeof styles;

type ModifiersTypes = Color;

export interface Props extends HTMLAttributes<MarkType> {
  color?: Color;
  forwardedRef?: Ref<MarkType>;
}

const classModifiers: { [k in ModifiersTypes]: keyof Styles } = {
  yellow: 'co-mark--yellow',
  'light-yellow': 'co-mark--light-yellow',
};

const getModifierClass = (modifier: ModifiersTypes | undefined) =>
  modifier && styles[classModifiers[modifier]];

const Mark: FunctionComponent<Props> = ({
  className = '',
  forwardedRef,
  color = 'yellow',
  ...props
}) => {
  const classStyles = [styles['co-mark'], getModifierClass(color), className];

  return <mark className={cc(classStyles)} ref={forwardedRef} {...props} />;
};

export default Mark;
