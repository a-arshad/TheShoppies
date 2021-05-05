import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      margin: 15,
    },
    topBar: {
      marginTop: 10,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchBar: {
      flex: 4,
    },
    cancelButton: {
      flex: 1,
      height: '70%',
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 5,
      marginRight: 5,
      marginLeft: 5,
    },
    cancelText: {
      flex: 1,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });

export default useStyles;
