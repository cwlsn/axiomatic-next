import React from 'react';

export interface MainProps {
  text: string;
}

export function Main({ text }: MainProps): JSX.Element {
  return <main>{text} cats</main>;
}
