import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      marginVertical: theme.spacing.loose,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    poster: {
      zIndex: 2,
      flexShrink: 1,
      borderRadius: 10,
      height: 120,
      width: 80,
      minWidth: 80,
    },
    placeholderPoster: {
      zIndex: 1,
      position: 'absolute',
      left: 0,
      flexShrink: 1,
      height: 120,
      width: 80,
      minWidth: 80,
      backgroundColor: theme.colors.lightGrey,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme.colors.grey,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    movieInfo: {
      flex: 3,
      paddingHorizontal: theme.spacing.tight,
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.font.fontSizeRegular,
    },
    year: {
      color: theme.colors.darkGrey,
    },
    nominationButton: {
      flex: 1,
    },
  });

export default useStyles;
