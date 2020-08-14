import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from '@axiomatic/themes';
import { Box, Heading, Text } from '@axiomatic/primitives';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box backgroundColor="gray.1" height="100vh">
        <Box width="900px" marginX="auto" backgroundColor="white">
          <Heading>Axiomatic Design System</Heading>
          <Text>Build your next React project</Text>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
