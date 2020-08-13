import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'emotion-theming';
import { colors, radii, spacing as space, typography } from '@axiomatic/tokens';

const { fonts, fontSizes, fontWeights, lineHeights } = typography;

const theme = {
  colors,
  radii,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Volkhov:ital,wght@0,400;0,700;1,700&display=swap');
`;

export { theme, GlobalStyle, ThemeProvider };
