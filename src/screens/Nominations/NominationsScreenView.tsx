import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {theme} from 'src/util/themes';
import useStyles from './Nominations.modules';

interface NominantionsScreenViewProps {
  onSearchIconPress: () => void;
}

const NominationsScreenView = (props: NominantionsScreenViewProps) => {
  const styles = useStyles();

  return (
    <View>
      <View style={styles.topBar}>
        <Text>The Shoppies</Text>
        <TouchableOpacity onPress={props.onSearchIconPress}>
          <FontAwesomeIcon
            color={theme.grey}
            size={theme.iconSizeRegular}
            icon={faSearch}
          />
        </TouchableOpacity>
      </View>
      {
        // TODO: add MovieList component here
      }
    </View>
  );
};

export default NominationsScreenView;
