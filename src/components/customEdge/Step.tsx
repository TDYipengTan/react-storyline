import useBoldByZoom from 'hooks/useBoldByZoom';
import React, { FC } from 'react';
import { EdgeProps, StepEdge } from 'react-flow-renderer';

interface StepProps extends EdgeProps {}

const Step: FC<StepProps> = ({ style = {}, ...rest }) => {
  const bold = useBoldByZoom();

  return (
    <StepEdge
      {...rest}
      style={{ color: '#979797', ...style, strokeWidth: bold ? 2 : 1 }}
    />
  );
};

export default Step;
