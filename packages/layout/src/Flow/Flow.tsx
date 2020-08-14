import React from 'react';
import { Flex, FlexProps } from '@axiomatic/primitives';

interface FlowProps extends FlexProps {
  children?: React.ReactNode;
  gap?: number;
}

function Flow({ children, gap, ...props }: FlowProps): JSX.Element {
  return (
    <Flex
      flexDirection="row"
      {...props}
      sx={{
        display: 'grid',
        gridGap: gap,
      }}
    >
      {children}
    </Flex>
  );
}

export { Flow, FlowProps };
