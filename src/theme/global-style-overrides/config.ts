import { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system', // The initial color mode your application should start with. Can be light, dark or system
  useSystemColorMode: false, // If true, the chakra system will update color mode based on your system preferences
  cssVarPrefix: 'chakra', // The prefix to use for the generated CSS custom properties
};

export default config;
