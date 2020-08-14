import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from '@axiomatic/themes';
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Link,
  Text,
} from '@axiomatic/primitives';
import { Stack, Flow } from '@axiomatic/layout';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Stack backgroundColor="blues.0" height="100vh" paddingTop={4}>
        <Card width="900px" marginX="auto" padding={4}>
          <Flow alignItems="center" marginBottom={2} gap={3}>
            <Image
              src="https://furrynetwork-beta.s3.amazonaws.com/va/varka/submission/2015/11/8e47f0bf1a437cef92f7c1e0821e1b1c/2500x1500.jpg"
              alt="scoop"
              marginBottom={3}
              sx={{
                width: 128,
                height: 128,
                objectFit: 'cover',
                borderRadius: 'circle',
              }}
            />
            <Stack>
              <Heading variant="eyebrow">Yummiest cats yum</Heading>
              <Heading marginBottom={0}>Axiomatic Design System</Heading>
              <Text color="grays.4" fontSize={2}>
                Things that go boop in the night
              </Text>
            </Stack>
          </Flow>
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
            they are fat and <Link href="https://google.com">
              fluffy yet a
            </Link>{' '}
            nice warm laptop for me to sit on why use post when this sofa is
            here. Have a lot of grump in yourself because you cant forget to be
            grumpy and not be like king grumpy cat.
          </Text>
          <Flow backgroundColor="blues.0" marginTop={3} padding={3} gap={3}>
            <Button>Yum Cats</Button>
            <Box marginX="auto" />
            <Button variant="outline">Yum Cats</Button>
            <Button variant="primary.pill">Gimme a pill</Button>
          </Flow>
          <Flow marginTop={3} gap={2} flexWrap="wrap">
            <Image
              width={1 / 3}
              src="https://images.freeimages.com/images/large-previews/502/cat-1393633.jpg"
              alt="cat"
            />
            <Image
              width={1 / 3}
              src="https://images.freeimages.com/images/large-previews/502/cat-1393633.jpg"
              alt="cat"
            />
            <Image
              width={1 / 3}
              src="https://images.freeimages.com/images/large-previews/502/cat-1393633.jpg"
              alt="cat"
            />
            <Image
              width={1 / 3}
              src="https://images.freeimages.com/images/large-previews/502/cat-1393633.jpg"
              alt="cat"
            />
            <Image
              width={1 / 3}
              src="https://images.freeimages.com/images/large-previews/502/cat-1393633.jpg"
              alt="cat"
            />
          </Flow>
        </Card>
      </Stack>
    </ThemeProvider>
  );
}
