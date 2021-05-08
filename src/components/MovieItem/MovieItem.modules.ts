import {StyleSheet} from 'react-native';
import {isLightTheme, theme} from 'src/util/themes';

const POSTER_WIDTH = 80;
const POSTER_HEIGHT = 120;
const POSTER_RADIUS = 10;

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
      borderRadius: POSTER_RADIUS,
      height: POSTER_HEIGHT,
      width: POSTER_WIDTH,
      minWidth: POSTER_WIDTH,
    },
    placeholderPoster: {
      zIndex: 1,
      position: 'absolute',
      left: 0,
      flexShrink: 1,
      height: POSTER_HEIGHT,
      width: POSTER_WIDTH,
      minWidth: POSTER_WIDTH,
      backgroundColor: isLightTheme()
        ? theme.colors.lightGrey
        : theme.colors.darkGrey,
      borderWidth: 1,
      borderRadius: POSTER_RADIUS,
      borderColor: theme.colors.borderColor,
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
      color: theme.colors.textColor,
    },
    year: {
      color: isLightTheme() ? theme.colors.darkGrey : theme.colors.lightGrey,
    },
    nominationButton: {
      flex: 1,
    },
  });

export default useStyles;
