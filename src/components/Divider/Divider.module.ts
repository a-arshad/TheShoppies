import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    line: {
      height: 1,
      width: '100%',
      margin: 5,
      backgroundColor: '#ededed',
    },
  });

export default useStyles;
