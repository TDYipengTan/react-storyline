import { itemsConfig } from 'configs';
import React from 'react';
import { stringifyJSON } from 'utils';

import styles from './Sidebar.module.less';

const onDragStart = (event: React.DragEvent<HTMLLIElement>, nodeType: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

const Sidebar = () => {
  return (
    <ul className={styles.sidebar}>
      {itemsConfig.map(({ id, nodeType, label, data }) => (
        <li
          key={id}
          className={styles.sidebarItem}
          onDragStart={(event) => onDragStart(event, stringifyJSON({ nodeType, data }))}
          draggable
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
