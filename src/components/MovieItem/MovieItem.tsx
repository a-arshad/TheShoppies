import React, {useContext, useState} from 'react';
import {
  CircleMinusMajor,
  CirclePlusMajor,
  ImageMajor,
} from 'src/components/Icons/PolarisIcon';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MovieSummary from 'src/models/movieSummary';
import context from 'src/util/context';
import useStyles from './MovieItem.modules';
import {theme} from 'src/util/themes';

interface MovieItemProps {
  movieSummary: MovieSummary;
}

const MovieItem = (props: MovieItemProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const {nominations} = useContext(context);
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        onLoad={() => setIsLoaded(true)}
        source={{
          uri: props.movieSummary.poster,
        }}
      />
      {!isLoaded ? (
        <View style={styles.placeholderPoster}>
          <ImageMajor fill="none" stroke={theme.colors.grey} strokeWidth={1} />
        </View>
      ) : null}
      <View style={styles.movieInfo}>
        <Text style={styles.title} numberOfLines={2}>
          {props.movieSummary.title.toUpperCase()}
        </Text>
        <Text style={styles.year} numberOfLines={1}>
          {props.movieSummary.year}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => nominations.toggleNomination(props.movieSummary)}>
        {nominations.isNominated(props.movieSummary.id) ? (
          <CircleMinusMajor />
        ) : (
          <CirclePlusMajor />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MovieItem;
