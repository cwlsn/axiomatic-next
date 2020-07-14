import React from 'react';
import { Main } from '@axiomatic/primitives';

export interface AppProps {
  text: string;
}

export function App({ text }: AppProps): JSX.Element {
  return <Main text={text} />;
}
