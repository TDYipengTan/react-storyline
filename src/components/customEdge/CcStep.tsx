import useShowMeByCc from 'hooks/useShowMeByCc';
import React, { FC } from 'react';
import { EdgeProps, StepEdge } from 'react-flow-renderer';

interface CcStepProps extends EdgeProps {
  data?: {
    cc?: boolean;
  };
}

const CcStep: FC<CcStepProps> = ({ data: { cc = true } = {}, style = {}, ...rest }) => {
  const showMe = useShowMeByCc(cc);

  if (!showMe) return null;

  return (
    <StepEdge {...rest} style={{ color: '#979797', ...style, strokeDasharray: '3 2' }} />
  );
};

export default CcStep;
