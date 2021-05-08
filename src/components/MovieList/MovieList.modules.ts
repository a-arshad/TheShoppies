import {StyleSheet} from 'react-native';

const ERROR_MARGIN = 75;

const useStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '90%',
      flexGrow: 1,
    },
    errorMessage: {
      marginTop: ERROR_MARGIN,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: 'bold',
    },
  });

export default useStyles;
