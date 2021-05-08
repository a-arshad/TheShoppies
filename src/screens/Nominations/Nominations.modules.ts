import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundColor,
    },
    topBar: {
      marginVertical: theme.spacing.base,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.font.fontSizeHeading,
      color: theme.colors.textColor,
    },
  });

export default useStyles;
