import {StyleSheet} from 'react-native';
import {isLightTheme, theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 90,
      borderColor: isLightTheme()
        ? theme.colors.lightGrey
        : theme.colors.darkGrey,
      backgroundColor: isLightTheme()
        ? theme.colors.lightGrey
        : theme.colors.darkGrey,
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
      color: theme.colors.textColor,
      fontSize: theme.font.fontSizeRegular,
      width: '100%',
    },
  });

export default useStyles;
