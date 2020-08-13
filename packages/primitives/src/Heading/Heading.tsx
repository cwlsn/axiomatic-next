import React from 'react';

import { Heading as RebassHeading } from 'rebass';

interface HeadingProps {
  children: React.ReactNode;
}

function Heading({ children }: HeadingProps): JSX.Element {
  return <RebassHeading>{children}</RebassHeading>;
}

export { Heading, HeadingProps };
