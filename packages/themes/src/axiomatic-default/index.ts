import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'emotion-theming';
import reset from 'styled-reset';
import {
  colors,
  radii,
  shadows,
  spacing as space,
  typography,
  variants,
} from '@axiomatic/tokens';

const { fonts, fontSizes, fontWeights, lineHeights } = typography;

const theme = {
  colors,
  radii,
  shadows,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  variants,
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Volkhov:ital,wght@0,400;0,700;1,700&display=swap');
    ${reset}
`;

export { theme, GlobalStyle, ThemeProvider };
