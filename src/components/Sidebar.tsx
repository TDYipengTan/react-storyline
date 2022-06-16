import React, { FC } from 'react';
import { stringifyJSON } from 'utils';

import styles from './Sidebar.module.less';

const onDragStart = (event: React.DragEvent<HTMLLIElement>, allData: string) => {
  event.dataTransfer.setData('application/reactflow', allData);
  event.dataTransfer.effectAllowed = 'move';
};

export interface SidebarProps {
  itemsConfig?: {
    id: number;
    nodeType: string;
    label: string;
    data: Record<string, any>;
  }[];
}

const Sidebar: FC<SidebarProps> = ({ itemsConfig }) => {
  return (
    <ul className={styles.sidebar}>
      {itemsConfig?.map(({ id, nodeType, label, data }) => (
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
