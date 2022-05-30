import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { getRandomId } from 'utils';

import styles from './ContextMenu.module.less';

let cache: { id: string; fn: () => void }[] = [];
const subscribe = (id: string, fn: () => void) => {
  const index = cache.findIndex((item) => item.id === id);
  if (index === -1) {
    cache.push({ id, fn });
  }
};
const fire = (id: string) => {
  cache.forEach((item) => {
    if (item.id !== id) {
      item.fn();
    }
  });
};
const deleteById = (id: string) => {
  cache = cache.filter((item) => item.id !== id);
};

interface ContextMenuProps {
  dataWithAction: {
    id: string | number;
    label: string;
    // eslint-disable-next-line no-unused-vars
    callback?(id: string | number, label: string): void;
  }[];
}

const ContextMenu: FC<PropsWithChildren<ContextMenuProps>> = ({
  children,
  dataWithAction,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const uidRef = useRef(getRandomId());
  const containerEl = useRef<HTMLElement | null | undefined>(null);

  useEffect(() => {
    const fn = () => {
      setShowMenu(false);
    };
    subscribe(uidRef.current, fn);
    document.addEventListener('click', fn, false);

    return () => {
      deleteById(uidRef.current);
      document.removeEventListener('click', fn);
    };
  }, []);

  useEffect(() => {
    if (containerEl.current) {
      containerEl.current.style.zIndex = showMenu ? '9999' : '0';
    }
  }, [showMenu]);

  return (
    <>
      <div
        onContextMenu={(event) => {
          event.preventDefault();
          fire(uidRef.current);
          setShowMenu(true);
        }}
      >
        {children}
      </div>
      {showMenu && (
        <ul
          className={styles.container}
          aria-hidden="true"
          ref={(el) => (containerEl.current = el?.parentElement || containerEl.current)}
          onClick={(event) => event.stopPropagation()}
        >
          {dataWithAction.map(({ id, label, callback }) => (
            <li
              key={id}
              aria-hidden="true"
              className={styles.item}
              onClick={() => {
                callback && callback(id, label);
                setShowMenu(false);
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContextMenu;
