import config from './global-style-overrides/config';
import colors from './global-style-overrides/colors';
import typography from './global-style-overrides/typography';
import breakpoints from './global-style-overrides/breakpoints';
import spacing from './global-style-overrides/spacing';
import sizes from './global-style-overrides/sizes';
import borderRadius from './global-style-overrides/borderRadius';

const styles = {
  config,
  colors,
  ...typography,
  breakpoints,
  ...spacing,
  sizes,
  ...borderRadius,
};

export default styles;
