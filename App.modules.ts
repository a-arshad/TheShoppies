import {StyleSheet} from 'react-native';
import {theme} from './src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    theme: {
      flex: 1,
      paddingTop: theme.spacing.base,
      paddingHorizontal: theme.spacing.base,
      backgroundColor: 'white',
      fontSize: theme.font.fontSizeRegular,
    },
  });

export default useStyles;
