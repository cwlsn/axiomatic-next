import React from 'react';
import { Image as RebassImage, ImageProps } from 'rebass';

// interface ImageProps extends RebassImageProps {}

function Image({ ...props }: ImageProps): JSX.Element {
  return <RebassImage {...props} />;
}

export { Image, ImageProps };
