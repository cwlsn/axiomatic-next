import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from '@axiomatic/themes';
import { Box, Card, Heading, Text } from '@axiomatic/primitives';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box backgroundColor="blue.0" height="100vh" paddingTop={4}>
        <Card width="900px" marginX="auto">
          <Heading>Axiomatic Design System</Heading>
          <Text>Build your next React project</Text>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
