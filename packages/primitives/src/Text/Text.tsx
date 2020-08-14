import React from 'react';
import { Text as RebassText, TextProps as RebassTextProps } from 'rebass';

interface TextProps extends RebassTextProps {
  children: React.ReactNode;
}

function Text({ children, ...props }: TextProps): JSX.Element {
  return (
    <RebassText
      as="p"
      fontFamily="body"
      lineHeight="body"
      color="gray.7"
      marginBottom={2}
      {...props}
    >
      {children}
    </RebassText>
  );
}

export { Text, TextProps };
