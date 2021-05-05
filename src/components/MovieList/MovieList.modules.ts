import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      flexGrow: 1,
    },
    errorMessage: {
      marginTop: 75,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: 'bold',
    },
  });

export default useStyles;
