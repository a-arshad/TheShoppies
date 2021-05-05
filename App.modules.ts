import {StyleSheet} from 'react-native';
import {theme} from './src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    theme: {
      flex: 1,
      backgroundColor: 'white',
      fontSize: theme.fontSizeRegular,
    },
  });

export default useStyles;
