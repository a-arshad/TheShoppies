import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      marginVertical: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    poster: {
      height: 120,
      width: 80,
      minWidth: 80,
      flexShrink: 1,
    },
    movieInfo: {
      flex: 3,
      paddingHorizontal: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.fontSizeRegular,
    },
    year: {
      fontWeight: '500',
    },
    nominationButton: {
      flex: 1,
    },
  });

export default useStyles;
