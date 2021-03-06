import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    line: {
      height: 1,
      width: '100%',
      margin: theme.spacing.extraTight,
      backgroundColor: theme.colors.borderColor,
    },
  });

export default useStyles;
