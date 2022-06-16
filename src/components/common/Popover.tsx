import classNames from 'classnames';
import React, { CSSProperties, FC, ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Popover.module.less';

interface PopoverProps {
  className?: string;
  style?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  content: ReactNode;
}

const Popover: FC<PopoverProps> = ({
  className = '',
  style = {},
  contentClassName = '',
  contentStyle = {},
  children,
  content,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [containerStyle, setContainerStyle] = useState({});
  const [contentStyle2, setContentStyle2] = useState({});
  const childrenRef = useRef<HTMLDivElement | null>(null);

  const onChildrenClick = () => {
    if (childrenRef.current) {
      const rect = childrenRef.current.getBoundingClientRect();
      console.log(rect);
      const { width, height, top, left } = rect;
      setContainerStyle({
        position: 'fixed',
        zIndex: 9999,
        width,
        height,
        top,
        left,
      });
      setContentStyle2({
        transform: `translate(-50%, ${height + 16}px)`,
      });
      setShowContent(true);
    }
  };

  return (
    <>
      <div
        ref={childrenRef}
        className={classNames(styles.childrenContainer, showContent && styles.selected)}
        onClick={(e) => {
          e.stopPropagation();
          onChildrenClick();
        }}
      >
        {children}
      </div>
      {showContent &&
        createPortal(
          <div
            className={classNames(styles.container, className)}
            style={{ ...containerStyle, ...style }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mask} onClick={() => setShowContent(false)} />
            <div
              className={classNames(styles.content, contentClassName)}
              style={{ ...contentStyle2, ...contentStyle }}
            >
              {content}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Popover;
