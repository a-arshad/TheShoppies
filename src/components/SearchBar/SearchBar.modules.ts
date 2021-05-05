import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 90,
      borderColor: theme.lightGrey,
      backgroundColor: theme.lightGrey,
    },
    searchField: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 5,
      paddingLeft: 5,
      paddingRight: 10,
      width: '100%',
    },
    searchIcon: {
      marginHorizontal: 5,
    },
    textInput: {
      flexShrink: 1,
      color: 'black',
      fontSize: theme.fontSizeRegular,
      width: '100%',
    },
  });

export default useStyles;
