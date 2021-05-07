import {StyleSheet} from 'react-native';
import {theme} from 'src/util/themes';

const useStyles = () =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    topBar: {
      marginVertical: theme.spacing.tight,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchBar: {
      flex: 4,
    },
    cancelButton: {
      flexShrink: 1,
      flexDirection: 'row',
      paddingVertical: theme.spacing.extraTight,
      marginHorizontal: theme.spacing.extraTight,
      paddingHorizontal: theme.spacing.extraTight,
      borderRadius: theme.spacing.extraTight,
      justifyContent: 'center',
    },
    cancelText: {
      flexShrink: 1,
      color: theme.colors.primary,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });

export default useStyles;
