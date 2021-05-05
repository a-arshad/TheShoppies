import React from 'react';
import {View} from 'react-native';
import useStyles from './Divider.module';

const Divider = () => {
  const styles = useStyles();
  return <View style={styles.line} />;
};

export default Divider;
