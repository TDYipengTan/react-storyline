import styles from '@cobalt/css-icon';
import cc from 'classcat';
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  HTMLAttributes,
  Ref,
  useEffect,
  useState,
} from 'react';

import { FONT_FAMILY_VERSION, Name } from './names';

type Size = 'micro' | 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';

type Styles = typeof styles;

export type ButtonType = HTMLButtonElement;
export type IconType = HTMLElement;
export interface CommonProps extends HTMLAttributes<IconType> {
  /** Descriptive name for the icon, to be read by screen readers */
  accessibilityLabel?: string;
  name: Name;
  color?: CSSProperties['color'];
  size?: Size;
  forwardedRef?: Ref<IconType>;
}

type ClickableProps =
  | { onClick?: undefined; disabled?: never }
  | {
      onClick: ButtonHTMLAttributes<ButtonType>['onClick'];
      /** This prop should only be used when onClick is defined as well */
      disabled?: boolean;
    };

type Props = CommonProps & ClickableProps;

const getClassName = (modifier: string | undefined) =>
  (modifier ? `co-icon--${modifier}` : '') as keyof Styles;

const Icon: FC<Props> = ({
  className = '',
  forwardedRef,
  name,
  accessibilityLabel,
  color,
  disabled,
  onClick,
  size,
  style,
  ...props
}) => {
  const [loaded, setFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (loaded) return;

    if ('fonts' in document) {
      document.fonts
        .load(`0px Material-Icons-TD-${FONT_FAMILY_VERSION}`)
        .finally(() => setFontLoaded(true));
    } else {
      setFontLoaded(true);
    }
  }, [loaded]);

  const classStyles = {
    [styles['co-icon']]: true,
    [styles[getClassName(size)]]: !!size,
    [styles['co-icon--loading']]: !loaded,
    [className]: !!className,
  };

  return onClick ? (
    <button
      className={styles['co-icon--clickable']}
      data-co-disabled={disabled || undefined}
      aria-disabled={disabled || undefined}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      <i
        className={cc(classStyles)}
        ref={forwardedRef}
        style={{ color, ...style }}
        aria-hidden={true}
      >
        {name}
      </i>
      <span className={styles['sr-only']}>{accessibilityLabel}</span>
    </button>
  ) : (
    <>
      <i
        className={cc(classStyles)}
        ref={forwardedRef}
        style={{ color, ...style }}
        aria-hidden={true}
        {...props}
      >
        {name}
      </i>
      <span className={styles['sr-only']}>{accessibilityLabel}</span>
    </>
  );
};

export default Icon;
