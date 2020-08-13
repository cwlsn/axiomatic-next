import React from 'react';
import { Heading, Text } from '../';

interface MainProps {
  text: string;
}

function Main({ text }: MainProps): JSX.Element {
  return (
    <main>
      <Heading>heyoooo</Heading>
      <Text>{text}</Text>
    </main>
  );
}

export { Main, MainProps };
