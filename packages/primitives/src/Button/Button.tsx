import React from 'react';
import {
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass';

interface ButtonProps extends RebassButtonProps {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps): JSX.Element {
  return <RebassButton {...props}>{children}</RebassButton>;
}

export { Button, ButtonProps };
