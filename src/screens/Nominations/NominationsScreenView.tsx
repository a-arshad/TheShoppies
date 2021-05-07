import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SearchMajor} from 'src/components/Icons/PolarisIcon';
import MovieList from 'src/components/MovieList/MovieList';
import MovieSummary from 'src/models/movieSummary';
import useStyles from './Nominations.modules';

interface NominantionsScreenViewProps {
  nominees: MovieSummary[];
  onSearchIconPress: () => void;
}

const NominationsScreenView = (props: NominantionsScreenViewProps) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>The Shoppies</Text>
        <TouchableOpacity onPress={props.onSearchIconPress}>
          <SearchMajor />
        </TouchableOpacity>
      </View>
      <MovieList data={props.nominees} errorMessage={''} />
    </View>
  );
};

export default NominationsScreenView;
