import React from 'react';
import { Box as RebassBox } from 'rebass';

interface BoxProps {
  children: React.ReactNode;
}

function Box({ children }: BoxProps): JSX.Element {
  return (
    <RebassBox padding={2} margin={3}>
      {children}
    </RebassBox>
  );
}

export { Box, BoxProps };
