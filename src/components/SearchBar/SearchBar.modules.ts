import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 90,
      borderColor: theme.colors.lightGrey,
      backgroundColor: theme.colors.lightGrey,
    },
    searchField: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: theme.spacing.extraTight,
      paddingVertical: theme.spacing.extraTight,
      paddingLeft: theme.spacing.extraTight,
      paddingRight: theme.spacing.tight,
      width: '100%',
    },
    searchIcon: {
      marginHorizontal: theme.spacing.tight,
    },
    textInput: {
      flexShrink: 1,
      color: 'black',
      fontSize: theme.font.fontSizeRegular,
      width: '100%',
    },
  });

export default useStyles;
