import { getRandomId } from 'utils';

import CustomAvatar from './components/costomNode/Avatar';
import CustomChannel from './components/costomNode/Channel';
import call from './imgs/call.svg';
import cc from './imgs/cc.svg';
import chat from './imgs/chat.svg';
import download from './imgs/download.svg';
import email from './imgs/email.svg';
import file from './imgs/file.svg';
import img from './imgs/img.svg';
import link from './imgs/link.svg';
import sms from './imgs/sms.svg';
import user1 from './imgs/user1.png';
import user2 from './imgs/user2.png';
import user3 from './imgs/user3.png';
import user4 from './imgs/user4.png';
import user5 from './imgs/user5.png';
import user6 from './imgs/user6.png';
import user7 from './imgs/user7.png';

export const nodes = [
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user1,
      state: 'normal',
      name: 'Jona lee',
    },
    position: {
      x: 300,
      y: 50,
    },
    positionAbsolute: {
      x: 300,
      y: 50,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'email',
      src: email,
      icons: [
        cc,
        {
          icon: img,
          style: {
            transform: 'translate(0, 4px)',
          },
        },
        file,
      ],
      count: 3,
    },
    position: {
      x: 383,
      y: 129,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 383,
      y: 129,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user2,
      state: 'busy',
      name: 'Tom',
    },
    position: {
      x: 301,
      y: 245,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 301,
      y: 245,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'chat',
      src: chat,
      icons: [img, link],
      count: 36,
    },
    position: {
      x: 381,
      y: 344,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 381,
      y: 344,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user3,
      state: 'away',
      name: 'Anna',
    },
    position: {
      x: 306,
      y: 498,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 306,
      y: 498,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user4,
      state: 'busy',
      name: 'July',
    },
    position: {
      x: 491,
      y: 498,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 491,
      y: 498,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'email',
      src: email,
      icons: [cc, file],
      count: 2,
    },
    position: {
      x: 214,
      y: 619,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 214,
      y: 619,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'sms',
      src: sms,
      icons: [file],
      count: 5,
    },
    position: {
      x: 573,
      y: 619,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 573,
      y: 619,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user5,
      state: 'normal',
      name: 'Kitty',
    },
    position: {
      x: 147,
      y: 760,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 147,
      y: 761,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user6,
      state: 'busy',
      name: 'Sofy',
    },
    position: {
      x: 490,
      y: 760,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 490,
      y: 760,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'call',
      src: call,
      icons: [download],
      count: 3,
    },
    position: {
      x: 572,
      y: 876,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 572,
      y: 876,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user7,
      state: 'normal',
      name: 'Bob',
    },
    position: {
      x: 486,
      y: 1026,
    },
    selected: true,
    dragging: false,
    positionAbsolute: {
      x: 486,
      y: 1026,
    },
    z: 1000,
  },
];

export const nodeTypes = {
  customAvatar: CustomAvatar,
  customChannel: CustomChannel,
};

export const edges = [
  {
    type: 'straight',
    id: `${nodes[0].id}-${nodes[1].id}`,
    source: nodes[0].id,
    target: nodes[1].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[1].id}-${nodes[2].id}`,
    source: nodes[1].id,
    target: nodes[2].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[2].id}-${nodes[3].id}`,
    source: nodes[2].id,
    target: nodes[3].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[3].id}-${nodes[4].id}`,
    source: nodes[3].id,
    target: nodes[4].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[3].id}-${nodes[5].id}`,
    source: nodes[3].id,
    target: nodes[5].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[4].id}-${nodes[6].id}`,
    source: nodes[4].id,
    target: nodes[6].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[5].id}-${nodes[7].id}`,
    source: nodes[5].id,
    target: nodes[7].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[6].id}-${nodes[8].id}`,
    source: nodes[6].id,
    target: nodes[8].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[7].id}-${nodes[9].id}`,
    source: nodes[7].id,
    target: nodes[9].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[9].id}-${nodes[10].id}`,
    source: nodes[9].id,
    target: nodes[10].id,
    style: { stroke: '#979797' },
  },
  {
    type: 'straight',
    id: `${nodes[10].id}-${nodes[11].id}`,
    source: nodes[10].id,
    target: nodes[11].id,
    style: { stroke: '#979797' },
  },
];

export const edgeTypes = {};

export const itemsConfig = [
  {
    id: 0,
    nodeType: 'customAvatar',
    label: 'Custom Avatar',
    data: {
      src: user1,
      state: 'normal',
    },
  },
  {
    id: 1,
    nodeType: 'customChannel',
    label: 'Custom Channel',
    data: {
      type: 'chat',
      src: chat,
      icons: [img, file],
      count: 36,
    },
  },
];
