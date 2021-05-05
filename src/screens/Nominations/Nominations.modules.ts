import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    topBar: {
      marginTop: 10,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default useStyles;
