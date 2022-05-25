import { getRandomId } from 'utils';

import CustomEmailCard from './components/costomNode/EmailCard';
import CustomTransformCard from './components/costomNode/TransformCard';

export const nodes = [
  {
    id: getRandomId(),
    type: 'customEmailCard',
    data: { a: 1 },
    position: { x: 0, y: 50 },
  },
  {
    id: getRandomId(),
    type: 'customTransformCard',
    data: { a: 2 },
    position: { x: 300, y: 50 },
  },
];

export const nodeTypes = {
  customEmailCard: CustomEmailCard,
  customTransformCard: CustomTransformCard,
};

export const edges = [
  {
    id: `${nodes[0].id}-${nodes[1].id}`,
    source: nodes[0].id,
    target: nodes[1].id,
    animate: true,
    style: { stroke: '#000' },
  },
];

export const edgeTypes = {};
