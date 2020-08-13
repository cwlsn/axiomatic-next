import React from 'react';

import { Text as RebassText } from 'rebass';

interface TextProps {
  children: React.ReactNode;
}

function Text({ children }: TextProps): JSX.Element {
  return (
    <RebassText as="p" fontFamily="body">
      {children}
    </RebassText>
  );
}

export { Text, TextProps };
