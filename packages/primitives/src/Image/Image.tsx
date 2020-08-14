import React from 'react';
import { Image as RebassImage, ImageProps as RebassImageProps } from 'rebass';

interface ImageProps extends RebassImageProps {
  children: React.ReactNode;
}

function Image({ children, ...props }: ImageProps): JSX.Element {
  return <RebassImage {...props}>{children}</RebassImage>;
}

export { Image, ImageProps };
