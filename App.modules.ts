import {StyleSheet} from 'react-native';
import {theme} from './src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    theme: {
      backgroundColor: 'white',
      fontSize: theme.fontSizeRegular,
    },
  });

export default useStyles;
