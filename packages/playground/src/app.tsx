import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from '@axiomatic/themes';
import { Main, Box, Heading } from '@axiomatic/primitives';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box>
        <Main text="woooop" />
        <Heading>Whale?</Heading>
      </Box>
    </ThemeProvider>
  );
}
