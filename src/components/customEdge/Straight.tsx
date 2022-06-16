import useBoldByZoom from 'hooks/useBoldByZoom';
import React, { FC } from 'react';
import { EdgeProps, StraightEdge } from 'react-flow-renderer';

interface StraightProps extends EdgeProps {}

const Straight: FC<StraightProps> = ({ style = {}, ...rest }) => {
  const bold = useBoldByZoom();

  return (
    <StraightEdge
      {...rest}
      style={{ color: '#979797', ...style, strokeWidth: bold ? 2 : 1 }}
    />
  );
};

export default Straight;
