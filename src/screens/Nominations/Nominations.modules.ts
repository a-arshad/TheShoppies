import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    topBar: {
      marginTop: theme.spacing.tight,
      marginBottom: theme.spacing.tight,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.font.fontSizeHeading,
    },
  });

export default useStyles;
