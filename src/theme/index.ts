import { extendTheme } from '@chakra-ui/react';
import Button from './components/button';

import styles from './styles';

const overrides = {
  ...styles,

  components: {
    Button,
  },
};
const theme = extendTheme(overrides);

export default theme;
