import {faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MovieSummary from 'src/models/movieSummary';
import {theme} from 'src/util/themes';
import useStyles from './MovieItem.modules';

interface MovieItemProps {
  movieSummary: MovieSummary;
  onSelect: (moveSummary: MovieSummary) => void;
}

const MovieItem = (props: MovieItemProps) => {
  const styles = useStyles();

  return (
    <View
      style={styles.container}
      onTouchStart={() => props.onSelect(props.movieSummary)}>
      <Image
        style={styles.poster}
        source={{
          uri: props.movieSummary.poster,
        }}
      />
      <View style={styles.movieInfo}>
        <Text style={styles.title} numberOfLines={2}>
          {props.movieSummary.title}
        </Text>
        <Text style={styles.year} numberOfLines={1}>
          {props.movieSummary.year}
        </Text>
      </View>
      <TouchableOpacity onPress={() => props.onSelect}>
        <FontAwesomeIcon
          color={theme.grey}
          size={theme.iconSizeRegular}
          icon={props.movieSummary.nominated ? faMinusCircle : faPlusCircle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MovieItem;
