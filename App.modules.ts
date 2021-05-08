import {StyleSheet} from 'react-native';
import {theme} from './src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: theme.spacing.base,
      paddingHorizontal: theme.spacing.base,
      fontSize: theme.font.fontSizeRegular,
      backgroundColor: theme.colors.backgroundColor,
    },
  });

export default useStyles;
