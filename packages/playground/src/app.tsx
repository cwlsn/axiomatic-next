import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from '@axiomatic/themes';
import { Box, Card, Heading, Link, Text, Button } from '@axiomatic/primitives';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box backgroundColor="blue.0" height="100vh" paddingTop={4}>
        <Card width="900px" marginX="auto">
          <Heading variant="text.eyebrow">Yummiest cats yum</Heading>
          <Heading>Axiomatic Design System</Heading>
          <Text>
            Drink water out of the faucet open the door, let me out, let me out,
            let me-out, let me-aow, let meaow, meaow! dont nosh on the birds,
            scratch the furniture reaches under door into adjacent room so swat
            at dog. I like to spend my days sleeping and eating fishes that my
            human fished for me we live on a luxurious yacht, sailing proudly
            under the sun, i like to walk on the deck,
          </Text>
          <Heading variant="subtitle">Sub title with a Sub Way Combo</Heading>
          <Text>
            {' '}
            Chew the plant pee in humans bed until he cleans the litter box
            intently sniff hand, but Gate keepers of hell or i like cats because
            they are fat and fluffy yet a nice warm laptop for me to sit on why
            use post when this sofa is here. Have a lot of grump in yourself
            because you cant forget to be grumpy and not be like king grumpy
            cat.
          </Text>
          <Button>Yum Cats</Button>
          <Button variant="outline">Yum Cats</Button>
          <Link href="https://google.com">Goog</Link>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
