import useShowMeByCc from 'hooks/useShowMeByCc';
import React, { FC } from 'react';
import { EdgeProps, StraightEdge } from 'react-flow-renderer';

interface CcStraightProps extends EdgeProps {
  data?: {
    cc?: boolean;
  };
}

const CcStraight: FC<CcStraightProps> = ({
  data: { cc = true } = {},
  style = {},
  ...rest
}) => {
  const showMe = useShowMeByCc(cc);

  if (!showMe) return null;

  return (
    <StraightEdge
      {...rest}
      style={{ color: '#979797', ...style, strokeDasharray: '3 2' }}
    />
  );
};

export default CcStraight;
