import React, { FunctionComponent } from 'react';

interface Props {
  children: any;
}

export const TruncatedWrapper: FunctionComponent<Props> = ({ children }) => (
  <div style={{ maxWidth: 250 }}>{children}</div>
);
